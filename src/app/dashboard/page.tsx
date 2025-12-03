"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { supabase } from '@/lib/supabase';
import { 
    Bot, 
    BookOpen, 
    ShoppingBag, 
    Sparkles, 
    Activity,
    Smile,
    Frown,
    Meh,
    Angry,
    Zap,
    MessageCircle,
    HandHeart,
    AlertTriangle
} from 'lucide-react';

interface MoodLog {
    id: number;
    mood: string;
    created_at: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState('Teman Mindora');
  const [loading, setLoading] = useState(false);
  const [lastMood, setLastMood] = useState<string | null>(null);

  useEffect(() => {
    // 1. Load User Name
    try {
      const storedUser = localStorage.getItem('sehati_user');
      if (storedUser) {
          const parsed = JSON.parse(storedUser);
          setUser(parsed.name || 'Teman Mindora');
          
          if (parsed.email) {
            fetchMoodHistory(parsed.email);
          }
      }
    } catch (e) {
      console.error("Dashboard User Parse Error", e);
    }
  }, []);

  // 2. Fetch Mood History
  const fetchMoodHistory = async (email: string) => {
      const { data } = await supabase
        .from('mood_logs')
        .select('*')
        .eq('student_email', email)
        .order('created_at', { ascending: false })
        .limit(1);
      
      if (data && data.length > 0) {
          setLastMood(data[0].mood);
      }
  };

  // 3. Handle Mood Input
  const handleMood = async (mood: string) => {
      setLoading(true);
      setLastMood(mood); // Optimistic UI update
      
      let email = 'guest@mindora.app';
      try {
        const storedUser = localStorage.getItem('sehati_user');
        if (storedUser) {
             const parsed = JSON.parse(storedUser);
             email = parsed.email || email;
        }
      } catch {}
      
      try {
          const { error } = await supabase
            .from('mood_logs')
            .insert([{ student_email: email, mood: mood, note: 'Daily Pulse Log' }]);

          if (error) {
             console.warn("Mood Log Error (Demo Mode):", error.message);
          }
      } catch (err) {
          console.error(err);
      } finally {
          setLoading(false);
      }
  };

