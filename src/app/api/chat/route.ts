import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: 'Pesan tidak boleh kosong' }, { status: 400 });
    }

    const lowerMessage = message.toLowerCase();

    // --- 1. SAFETY GUARDRAILS (CRISIS DETECTION) ---
    const crisisKeywords = [
      'bunuh diri', 'mati aja', 'lukai diri', 'silet', 
      'loncat', 'gak kuat hidup', 'akhiri hidup', 'ingin mati', 
      'gores tangan', 'minum racun'
    ];

    const isCrisis = crisisKeywords.some(keyword => lowerMessage.includes(keyword));

    if (isCrisis) {
      return NextResponse.json({
        response: "Aku mendeteksi kamu sedang dalam kondisi yang sangat berat. Tolong, ingatlah bahwa nyawamu sangat berharga. Aku bukan manusia, tapi ada orang-orang yang peduli dan siap membantumu sekarang juga. Mohon, tekan tombol 'Panic Button' di bawah untuk bicara langsung dengan Kakak GenRe atau profesional.",
        isCrisis: true // Flag to trigger UI changes (Panic Button highlight)
      });
    }

    // --- 2. EMPATHETIC AI LOGIC (Rule-Based for MVP) ---
    // In the future, replace this with OpenAI/Gemini API call
    let aiResponse = "Aku di sini untuk mendengarkan. Ceritakan lebih lanjut ya.";

    if (lowerMessage.includes('sedih') || lowerMessage.includes('nangis') || lowerMessage.includes('kecewa')) {
      aiResponse = "Gapapa merasa sedih, itu emosi yang valid kok. Menangis juga bukan tanda kelemahan. Apa yang bikin kamu merasa seperti ini?";
    } else if (lowerMessage.includes('marah') || lowerMessage.includes('kesal') || lowerMessage.includes('benci')) {
      aiResponse = "Wajar kalau kamu marah. Kadang situasi emang gak adil. Mau luapin amarahmu di sini? Aku siap dengerin tanpa nge-judge.";
    } else if (lowerMessage.includes('capek') || lowerMessage.includes('lelah') || lowerMessage.includes('pusing')) {
      aiResponse = "Istirahat dulu yuk. Kamu udah berjuang hebat hari ini. Jangan lupa tarik napas panjang. Apa yang paling bikin capek hari ini?";
    } else if (lowerMessage.includes('takut') || lowerMessage.includes('cemas') || lowerMessage.includes('deg-degan')) {
      aiResponse = "Aku ngerti rasanya cemas. Coba fokus ke hal yang bisa kamu kendalikan sekarang ya. Kita hadapi pelan-pelan bareng-bareng.";
    } else if (lowerMessage.includes('senang') || lowerMessage.includes('bahagia') || lowerMessage.includes('happy')) {
      aiResponse = "Wah, aku ikut seneng dengernya! 🥰 Momen bahagia kayak gini harus dirayain. Ceritain dong detailnya!";
    } else if (lowerMessage.includes('halo') || lowerMessage.includes('hi') || lowerMessage.includes('hai')) {
      aiResponse = "Halo juga! Apa kabar hari ini? Ada cerita apa?";
    }

    // Simulate typing delay (1 second)
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      response: aiResponse,
      isCrisis: false
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan pada server AI' }, { status: 500 });
  }
}
