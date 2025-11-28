"use client";

// Fixed syntax error
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import { LayoutDashboard, Users, Smile, AlertTriangle, MoreHorizontal, CheckCircle, Calendar, Bell, LogOut } from 'lucide-react';
import { dashboardStats, moodTrends, counselingRequests } from '@/data/mockDashboard';

export default function CounselorDashboard() {
  const router = useRouter();

  // Simple Auth Guard
  useEffect(() => {
    const role = localStorage.getItem('sehati_role');
    if (role !== 'admin') {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('sehati_role');
    localStorage.removeItem('sehati_user');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-bg-soft flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar (Simplified for Demo) */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xl">
                D
              </div>
              <div>
                <h3 className="font-bold text-text-main">Duta GenRe</h3>
                <p className="text-xs text-slate-500">Counselor Admin</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-medium transition-colors">
                <LayoutDashboard className="h-5 w-5" />
                Overview
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
                <Bell className="h-5 w-5" />
                Chat Masuk <span className="ml-auto bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">3</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
                <Calendar className="h-5 w-5" />
                Janji Temu
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
                <Users className="h-5 w-5" />
                Data Siswa
              </button>
              
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors mt-4 border-t border-slate-100">
                <LogOut className="h-5 w-5" />
                Keluar
              </button>
            </nav>
          </div>
          
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white shadow-lg">
            <h4 className="font-bold text-lg mb-2">Tips Konselor</h4>
            <p className="text-sm opacity-90 mb-4">"Jadilah pendengar yang baik sebelum memberikan saran."</p>
            <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">
              Lihat Panduan
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-9 space-y-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-text-main">Ruang Jaga</h1>
              <p className="text-slate-500">Pantau kesehatan mental teman sekolahmu hari ini.</p>
            </div>
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-medium shadow-sm hover:bg-slate-50">
              Download Laporan
            </button>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dashboardStats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-text-main">{stat.value}</h3>
                  {stat.change && (
                    <span className={`text-xs font-bold ${stat.trend === 'up' ? 'text-green-500' : stat.trend === 'down' ? 'text-red-500' : 'text-slate-400'}`}>
                      {stat.change}
                    </span>
                  )}
                </div>
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  stat.icon === 'users' ? 'bg-blue-100 text-blue-600' : 
                  stat.icon === 'smile' ? 'bg-yellow-100 text-yellow-600' : 
                  'bg-red-100 text-red-600'
                }`}>
                  {stat.icon === 'users' ? <Users className="h-6 w-6" /> : 
                   stat.icon === 'smile' ? <Smile className="h-6 w-6" /> : 
                   <AlertTriangle className="h-6 w-6" />}
                </div>
              </div>
            ))}
          </div>

          {/* Mood Trends Graph (Mock) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-text-main">Tren Mood Minggu Ini</h3>
                <select className="text-sm border-none bg-slate-50 rounded-lg px-3 py-1 text-slate-600 outline-none cursor-pointer">
                  <option>7 Hari Terakhir</option>
                  <option>Bulan Ini</option>
                </select>
             </div>
             
             {/* Simple CSS Bar Chart */}
             <div className="h-48 flex items-end justify-between gap-2 md:gap-4">
                {moodTrends.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                     <div className="relative w-full bg-slate-50 rounded-t-xl overflow-hidden h-full flex items-end">
                        <div 
                          className="w-full bg-primary/80 group-hover:bg-primary transition-all duration-500 rounded-t-xl relative"
                          style={{ height: `${(data.value / 5) * 100}%` }}
                        >
                          {/* Tooltip */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Skor: {data.value}
                          </div>
                        </div>
                     </div>
                     <span className="text-xs font-medium text-slate-500">{data.day}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Incoming Requests */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
               <h3 className="font-bold text-text-main">Permintaan Konseling Terbaru</h3>
               <button className="text-primary text-sm font-semibold hover:underline">Lihat Semua</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-medium">Nama Siswa</th>
                    <th className="px-6 py-4 font-medium">Kelas</th>
                    <th className="px-6 py-4 font-medium">Topik</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {counselingRequests.map((req) => (
                    <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-text-main flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                          {req.studentName.charAt(0)}
                        </div>
                        {req.studentName}
                      </td>
                      <td className="px-6 py-4 text-slate-600">{req.grade}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                          {req.topic}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          req.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 
                          req.status === 'Scheduled' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                          'bg-green-50 text-green-700 border-green-100'
                        }`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${
                             req.status === 'Pending' ? 'bg-yellow-500' : 
                             req.status === 'Scheduled' ? 'bg-blue-500' : 
                             'bg-green-500'
                          }`}></span>
                          {req.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {req.status === 'Pending' ? (
                          <div className="flex justify-end gap-2">
                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Terima">
                              <CheckCircle className="h-5 w-5" />
                            </button>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Jadwalkan">
                              <Calendar className="h-5 w-5" />
                            </button>
                          </div>
                        ) : (
                          <button className="text-slate-400 hover:text-slate-600">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
