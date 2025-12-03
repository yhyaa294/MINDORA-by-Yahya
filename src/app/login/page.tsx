"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Shield, Smile, Lock, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import MindoraLogo from '../../components/MindoraLogo';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<string | null>(null); // 'student' | 'admin' | null

  const handleLogin = async (role: 'student' | 'admin') => {
    setIsLoading(role);
    
    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Set session based on role
    localStorage.setItem('sehati_user', JSON.stringify({
      name: role === 'student' ? 'Guest User' : 'Counselor',
      role: role,
      email: role === 'student' ? 'guest@mindora.app' : 'admin@mindora.app'
    }));

    // Redirect
    if (role === 'student') {
      router.push('/dashboard');
    } else {
      router.push('/dashboard/counselor');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md space-y-8 relative">
        
        {/* Abstract Background Decor */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

        {/* Header */}
        <div className="text-center space-y-4 relative z-10">
          <div className="flex justify-center mb-8">
             <MindoraLogo className="h-12" color="dark" />
          </div>
          <h1 className="text-3xl font-serif font-medium text-emerald-950">Selamat Datang Kembali</h1>
          <p className="text-slate-600 text-sm">Silakan pilih akses demo di bawah ini</p>
        </div>

        {/* Demo Cards */}
        <div className="space-y-4 relative z-10">
          
          {/* Student Login Card */}
          <button
            onClick={() => handleLogin('student')}
            disabled={!!isLoading}
            className="w-full group relative overflow-hidden bg-white rounded-3xl p-6 text-left shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 border border-emerald-900/5 hover:border-emerald-500 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sparkles className="w-24 h-24 -mr-6 -mt-6 text-emerald-900" />
            </div>
            
            <div className="relative z-10 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {isLoading === 'student' ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <User className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-emerald-950 text-lg group-hover:text-emerald-700 transition-colors">
                  Masuk sebagai User
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Akses Mind Companion, Mood Tracker, dan Library.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-200 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </div>
          </button>

          {/* Counselor Login Card */}
          <button
            onClick={() => handleLogin('admin')}
            disabled={!!isLoading}
            className="w-full group relative overflow-hidden bg-white rounded-3xl p-6 text-left shadow-sm hover:shadow-xl hover:shadow-orange-900/5 border border-emerald-900/5 hover:border-orange-400 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Shield className="w-24 h-24 -mr-6 -mt-6 text-orange-900" />
            </div>
            
            <div className="relative z-10 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {isLoading === 'admin' ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <Shield className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-emerald-950 text-lg group-hover:text-orange-600 transition-colors">
                  Masuk sebagai Expert
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Akses Dashboard Analitik & Konseling.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-orange-200 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
            </div>
          </button>

        </div>

        {/* Divider */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-emerald-900/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-[#FFFBEB] text-[10px] text-emerald-900/40 uppercase tracking-widest font-medium">Atau login manual</span>
          </div>
        </div>

        {/* Manual Login Form (Visual Only for now) */}
        <form className="space-y-4 opacity-40 pointer-events-none select-none grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div>
            <label className="block text-xs font-bold text-emerald-900/70 uppercase tracking-wider mb-2">Email</label>
            <div className="relative">
              <input type="email" className="w-full pl-10 pr-4 py-3 rounded-xl border border-emerald-900/10 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="user@mindora.app" />
              <User className="w-5 h-5 text-emerald-900/30 absolute left-3 top-3.5" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-emerald-900/70 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <input type="password" className="w-full pl-10 pr-4 py-3 rounded-xl border border-emerald-900/10 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="••••••••" />
              <Lock className="w-5 h-5 text-emerald-900/30 absolute left-3 top-3.5" />
            </div>
          </div>
          <button type="button" className="w-full bg-emerald-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/10">
            Masuk (Manual)
          </button>
        </form>
        
        <p className="text-center text-xs text-emerald-900/40 mt-8">
          © 2025 MINDORA Inc. All rights reserved.
        </p>

      </div>
    </div>
  );
}
