"use client";

import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MessageCircle, BookOpen, Bot, Sparkles, ArrowRight, HeartHandshake } from 'lucide-react';

export default function DashboardPage() {
  const [user, setUser] = useState('Sobat SEHATI');

  useEffect(() => {
    const storedUser = localStorage.getItem('sehati_user');
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        {/* Greeting Hero */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-lg mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Selamat Pagi, {user}! 👋</h1>
            <p className="text-blue-100 text-lg max-w-xl">
              Bagaimana perasaanmu hari ini? Ingat, tidak apa-apa untuk merasa tidak baik-baik saja. Kami di sini untukmu.
            </p>
          </div>
        </div>

        {/* Bento Grid Actions */}
        <div className="grid md:grid-cols-3 gap-6">
           
           {/* Card 1: AI Chat (Primary) */}
           <Link href="/chat" className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-50 to-transparent w-32 h-32 rounded-bl-full"></div>
              <div className="relative z-10">
                 <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Bot className="h-7 w-7" />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900 mb-2">Curhat dengan AI</h2>
                 <p className="text-slate-600 mb-6 max-w-md">
                   Ceritakan apa saja yang mengganggu pikiranmu. Sobat SEHATI siap mendengarkan tanpa menghakimi, 24 jam non-stop.
                 </p>
                 <span className="inline-flex items-center font-bold text-primary group-hover:translate-x-2 transition-transform">
                   Mulai Curhat <ArrowRight className="ml-2 h-5 w-5" />
                 </span>
              </div>
           </Link>

           {/* Card 2: WA Chat (Secondary) */}
           <a 
             href="https://wa.me/6281234567890?text=Halo%20Kak%20GenRe,%20aku%20mau%20cerita..." 
             target="_blank"
             rel="noopener noreferrer"
             className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full"
            >
              <div>
                 <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-7 w-7" />
                 </div>
                 <h2 className="text-xl font-bold text-slate-900 mb-2">Chat Kakak GenRe</h2>
                 <p className="text-slate-600 text-sm">
                   Lebih nyaman ngobrol lewat WhatsApp? Hubungi Duta GenRe langsung.
                 </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</span>
                 <ArrowRight className="h-5 w-5 text-green-500 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
           </a>

           {/* Card 3: Materi (Tertiary) */}
           <Link href="/materi" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
              <div>
                 <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-7 w-7" />
                 </div>
                 <h2 className="text-xl font-bold text-slate-900 mb-2">Pojok Materi</h2>
                 <p className="text-slate-600 text-sm">
                   Artikel & modul seputar kesehatan mental, NAPZA, dan pergaulan sehat.
                 </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Edukasi</span>
                 <ArrowRight className="h-5 w-5 text-yellow-500 group-hover:translate-x-1 transition-transform" />
              </div>
           </Link>

           {/* Card 4: Motivation (Decorative) */}
           <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-lg flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
              <div className="relative z-10 max-w-lg">
                 <div className="flex items-center gap-2 text-yellow-400 mb-2 font-bold text-sm uppercase tracking-wide">
                    <Sparkles className="h-4 w-4" /> Quote of the day
                 </div>
                 <h3 className="text-xl md:text-2xl font-serif italic leading-relaxed">
                   "Matahari tetap bersinar meski tertutup awan. Begitu juga harapanmu, ia selalu ada."
                 </h3>
              </div>
              <div className="hidden md:block">
                 <HeartHandshake className="h-24 w-24 text-white/10" />
              </div>
           </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
