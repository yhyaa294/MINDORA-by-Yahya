"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft, Mail, Loader2, Sparkles } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      // 1. Check if user exists in 'students' table
      // Note: We assume a table 'students' exists with an 'email' column.
      const { data: existingUser, error: fetchError } = await supabase
        .from('students')
        .select('*')
        .eq('email', email)
        .single();

      // PGRST116 is the code for "no rows returned" (not found)
      if (fetchError && fetchError.code !== 'PGRST116') {
         throw fetchError;
      }

      // 2. If not exists, create new user
      if (!existingUser) {
        const { error: insertError } = await supabase
          .from('students')
          .insert([{ email: email }]);
        
        if (insertError) throw insertError;
      }

      // 3. Save session locally (Simple MVP Auth)
      localStorage.setItem('sehati_user', email);
      
      // 4. Redirect to Dashboard
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Login error:', error);
      alert('Maaf, ada gangguan saat masuk. Pastikan koneksi lancar ya!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-white to-indigo-50 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-md px-4 relative z-10">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10">
          
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-slate-400 hover:text-slate-600 transition-colors mb-6 text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Kembali ke Beranda
            </Link>
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white mb-6 shadow-lg shadow-blue-200">
              <Sparkles className="w-8 h-8" />
            </div>
            
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Selamat Datang</h1>
            <p className="text-slate-500">Masuk untuk mulai bercerita & berkonsultasi</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 ml-1">
                Email Sekolah / Pribadi
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="namamu@contoh.com"
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Memproses...
                </>
              ) : (
                'Masuk Sekarang'
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-slate-400">
            Dengan masuk, kamu setuju dengan <a href="#" className="underline hover:text-slate-600">Kebijakan Privasi</a> kami.
            <br/>Tenang, datamu aman & rahasia.
          </p>
        </div>
      </div>
    </main>
  );
}
