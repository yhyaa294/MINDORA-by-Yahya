"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Shield, Users, Zap, MessageCircle, ChevronDown, Lock, Handshake, Check, Heart } from 'lucide-react';
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

      {/* SECTION 1: EMERGENCY DOCK (Floating) */}
      <section className="relative z-30 px-4 -mt-12 mb-20">
        <div className="max-w-3xl mx-auto">
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-6 ring-1 ring-slate-100/50">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-rose-400/20 animate-ping"></span>
                        <div className="bg-rose-500 p-2 rounded-full text-white relative">
                            <Heart className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="font-semibold text-slate-700">Sedang merasa berat? Jangan dipendam sendiri.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <Link href="/login" className="flex-1 md:flex-none px-5 py-2.5 bg-rose-500 text-white rounded-xl font-bold text-sm hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4" />
                        Curhat ke AI (Sekarang)
                    </Link>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none px-5 py-2.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Chat Duta GenRe (WA)
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL TRUST */}
      <section className="py-16 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Didukung penuh oleh ekosistem pendidikan & keluarga:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {/* Ummigo Logo */}
                <div className="group flex flex-col items-center gap-2">
                    <img src="/logo%20ummigo.png" alt="Ummigo" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 object-contain" />
                    <span className="text-xs text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Ummigo</span>
                </div>
                {/* Pasalku AI Logo */}
                <div className="group flex flex-col items-center gap-2">
                    <img src="/logo%20pasalku.ai.jpg" alt="Pasalku AI" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 rounded-lg" />
                    <span className="text-xs text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Pasalku AI</span>
                </div>
                {/* SmartAPD Logo */}
                <div className="group flex flex-col items-center gap-2">
                    <img src="/logo%20smartapd.jpg" alt="SmartAPD" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 rounded-lg" />
                    <span className="text-xs text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">SmartAPD</span>
                </div>
                 {/* BKKBN Logo */}
                <div className="group flex flex-col items-center gap-2">
                    <img src="/logo%20bkkbn.webp" alt="BKKBN" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" />
                    <span className="text-xs text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">BKKBN</span>
                </div>
                {/* GenRe Logo */}
                <div className="group flex flex-col items-center gap-2">
                    <img src="/logo%20genre.webp" alt="GenRe Indonesia" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" />
                    <span className="text-xs text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">GenRe Indonesia</span>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: THE REALITY CHECK (Problem Agitation) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Menjadi Remaja Itu Memang Rumit.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm transform -rotate-3">
                        <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Ekspektasi Tinggi</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Tuntutan akademik dan orang tua yang kadang bikin stress.
                    </p>
                </div>
                {/* Item 2 */}
                <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm transform rotate-3">
                        <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Overthinking Malam</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Rasa cemas masa depan atau masalah personal yang susah diceritakan.
                    </p>
                </div>
                {/* Item 3 */}
                <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 shadow-sm transform -rotate-2">
                        <MessageCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Takut Dihakimi</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Bingung mau cerita ke siapa karena takut dibilang &apos;lebay&apos;.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 4: THE SOLUTION (Bento Grid) */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">SEHATI+ Hadir Sebagai Ruang Amanmu.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
                {/* Box 1 (Large, Left) - Spans 2 columns on desktop */}
                <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-xs font-bold mb-4">
                            <Zap className="w-3 h-3" /> AI POWERED
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Sahabat Virtual</h3>
                        <p className="text-slate-600 text-lg max-w-md">Respon instan 24/7. Validasi emosimu tanpa penghakiman.</p>
                    </div>
                    
                    {/* Mock Chat UI */}
                    <div className="mt-8 flex-1 bg-slate-50 rounded-t-2xl p-6 border-t border-x border-slate-100 relative translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                        <div className="space-y-4">
                            <div className="flex justify-end">
                                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm max-w-[80%]">
                                    Aku cape banget hari ini... 😞
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-tl-sm px-4 py-2 text-sm max-w-[90%] shadow-sm">
                                    <span className="font-bold text-pink-500 block text-xs mb-1">Sobat Sehati</span>
                                    Gapapa banget buat merasa capek. Kamu udah berjuang hebat hari ini. Mau cerita bagian mana yang paling berat? 🤗
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column Container */}
                <div className="md:col-span-1 flex flex-col gap-6">
                    {/* Box 2 (Top Right) */}
                    <div className="flex-1 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-start">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Privasi Tanpa Nama</h3>
                        <p className="text-slate-600 text-sm">Login simpel, data terenkripsi. Ceritamu aman di sini.</p>
                        <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                            <Check className="w-3 h-3" /> Terenkripsi End-to-End
                        </div>
                    </div>

                    {/* Box 3 (Bottom Right) */}
                    <div className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-start text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                <Handshake className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Koneksi GenRe</h3>
                            <p className="text-blue-100 text-sm">Jembatan langsung ke konselor sebaya jika butuh bantuan lebih.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 5: FAQ (Accordion) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Sering Ditanyakan</h2>
            </div>

            <div className="space-y-4">
                <FaqItem 
                    question="Apakah aplikasi ini berbayar?" 
                    answer="100% GRATIS untuk seluruh siswa SMANERO."
                />
                <FaqItem 
                    question="Apakah guru BK bisa membaca chat saya?" 
                    answer="Tidak. Chat AI bersifat privat. Konseling GenRe bersifat rahasia profesional."
                />
                <FaqItem 
                    question="Bagaimana cara mulainya?" 
                    answer="Cukup klik tombol Masuk, login dengan emailmu, dan mulai cerita."
                />
            </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
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

// Simple FAQ Component
function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-100 rounded-2xl overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
            >
                <span className="font-bold text-slate-800 text-lg">{question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="p-6 pt-0 bg-slate-50 text-slate-600 leading-relaxed">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}
