"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Shield, Smile, Lock, ArrowRight, Loader2 } from 'lucide-react';
import MysteryLogo from '../../components/MysteryLogo';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<string | null>(null); // 'student' | 'admin' | null

  const handleLogin = async (role: 'student' | 'admin') => {
    setIsLoading(role);
    
    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Set session based on role
    localStorage.setItem('sehati_user', JSON.stringify({
      name: role === 'student' ? 'Sobat Sehati' : 'Kakak GenRe',
      role: role,
      email: role === 'student' ? 'siswa@smanero.sch.id' : 'admin@smanero.sch.id'
    }));

    // Redirect
    if (role === 'student') {
      router.push('/dashboard');
    } else {
      router.push('/dashboard/counselor');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-6">
             <MysteryLogo className="w-40 h-12" text="SEHATI+" subtext="LOGIN" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Selamat Datang Kembali</h1>
          <p className="text-slate-500">Silakan pilih akses demo di bawah ini (Khusus Juri/Umum)</p>
        </div>

        {/* Demo Cards */}
        <div className="space-y-4">
          
          {/* Student Login Card */}
          <button
            onClick={() => handleLogin('student')}
            disabled={!!isLoading}
            className="w-full group relative overflow-hidden bg-white rounded-2xl p-5 text-left shadow-sm hover:shadow-lg border border-slate-200 hover:border-blue-200 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Smile className="w-24 h-24 -mr-6 -mt-6" />
            </div>
            
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                {isLoading === 'student' ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <User className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Masuk sebagai Siswa
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Akses fitur Curhat AI, Mood Tracker, dan Materi.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
          </button>

          {/* Counselor Login Card */}
          <button
            onClick={() => handleLogin('admin')}
            disabled={!!isLoading}
            className="w-full group relative overflow-hidden bg-white rounded-2xl p-5 text-left shadow-sm hover:shadow-lg border border-slate-200 hover:border-purple-200 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Shield className="w-24 h-24 -mr-6 -mt-6" />
            </div>
            
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                {isLoading === 'admin' ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <Shield className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  Masuk sebagai Duta GenRe
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Akses Dashboard Analitik Siswa & Kelola Materi.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
            </div>
          </button>

        </div>

        {/* Divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-slate-50 text-xs text-slate-400 uppercase tracking-wider">Atau login manual</span>
          </div>
        </div>

        {/* Manual Login Form (Visual Only for now) */}
        <form className="space-y-4 opacity-50 pointer-events-none select-none grayscale">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Sekolah</label>
            <div className="relative">
              <input type="email" className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="nisn@smanero.sch.id" />
              <User className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <div className="relative">
              <input type="password" className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="••••••••" />
              <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <button type="button" className="w-full bg-slate-800 text-white py-2 rounded-lg font-semibold">
            Masuk (Manual)
          </button>
        </form>
        
        <p className="text-center text-xs text-slate-400">
          © 2025 SEHATI+ • SMAN 1 Rogojampi & BKKBN Jatim
        </p>

      </div>
    </div>
  );
}
