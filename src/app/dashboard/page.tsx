"use client";

import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { supabase } from '@/lib/supabase';
import { MessageCircle, BookOpen, Bot, Sparkles, ArrowRight, ShoppingBag, ExternalLink, Activity } from 'lucide-react';

export default function DashboardPage() {
  const [user, setUser] = useState('Sobat SEHATI');
  const [moodLoading, setMoodLoading] = useState(false);
  const [moodHistory, setMoodHistory] = useState<any[]>([]); // For Counselor View
  const [showCounselorView, setShowCounselorView] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('sehati_user');
    if (storedUser) {
        setUser(storedUser);
        // If email contains 'admin' or 'counselor', show counselor view (Simple logic for MVP)
        if (storedUser.includes('admin') || storedUser.includes('counselor') || storedUser.includes('guru')) {
            setShowCounselorView(true);
            fetchMoodLogs();
        }
    }
  }, []);

  const fetchMoodLogs = async () => {
      const { data, error } = await supabase
        .from('mood_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (data) setMoodHistory(data);
  };

  const handleMoodClick = async (mood: string) => {
    setMoodLoading(true);
    try {
        const { error } = await supabase
            .from('mood_logs')
            .insert([
                { 
                    student_email: user, 
                    mood: mood, 
                    note: 'Daily check-in' // Optional: Add input for note later
                }
            ]);

        if (error) throw error;
        alert(`Terima kasih sudah check-in! Mood kamu: ${mood}`);
        
        // Refresh counselor view if active
        if (showCounselorView) fetchMoodLogs();

    } catch (error) {
        console.error("Error logging mood:", error);
        alert("Gagal menyimpan mood. Coba lagi ya.");
    } finally {
        setMoodLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        {/* Greeting & Mood Tracker Hero */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-lg mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Selamat Pagi, {user}! 👋</h1>
                <p className="text-blue-100 text-lg max-w-xl">
                Bagaimana perasaanmu hari ini?
                </p>
            </div>
            
            {/* Mood Picker */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-sm font-medium mb-3 text-center text-blue-50">Klik emojinya:</p>
                <div className="flex gap-4">
                    <button onClick={() => handleMoodClick('senang')} disabled={moodLoading} className="text-4xl hover:scale-125 transition-transform" title="Senang">😄</button>
                    <button onClick={() => handleMoodClick('biasa')} disabled={moodLoading} className="text-4xl hover:scale-125 transition-transform" title="Biasa Aja">😐</button>
                    <button onClick={() => handleMoodClick('sedih')} disabled={moodLoading} className="text-4xl hover:scale-125 transition-transform" title="Sedih">😢</button>
                    <button onClick={() => handleMoodClick('marah')} disabled={moodLoading} className="text-4xl hover:scale-125 transition-transform" title="Marah">😡</button>
                </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           
           {/* Main Content (Left) */}
           <div className="lg:col-span-3 space-y-8">
              
              {/* COUNSELOR DASHBOARD SECTION (Conditional) */}
              {showCounselorView && (
                  <div className="bg-white rounded-3xl p-6 border border-indigo-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-4 text-indigo-700">
                          <Activity className="w-6 h-6" />
                          <h2 className="text-xl font-bold">Counselor Dashboard (Live Updates)</h2>
                      </div>
                      <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left">
                              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                                  <tr>
                                      <th className="px-4 py-3">Siswa</th>
                                      <th className="px-4 py-3">Mood</th>
                                      <th className="px-4 py-3">Waktu</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {moodHistory.map((log, idx) => (
                                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                                          <td className="px-4 py-3 font-medium">{log.student_email}</td>
                                          <td className="px-4 py-3">{log.mood === 'senang' ? '😄' : log.mood === 'sedih' ? '😢' : log.mood === 'marah' ? '😡' : '😐'} {log.mood}</td>
                                          <td className="px-4 py-3 text-slate-400">{new Date(log.created_at).toLocaleString()}</td>
                                      </tr>
                                  ))}
                                  {moodHistory.length === 0 && (
                                      <tr><td colSpan={3} className="px-4 py-4 text-center text-slate-400">Belum ada data mood masuk.</td></tr>
                                  )}
                              </tbody>
                          </table>
                      </div>
                  </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1: AI Chat (Primary) */}
                <Link href="/chat" className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-50 to-transparent w-32 h-32 rounded-bl-full"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Bot className="h-7 w-7" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Curhat dengan AI</h2>
                        <p className="text-slate-600 mb-6 max-w-md">
                        Ceritakan apa saja yang mengganggu pikiranmu. Sobat SEHATI siap mendengarkan tanpa menghakimi, 24 jam non-stop.
                        </p>
                        <span className="inline-flex items-center font-bold text-primary group-hover:translate-x-2 transition-transform">
                        Mulai Curhat <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                    </div>
                </Link>

                {/* Card 2: WA Chat (Secondary) */}
                <a 
                    href="https://wa.me/6281234567890?text=Halo%20Kak%20GenRe,%20aku%20mau%20cerita..." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full"
                    >
                    <div>
                        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                            <MessageCircle className="h-7 w-7" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Chat Kakak GenRe</h2>
                        <p className="text-slate-600 text-sm">
                        Lebih nyaman ngobrol lewat WhatsApp? Hubungi Duta GenRe langsung.
                        </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</span>
                        <ArrowRight className="h-5 w-5 text-green-500 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                </a>

                {/* Card 3: Materi (Tertiary) */}
                <Link href="/materi" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
                    <div>
                        <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                            <BookOpen className="h-7 w-7" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Pojok Materi</h2>
                        <p className="text-slate-600 text-sm">
                        Artikel & modul seputar kesehatan mental, NAPZA, dan pergaulan sehat.
                        </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Edukasi</span>
                        <ArrowRight className="h-5 w-5 text-yellow-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
              </div>
           </div>

           {/* Sidebar: Healing Corner (Affiliate) */}
           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                 <div className="flex items-center gap-2 mb-6">
                    <ShoppingBag className="h-5 w-5 text-pink-500" />
                    <h3 className="font-bold text-slate-900">Healing Corner</h3>
                 </div>
                 
                 <div className="space-y-4">
                    {/* Affiliate Item 1 */}
                    <div className="group block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-slate-50 hover:border-slate-200 cursor-pointer">
                       <div className="h-24 w-full bg-slate-100 rounded-lg mb-3 overflow-hidden relative">
                          <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400 bg-pink-50">
                             Image: Book
                          </div>
                       </div>
                       <h4 className="font-bold text-sm text-slate-800 mb-1 group-hover:text-pink-500 transition-colors">Gratitude Journal 2025</h4>
                       <p className="text-xs text-slate-500 mb-3">Tulis hal baik setiap hari.</p>
                       <div className="flex items-center justify-between text-xs font-semibold text-pink-600">
                          <span>Rp 45.000</span>
                          <span className="flex items-center gap-1 bg-pink-50 px-2 py-1 rounded-md">
                             Beli <ExternalLink className="h-3 w-3" />
                          </span>
                       </div>
                    </div>

                    {/* Affiliate Item 2 */}
                    <div className="group block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-slate-50 hover:border-slate-200 cursor-pointer">
                       <div className="h-24 w-full bg-slate-100 rounded-lg mb-3 overflow-hidden relative">
                          <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400 bg-blue-50">
                             Image: Fidget
                          </div>
                       </div>
                       <h4 className="font-bold text-sm text-slate-800 mb-1 group-hover:text-blue-500 transition-colors">Anti-Stress Cube</h4>
                       <p className="text-xs text-slate-500 mb-3">Mainan pereda cemas.</p>
                       <div className="flex items-center justify-between text-xs font-semibold text-blue-600">
                          <span>Rp 25.000</span>
                          <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-md">
                             Beli <ExternalLink className="h-3 w-3" />
                          </span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                    <p className="text-[10px] text-slate-400">
                      *Setiap pembelian mendukung operasional SEHATI+.
                    </p>
                 </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-yellow-400 mb-3 font-bold text-xs uppercase tracking-wide">
                        <Sparkles className="h-4 w-4" /> Daily Quote
                    </div>
                    <h3 className="text-lg font-serif italic leading-relaxed opacity-90">
                      &ldquo;Matahari tetap bersinar meski tertutup awan.&rdquo;
                    </h3>
                  </div>
              </div>
           </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
