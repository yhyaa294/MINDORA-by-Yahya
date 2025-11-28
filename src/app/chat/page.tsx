"use client";

import React from 'react';
import Link from 'next/link';
import { Bot, Users, ArrowRight, MessageCircle } from 'lucide-react';

export default function ChatSelectionPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8 mt-8 md:mt-0">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Mau curhat dengan siapa hari ini?
          </h1>
          <p className="text-slate-500">
            Pilih teman ceritamu. Privasi kamu adalah prioritas kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card A: Sobat SEHATI (AI) */}
          <Link 
            href="/chat/ai"
            className="group relative overflow-hidden bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Bot className="w-48 h-48 -mr-12 -mt-12" />
            </div>
            
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Bot className="w-8 h-8" />
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Sobat SEHATI (AI)
                </h2>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  Teman cerita pintar yang siap mendengarkan 24/7. Respon cepat, tanpa menghakimi, dan rahasia terjamin.
                </p>
              </div>

              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm pt-4">
                Mulai Chat <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card B: Kakak GenRe / Guru BK */}
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Kak,%20aku%20ingin%20konsultasi%20lewat%20SEHATI%2B"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users className="w-48 h-48 -mr-12 -mt-12" />
            </div>
            
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-200">
                <MessageCircle className="w-8 h-8" />
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                  Kakak GenRe / Guru BK
                </h2>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  Butuh solusi lebih mendalam? Ngobrol langsung dengan Kakak Duta GenRe atau Guru BK lewat WhatsApp.
                </p>
              </div>

              <div className="flex items-center gap-2 text-green-600 font-semibold text-sm pt-4">
                Chat via WhatsApp <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}
