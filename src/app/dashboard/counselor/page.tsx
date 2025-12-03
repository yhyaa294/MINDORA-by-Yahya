"use client";

import React from 'react';
import Link from 'next/link';
import { Users, BookOpen, Activity, Calendar } from 'lucide-react';

export default function CounselorDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 pb-24 md:pb-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Halo, Admin! 👋</h1>
          <p className="text-slate-500">Pantau kondisi pengguna dan kelola materi edukasi di sini.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          + Buat Materi Baru
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 text-slate-500 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider">Total Siswa</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">1,240</p>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 text-slate-500 mb-2">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider">Mood Baik</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">85%</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 text-slate-500 mb-2">
            <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider">Perlu Perhatian</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">12</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 text-slate-500 mb-2">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider">Konsultasi</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">5 Baru</p>
        </div>
      </div>

      {/* Content Management Preview */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-lg text-slate-900">Materi GenRe Terbaru</h2>
          <Link href="/materi" className="text-blue-600 text-sm font-medium hover:underline">
            Lihat Semua
          </Link>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100 md:border-transparent">
              <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center text-slate-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Pentingnya Menjaga Kesehatan Reproduksi Remaja</h3>
                <p className="text-sm text-slate-500">Dibuat pada 28 Nov 2025 • 120x Dilihat</p>
              </div>
              <button className="text-slate-400 hover:text-blue-600">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
