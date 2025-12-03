"use client";

import React from 'react';
import Link from 'next/link';
import { Users, BookOpen, Activity, Calendar, HeartPulse, AlertTriangle, DollarSign, Plus, Search, MoreHorizontal, CheckCircle, XCircle, ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';

export default function CounselorDashboard() {
  // Mock Data for Charts/Tables
  const crisisAlerts = [
    { id: 'USR-8821', risk: 'High', time: '10 menit lalu', reason: 'Indikasi Self-Harm', status: 'Pending' },
    { id: 'USR-1029', risk: 'Medium', time: '2 jam lalu', reason: 'Kecemasan Berat', status: 'In Review' },
    { id: 'USR-4492', risk: 'High', time: '5 jam lalu', reason: 'Isolasi Sosial', status: 'Escalated' },
  ];

  const transactions = [
    { id: '#INV-0092', plan: 'School License (Annual)', amount: 'Rp 15.000.000', status: 'Paid', date: 'Hari ini' },
    { id: '#INV-0091', plan: 'Affiliate: Aromaterapi', amount: 'Rp 450.000', status: 'Pending', date: 'Kemarin' },
    { id: '#INV-0090', plan: 'Premium Counseling', amount: 'Rp 250.000', status: 'Paid', date: '28 Nov' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 pb-24 md:pb-8 bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* 1. HEADER & OVERVIEW */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-emerald-950">Selamat Pagi, Administrator.</h1>
          <p className="text-slate-500 text-sm mt-1">Berikut adalah laporan kesehatan mental ekosistem MINDORA hari ini.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl font-medium text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Nov 2025
          </button>
          <button className="bg-emerald-900 text-white px-6 py-2 rounded-xl font-semibold text-sm hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Export Laporan
          </button>
        </div>
      </div>

      {/* 2. QUICK STATS ROW (Bento Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Active Users */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <span className="flex items-center text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" /> +12%
            </span>
          </div>
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Active Users</p>
            <h3 className="text-2xl font-bold text-slate-900">1,240</h3>
          </div>
        </div>

        {/* Avg Mood Index */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:scale-110 transition-transform">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="flex items-center text-rose-600 text-xs font-bold bg-rose-50 px-2 py-1 rounded-full">
              <TrendingDown className="w-3 h-3 mr-1" /> -2%
            </span>
          </div>
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Avg. Mood Index</p>
            <h3 className="text-2xl font-bold text-slate-900">7.8<span className="text-sm text-slate-400 font-normal">/10</span></h3>
          </div>
        </div>

        {/* Crisis Alerts (RED ZONE) */}
        <div className="bg-rose-50 p-5 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-rose-200/50 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="p-3 bg-white rounded-xl text-rose-600 shadow-sm group-hover:scale-110 transition-transform animate-pulse">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <span className="flex items-center text-rose-700 text-xs font-bold bg-white/50 px-2 py-1 rounded-full">
              Action Req.
            </span>
          </div>
          <div className="relative z-10">
            <p className="text-rose-800/70 text-xs font-bold uppercase tracking-wider">Crisis Alerts</p>
            <h3 className="text-2xl font-bold text-rose-900">3 Pending</h3>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-amber-50 rounded-xl text-amber-600 group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="flex items-center text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
              <TrendingUp className="w-3 h-3 mr-1" /> +24%
            </span>
          </div>
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Monthly Revenue</p>
            <h3 className="text-2xl font-bold text-slate-900">Rp 15.7M</h3>
          </div>
        </div>
      </div>

      {/* 3. MAIN CHART & CRISIS RADAR (Grid Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: MINDORA PULSE (Chart Placeholder) */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm h-full">
          <div className="flex items-center justify-between mb-6">
            <div>
                <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-emerald-600" />
                    MINDORA Pulse Check
                </h2>
                <p className="text-sm text-slate-500">Grafik rata-rata mood user 7 hari terakhir.</p>
            </div>
            <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-2 outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
            </select>
          </div>
          
          {/* CSS-Only Mock Chart */}
          <div className="h-64 w-full flex items-end gap-2 sm:gap-4 justify-between pt-8 px-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                const height = [40, 65, 50, 85, 60, 90, 75][i]; // Mock percentages
                const isLow = height < 50;
                return (
                    <div key={day} className="flex flex-col items-center gap-2 w-full group">
                        <div className="relative w-full bg-slate-50 rounded-t-xl h-full flex items-end overflow-hidden">
                             <div 
                                style={{ height: `${height}%` }} 
                                className={`w-full rounded-t-xl transition-all duration-1000 ease-out group-hover:opacity-80 relative ${isLow ? 'bg-rose-400' : 'bg-emerald-500'}`}
                             >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {height}%
                                </div>
                             </div>
                        </div>
                        <span className="text-xs text-slate-400 font-medium">{day}</span>
                    </div>
                )
            })}
          </div>
          <div className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100 flex gap-3 items-start">
            <div className="p-1 bg-blue-100 rounded-full text-blue-600 mt-0.5">
                <Activity className="w-3 h-3" />
            </div>
            <p className="text-xs text-blue-800 leading-relaxed">
                <span className="font-bold">Insight AI:</span> Mood user cenderung menurun drastis di hari Senin (40%). Disarankan menjadwalkan "Monday Motivation" blast notifikasi pada pukul 07:00 pagi.
            </p>
          </div>
        </div>

        {/* RIGHT: CRISIS RADAR */}
        <div className="bg-white rounded-3xl border border-slate-100 p-0 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-50 bg-rose-50/30">
                <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    Crisis Radar
                </h2>
                <p className="text-sm text-slate-500">User dengan indikasi risiko tinggi.</p>
            </div>
            <div className="flex-1 overflow-y-auto p-0">
                {crisisAlerts.map((alert, idx) => (
                    <div key={idx} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs shrink-0">
                            !
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-slate-900 text-sm">{alert.id}</h4>
                                <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-bold">{alert.risk}</span>
                            </div>
                            <p className="text-xs text-slate-600 mt-0.5 truncate">{alert.reason}</p>
                            <p className="text-[10px] text-slate-400 mt-1">{alert.time}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                <button className="w-full py-2 bg-white border border-rose-200 text-rose-600 rounded-lg text-xs font-bold hover:bg-rose-50 transition-colors">
                    View All Alerts
                </button>
            </div>
        </div>
      </div>

      {/* 4. CONTENT STUDIO & REVENUE (Grid Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Content Studio */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                  <div>
                      <h2 className="font-bold text-lg text-slate-900">Content Studio</h2>
                      <p className="text-sm text-slate-500">Kelola Mindset Library & Artikel.</p>
                  </div>
                  <button className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-700 transition-colors">
                      <Plus className="w-5 h-5" />
                  </button>
              </div>
              <div className="space-y-4">
                  {[1, 2].map((i) => (
                      <div key={i} className="flex gap-4 p-3 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group cursor-pointer">
                          <div className="w-16 h-16 rounded-lg bg-slate-200 shrink-0 overflow-hidden relative">
                             <div className="absolute inset-0 bg-emerald-900/10 flex items-center justify-center">
                                 <BookOpen className="w-6 h-6 text-emerald-900/40" />
                             </div>
                          </div>
                          <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-slate-900 text-sm truncate group-hover:text-emerald-700">Mengatasi Burnout Akademik</h4>
                              <p className="text-xs text-slate-500 mt-1 line-clamp-2">Panduan praktis untuk siswa yang merasa lelah mental menghadapi ujian.</p>
                              <div className="flex gap-3 mt-2">
                                  <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Article</span>
                                  <span className="text-[10px] text-emerald-600 font-medium">Published</span>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Revenue Tracker */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                  <div>
                      <h2 className="font-bold text-lg text-slate-900">Recent Transactions</h2>
                      <p className="text-sm text-slate-500">Arus kas masuk real-time.</p>
                  </div>
                  <Link href="#" className="text-emerald-600 text-sm font-bold hover:underline">View All</Link>
              </div>
              <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-400 uppercase bg-slate-50/50">
                          <tr>
                              <th className="px-4 py-3 rounded-l-lg">ID Invoice</th>
                              <th className="px-4 py-3">Plan</th>
                              <th className="px-4 py-3">Amount</th>
                              <th className="px-4 py-3 rounded-r-lg">Status</th>
                          </tr>
                      </thead>
                      <tbody className="text-slate-600">
                          {transactions.map((trx, idx) => (
                              <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                                  <td className="px-4 py-3 font-medium text-slate-900">{trx.id}</td>
                                  <td className="px-4 py-3">{trx.plan}</td>
                                  <td className="px-4 py-3 font-bold text-emerald-700">{trx.amount}</td>
                                  <td className="px-4 py-3">
                                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                                          trx.status === 'Paid' 
                                            ? 'bg-emerald-100 text-emerald-700' 
                                            : 'bg-amber-100 text-amber-700'
                                      }`}>
                                          {trx.status}
                                      </span>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>

      </div>

    </div>
  );
}
