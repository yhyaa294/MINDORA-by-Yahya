import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      
      {/* --- GENRE BKKBN THEME: BLUE & GOLD AURORA --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Deep Blue (GenRe Identity) */}
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob"></div>
        
        {/* Blob 2: GenRe Gold/Amber (The "Salam GenRe" Spirit) */}
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-yellow-400 to-amber-500 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>
        
        {/* Blob 3: Subtle Light Blue (Neutralizer) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-100 to-white rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        
        {/* Force Centered Layout */}
        <div className="flex flex-col items-center text-center">
          
          {/* Text & Badges - CENTERED */}
          <div className="space-y-8 z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100 mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-sm font-bold text-blue-800 tracking-wide">Platform Kesehatan Mental Remaja Pertama di Jombang</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Kesehatan Mentalmu, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500">
                Prioritas Utama Kami.
              </span>
            </h1>
            
            <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Ruang aman untuk bercerita, belajar, dan tumbuh. Didukung oleh AI cerdas dan konselor sebaya yang mengerti kamu. Privasi 100% terjaga.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chat" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
              >
                Curhat Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/materi" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 font-bold hover:bg-white hover:border-amber-400 transition-all shadow-sm"
              >
                Pelajari Dulu
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400 overflow-hidden shadow-sm">
                    {/* Avatar Placeholder: Blue & Gold Gradient only */}
                    <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-100 to-blue-300' : 'from-yellow-100 to-amber-200'}`}></div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-600 text-left">
                <p className="font-bold text-slate-900">1,000+ Siswa</p>
                <p>Telah bergabung</p>
              </div>
            </div>
          </div>
          
          {/* Glass Card - MOVED BELOW & CENTERED */}
          <div className="relative z-10 mt-16">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-200/50 border-[6px] border-white/50 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl min-h-[300px] w-full max-w-md mx-auto flex items-center justify-center group transition-transform hover:scale-[1.02] duration-500">
               {/* Glass Shine */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-50"></div>
               
               <div className="relative w-full p-8">
                 {/* Floating Elements: Blue & Gold Only */}
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce-slow"></div>
                 <div className="absolute top-10 left-0 w-24 h-24 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce-slow animation-delay-1000"></div>
                 
                 {/* Main Card Content */}
                 <div className="relative flex flex-col items-center justify-center h-full text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white shadow-lg mb-4">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-1">Privasi Terjaga</h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                        Cerita kamu 100% rahasia.<br/>Hanya kamu & konselor yang tahu.
                    </p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
