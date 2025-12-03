"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { 
    Shield, Users, Zap, MessageCircle, Heart, BookOpen, Lock, Activity, 
    ArrowRight, Layout, Database, Code, Server, UserPlus, Sparkles, 
    HelpCircle, MessageSquare, MessageCircleHeart, HandHeart, Sprout 
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBEB] text-slate-900 font-sans flex flex-col">
      
      {/* --- HERO SECTION: MOBILE OPTIMIZED --- */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-12 pb-20 sm:pt-20 px-6 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
            
            {/* Left: Text Content */}
            <div className="space-y-8 sm:space-y-8 relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-emerald-900/10 bg-emerald-50/50 mx-auto lg:mx-0">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-600"></span>
                    <span className="text-[10px] sm:text-xs font-medium text-emerald-800 tracking-wide uppercase">MINDORA Beta 1.0</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-emerald-950 tracking-tight">
                    Ketenangan Pikiran <br className="hidden sm:block" />
                    <span className="italic text-emerald-800">dalam Genggaman.</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0 mb-8 sm:mb-0">
                    Platform kesehatan mental modern untuk generasi masa depan. Tanpa stigma, privasi terjaga, dan sepenuhnya personal.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 w-full sm:w-auto">
                    <Link href="/login" className="flex justify-center items-center w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-emerald-900 text-white font-medium hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10 text-sm sm:text-base">
                        Mulai Konsultasi
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link href="/about" className="flex justify-center items-center w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-emerald-900/20 text-emerald-900 font-medium hover:bg-emerald-50 transition-all text-sm sm:text-base">
                        Tentang Kami
                    </Link>
                </div>
            </div>

            {/* Right: Abstract Visual (Hidden on small mobile if needed, or scaled down) */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative w-full max-w-[280px] sm:max-w-md aspect-square">
                    {/* Organic Shapes */}
                    <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -left-4 w-56 sm:w-72 h-56 sm:h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-56 sm:w-72 h-56 sm:h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    
                    {/* Minimalist Card Mockup */}
                    <div className="relative z-10 bg-white/60 backdrop-blur-lg border border-white/40 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-emerald-900/5 max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-float">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-emerald-950 text-sm sm:text-base">Mind Companion</h3>
                                <p className="text-[10px] sm:text-xs text-slate-500">AI Counselor Active</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                "Halo, bagaimana perasaanmu hari ini? Tidak apa-apa jika merasa lelah."
                            </div>
                            <div className="flex gap-2 justify-end">
                                <div className="p-2 sm:p-3 bg-emerald-600 text-white rounded-xl text-xs sm:text-sm w-fit">
                                    Aku butuh teman cerita.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 1.5: EMERGENCY BAR (Mobile Optimized) --- */}
      <section className="relative z-30 px-4 sm:px-6 -mt-6 sm:-mt-10 mb-12 sm:mb-16">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl shadow-emerald-900/5 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 ring-1 ring-stone-200/50">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto text-center sm:text-left">
                    <div className="relative flex-shrink-0">
                        <span className="absolute inset-0 rounded-full bg-red-400/30 animate-ping"></span>
                        <div className="bg-gradient-to-br from-red-500 to-orange-600 p-2.5 sm:p-3 rounded-full text-white relative shadow-lg shadow-red-500/30">
                            <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-emerald-950 text-base sm:text-lg">Butuh bantuan segera?</h3>
                        <p className="text-slate-500 text-xs sm:text-sm">Jangan ragu untuk meminta pertolongan.</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link href="/login" className="w-full sm:w-auto px-6 py-3 bg-emerald-900 text-white rounded-xl font-medium text-sm hover:bg-emerald-800 transition-all shadow-lg flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        AI Care Assistant
                    </Link>
                    <Link href="/login" className="w-full sm:w-auto px-6 py-3 bg-white text-emerald-900 border border-emerald-900/20 rounded-xl font-medium text-sm hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        Chat Konselor
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION: CARA KERJA (Mobile Grid Fix) --- */}
      <section className="py-12 sm:py-16 bg-[#FFFBEB] border-t border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-serif text-emerald-950">Cara Kerja MINDORA</h2>
                <p className="text-slate-600 mt-2 text-sm sm:text-base">Tiga langkah mudah untuk kesehatan mental yang lebih baik.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-3 sm:mb-4 shadow-sm">
                        <UserPlus className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-emerald-950 mb-1 sm:mb-2">1. Buat Akun Privat</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                        Daftar dengan aman. Identitasmu terlindungi sepenuhnya dan kamu bisa menggunakan nama samaran (anonim).
                    </p>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-3 sm:mb-4 shadow-sm">
                        <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-emerald-950 mb-1 sm:mb-2">2. Pilih Teman Curhat</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                        Mau respon kilat dari AI 24/7 atau dukungan mendalam dari Kakak GenRe? Kamu yang tentukan.
                    </p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3 sm:mb-4 shadow-sm">
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-emerald-950 mb-1 sm:mb-2">3. Temukan Kelegaan</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                        Dapatkan validasi emosi, saran praktis, dan materi edukasi untuk tumbuh lebih kuat setiap hari.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 2: PROBLEM STATEMENT --- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 border-t border-stone-100 pt-10 sm:pt-12">
                <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-emerald-950">Stigma Sosial</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Ketakutan akan penghakiman seringkali menjadi penghalang terbesar untuk mencari bantuan.
                    </p>
                </div>
                <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-emerald-950">Privasi Terjaga</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Ruang aman digital di mana identitasmu terlindungi sepenuhnya, tanpa kompromi.
                    </p>
                </div>
                <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-emerald-950">Aksesibilitas</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Bantuan profesional dan teman cerita cerdas yang tersedia 24/7, kapanpun dibutuhkan.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 3: FEATURES --- */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-10 sm:mb-16 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-serif text-emerald-950 mb-4 sm:mb-6">Ekosistem MINDORA</h2>
                <p className="text-slate-600 text-base sm:text-lg">Pendekatan holistik yang menggabungkan teknologi canggih dengan sentuhan manusiawi.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-emerald-500 transition-colors group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 mb-4 sm:mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Mind Companion</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Teman cerita berbasis AI yang dilatih untuk mendengarkan dengan empati dan tanpa bias.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-orange-400 transition-colors group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4 sm:mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Expert Connect</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Jalur prioritas untuk terhubung langsung dengan konselor manusia profesional saat krisis.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-blue-400 transition-colors group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 sm:mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Growth Library</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Koleksi kurasi materi psikologi dan pengembangan diri untuk membangun mentalitas tangguh.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- NEW SECTION: FAQ (Pertanyaan Umum) --- */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-emerald-950 mb-8 sm:mb-12 text-center">Sering Ditanyakan (FAQ)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* FAQ Items */}
                {[
                    { q: "Apakah chat saya bisa dibaca oleh orang lain?", a: "Tidak. Sistem kami mengenkripsi chat kamu. Hanya kamu dan sistem yang memiliki akses. Privasi adalah prioritas utama kami." },
                    { q: "Apakah AI Mind Companion aman?", a: "Ya. AI kami dilengkapi 'safety guardrails' untuk mendeteksi bahaya dan akan menyarankan bantuan profesional jika terdeteksi risiko tinggi." },
                    { q: "Apakah layanan ini berbayar?", a: "MINDORA dapat diakses secara gratis untuk fitur dasar. Kami berkomitmen mendukung kesehatan mental yang inklusif untuk semua." },
                    { q: "Bagaimana cara memberikan masukan?", a: "Kami sangat menghargai masukanmu! Silakan hubungi kami melalui halaman Kontak atau media sosial resmi kami." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-stone-50 p-5 sm:p-6 rounded-2xl border border-stone-100">
                        <h4 className="font-bold text-emerald-900 mb-2 flex items-start gap-2 text-sm sm:text-base">
                            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                            {item.q}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm pl-6 sm:pl-7">
                            {item.a}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- SECTION 5: TECH STACK --- */}
      <section className="py-12 sm:py-16 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-stone-400 text-xs sm:text-sm font-medium uppercase tracking-widest mb-6 sm:mb-8">Powered by Industry Standard Tech</p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {[
                    { Icon: Layout, name: "Next.js" },
                    { Icon: Database, name: "Supabase" },
                    { Icon: Code, name: "Gemini AI" },
                    { Icon: Server, name: "Vercel" }
                ].map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <tech.Icon className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="font-bold text-sm sm:text-base">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- SECTION 6: PARTNERSHIP (Monetization) --- */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-[#FFFBEB] border border-emerald-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-xl shadow-emerald-900/5">
                <div className="flex-1 text-center md:text-left">
                    <span className="text-emerald-600 font-bold tracking-wider text-[10px] sm:text-xs uppercase mb-2 block">Partnership</span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-emerald-950 mb-3 sm:mb-4">Teknologi Kesehatan Mental untuk Sekolah Modern.</h2>
                    <p className="text-slate-600 mb-6 text-xs sm:text-sm leading-relaxed">
                        Biarkan AI kami membantu Guru BK memetakan kondisi siswa secara real-time, tanpa menambah beban kerja guru.
                    </p>
                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                        {["Lisensi Sistem Monitoring 24/7", "Dashboard Analitik Real-time", "Deteksi Dini Siswa Berisiko", "Laporan Bulanan Otomatis"].map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-emerald-900 font-medium">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] sm:text-xs">✓</div>
                                {feat}
                            </div>
                        ))}
                    </div>
                    <a 
                        href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20pasang%20MINDORA%20di%20sekolah%20saya.%20Boleh%20minta%20info%20lebih%20lanjut?" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-emerald-900 text-white font-medium hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10 text-sm sm:text-base"
                    >
                        Ajukan Demo & Penawaran
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
                {/* Visual Accent */}
                <div className="w-24 h-24 sm:w-full sm:max-w-[200px] sm:aspect-square bg-emerald-100 rounded-full flex items-center justify-center relative overflow-hidden shrink-0">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                     <Shield className="w-12 h-12 sm:w-24 sm:h-24 text-emerald-600/80" />
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 7: FINAL CTA (Elegant) --- */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-emerald-900 rounded-[2rem] p-8 sm:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
            
            <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-6 sm:mb-8 leading-tight">
                    Mulai Perjalanan <br/> Menuju Ketenangan.
                </h2>
                <Link href="/login" className="inline-flex items-center bg-[#FFFBEB] text-emerald-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl text-sm sm:text-base">
                    Bergabung Sekarang
                    <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
