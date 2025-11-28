export const SEHATI_KNOWLEDGE = [
    {
        topic: "identity",
        content: "Kamu adalah 'Sobat SEHATI', asisten AI kesehatan mental untuk remaja di SMAN Ngoro (SMANERO) Jombang. Kamu berbicara dengan gaya remaja, santai, menggunakan 'Aku-Kamu', dan penuh empati. Kamu bukan psikolog, tapi teman curhat (peer counselor)."
    },
    {
        topic: "crisis_protocol",
        content: "PENTING: Jika pengguna menunjukkan tanda-tanda bahaya (ingin bunuh diri, melukai diri, overdosis, pingsan, serangan panik berat), kamu WAJIB mengarahkan mereka ke 'Panic Button' atau mencari bantuan profesional segera. Jangan coba selesaikan sendiri masalah medis darurat."
    },
    {
        topic: "triad_krr",
        content: "Triad KRR (Kesehatan Reproduksi Remaja) adalah 3 risiko utama yang harus dihindari remaja: 1. Seks Bebas (Risiko hamil, HIV/AIDS). 2. NAPZA (Narkoba, Alkohol, Zat Adiktif). 3. Pernikahan Dini (Menghambat potensi, risiko kesehatan ibu/bayi). Fokus kita adalah pencegahan."
    },
    {
        topic: "pik_r",
        content: "PIK-R (Pusat Informasi dan Konseling Remaja) adalah wadah kegiatan program GenRe yang dikelola dari, oleh, dan untuk remaja. Di SMANERO, PIK-R adalah tempat aman untuk bercerita tanpa takut dihakimi."
    },
    {
        topic: "coping_anxiety",
        content: "Cara mengatasi cemas: 1. Teknik Grounding (5-4-3-2-1: Lihat 5 benda, sentuh 4 benda, dll). 2. Tarik napas dalam (4 detik tarik, 7 detik tahan, 8 detik hembuskan). 3. Jurnal perasaan. 4. Curhat ke teman terpercaya."
    },
    {
        topic: "coping_sadness",
        content: "Cara mengatasi kesedihan: 1. Izinkan diri menangis, itu sehat. 2. Lakukan hobi kecil (dengar musik, gambar). 3. Tidur yang cukup. 4. Ingat bahwa perasaan ini sementara (This too shall pass)."
    },
    {
        topic: "bullying",
        content: "Jika mengalami bullying: Jangan diam. Simpan bukti. Cerita ke guru BK atau orang tua. Kamu tidak salah, pelaku bullying yang bermasalah. Kamu berhak merasa aman."
    }
];

export function getRelevantContext(query: string): string {
    // Simple Keyword Matching RAG (For MVP)
    // In production, use Vector Embeddings (Pinecone/Supabase pgvector)
    const lowerQuery = query.toLowerCase();
    
    let relevantDocs = SEHATI_KNOWLEDGE.filter(doc => {
        const keywords = doc.topic.split('_');
        return keywords.some(k => lowerQuery.includes(k)) || doc.content.toLowerCase().includes(lowerQuery);
    });

    // Always include identity and crisis protocol
    const coreDocs = SEHATI_KNOWLEDGE.filter(d => d.topic === 'identity' || d.topic === 'crisis_protocol');
    
    // Combine and deduplicate
    const finalDocs = [...new Set([...coreDocs, ...relevantDocs])];

    return finalDocs.map(d => `- ${d.content}`).join("\n");
}
