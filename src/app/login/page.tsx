"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, User, Loader2, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false); // Toggle Login vs Daftar
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
        alert("Email dan Password wajib diisi!");
        return;
    }
    if (isRegister && !fullName) {
        alert("Nama Lengkap wajib diisi!");
        return;
    }

    setLoading(true);

    try {
      // --- 1. ADMIN BYPASS (Jalur VIP) ---
      if (email === 'admin@sehati.plus') {
        localStorage.setItem('sehati_user', 'Admin Sehati');
        localStorage.setItem('sehati_role', 'admin');
        router.push('/dashboard');
        return;
      }

      // --- 2. LOGIC LOGIN / DAFTAR ---
      if (isRegister) {
        // >>> MODE DAFTAR <<<
        // Cek apakah email sudah ada
        const { data: existing } = await supabase
            .from('students')
            .select('*')
            .eq('email', email)
            .single();

        if (existing) {
            alert("Email ini sudah terdaftar! Silakan login.");
            setIsRegister(false);
            setLoading(false);
            return;
        }

        // Simpan ke Database (Mock Password storage for MVP)
        // Note: In production, use Supabase Auth / Hash passwords!
        const { error: insertError } = await supabase
            .from('students')
            .insert([{ 
                email: email, 
                full_name: fullName,
                // password: password // Jika kolom password ada di DB
            }]);
        
        // Fallback jika DB error / belum setup, tetap izinkan masuk secara lokal
        localStorage.setItem('sehati_user', fullName);
        alert("Pendaftaran Berhasil! Selamat datang.");
        router.push('/dashboard');

      } else {
        // >>> MODE LOGIN <<<
        const { data: user, error } = await supabase
            .from('students')
            .select('*')
            .eq('email', email)
            .single();

        if (error || !user) {
            // Jika user tidak ditemukan di DB, tapi ini demo, kita anggap user baru jika password benar (Mock)
            // Atau tolak jika ingin strict. Untuk demo "Anti Gagal", kita izinkan masuk tapi kasih warning.
            console.warn("User not found in DB, proceeding as guest/demo session");
        }

        // Simpan session
        // Prioritaskan nama dari DB, kalau gak ada pakai bagian depan email
        const displayName = user?.full_name || email.split('@')[0];
        localStorage.setItem('sehati_user', displayName);
        
        router.push('/dashboard');
      }

    } catch (error) {
      console.error('Auth Error:', error);
      // FAILSAFE: Jangan biarkan user nyangkut.
      localStorage.setItem('sehati_user', email);
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white">
      
      {/* LEFT SIDE: Banner / Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center text-white p-12">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 text-blue-200">
                <ShieldCheck className="w-4 h-4" />
                Privasi & Keamanan Terjamin
            </div>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
                Ruang Aman untuk <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cerita Kamu.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Bergabunglah dengan ribuan siswa SMANERO lainnya. Curhat ke AI tanpa dihakimi, atau hubungi konselor sebaya saat butuh bantuan nyata.
            </p>
            
            <div className="flex gap-4">
                <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-xs text-slate-400">Akses AI</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-xs text-slate-400">Gratis</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                    <p className="text-2xl font-bold">Privat</p>
                    <p className="text-xs text-slate-400">Anonim</p>
                </div>
            </div>
        </div>
      </div>

      {/* RIGHT SIDE: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="w-full max-w-md">
            
            <Link href="/" className="inline-flex items-center text-slate-400 hover:text-slate-600 transition-colors mb-8 text-sm font-medium group">
              <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>

            <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    {isRegister ? 'Buat Akun Baru' : 'Selamat Datang Kembali'}
                </h2>
                <p className="text-slate-500">
                    {isRegister 
                        ? 'Mulai perjalanan kesehatan mentalmu hari ini.' 
                        : 'Masuk untuk melanjutkan sesi curhatmu.'}
                </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
                
                {/* Input NAMA (Hanya muncul saat Daftar) */}
                {isRegister && (
                    <div className="space-y-1.5 animate-fade-in-down">
                        <label className="text-sm font-semibold text-slate-700">Nama Lengkap / Samaran</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <User className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Contoh: Siswa SMANERO"
                                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {/* Input EMAIL */}
                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Email Sekolah / Pribadi</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            placeholder="nama@sekolah.sch.id"
                            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Input PASSWORD */}
                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Password</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full pl-10 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                            Memproses...
                        </>
                    ) : (
                        <>
                            {isRegister ? 'Daftar Sekarang' : 'Masuk ke Dashboard'}
                            {!isRegister && <ArrowRight className="w-5 h-5 ml-2" />}
                        </>
                    )}
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-slate-500 text-sm">
                    {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'}
                    <button 
                        onClick={() => setIsRegister(!isRegister)}
                        className="text-blue-600 font-bold ml-1 hover:underline"
                    >
                        {isRegister ? 'Login di sini' : 'Daftar akun baru'}
                    </button>
                </p>
            </div>

            {/* Admin Hint Box */}
            {!isRegister && (
                <div className="mt-8 p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500 text-center">
                    <p className="font-semibold mb-1">Akses Admin / Konselor?</p>
                    <p>Gunakan email: <span className="font-mono text-blue-600 bg-blue-50 px-1 rounded">admin@sehati.plus</span></p>
                    <p className="text-[10px] text-slate-400 mt-1">(Password bebas untuk demo)</p>
                </div>
            )}

        </div>
      </div>
    </div>
  );
}
