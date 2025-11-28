"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Skull, AlertTriangle, Book, Users, ArrowRight, PlayCircle, BookOpen, Star } from 'lucide-react';
import Link from "next/link";

const MODULES_DATA = [
    {
        id: 1,
        title: "Kesehatan Reproduksi",
        desc: "Jaga aset berhargamu. Pelajari cara merawat organ reproduksi & mencegah penyakit menular.",
        icon: <Heart className="w-6 h-6 text-white" />,
        color: "from-rose-500 to-pink-600",
        stats: "5 Menit Baca"
    },
    {
        id: 2,
        title: "Bahaya NAPZA",
        desc: "Jangan biarkan masa depanmu hancur karena zat adiktif. Kenali jenis & cara menghindarinya.",
        icon: <Skull className="w-6 h-6 text-white" />,
        color: "from-slate-700 to-slate-900",
        stats: "Video & Artikel"
    },
    {
        id: 3,
        title: "Stop Pernikahan Dini",
        desc: "Kejar mimpi dulu, nikah nanti saja. Pahami risiko fisik & mental menikah di usia remaja.",
        icon: <AlertTriangle className="w-6 h-6 text-white" />,
        color: "from-orange-500 to-amber-500",
        stats: "Info Grafik"
    },
    {
        id: 4,
        title: "Bullying & Cyberbullying",
        desc: "Kamu berharga! Cara menghadapi perundungan dan membangun kepercayaan diri.",
        icon: <Users className="w-6 h-6 text-white" />,
        color: "from-blue-500 to-indigo-600",
        stats: "Tips Praktis"
    },
    {
        id: 5,
        title: "Manajemen Stress",
        desc: "Stress ujian? Patah hati? Yuk belajar teknik coping mechanism yang sehat.",
        icon: <Book className="w-6 h-6 text-white" />,
        color: "from-emerald-500 to-green-600",
        stats: "Latihan Pernapasan"
    }
];

export default function MateriPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto mb-12">
            <div className="relative bg-blue-600 rounded-[2.5rem] p-8 md:p-16 overflow-hidden text-white shadow-xl shadow-blue-500/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
                
                <div className="relative z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <BookOpen className="w-4 h-4" />
                        Pojok Edukasi GenRe
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Pintar Itu Seksi,<br/>Sehat Itu Keren.
                    </h1>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                        Kumpulan materi seputar Triad KRR dan kesehatan mental yang dikemas santai. 
                        Upgrade wawasanmu biar makin siap menghadapi tantangan remaja!
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2">
                        <PlayCircle className="w-5 h-5" />
                        Mulai Belajar
                    </button>
                </div>
            </div>
          </div>

          {/* Bento Grid Modules */}
          <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  Topik Populer Minggu Ini
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MODULES_DATA.map((mod, index) => (
                      <div 
                        key={mod.id} 
                        className={`group bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${index === 0 ? 'md:col-span-2 md:flex md:items-center md:gap-8' : ''}`}
                      >
                          {/* Gradient Background for Icon */}
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center shadow-lg mb-6 md:mb-0 md:shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              {mod.icon}
                          </div>

                          <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wide">
                                      {mod.stats}
                                  </span>
                              </div>
                              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                  {mod.title}
                              </h3>
                              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                  {mod.desc}
                              </p>
                              
                              <Link href="#" className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                  Baca Materi <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Link>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </main>

      <Footer />
    </div>
  );
}
