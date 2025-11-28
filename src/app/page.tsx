"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Shield, Users, Zap, MessageCircle, Heart, BookOpen, Lock, Activity, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import MysteryLogo from "@/components/MysteryLogo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section - MOBILE RESPONSIVE FIX APPLIED */}
      <section className="relative pt-20 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 border border-blue-100 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            Platform Kesehatan Mental Remaja Pertama di Jombang
          </div>
          
          {/* Responsive Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 md:mb-8 leading-tight">
            Kesehatan Mentalmu, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Prioritas Utama Kami.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Ruang aman untuk bercerita, belajar, dan tumbuh. Didukung oleh AI cerdas dan konselor sebaya yang mengerti kamu. Privasi 100% terjaga.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-16 px-4 md:px-0">
            <Link 
              href="/login" 
              className="inline-flex justify-center items-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-primary text-white font-bold text-base md:text-lg shadow-lg hover:bg-primary/90 hover:shadow-primary/30 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Mulai Perjalananmu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="#features" 
              className="inline-flex justify-center items-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold text-base md:text-lg hover:bg-slate-50 transition-all w-full sm:w-auto"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: EMERGENCY BAR (Bridge) - MOBILE FIX */}
      <section className="relative z-30 px-4 -mt-10 md:-mt-20 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-2xl shadow-blue-900/5 flex flex-col sm:flex-row items-center justify-between gap-6 ring-1 ring-slate-200/50">
                <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
                    <div className="relative flex-shrink-0">
                        <span className="absolute inset-0 rounded-full bg-rose-400/30 animate-ping"></span>
                        <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-3 rounded-full text-white relative shadow-lg shadow-rose-500/30">
                            <Heart className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-slate-800 text-lg">Sedang merasa berat?</h3>
                        <p className="text-slate-500 text-sm">Jangan dipendam sendiri.</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link href="/login" className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Curhat ke AI
                    </Link>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        Chat Duta GenRe
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2: MENGAPA SEHATI+? (Latar Belakang) - MOBILE FIX */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-xs bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Latar Belakang</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">Lahir dari Keresahan Nyata.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                        <Users className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Stigma Negatif</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Siswa seringkali takut masuk ruang BK karena khawatir dianggap &quot;bermasalah&quot; atau &quot;nakal&quot; oleh teman-temannya.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                        <Lock className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Keterbatasan Akses</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Guru BK memiliki jam kerja terbatas, sementara krisis mental sering terjadi di malam hari saat sekolah tutup.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Rasa Malu</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Siswa enggan bercerita tentang masalah sensitif (percintaan, keluarga, bullying) secara tatap muka.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: FEATURES (5 Core Features) - MOBILE FIX */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Solusi Komprehensif SEHATI+</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature 1: Sobat SEHATI (Large) */}
                <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                                <Zap className="w-6 h-6 text-yellow-300" />
                            </div>
                            <h3 className="text-2xl font-bold">Sobat SEHATI (AI)</h3>
                        </div>
                        <p className="text-blue-100 text-base md:text-lg mb-6 max-w-lg">
                            AI dengan empati tinggi. Bukan sekadar bot, tapi pendengar yang memvalidasi perasaanmu. Dilengkapi <i>safety guardrails</i> untuk mendeteksi bahaya.
                        </p>
                    </div>
                </div>

                {/* Feature 2: Panic Button */}
                <div className="bg-rose-50 rounded-[2rem] md:rounded-[2.5rem] p-8 border border-rose-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mb-4">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Panic Button</h3>
                    <p className="text-slate-600 text-sm">Integrasi WhatsApp langsung ke PIK-R PILAR untuk bantuan manusia instan.</p>
                </div>

                {/* Feature 3: Mood Analytics */}
                <div className="bg-indigo-50 rounded-[2rem] md:rounded-[2.5rem] p-8 border border-indigo-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                        <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Mood Analytics</h3>
                    <p className="text-slate-600 text-sm">Rekam jejak emosi harianmu untuk mengenali pola kesehatan mentalmu sendiri.</p>
                </div>

                {/* Feature 4: Edukasi Interaktif */}
                <div className="bg-amber-50 rounded-[2rem] md:rounded-[2.5rem] p-8 border border-amber-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Edukasi Interaktif</h3>
                    <p className="text-slate-600 text-sm">Modul Triad KRR (Kesehatan Reproduksi, NAPZA, Pernikahan Dini) dengan gaya bahasa remaja.</p>
                </div>

                {/* Feature 5: Privacy First */}
                <div className="bg-emerald-50 rounded-[2rem] md:rounded-[2.5rem] p-8 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                        <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy First</h3>
                    <p className="text-slate-600 text-sm">Sistem login aman, data terenkripsi, dan opsi penggunaan nama samaran (anonim).</p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 4: THE DREAM TEAM - MOBILE FIX */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Kolaborasi Teknologi & Empati Manusia</h2>
                <p className="text-slate-400">Dibalik layar SEHATI+, ada tim yang berdedikasi untuk masa depan remaja.</p>
            </div>

            {/* Lead Developer */}
            <div className="max-w-3xl mx-auto bg-slate-800/50 border border-slate-700 rounded-3xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center gap-6 hover:bg-slate-800 transition-colors text-center md:text-left">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold text-2xl shrink-0">Y</div>
                <div>
                    <h3 className="text-2xl font-bold mb-1">Muhammad Syarifuddin Yahya</h3>
                    <p className="text-blue-400 font-medium mb-2">Lead Developer & Founder</p>
                    <p className="text-slate-400 text-sm">Top 20 AI Talent Hub Universitas Indonesia. Innovator in Technology & Business Startup.</p>
                </div>
            </div>

            {/* Core Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold mb-4">R</div>
                    <h4 className="font-bold text-lg">Rozzaq Wahid</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Core Team</p>
                    <p className="text-slate-300 text-sm">Ketua OSIS SMANERO 2025 & Top 5 Duta GenRe.</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold mb-4">S</div>
                    <h4 className="font-bold text-lg">Salvia Nathaniela</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Core Team</p>
                    <p className="text-slate-300 text-sm">Finalis Duta GenRe 2025 & Duta Anak Bidang Desa Jombang 2024.</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold mb-4">M</div>
                    <h4 className="font-bold text-lg">M. Saiful Amruhu</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Product Manager</p>
                    <p className="text-slate-300 text-sm">Duta Anak Partisipasi Jombang 2025 & Juara 2 Duta Anti Narkoba.</p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 5: STARTUP ECOSYSTEM - MOBILE FIX */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-10">Bagian dari Ekosistem Inovasi Digital</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* UPDATE: Use Mystery Logo for PIK-R PILAR */}
                <div className="flex flex-col items-center p-6 bg-slate-50 rounded-3xl relative overflow-hidden group cursor-pointer">
                    <MysteryLogo className="w-32 h-32 rounded-2xl mb-4" text="PIK-R" subtext="COMING SOON" />
                    <h3 className="font-bold text-slate-900">PIK-R PILAR</h3>
                    <p className="text-sm text-slate-500">Pusat Informasi & Konseling Remaja.</p>
                </div>

                <div className="flex flex-col items-center p-6 bg-slate-50 rounded-3xl">
                    <img src="/logo%20pasalku.ai.jpg" alt="Pasalku AI" className="h-12 w-auto mb-4 rounded-lg" />
                    <h3 className="font-bold text-slate-900">Pasalku.ai</h3>
                    <p className="text-sm text-slate-500">Asisten Hukum Cerdas berbasis AI.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-slate-50 rounded-3xl">
                    <img src="/logo%20smartapd.jpg" alt="SmartAPD" className="h-12 w-auto mb-4 rounded-lg" />
                    <h3 className="font-bold text-slate-900">SmartAPD</h3>
                    <p className="text-sm text-slate-500">Teknologi IoT & AI untuk Keselamatan Kerja.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-slate-50 rounded-3xl">
                    <img src="/logo%20ummigo.png" alt="UMMIGO" className="h-12 w-auto mb-4 object-contain" />
                    <h3 className="font-bold text-slate-900">UMMIGO</h3>
                    <p className="text-sm text-slate-500">Chatbot Otomatisasi Customer Service UMKM.</p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 6: ROADMAP - MOBILE FIX */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Roadmap Pengembangan</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                    <span className="text-xs font-bold text-blue-500 uppercase">Fase 1 (Now)</span>
                    <h4 className="font-bold text-slate-900 mt-1">MVP Rilis</h4>
                    <p className="text-xs text-slate-500 mt-2">Landing Page, Chat AI Dasar, Integrasi WA.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-slate-200 shadow-sm opacity-70">
                    <span className="text-xs font-bold text-slate-400 uppercase">Fase 2</span>
                    <h4 className="font-bold text-slate-900 mt-1">Dashboard Admin</h4>
                    <p className="text-xs text-slate-500 mt-2">Analitik Data Lanjutan untuk Guru BK.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-slate-200 shadow-sm opacity-70">
                    <span className="text-xs font-bold text-slate-400 uppercase">Fase 3</span>
                    <h4 className="font-bold text-slate-900 mt-1">Tele-konseling</h4>
                    <p className="text-xs text-slate-500 mt-2">Video Call aman di dalam aplikasi.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-slate-200 shadow-sm opacity-70">
                    <span className="text-xs font-bold text-slate-400 uppercase">Fase 4</span>
                    <h4 className="font-bold text-slate-900 mt-1">Ekspansi</h4>
                    <p className="text-xs text-slate-500 mt-2">Implementasi ke 10 SMA di Jombang.</p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA - MOBILE FIX */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Satu Langkah Kecil untuk<br/>Kesehatan Mentalmu.</h2>
                    <Link href="/login" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                        Mulai Perjalananmu (Gratis)
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
