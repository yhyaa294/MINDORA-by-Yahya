"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Users, Zap, CheckCircle, MessageCircle, ChevronDown, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section - PROTECTED - DO NOT MODIFY */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-blue-100 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            Platform Kesehatan Mental Remaja No.1 di Jombang
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Kesehatan Mentalmu, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Prioritas Utama Kami.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ruang aman untuk bercerita, belajar, dan tumbuh. Didukung oleh AI cerdas dan konselor sebaya yang mengerti kamu. Privasi 100% terjaga.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link 
              href="/login" 
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-lg hover:bg-primary/90 hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
            >
              Mulai Perjalananmu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="#features" 
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-slate-100 pt-10">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Didukung Sepenuhnya Oleh</p>
            <div className="flex justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <img src="/logo%20nero.jpg" alt="SMAN Nero" className="h-12 w-auto" />
               <img src="/logo%20bkkbn.webp" alt="BKKBN" className="h-12 w-auto" />
               <img src="/logo%20genre.webp" alt="GenRe" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 1. NEW: Emergency Action Bar (The Bridge) */}
      <section className="relative z-20 -mt-10 px-4">
        <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md border border-pink-100 rounded-2xl p-4 md:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="bg-rose-100 p-3 rounded-full text-rose-500 animate-pulse">
                        <Heart className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg">Lagi butuh teman cerita sekarang juga?</h3>
                        <p className="text-sm text-slate-500">Jangan dipendam sendiri ya, yuk ngobrol!</p>
                    </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <Link href="/login" className="flex-1 md:flex-none px-5 py-2.5 bg-white text-rose-500 border border-rose-200 rounded-xl font-bold text-sm hover:bg-rose-50 transition-colors flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4" />
                        Curhat ke AI
                    </Link>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Chat Duta GenRe
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* 2. REVAMP: Features Section (Bestie Style) */}
      <section id="features" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <span className="text-rose-500 font-bold tracking-wider uppercase text-xs bg-rose-50 px-3 py-1 rounded-full border border-rose-100">Kenapa Harus SEHATI+?</span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Support System Paling Pengertian</h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: AI */}
              <div className="bg-white p-8 rounded-3xl border border-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
                   <Zap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bestie Virtual 24/7</h3>
                <p className="text-slate-600 leading-relaxed">
                  Gapapa kalau belum siap cerita ke orang. AI kita siap dengerin keluh kesahmu kapan aja, tanpa nge-judge. Selalu ada buat kamu.
                </p>
              </div>

              {/* Card 2: Human */}
              <div className="bg-white p-8 rounded-3xl border border-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                       <Users className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Kakak GenRe</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Butuh saran yang lebih &quot;nyata&quot;? Chat sama Kakak Duta GenRe yang asik dan ngerti perasaanmu. Berasa curhat ke temen sendiri.
                    </p>
                </div>
              </div>

              {/* Card 3: Privacy */}
              <div className="bg-white p-8 rounded-3xl border border-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-gray-50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform">
                   <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ruang Aman</h3>
                <p className="text-slate-600 leading-relaxed">
                  Rahasia kita berdua aja. Sistem didesain privat biar kamu nyaman jadi diri sendiri tanpa takut data bocor atau di-spill.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. NEW: FAQ Section (Accordion) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Sering Ditanyakan (FAQ)</h2>
                <p className="text-slate-500 mt-2">Biar kamu makin yakin buat mulai cerita.</p>
            </div>

            <div className="space-y-4">
                <FaqItem 
                    question="Curhat di sini bayar gak?" 
                    answer="Tenang bestie, 100% GRATIS buat semua siswa SMANERO. Kamu tinggal login dan pakai sepuasnya."
                />
                <FaqItem 
                    question="Siapa yang baca chat aku?" 
                    answer="Kalau sama AI, cuma mesin yang baca. Kalau sama Duta GenRe, cuma kakak konselor yang tau. Guru mapel GAK AKAN tau curhatanmu."
                />
                <FaqItem 
                    question="Aku malu ketahuan..." 
                    answer="Santai, kamu bisa pakai nama samaran kok di dashboard konseling. Identitas aslimu aman terkunci di database admin."
                />
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Simple FAQ Component
function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-100 rounded-2xl overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
            >
                <span className="font-bold text-slate-800">{question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-5 bg-white text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in-down">
                    {answer}
                </div>
            )}
        </div>
    );
}
