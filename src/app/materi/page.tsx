"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { modules } from '@/data/modules'; // Reusing existing data
import { Search, Filter, BookOpen, Clock } from 'lucide-react';

export default function MateriPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
         
         {/* Header */}
         <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-sm font-medium text-slate-500 mb-4 shadow-sm border border-slate-100">
              <BookOpen className="h-4 w-4 text-primary" />
              Perpustakaan Digital
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Materi Edukasi GenRe</h1>
            <p className="text-slate-600 text-lg">
              Tingkatkan wawasanmu tentang kesehatan remaja, pergaulan sehat, dan persiapan masa depan.
            </p>
         </div>

         {/* Search & Filter (Mock UI) */}
         <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Cari topik materi..." 
                 className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all"
               />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
               <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium text-sm whitespace-nowrap shadow-lg shadow-slate-200">Semua</button>
               <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-medium text-sm whitespace-nowrap hover:bg-slate-50">Mental Health</button>
               <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-medium text-sm whitespace-nowrap hover:bg-slate-50">NAPZA</button>
               <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-medium text-sm whitespace-nowrap hover:bg-slate-50">Seksualitas</button>
            </div>
         </div>

         {/* Modules Grid */}
         <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {modules.map((mod) => (
              <div key={mod.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full overflow-hidden">
                 <div className="relative h-48 overflow-hidden">
                   <img 
                     src={mod.thumbnail} 
                     alt={mod.title} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">Baca Sekarang &rarr;</span>
                   </div>
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide text-slate-700 shadow-sm">
                     {mod.category}
                   </div>
                 </div>
                 
                 <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-grow">
                      {mod.description}
                    </p>
                    
                    <div className="pt-4 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-400 font-medium">
                       <Clock className="h-3.5 w-3.5" />
                       {mod.readTime} Membaca
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </main>
      <Footer />
    </div>
  );
}
