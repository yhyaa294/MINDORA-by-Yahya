"use client";

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, Loader2, Mail } from 'lucide-react';
import MindoraLogo from '../../components/MindoraLogo';
import Link from 'next/link';

import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // 1. Check if user exists in Supabase 'students' table
      const { data: user, error } = await supabase
        .from('students')
        .select('*')
        .eq('email', email)
        .single();

      let role = 'student';
      let userName = 'Guest User';

      if (user) {
        // User found in DB
        role = user.role || 'student';
        userName = user.full_name || 'Sobat Mindora';
      } else {
        // Fallback / Auto-detect for demo if not in DB
        if (email.includes('admin') || email.includes('counselor')) {
          role = 'admin';
          userName = 'Counselor';
        }
      }

      // Set session
      localStorage.setItem('sehati_user', JSON.stringify({
        name: userName,
        role: role,
        email: email
      }));

      // Redirect
      if (role === 'admin' || role === 'counselor') {
        router.push('/dashboard/counselor');
      } else {
        router.push('/dashboard');
      }

    } catch (err) {
      console.error("Login Check Error:", err);
      // Fallback if Supabase fails (Demo Mode)
       const role = email.includes('admin') ? 'admin' : 'student';
       localStorage.setItem('sehati_user', JSON.stringify({
         name: role === 'admin' ? 'Counselor' : 'Guest',
         role: role,
         email: email
       }));
       router.push(role === 'admin' ? '/dashboard/counselor' : '/dashboard');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] flex items-center justify-center p-4 font-sans relative overflow-hidden">
      
      {/* Abstract Background Decor (Z-Index Fixed) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 z-0"></div>

      <div className="w-full max-w-md relative z-10">
        
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl shadow-emerald-900/5 border border-white/60 rounded-3xl p-8 sm:p-10">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="flex justify-center mb-6">
               <MindoraLogo className="h-10" color="dark" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-emerald-950">Selamat Datang Kembali</h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              Masuk untuk melanjutkan perjalanan mindfulness Anda.
            </p>
          </div>

          {/* Google Button */}
          <button 
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium py-3 rounded-xl transition-all text-sm mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Lanjutkan dengan Google
          </button>

          {/* Divider */}
          <div className="relative py-2 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white/80 backdrop-blur text-xs text-slate-400 font-medium">Atau dengan email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm text-slate-800 placeholder:text-slate-400 outline-none" 
                  placeholder="nama@email.com"
                  required
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs text-emerald-600 hover:text-emerald-800 font-medium">Lupa Password?</a>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm text-slate-800 placeholder:text-slate-400 outline-none" 
                  placeholder="••••••••" 
                  required
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-emerald-900 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-900/20 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Memproses...
                </>
              ) : (
                "Masuk Sekarang"
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            Belum punya akun?{' '}
            <Link href="/register" className="text-emerald-700 font-bold hover:text-emerald-900 hover:underline decoration-2 underline-offset-2 transition-all">
              Daftar Sekarang
            </Link>
          </div>

        </div>

        <p className="text-center text-[10px] text-emerald-900/40 mt-8">
          © 2025 MINDORA Inc. All rights reserved.
        </p>

      </div>
    </div>
  );
}
