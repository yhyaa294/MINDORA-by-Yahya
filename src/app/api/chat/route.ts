import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { retrieveDocuments } from '@/lib/rag';
import { getRelevantContext } from '@/lib/sehati-knowledge';

// Inisialisasi Google Gemini
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || "DUMMY_KEY");

// --- FALLBACK RESPONSE GENERATOR (SIMULASI AI) ---
// Digunakan jika API Key mati / Kuota habis / Error Koneksi
function generateFallbackResponse(message: string): { response: string, isCrisis: boolean } {
    const lowerMsg = message.toLowerCase();
    
    // 1. Cek Krisis
    if (lowerMsg.includes('bunuh diri') || lowerMsg.includes('mati') || lowerMsg.includes('lukai')) {
        return {
            response: "⚠️ Sobat, aku mendengar rasa sakitmu. Tapi aku cuma AI, aku gak bisa gantiin profesional. Tolong banget, tekan tombol **Panic Button** di bawah atau hubungi 119. Nyawamu berharga, please bertahan ya.",
            isCrisis: true
        };
    }

    // 2. Respon Umum (Keyword Matching Sederhana)
    if (lowerMsg.includes('halo') || lowerMsg.includes('hai') || lowerMsg.includes('pagi')) {
        return { response: "Halo bestie! 👋 Apa kabar hari ini? Ada cerita apa nih?", isCrisis: false };
    }
    if (lowerMsg.includes('sedih') || lowerMsg.includes('nangis') || lowerMsg.includes('kecewa')) {
        return { response: "Duh, peluk jauh ya 🤗. Wajar kok kalau kamu merasa sedih. Mau cerita lebih detail kenapa rasanya berat banget?", isCrisis: false };
    }
    if (lowerMsg.includes('capek') || lowerMsg.includes('lelah') || lowerMsg.includes('pusing')) {
        return { response: "Istirahat dulu yuk. Kamu bukan robot. Tarik napas panjang... Hembuskan... 🌬️. Udah makan belum hari ini?", isCrisis: false };
    }
    if (lowerMsg.includes('marah') || lowerMsg.includes('kesal')) {
        return { response: "Keluarin aja marahnya, jangan dipendam. Aku siap dengerin kok. Siapa yang bikin kamu kesel?", isCrisis: false };
    }
    if (lowerMsg.includes('terima kasih') || lowerMsg.includes('makasih')) {
        return { response: "Sama-sama sobat! Senang bisa nemenin kamu. Semangat terus ya! ✨", isCrisis: false };
    }

    // 3. Default (Safe Answer)
    return { 
        response: "Aku mendengarkanmu. Ceritamu valid banget. Terus, apa lagi yang kamu rasakan? (Maaf ya, sinyalku agak lemot jadi aku pakai mode hemat daya, tapi aku tetep dengerin kok!)", 
        isCrisis: false 
    };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history } = body;

    if (!message) {
      return NextResponse.json({ error: 'Pesan tidak boleh kosong' }, { status: 400 });
    }

    console.log("📨 Pesan masuk:", message);

    // --- LEVEL 1: CEK GEMINI API KEY ---
    if (!apiKey) {
        console.warn("⚠️ GEMINI_API_KEY tidak ditemukan. Menggunakan Fallback Mode.");
        return NextResponse.json(generateFallbackResponse(message));
    }

    // --- LEVEL 2: RAG RETRIEVAL (Try-Catch Independen) ---
    let contextText = "";
    try {
        // Coba ambil dari Vector DB (Supabase)
        const retrievedDocs = await retrieveDocuments(message);
        if (retrievedDocs.length > 0) {
            contextText = retrievedDocs.map(doc => `[DATABASE]: ${doc.content}`).join("\n\n");
        } else {
            // Fallback ke Local Knowledge Base jika Vector kosong
            contextText = getRelevantContext(message);
        }
    } catch (err) {
        console.error("RAG Error (Ignored):", err);
        // Tetap lanjut walau RAG error, pakai knowledge lokal
        contextText = getRelevantContext(message);
    }

    // --- LEVEL 3: GENERATE RESPONSE VIA GEMINI ---
    try {
        const SYSTEM_PROMPT = `
PERAN:
Kamu adalah "Sobat SEHATI", teman curhat untuk siswa SMA. Usia 17 tahun. Gaya bahasa gaul, santai, empatik.

KONTEKS PENGETAHUAN:
${contextText}

INSTRUKSI:
1. Jawab pendek saja (maksimal 3-4 kalimat).
2. Validasi perasaan user.
3. Jika ada tanda bahaya (bunuh diri), arahkan ke Panic Button.
`;

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        // Konversi history chat (safety check)
        const validHistory = Array.isArray(history) ? history.map((msg: any) => ({
            role: msg.isUser ? "user" : "model",
            parts: [{ text: msg.text || "" }],
        })) : [];

        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
                { role: "model", parts: [{ text: "Siap bestie! Aku mengerti." }] },
                ...validHistory
            ],
            generationConfig: {
                maxOutputTokens: 300, // Batasi biar gak kepanjangan
            }
        });

        const result = await chat.sendMessage(message);
        const aiResponse = result.response.text();
        
        const isCrisis = aiResponse.toLowerCase().includes("panic button") || message.toLowerCase().includes("bunuh diri");

        return NextResponse.json({
            response: aiResponse,
            isCrisis: isCrisis
        });

    } catch (geminiError) {
        console.error("🔥 Gemini API Error:", geminiError);
        // --- LAST RESORT: FALLBACK JIKA GEMINI CRASH ---
        // Forcing error for debug if key exists but fails
        if (apiKey) {
             return NextResponse.json({ 
                response: `Waduh, otakku lagi error nih (API Error: ${geminiError}). Coba tanya yang lain dulu ya?`, 
                isCrisis: false 
            });
        }
        return NextResponse.json(generateFallbackResponse(message));
    }

  } catch (fatalError) {
    console.error('Fatal Server Error:', fatalError);
    // Benar-benar safety net terakhir
    return NextResponse.json({ 
        response: "Duh, server lagi down nih. Tapi intinya: Kamu hebat, jangan menyerah ya! Coba refresh lagi nanti.", 
        isCrisis: false 
    }); // Return 200 OK dengan pesan error ramah, jangan 500 biar gak "koneksi error" di frontend
  }
}
