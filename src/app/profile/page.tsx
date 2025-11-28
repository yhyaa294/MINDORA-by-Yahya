"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, LogOut, Award, Star, ShieldCheck, Trophy, Edit3 } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('sehati_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
        // Fallback for viewing without login
        setUser({ name: 'Sobat Sehati', role: 'student', class: 'XI MIPA 3' });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('sehati_user');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Profile Header (Banner Style) */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                    {user?.name?.charAt(0) || 'S'}
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-slate-100 transition-colors">
                    <Edit3 className="w-4 h-4" />
                </button>
            </div>
            
            <div>
                <h1 className="text-2xl font-bold">{user?.name || 'Sobat Sehati'}</h1>
                <p className="text-blue-100 text-sm bg-blue-800/30 inline-block px-3 py-1 rounded-full mt-1 border border-blue-500/30">
                    {user?.class || 'Kelas XI MIPA 3'}
                </p>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto px-6 -mt-16 relative z-20 space-y-6">
        
        {/* Stats Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex justify-between items-center">
            <div className="text-center flex-1 border-r border-slate-100 last:border-0">
                <p className="text-2xl font-bold text-slate-900">12</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Sesi Curhat</p>
            </div>
            <div className="text-center flex-1 border-r border-slate-100 last:border-0">
                <p className="text-2xl font-bold text-slate-900">5</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Lencana</p>
            </div>
            <div className="text-center flex-1">
                <p className="text-2xl font-bold text-slate-900">850</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Poin</p>
            </div>
        </div>

        {/* My Badges Section */}
        <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                Pencapaian Saya
            </h2>
            
            <div className="grid grid-cols-3 gap-3">
                {/* Badge 1 */}
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
                    <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500">
                        <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-800">Pemberani</p>
                        <p className="text-[10px] text-slate-400">Curhat Pertama</p>
                    </div>
                </div>

                {/* Badge 2 */}
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-500">
                        <Star className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-800">Pendengar</p>
                        <p className="text-[10px] text-slate-400">Baca 5 Materi</p>
                    </div>
                </div>

                {/* Badge 3 (Locked) */}
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center space-y-2 grayscale opacity-70">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-600">Konselor Muda</p>
                        <p className="text-[10px] text-slate-400">Terkunci</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Account Settings */}
        <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Akun
            </h2>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-50">
                    <span className="text-sm font-medium text-slate-700">Edit Profil</span>
                    <span className="text-slate-400 text-xs">→</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-50">
                    <span className="text-sm font-medium text-slate-700">Ubah Password</span>
                    <span className="text-slate-400 text-xs">→</span>
                </button>
                <button 
                    onClick={handleLogout}
                    className="w-full flex items-center justify-between p-4 hover:bg-rose-50 transition-colors text-rose-600"
                >
                    <span className="text-sm font-bold flex items-center gap-2">
                        <LogOut className="w-4 h-4" />
                        Keluar Aplikasi
                    </span>
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}
