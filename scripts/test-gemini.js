const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// 1. Load API Key from .env.local manually
try {
    const envPath = path.join(__dirname, '../.env.local');
    if (!fs.existsSync(envPath)) {
        console.error("❌ .env.local file not found!");
        process.exit(1);
    }

    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/GEMINI_API_KEY=(.+)/);
    
    if (!match || !match[1]) {
        console.error("❌ GEMINI_API_KEY not found in .env.local!");
        process.exit(1);
    }

    const apiKey = match[1].trim();
    console.log(`🔑 Found API Key: ${apiKey.substring(0, 5)}...${apiKey.substring(apiKey.length - 4)}`);

    // 2. Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

    // 3. Test Connection
    console.log("🔄 Testing connection to Google Gemini...");
    
    model.generateContent("Halo, balas dengan satu kata: 'Berhasil'")
        .then((result) => {
            const response = result.response;
            const text = response.text();
            console.log(`\n✅ KONEKSI SUKSES!`);
            console.log(`🤖 AI Response: "${text.trim()}"`);
        })
        .catch((error) => {
            console.error("\n❌ KONEKSI GAGAL!");
            console.error("Error Details:", error.message);
            if (error.message.includes("API_KEY_INVALID")) {
                console.error("👉 Saran: Cek kembali API Key Anda. Pastikan tidak ada spasi tambahan.");
            }
        });

} catch (err) {
    console.error("🔥 Script Error:", err);
}
