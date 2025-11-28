"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import { MapPin, Mail, Phone, Trophy, Star, GraduationCap, Target } from 'lucide-react';

export default function SchoolProfile() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* School Hero */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 overflow-hidden">
           <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
           
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Logo/Image Placeholder */}
                <div className="flex-shrink-0 relative">
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center p-4 overflow-hidden">
                     <img src="/logo%20nero.jpg" alt="Logo SMANERO" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Terakreditasi A
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl font-bold text-text-main mb-4">
                    SMA Negeri Ngoro Jombang
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 italic mb-6 max-w-2xl">
                    "Mencetak Insan yang Berbudi Luhur dan Intelektual Tinggi."
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start text-sm text-slate-600 font-medium">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                      <MapPin className="h-4 w-4 text-red-500" />
                      <span>Kauman, Kec. Ngoro, Kab. Jombang</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                      <Mail className="h-4 w-4 text-blue-500" />
                      <span>info@smanegeringoro.sch.id</span>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </section>

        {/* Visi & Misi Highlights */}
        <section className="py-16 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 text-center hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Target className="h-8 w-8" />
                   </div>
                   <h3 className="font-bold text-xl text-text-main mb-3">Visi Utama</h3>
                   <p className="text-slate-600 leading-relaxed">
                     Unggul dalam prestasi akademik dan non-akademik berlandaskan IMTAQ dan IPTEK.
                   </p>
                </div>

                <div className="p-8 rounded-2xl bg-yellow-50 border border-yellow-100 text-center hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Star className="h-8 w-8" />
                   </div>
                   <h3 className="font-bold text-xl text-text-main mb-3">Karakter</h3>
                   <p className="text-slate-600 leading-relaxed">
                     Mewujudkan lingkungan sekolah yang kondusif, religius, dan berbudaya lingkungan.
                   </p>
                </div>

                <div className="p-8 rounded-2xl bg-green-50 border border-green-100 text-center hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <GraduationCap className="h-8 w-8" />
                   </div>
                   <h3 className="font-bold text-xl text-text-main mb-3">Kompetensi</h3>
                   <p className="text-slate-600 leading-relaxed">
                     Membekali peserta didik dengan keterampilan hidup (Life Skill) untuk masa depan.
                   </p>
                </div>
             </div>
           </div>
        </section>

        {/* Prestasi & Program */}
        <section className="py-20 bg-bg-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-text-main mb-4">Prestasi & Program Unggulan</h2>
               <p className="text-slate-600">SMANERO terus berinovasi menciptakan generasi emas.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
               {/* Card 1 */}
               <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-slate-200 h-48 md:h-auto relative">
                     {/* Placeholder Image */}
                     <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Trophy className="h-12 w-12 text-primary opacity-50" />
                     </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                     <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-3">Religius</div>
                     <h3 className="font-bold text-xl text-text-main mb-2">Program Tahfidz Nero</h3>
                     <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       Program unggulan menghafal Al-Qur'an bagi siswa-siswi, mencetak generasi yang cerdas intelektual dan spiritual.
                     </p>
                     <button className="text-primary font-semibold text-sm hover:underline">Selengkapnya &rarr;</button>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-slate-200 h-48 md:h-auto relative">
                     {/* Placeholder Image */}
                     <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-accent/20">
                        <Trophy className="h-12 w-12 text-secondary opacity-50" />
                     </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                     <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-3">Prestasi</div>
                     <h3 className="font-bold text-xl text-text-main mb-2">Duta Anti Narkoba & Pelajar</h3>
                     <p className="text-slate-600 text-sm leading-relaxed mb-4">
                       Siswa SMANERO aktif sebagai pelopor gerakan anti-narkoba dan berprestasi dalam ajang pemilihan Duta Pelajar Jombang.
                     </p>
                     <button className="text-primary font-semibold text-sm hover:underline">Selengkapnya &rarr;</button>
                  </div>
               </div>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
