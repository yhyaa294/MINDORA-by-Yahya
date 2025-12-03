"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { supabase } from '@/lib/supabase';
import { 
    Bot, 
    Heart, 
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
    HandHeart
} from 'lucide-react';

interface MoodLog {
    id: number;
    mood: string;
    created_at: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState('Teman Mindora');
  const [loading, setLoading] = useState(false);
  const [recentMoods, setRecentMoods] = useState<MoodLog[]>([]);
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
      { id: 'senang', label: 'Happy', icon: Smile, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100' },
      { id: 'biasa', label: 'Calm', icon: Meh, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
      { id: 'cemas', label: 'Anxious', icon: Activity, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
      { id: 'sedih', label: 'Sad', icon: Frown, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100' },
      { id: 'marah', label: 'Angry', icon: Angry, color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-100' },
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
        <section className="bg-white rounded-[2rem] p-6 shadow-sm border border-emerald-900/5 relative overflow-hidden">
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
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm transition-all ${
                                isActive 
                                    ? `bg-emerald-600 text-white shadow-emerald-200` 
                                    : `${m.bg} ${m.color} ${m.border} border group-hover:shadow-md bg-opacity-50`
                            }`}>
                                <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${isActive ? 'animate-bounce' : ''}`} />
                            </div>
                            <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wide ${isActive ? 'text-emerald-700' : 'text-slate-400 group-hover:text-emerald-600'}`}>
                                {m.label}
                            </span>
                        </button>
                    );
                })}
            </div>
            
            {/* Decorative Blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        </section>

        {/* 3. MIND COMPANION (The Core) */}
        <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-[2.5rem] transform rotate-1 opacity-10"></div>
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-[2rem] p-8 md:p-10 text-white shadow-xl shadow-emerald-900/20 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500">
                
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-400/10 rounded-full mix-blend-overlay filter blur-2xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-4 max-w-lg">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                            <Sparkles className="w-3 h-3 text-yellow-300" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">AI Counselor</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-serif font-medium leading-tight">
                            Mind Companion
                        </h2>
                        <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed max-w-md">
                            Ruang aman untuk bercerita. AI kami siap mendengarkan tanpa menghakimi, tersedia 24/7 untuk menemani hari-harimu.
                        </p>
                        <div className="pt-2">
                            <Link 
                                href="/chat/ai" 
                                className="inline-flex items-center gap-2 bg-[#FFFBEB] text-emerald-950 px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-colors shadow-lg shadow-black/10"
                            >
                                Mulai Bercerita
                                <MessageCircle className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block relative">
                        <div className="w-32 h-32 bg-emerald-800/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 animate-pulse">
                            <Zap className="w-12 h-12 text-emerald-200" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. QUICK ACCESS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Expert Connect */}
            <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-6 rounded-3xl border border-emerald-900/5 shadow-sm hover:shadow-md transition-all group flex items-center gap-5"
            >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                    <HandHeart className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="font-bold text-emerald-950 text-lg">Expert Connect</h3>
                    <p className="text-slate-500 text-xs mt-1">Butuh bantuan manusia profesional?</p>
                </div>
            </a>

            {/* Growth Library */}
            <Link 
                href="/materi" 
                className="bg-white p-6 rounded-3xl border border-emerald-900/5 shadow-sm hover:shadow-md transition-all group flex items-center gap-5"
            >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="font-bold text-emerald-950 text-lg">Growth Library</h3>
                    <p className="text-slate-500 text-xs mt-1">Bacaan positif untuk hari ini.</p>
                </div>
            </Link>
        </div>

        {/* 5. WELLNESS PICKS (Subtle Monetization) */}
        <section className="pt-4">
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Wellness Picks
                </h3>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-emerald-900/5 flex items-center gap-4 relative overflow-hidden group cursor-pointer hover:border-emerald-200 transition-colors">
                <div className="w-16 h-16 bg-slate-100 rounded-xl shrink-0 overflow-hidden relative">
                     {/* Placeholder Image */}
                     <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-[10px] font-bold">IMG</div>
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-emerald-950 text-sm truncate">The 5-Minute Gratitude Journal</h4>
                    <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">Awali hari dengan rasa syukur untuk mental yang lebih sehat.</p>
                </div>
                <button className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    Lihat
                </button>
            </div>
        </section>

      </main>
    </div>
  );
}
