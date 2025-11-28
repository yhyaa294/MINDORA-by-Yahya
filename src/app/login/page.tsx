"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Heart, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate Network Delay
    setTimeout(() => {
      // MOCK AUTH LOGIC
      if (username === 'admin' && password === 'genre123') {
        // Login as Admin/Counselor
        localStorage.setItem('sehati_role', 'admin');
        localStorage.setItem('sehati_user', 'Duta GenRe');
        router.push('/dashboard/counselor');
      } else if (username === 'siswa' && password === '123') {
        // Login as Student
        localStorage.setItem('sehati_role', 'student');
        localStorage.setItem('sehati_user', 'Siswa Nero');
        router.push('/dashboard'); // Updated Redirect
      } else {
        // Invalid Credentials
        setError('Username atau Password salah!');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg-soft flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
        {/* Decorative Header */}
        <div className="bg-primary h-32 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-center">
             <div className="inline-flex bg-white p-2 rounded-full mb-2 shadow-sm">
                <Heart className="h-8 w-8 text-accent fill-accent" />
             </div>
             <h1 className="text-2xl font-bold text-white tracking-tight">SEHATI+</h1>
             <p className="text-white/80 text-sm">Sistem Ekosistem Hati & Intelegensi</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="p-8 pt-10">
          <h2 className="text-xl font-bold text-text-main text-center mb-6">Masuk ke Akunmu</h2>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="Contoh: admin / siswa"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-50 text-red-600 p-3 rounded-xl text-sm animate-pulse">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                   Memproses...
                </>
              ) : (
                <>
                  Masuk Sekarang <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>

            {/* Quick Demo Button */}
            <button
              type="button"
              onClick={() => {
                setUsername('siswa');
                setPassword('123');
              }}
              className="w-full bg-slate-100 text-slate-600 font-semibold py-3.5 rounded-xl border border-slate-200 hover:bg-slate-200 transition-all flex items-center justify-center gap-2 mt-2"
            >
              👋 Demo Login (Siswa)
            </button>
          </form>

          <div className="mt-8 text-center">
             <p className="text-xs text-slate-400 mb-2">
               Lupa password? Hubungi Admin Duta GenRe.
             </p>
             <Link href="/" className="text-primary text-sm font-semibold hover:underline">
               Kembali ke Beranda
             </Link>
          </div>
        </div>
        
        {/* Hint for Demo (Optional, can be removed) */}
        <div className="bg-slate-50 p-4 text-center text-[10px] text-slate-400 border-t border-slate-100">
          <p>Demo Info:</p>
          <p>Admin: <strong>admin / genre123</strong> | Siswa: <strong>siswa / 123</strong></p>
        </div>
      </div>
    </div>
  );
}
