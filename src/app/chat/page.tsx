"use client";

import React from 'react';
import Link from 'next/link';
import { Zap, Users, ArrowRight, MessageCircle, MessageSquare } from 'lucide-react';

export default function ChatSelectionPage() {
  return (
    <div className="min-h-screen bg-[#FFFBEB] p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-emerald-950">
            Mau cerita dengan siapa?
          </h1>
          <p className="text-slate-600 text-lg">
            Pilih teman ceritamu. Privasi kamu adalah prioritas kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card A: Mind Companion (AI) */}
          <Link 
            href="/chat/ai"
            className="group relative overflow-hidden bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg shadow-emerald-900/5 border border-emerald-900/5 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-48 h-48 -mr-12 -mt-12 text-emerald-900" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Zap className="w-10 h-10" />
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                  Mind Companion (AI)
                </h2>
                <p className="text-slate-500 text-base mt-3 leading-relaxed">
                  Teman cerita cerdas yang siap mendengarkan 24/7. Respon cepat, validasi emosi, dan rahasia terjamin.
                </p>
              </div>

              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm pt-4 uppercase tracking-wider">
                Mulai Sesi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card B: Expert Connect */}
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Mindora,%20aku%20ingin%20konsultasi%20dengan%20Expert."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg shadow-emerald-900/5 border border-emerald-900/5 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users className="w-48 h-48 -mr-12 -mt-12 text-orange-900" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <MessageSquare className="w-10 h-10" />
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-bold text-emerald-950 group-hover:text-orange-600 transition-colors">
                  Expert Connect (Premium)
                </h2>
                <p className="text-slate-500 text-base mt-3 leading-relaxed">
                  Butuh opini kedua? Hubungi konselor manusia profesional untuk konsultasi lebih mendalam.
                </p>
              </div>

              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm pt-4 uppercase tracking-wider">
                Hubungi Konselor <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}
