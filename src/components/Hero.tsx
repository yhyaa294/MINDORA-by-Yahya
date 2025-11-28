import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-bg-soft overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-slate-600">Selalu Ada Untukmu</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-text-main leading-tight">
              Teman Cerita Kamu, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Kapanpun Kamu Butuh.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Jaga kesehatan mentalmu bersama SEHATI+. Privasi aman, didukung oleh Duta GenRe dan BKKBN Jombang.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/chat" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
              >
                Curhat Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-text-main border border-slate-200 font-semibold hover:bg-slate-50 transition-colors"
              >
                Pelajari Dulu
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400 overflow-hidden">
                    <div className="w-full h-full bg-slate-300"></div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-600">
                <p className="font-semibold text-text-main">1,000+ Siswa</p>
                <p>Telah bergabung</p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            {/* Illustration Placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-primary/5 to-secondary/5 min-h-[400px] flex items-center justify-center group">
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
               {/* Simple CSS Shape Illustration */}
              <div className="relative w-64 h-64">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                 <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
                 <div className="absolute -bottom-8 left-20 w-32 h-32 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-150"></div>
                 <div className="relative flex flex-col items-center justify-center h-full text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50">
                    <ShieldCheck className="h-16 w-16 text-primary mb-4" />
                    <h3 className="font-bold text-lg text-text-main">Privasi Terjaga</h3>
                    <p className="text-sm text-slate-500">Cerita kamu aman bersama kami.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
