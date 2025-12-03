"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutGrid, Users, FileText, DollarSign, LogOut, AlertTriangle, PieChart } from 'lucide-react';
import MindoraLogo from '../MindoraLogo';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: 'Command Center', href: '/dashboard/counselor', icon: LayoutGrid },
    { name: 'Crisis Radar', href: '/dashboard/counselor/crisis', icon: AlertTriangle },
    { name: 'User Management', href: '/dashboard/counselor/users', icon: Users },
    { name: 'Content Studio', href: '/dashboard/counselor/content', icon: FileText },
    { name: 'Revenue', href: '/dashboard/counselor/revenue', icon: DollarSign },
    { name: 'Analytics', href: '/dashboard/counselor/analytics', icon: PieChart },
  ];

  const handleLogout = () => {
    localStorage.removeItem('sehati_user');
    localStorage.removeItem('sehati_role');
    router.push('/login');
  };

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-[#022c22] border-r border-emerald-900 fixed left-0 top-0 z-40 text-slate-300">
      {/* Header / Logo */}
      <div className="p-6 border-b border-emerald-900/50 flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <img src="/logo mindora.png" className="w-6 h-6" alt="Logo" />
        </div>
        <div>
            <h1 className="font-bold text-white tracking-wider text-lg">MINDORA</h1>
            <p className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">Admin Console</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <p className="px-4 text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3">Main Menu</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive 
                  ? 'bg-emerald-900/50 text-white border border-emerald-800 shadow-lg shadow-emerald-900/20' 
                  : 'text-slate-400 hover:bg-emerald-900/20 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'}`} />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Admin Profile & Logout */}
      <div className="p-4 border-t border-emerald-900/50 bg-[#012018]">
        <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold shadow-md border-2 border-[#022c22]">
                AD
            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">Administrator</p>
                <p className="text-xs text-emerald-500 truncate">Super Access</p>
            </div>
        </div>
        
        <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-rose-900/20 border border-rose-900/30 rounded-lg text-rose-400 text-sm font-medium hover:bg-rose-900/40 hover:text-rose-200 transition-all"
        >
            <LogOut className="w-4 h-4" />
            Sign Out
        </button>
      </div>
    </aside>
  );
}
