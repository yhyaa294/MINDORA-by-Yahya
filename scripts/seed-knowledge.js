const { GoogleGenerativeAI } = require('@google/generative-ai');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// Konfigurasi Manual (karena script berjalan di Node environment terpisah)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY; // Sebaiknya pakai Service Role Key jika ada RLS
const GEMINI_KEY = process.env.GEMINI_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !GEMINI_KEY) {
    console.error("❌ Missing Environment Variables. Check .env.local");
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

// DATA PENGETAHUAN AWAL (Bisa ditambah dari PDF/Doc nantinya)
const INITIAL_KNOWLEDGE = [
    {
        content: "Sobat SEHATI adalah asisten AI teman curhat (peer counselor) untuk remaja SMANERO (SMAN Ngoro Jombang). Dibuat untuk mendengarkan tanpa menghakimi.",
        metadata: { topic: "identity" }
    },
    {
        content: "Triad KRR (Kesehatan Reproduksi Remaja) terdiri dari 3 risiko utama: Seks Bebas (Pranikah), Penyalahgunaan NAPZA (Narkoba), dan Pernikahan Dini. Remaja harus menghindari ketiganya agar masa depan cerah.",
        metadata: { topic: "triad_krr" }
    },
    {
        content: "PIK-R (Pusat Informasi dan Konseling Remaja) di SMAN Ngoro adalah wadah bagi siswa untuk berkonsultasi masalah remaja. Konseling bersifat rahasia dan ditangani oleh Konselor Sebaya serta Guru BK.",
        metadata: { topic: "pik_r" }
    },
    {
        content: "Cara mengatasi kecemasan (Anxiety): Lakukan teknik grounding 5-4-3-2-1. Sebutkan 5 hal yang dilihat, 4 yang diraba, 3 yang didengar, 2 yang dicium, 1 yang dirasa. Tarik napas dalam 4 detik, tahan 7 detik, hembuskan 8 detik.",
        metadata: { topic: "tips_mental" }
    },
    {
        content: "Bahaya Pernikahan Dini: Meningkatkan risiko kematian ibu dan bayi, putus sekolah, kekerasan dalam rumah tangga (KDRT), dan kemiskinan struktural. Minimal usia menikah ideal adalah 21 tahun (perempuan) dan 25 tahun (laki-laki).",
        metadata: { topic: "triad_krr" }
    },
    {
        content: "Layanan darurat: Jika merasa ingin bunuh diri atau melukai diri, segera hubungi Guru BK, Orang Tua, atau tekan Panic Button di aplikasi SEHATI+. Jangan dipendam sendiri.",
        metadata: { topic: "crisis" }
    }
];

async function generateEmbedding(text) {
    const cleanText = text.replace(/\n/g, " ");
    const result = await model.embedContent(cleanText);
    return result.embedding.values;
}

async function seed() {
    console.log("🚀 Mulai proses seeding data ke Supabase...");
    
    for (const item of INITIAL_KNOWLEDGE) {
        try {
            console.log(`🔹 Processing: ${item.metadata.topic}`);
            
            // 1. Generate Embedding
            const embedding = await generateEmbedding(item.content);
            
            // 2. Insert ke Supabase
            const { error } = await supabase.from('documents').insert({
                content: item.content,
                metadata: item.metadata,
                embedding: embedding
            });

            if (error) throw error;
            console.log(`✅ Saved: ${item.metadata.topic}`);
            
        } catch (err) {
            console.error(`❌ Gagal memproses ${item.metadata.topic}:`, err.message);
        }
    }
    
    console.log("🎉 Selesai! Database Knowledge Base sudah terisi.");
}

seed();
