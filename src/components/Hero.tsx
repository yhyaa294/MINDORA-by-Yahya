import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-50 overflow-hidden min-h-[85vh] flex items-center justify-center py-20">
      
      {/* --- TECH STARTUP THEME: BLUE & PURPLE GRADIENTS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Tech Blue */}
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob"></div>
        
        {/* Blob 2: Modern Purple/Violet */}
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500 to-violet-400 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>
        
        {/* Blob 3: Cyan/Teal Accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-100 to-white rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Force Centered Layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Text & Badges - CENTERED */}
          <div className="space-y-8 z-10 w-full">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100 mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-sm font-bold text-blue-800 tracking-wide">Platform Kesehatan Mental Gen-Z Berbasis AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              AI Mental Health Companion <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Terdepan untuk Gen-Z.
              </span>
            </h1>
            
            <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Gabungan kecerdasan buatan dan empati manusia. Curhat aman, privasi terjaga, mental sehat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chat" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
              >
                Mulai Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/materi" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 font-bold hover:bg-white hover:border-amber-400 transition-all shadow-sm"
              >
                Pelajari Fitur
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
