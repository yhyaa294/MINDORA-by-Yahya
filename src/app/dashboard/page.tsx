"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { supabase } from '@/lib/supabase';
import { 
    Bot, 
    Phone, 
    BookOpen, 
    ShoppingBag, 
    ExternalLink, 
    History,
    Activity,
    Clock
} from 'lucide-react';

interface MoodLog {
    id: number;
    mood: string;
    created_at: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState('Sobat Sehati');
  const [loading, setLoading] = useState(false);
  const [recentMoods, setRecentMoods] = useState<MoodLog[]>([]);
  const [lastMood, setLastMood] = useState<string>('-');

  useEffect(() => {
    // 1. Load User Name
    try {
      const storedUser = localStorage.getItem('sehati_user');
      if (storedUser) {
          const parsed = JSON.parse(storedUser);
          setUser(parsed.name || 'Sobat Sehati');
          
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
        .limit(3);
      
      if (data && data.length > 0) {
          setRecentMoods(data);
          setLastMood(data[0].mood);
      }
  };

  // 3. Handle Mood Input
  const handleMood = async (mood: string) => {
      setLoading(true);
      let email = 'guest@sehati.plus';
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
            .insert([{ student_email: email, mood: mood, note: 'Dashboard Quick Log' }]);

          if (error) {
             // Silent fail for demo if table doesn't exist
             console.warn("Supabase Mood Log Error (Expected in Demo):", error);
          } else {
             // Only alert if success real DB
             // alert(`Mood "${mood}" berhasil dicatat! Semangat ya! 💪`);
          }
          
          // Update UI Optimistically (Always do this for UX)
          setLastMood(mood);
          const newLog = { id: Date.now(), mood, created_at: new Date().toISOString() };
          setRecentMoods(prev => [newLog, ...prev].slice(0, 3));

      } catch (err) {
          console.error(err);
      } finally {
          setLoading(false);
      }
  };

  const getEmoji = (mood: string) => {
      switch(mood.toLowerCase()) {
          case 'senang': return '😆';
          case 'biasa': return '😐';
          case 'sedih': return '😢';
          case 'marah': return '😡';
          case 'cinta': return '🥰';
          default: return '😶';
      }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans pb-24 md:pb-0">
      
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 pt-8 md:pt-8">
        
        {/* HEADER */}
        <header className="mb-8 md:mb-10">
            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">
                Halo, <span className="text-blue-600">{user}</span>! 👋
            </h1>
            <p className="text-slate-500 text-sm md:text-lg">Bagaimana kabarmu hari ini? Jangan lupa validasi perasaanmu ya.</p>
        </header>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* LEFT COLUMN (Main) */}
            <div className="md:col-span-2 space-y-6">
                
                {/* MOOD TRACKER CARD */}
                <section className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -mr-4 -mt-4 -z-0"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg md:text-xl font-bold text-slate-800 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-blue-500" />
                                Mood Tracker
                            </h2>
                            <span className="text-[10px] md:text-xs font-medium bg-slate-100 px-3 py-1 rounded-full text-slate-500">
                                Terakhir: {getEmoji(lastMood)} {lastMood}
                            </span>
                        </div>

                        <div className="flex justify-between items-center gap-2 sm:gap-4">
                            <button onClick={() => handleMood('marah')} disabled={loading} className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-50 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-sm group-hover:shadow-md transition-all border border-red-100">😡</div>
                                <span className="text-xs font-medium text-slate-400 group-hover:text-red-500">Marah</span>
                            </button>
                            <button onClick={() => handleMood('sedih')} disabled={loading} className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-sm group-hover:shadow-md transition-all border border-blue-100">😢</div>
                                <span className="text-xs font-medium text-slate-400 group-hover:text-blue-500">Sedih</span>
                            </button>
                            <button onClick={() => handleMood('biasa')} disabled={loading} className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-sm group-hover:shadow-md transition-all border border-gray-100">😐</div>
                                <span className="text-xs font-medium text-slate-400 group-hover:text-gray-500">Biasa</span>
                            </button>
                            <button onClick={() => handleMood('senang')} disabled={loading} className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-sm group-hover:shadow-md transition-all border border-yellow-100">🙂</div>
                                <span className="text-xs font-medium text-slate-400 group-hover:text-yellow-500">Senang</span>
                            </button>
                            <button onClick={() => handleMood('cinta')} disabled={loading} className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-sm group-hover:shadow-md transition-all border border-pink-100">🥰</div>
                                <span className="text-xs font-medium text-slate-400 group-hover:text-pink-500">Happy</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* QUICK ACTIONS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link href="/chat" className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-[1.02] transition-all flex flex-col justify-between h-32 md:h-40 group">
                        <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Curhat AI</h3>
                            <p className="text-blue-100 text-xs group-hover:text-white transition-colors">Teman cerita 24/7</p>
                        </div>
                    </Link>

                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-green-200 hover:scale-[1.02] transition-all flex flex-col justify-between h-32 md:h-40 group">
                        <div className="bg-green-50 w-10 h-10 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-800 mb-1">SOS Crisis Line</h3>
                            <p className="text-slate-400 text-xs">Chat Konselor Manusia</p>
                        </div>
                    </a>

                    <Link href="/materi" className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-yellow-200 hover:scale-[1.02] transition-all flex flex-col justify-between h-32 md:h-40 group">
                        <div className="bg-yellow-50 w-10 h-10 rounded-xl flex items-center justify-center text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-800 mb-1">Self-Growth Library</h3>
                            <p className="text-slate-400 text-xs">Edukasi Mental</p>
                        </div>
                    </Link>
                </div>

            </div>

            {/* RIGHT COLUMN (Sidebar) */}
            <div className="space-y-6">
                
                {/* MOOD HISTORY */}
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-slate-800 font-bold">
                        <History className="w-5 h-5 text-purple-500" />
                        Riwayat Mood
                    </div>
                    <div className="space-y-3">
                        {recentMoods.length === 0 ? (
                            <div className="text-center py-8 bg-slate-50 rounded-xl border border-slate-100 border-dashed">
                                <p className="text-sm font-medium text-slate-600">Halo! Kamu belum mengisi mood tracker hari ini.</p>
                                <p className="text-xs text-slate-400 mt-1">Yuk check-in sekarang!</p>
                            </div>
                        ) : (
                            recentMoods.map((log) => (
                                <div key={log.id} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{getEmoji(log.mood)}</span>
                                        <span className="text-sm font-medium text-slate-700 capitalize">{log.mood}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                        <Clock className="w-3 h-3" />
                                        {new Date(log.created_at).toLocaleTimeString('id-ID', {hour: '2-digit', minute: '2-digit'})}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* COMING SOON SECTION */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 border border-slate-200 border-dashed text-center">
                    <ShoppingBag className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                    <h4 className="font-bold text-slate-700">Healing Corner</h4>
                    <p className="text-xs text-slate-500 mt-1">Fitur marketplace alat relaksasi sedang dalam pengembangan.</p>
                </div>

            </div>
        </div>

      </main>
    </div>
  );
}