  const moods = [
      { id: 'senang', label: 'Happy', icon: Smile, color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-200' },
      { id: 'biasa', label: 'Calm', icon: Meh, color: 'text-teal-600', bg: 'bg-teal-100', border: 'border-teal-200' },
      { id: 'cemas', label: 'Anxious', icon: Activity, color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-200' },
      { id: 'sedih', label: 'Sad', icon: Frown, color: 'text-slate-600', bg: 'bg-slate-200', border: 'border-slate-300' },
      { id: 'marah', label: 'Angry', icon: Angry, color: 'text-rose-600', bg: 'bg-rose-100', border: 'border-rose-200' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBEB] flex flex-col font-sans pb-24 md:pb-0">
      
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-8 pt-8 md:pt-12 space-y-8">
        
        {/* 1. PERSONALIZED HEADER */}
        <header className="mb-2">
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-emerald-950 mb-2 tracking-tight">
                Selamat Pagi, <span className="text-emerald-700">{user}</span>.
            </h1>
            <p className="text-slate-500 text-sm md:text-base italic font-medium">
                "Setiap perasaan itu valid. Bernapaslah sejenak."
            </p>
        </header>

        {/* 2. DAILY PULSE (Mood Tracker) */}
        <section className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-sm border border-emerald-900/5 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6 relative z-10">
                <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-emerald-600" />
                    Daily Pulse
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                    Check-in
                </span>
            </div>
            
            <div className="grid grid-cols-5 gap-2 sm:gap-4 relative z-10">
                {moods.map((m) => {
                    const Icon = m.icon;
                    const isActive = lastMood === m.id;
                    return (
                        <button 
                            key={m.id}
                            onClick={() => handleMood(m.id)}
                            className={`flex flex-col items-center gap-2 group transition-all duration-300 ${isActive ? 'scale-110' : 'hover:-translate-y-1'}`}
                        >
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 ${
                                isActive 
                                    ? `bg-emerald-800 text-white shadow-emerald-900/20 ring-2 ring-emerald-200` 
                                    : `${m.bg} ${m.color} ${m.border} border hover:shadow-md bg-opacity-60`
                            }`}>
                                <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${isActive ? 'animate-bounce' : ''}`} />
                            </div>
                            <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-colors ${isActive ? 'text-emerald-800' : 'text-slate-400 group-hover:text-emerald-700'}`}>
                                {m.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>

        {/* 3. MIND COMPANION (The Core) */}
        <section className="relative">
            {/* Background Gradient - Replaced Blue with Deep Emerald */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-[2.5rem] transform rotate-1 opacity-20 blur-sm"></div>
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-[2rem] p-8 md:p-10 text-white shadow-xl shadow-emerald-900/30 relative overflow-hidden group hover:scale-[1.005] transition-all duration-500 border border-white/10">
                
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-400/10 rounded-full mix-blend-overlay filter blur-2xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-4 max-w-lg">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-inner">
                            <Sparkles className="w-3 h-3 text-yellow-200" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-50">AI Counselor</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-serif font-medium leading-tight text-emerald-50">
                            Mind Companion
                        </h2>
                        <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed max-w-md font-light">
                            Ruang aman untuk bercerita. AI kami siap mendengarkan tanpa menghakimi, tersedia 24/7 untuk menemani hari-harimu.
                        </p>
                        <div className="pt-2">
                            <Link 
                                href="/chat/ai" 
                                className="inline-flex items-center gap-2 bg-[#FFFBEB] text-emerald-950 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-all shadow-lg shadow-black/20 hover:shadow-emerald-900/30 active:scale-95"
                            >
                                Mulai Bercerita
                                <MessageCircle className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block relative">
                        <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 animate-float">
                            <Bot className="w-14 h-14 text-emerald-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. QUICK ACCESS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Expert Connect - SOS Style */}
            <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-all group flex items-center gap-5 hover:border-orange-200"
            >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform border border-orange-100 shadow-sm">
                    <AlertTriangle className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="font-bold text-orange-900 text-lg group-hover:text-orange-700 transition-colors">SOS Crisis Line</h3>
                    <p className="text-orange-800/70 text-xs mt-1">Butuh bantuan manusia segera?</p>
                </div>
            </a>

            {/* Growth Library */}
            <Link 
                href="/materi" 
                className="bg-white p-6 rounded-3xl border border-emerald-900/5 shadow-sm hover:shadow-md transition-all group flex items-center gap-5 hover:border-emerald-200"
            >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform border border-teal-100">
                    <BookOpen className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="font-bold text-emerald-950 text-lg group-hover:text-teal-700 transition-colors">Growth Library</h3>
                    <p className="text-slate-500 text-xs mt-1">Bacaan positif untuk hari ini.</p>
                </div>
            </Link>
        </div>

        {/* 5. WELLNESS PICKS (Subtle Monetization) */}
        <section className="pt-2 pb-4">
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-xs font-bold text-emerald-900/40 uppercase tracking-wider flex items-center gap-2">
                    <ShoppingBag className="w-3 h-3" />
                    Rekomendasi
                </h3>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-emerald-900/5 flex items-center gap-4 relative overflow-hidden group cursor-pointer hover:border-emerald-200 transition-colors hover:shadow-sm">
                <div className="w-16 h-16 bg-emerald-50 rounded-xl shrink-0 overflow-hidden relative flex items-center justify-center">
                     <BookOpen className="w-6 h-6 text-emerald-200" />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-emerald-950 text-sm truncate group-hover:text-emerald-700 transition-colors">The 5-Minute Gratitude Journal</h4>
                    <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">Awali hari dengan rasa syukur.</p>
                </div>
                <button className="text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    Lihat
                </button>
            </div>
        </section>

      </main>
    </div>
  );
}
