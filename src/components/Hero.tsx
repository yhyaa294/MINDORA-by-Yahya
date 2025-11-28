import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      
      {/* --- NEW: Aurora Gradients (Halo Effect) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Soft Blue/Cyan (Behind Text) */}
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
        
        {/* Blob 2: Warm Gold/Yellow (Bottom Right) */}
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-yellow-200 to-orange-100 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
        
        {/* Blob 3: Soft Pink Accent (Center/Random) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-600">Selalu Ada Untukmu</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Teman Cerita Kamu, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Kapanpun Kamu Butuh.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Jaga kesehatan mentalmu bersama SEHATI+. Privasi aman, didukung oleh Duta GenRe dan BKKBN Jombang.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/chat" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
              >
                Curhat Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/materi" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 border border-white/50 font-semibold hover:bg-white transition-colors shadow-sm"
              >
                Pelajari Dulu
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400 overflow-hidden shadow-sm">
                    {/* Avatar Placeholder gradient */}
                    <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-100 to-blue-200' : 'from-pink-100 to-pink-200'}`}></div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-600">
                <p className="font-bold text-slate-900">1,000+ Siswa</p>
                <p>Telah bergabung</p>
              </div>
            </div>
          </div>
          
          {/* Right Image/Card */}
          <div className="relative z-10">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-200/50 border-[6px] border-white/50 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl min-h-[450px] flex items-center justify-center group transition-transform hover:scale-[1.02] duration-500">
               {/* Glass Shine */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-50"></div>
               
               <div className="relative w-72 h-72">
                 {/* Floating Elements */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce-slow"></div>
                 <div className="absolute top-10 left-0 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce-slow animation-delay-1000"></div>
                 <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce-slow animation-delay-2000"></div>
                 
                 {/* Main Card Content */}
                 <div className="relative flex flex-col items-center justify-center h-full text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/60">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg mb-4">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-1">Privasi Terjaga</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
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
