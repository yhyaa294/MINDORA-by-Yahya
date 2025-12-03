# 🌿 MINDORA (Mind & Aura)

![Banner Project](https://capsule-render.vercel.app/api?type=waving&color=064E3B&height=250&section=header&text=MINDORA&fontSize=80&fontColor=FFFBEB&desc=The%20Next-Gen%20AI%20Mental%20Health%20SaaS%20for%20Schools&descAlignY=65&descAlign=50)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Gemini AI](https://img.shields.io/badge/AI-Google_Gemini-4285F4?style=for-the-badge&logo=google)](https://deepmind.google/technologies/gemini/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://mindora-app.vercel.app)

**Platform Kesehatan Mental Berbasis AI untuk Generasi Modern**
*Independent SaaS Innovation by Yahya*

[🌐 Live Demo](https://mindora-app.vercel.app) · [📷 Founder](https://www.instagram.com/syarfddn_yhya) · [🐛 Request Feature](https://github.com/yhyaa294/SEHATI-/issues)

</div>

---

## 📑 Executive Summary

**MINDORA** adalah solusi *Software-as-a-Service (SaaS)* yang dirancang untuk memodernisasi konseling sekolah.

Kami menggantikan metode konvensional yang kaku dengan **AI Virtual Companion** yang mampu mendeteksi dini masalah kesehatan mental siswa secara *real-time*, 24/7, dan terukur.

**Masalah:** Guru BK kewalahan (Rasio 1:150 siswa), siswa malu bercerita tatap muka, dan krisis mental sering terjadi di luar jam sekolah.
**Solusi MINDORA:** Sistem monitoring otomatis berbasis AI yang memberikan data analitik kepada sekolah, sementara memberikan ruang aman privat bagi siswa.

---

## 🚀 Core Technology

### 1. 🧠 MINDORA Companion (Virtual Psychologist)
Bukan sekadar chatbot biasa. Menggunakan *Large Language Model (LLM)* Google Gemini yang di-finetune dengan pendekatan psikologi humanis.
* **Empathetic Response:** Validasi emosi sebelum memberikan saran.
* **Crisis Guardrails:** Algoritma pendeteksi *self-harm* yang otomatis mengaktifkan protokol darurat.

### 2. 📊 Institutional Dashboard (B2B SaaS)
Fitur unggulan untuk klien sekolah/universitas.
* **Mood Heatmap:** Memetakan kondisi mental satu angkatan/kelas secara visual.
* **Early Warning System:** Notifikasi otomatis jika ada anomali tren emosi negatif yang persisten.

### 3. 🛡️ Expert Connect
Jembatan hibrida menuju bantuan profesional. Jika AI menilai kasus terlalu kompleks, user dapat langsung terhubung dengan konselor manusia (Premium).

### 4. 🌱 Growth Library
Kurasi konten *self-development* yang dipersonalisasi berdasarkan riwayat *mood* user.

---

## 💸 Business Model (Hybrid B2B2C)

MINDORA dirancang untuk *sustainability* dan *scalability* tanpa bergantung pada donasi.

1.  **B2B License (Primary Revenue):**
    Menjual lisensi tahunan penggunaan sistem MINDORA ke Sekolah, Universitas, dan Korporasi sebagai alat monitoring kesejahteraan anggota.
2.  **Affiliate Wellness Store (Secondary Revenue):**
    Ekosistem *e-commerce* terkurasi yang menyediakan alat bantu kesehatan mental (Jurnal fisik, Aromaterapi) dengan sistem komisi.
3.  **Premium Counseling:**
    Komisi dari sesi konseling berbayar dengan psikolog mitra.

---

## 💻 Tech Stack Ecosystem

Dibangun dengan arsitektur modern yang siap *scale-up*:

* **Frontend:** Next.js 14 (App Router) + React.
* **UI System:** Tailwind CSS + Framer Motion (Premium "Organic Tech" Design).
* **Database:** Supabase (PostgreSQL) + Row Level Security (RLS).
* **AI Engine:** Google Generative AI SDK (Gemini Pro/Flash).
* **Auth:** Custom Secure Authentication.

---

## 👨‍💻 Founder & Developer

<div align="center">

### **Muhammad Syarifuddin Yahya**
*Founder, CEO & Lead Engineer*
🏆 **Top 20 AI Talent Hub Indonesia**

Seorang inovator teknologi yang fokus membangun ekosistem digital yang berdampak.

**Portofolio Ekosistem Startup Lainnya:**

| **Pasalku.ai** | **SmartAPD** | **UMMIGO** |
| :--- | :--- | :--- |
| ⚖️ *Legal Tech AI* | 🛡️ *Safety IoT* | 🤖 *SME Automation* |
| [![IG](https://img.shields.io/badge/Instagram-Pasalku.ai-E4405F?logo=instagram)](https://www.instagram.com/pasalku.ai) | [![IG](https://img.shields.io/badge/Instagram-SmartAPD-E4405F?logo=instagram)](https://www.instagram.com/smartapd) | [![IG](https://img.shields.io/badge/Instagram-UMMIGO-E4405F?logo=instagram)](https://www.instagram.com/ummigo) |

</div>

---

## 🛠️ Local Installation

```bash
# 1. Clone Repository
git clone [https://github.com/yhyaa294/SEHATI-.git](https://github.com/yhyaa294/SEHATI-.git)
cd SEHATI-

# 2. Install Dependencies
npm install

# 3. Setup Environment (.env.local)
# Pastikan Anda memiliki API Key Google Gemini & Supabase
# GEMINI_API_KEY=...
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# 4. Run Development Server
npm run dev
