"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Shield, Users, Zap, MessageCircle, ChevronDown, Handshake, Check, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
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
          
          {/* DUPLICATE TRUST BADGES REMOVED HERE */}
        </div>
      </section>

      {/* SECTION 1: EMERGENCY DOCK (Floating & Glassmorphism) */}
      <section className="relative z-30 px-4 -mt-20 mb-24">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-2xl shadow-blue-900/5 flex flex-col md:flex-row items-center justify-between gap-6 ring-1 ring-slate-200/50 hover:scale-[1.01] transition-transform duration-300">
                <div className="flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                        <span className="absolute inset-0 rounded-full bg-rose-400/30 animate-ping"></span>
                        <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-3 rounded-full text-white relative shadow-lg shadow-rose-500/30">
                            <Heart className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-slate-800 text-lg">Sedang merasa berat?</h3>
                        <p className="text-slate-500 text-sm">Jangan dipendam sendiri. Kami ada di sini.</p>
                    </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <Link href="/login" className="flex-1 md:flex-none px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Curhat ke AI
                    </Link>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        Chat GenRe
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL TRUST (Polished) */}
      <section className="py-20 bg-gradient-to-b from-slate-50/80 to-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">Didukung Penuh Oleh Ekosistem Pendidikan & Keluarga</p>
            
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
                {/* SMANERO Logo (First) */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
                    <img src="/logo%20nero.jpg" alt="SMAN Negeri Ngoro" className="h-16 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">SMANERO</span>
                </div>

                {/* Ummigo */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
                    <img src="/logo%20ummigo.png" alt="Ummigo" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 object-contain" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Ummigo</span>
                </div>

                {/* Pasalku */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
                    <img src="/logo%20pasalku.ai.jpg" alt="Pasalku AI" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 rounded-lg" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Pasalku AI</span>
                </div>

                {/* SmartAPD */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
                    <img src="/logo%20smartapd.jpg" alt="SmartAPD" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 rounded-lg" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">SmartAPD</span>
                </div>

                 {/* BKKBN */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
                    <img src="/logo%20bkkbn.webp" alt="BKKBN" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">BKKBN</span>
                </div>

                {/* GenRe */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
                    <img src="/logo%20genre.webp" alt="GenRe Indonesia" className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">GenRe Indonesia</span>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: THE REALITY CHECK */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Menjadi Remaja Itu<br/><span className="text-blue-600">Memang Rumit.</span></h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Kamu tidak sendirian. Banyak yang merasakan hal yang sama, tapi bingung harus mulai dari mana.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {/* Item 1 */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-inner">
                        <Users className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Ekspektasi Tinggi</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Tuntutan akademik dan orang tua yang kadang bikin stress sampai lupa istirahat.
                    </p>
                </div>
                {/* Item 2 */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                    <div className="absolute -top-4 -right-4 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full border border-purple-200">Sering Terjadi</div>
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-inner">
                        <Zap className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Overthinking Malam</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Rasa cemas masa depan atau masalah personal yang susah diceritakan ke teman.
                    </p>
                </div>
                {/* Item 3 */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 shadow-inner">
                        <MessageCircle className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Takut Dihakimi</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Bingung mau cerita ke siapa karena takut dibilang &apos;lebay&apos; atau &apos;baperan&apos;.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 4: THE SOLUTION (Bento Grid) */}
      <section id="features" className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">SEHATI+ Hadir Sebagai <span className="text-primary">Ruang Amanmu.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Box 1 (Large, Left) */}
                <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <div className="relative z-10 mb-8">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-blue-100">
                            <Zap className="w-3 h-3" /> AI POWERED
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">AI Sahabat Virtual</h3>
                        <p className="text-slate-600 text-lg max-w-md">Respon instan 24/7. Validasi emosimu tanpa penghakiman, kapanpun kamu butuh.</p>
                    </div>
                    
                    {/* Mock Chat UI */}
                    <div className="mt-auto bg-slate-50 rounded-t-3xl p-6 border-t border-x border-slate-100 relative translate-y-6 group-hover:translate-y-2 transition-transform duration-500">
                        <div className="space-y-4">
                            <div className="flex justify-end">
                                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 text-sm max-w-[80%] shadow-md">
                                    Aku cape banget hari ini... 😞
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-tl-sm px-5 py-3 text-sm max-w-[90%] shadow-sm">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                                        <span className="font-bold text-pink-500 text-xs">Sobat Sehati</span>
                                    </div>
                                    Gapapa banget buat merasa capek. Kamu udah berjuang hebat hari ini. Mau cerita bagian mana yang paling berat? 🤗
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column Container */}
                <div className="md:col-span-1 flex flex-col gap-6">
                    {/* Box 2 (Top Right) */}
                    <div className="flex-1 bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                            <Shield className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Privasi Tanpa Nama</h3>
                        <p className="text-slate-600 text-sm mb-4">Login simpel, data terenkripsi. Ceritamu aman di sini.</p>
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-full">
                            <Check className="w-3 h-3" /> Terenkripsi End-to-End
                        </div>
                    </div>

                    {/* Box 3 (Bottom Right) */}
                    <div className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-3xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                                <Handshake className="w-7 h-7 text-white" />
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
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900">Sering Ditanyakan</h2>
                <p className="text-slate-500 mt-2">Biar kamu makin yakin buat mulai cerita.</p>
            </div>

            <div className="space-y-4">
                <FaqItem 
                    question="Apakah aplikasi ini berbayar?" 
                    answer="100% GRATIS untuk seluruh siswa SMANERO. Kamu tinggal login dan pakai sepuasnya."
                />
                <FaqItem 
                    question="Apakah guru BK bisa membaca chat saya?" 
                    answer="Tidak. Chat AI bersifat privat antara kamu dan sistem. Konseling GenRe bersifat rahasia profesional. Guru BK hanya melihat data statistik umum (anonim) untuk evaluasi sekolah."
                />
                <FaqItem 
                    question="Bagaimana cara mulainya?" 
                    answer="Cukup klik tombol Masuk, login dengan email sekolah atau pribadimu, dan langsung mulai cerita di dashboard."
                />
            </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20 animate-pulse animation-delay-2000"></div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
                        Satu Langkah Kecil untuk<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kesehatan Mentalmu.</span>
                    </h2>
                    <Link href="/login" className="inline-flex items-center bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 group">
                        Mulai Perjalananmu (Gratis)
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
        <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50 hover:bg-white transition-colors duration-300">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <span className="font-bold text-slate-800 text-lg">{question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}
