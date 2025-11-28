"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Users, Zap, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* Value Props Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                   <Zap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Teman Cerita 24 Jam</h3>
                <p className="text-slate-600 leading-relaxed">
                  AI kami dilatih untuk menjadi pendengar pertama yang baik saat kamu galau tengah malam. Tanpa menghakimi, selalu validasi perasaanmu.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                   <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Curhat ke &lsquo;Kakak-an&rsquo;</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kadang kamu butuh saran dari manusia nyata yang &ldquo;satu frekuensi&rdquo;. Ngobrol santai dengan Duta GenRe via WhatsApp jika butuh bantuan lebih.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                   <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ruang Aman Tanpa &lsquo;Spill&rsquo;</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ceritamu berhenti di sini. Kami menggunakan sistem anonim (tanpa nama asli) di dashboard konselor agar kamu nyaman jadi diri sendiri.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Services / Business Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                 <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-green-100">
                    <Zap className="h-4 w-4" />
                    Program Sekolah Sehati
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                   Jadikan Sekolahmu &ldquo;Zona Nyaman&rdquo; Mental.
                 </h2>
                 <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                   Paket kolaborasi lengkap: aplikasi monitoring siswa + workshop seru Anti-Bullying dari tim Duta GenRe. Bukan sekadar ceramah membosankan.
                 </p>
                 
                 <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                       <div className="bg-green-100 p-2 rounded-full text-green-600"><ShieldCheck className="h-5 w-5" /></div>
                       <span className="text-slate-700 font-medium">Sosialisasi GenRe & Kesehatan Remaja</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="bg-green-100 p-2 rounded-full text-green-600"><Users className="h-5 w-5" /></div>
                       <span className="text-slate-700 font-medium">Demo Aplikasi SEHATI+ untuk Siswa</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="bg-green-100 p-2 rounded-full text-green-600"><Heart className="h-5 w-5" /></div>
                       <span className="text-slate-700 font-medium">Sesi Konseling Kelompok Terbimbing</span>
                    </div>
                 </div>

                 <a 
                   href="https://wa.me/6281234567890?text=Halo%20Tim%20SEHATI+,%20saya%20tertarik%20mengundang%20kalian%20untuk%20mengisi%20materi%20di%20sekolah..." 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                 >
                   Undang Kami ke Sekolahmu
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </a>
              </div>
              
              <div className="md:w-1/2 relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-blue-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                 <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-10 -mt-10"></div>
                    <div className="relative z-10 py-12 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                          <Users className="h-8 w-8" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-600">Untuk Kepala Sekolah</p>
                          <h3 className="text-2xl font-bold text-slate-900">Mengapa Berkolaborasi?</h3>
                        </div>
                      </div>
                      <ul className="space-y-4 text-slate-600 text-sm font-medium">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Deteksi dini masalah bullying & stres siswa.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Laporan data kesehatan mental sekolah (anonim).</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Mendukung program Sekolah Ramah Anak & GenRe.</span>
                        </li>
                      </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
