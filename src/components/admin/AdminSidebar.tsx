"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutGrid, Users, FileText, DollarSign, LogOut, AlertTriangle, PieChart, Menu, X } from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

  const SidebarContent = () => (
    <>
      {/* Header / Logo */}
      <div className="p-6 border-b border-emerald-800/30 flex items-center gap-3">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <img src="/logo mindora.png" className="w-6 h-6 brightness-0 invert" alt="Logo" />
        </div>
        <div>
            <h1 className="font-bold text-white tracking-wider text-lg">MINDORA</h1>
            <p className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">Command Center</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <p className="px-4 text-[10px] font-bold text-emerald-500/60 uppercase tracking-widest mb-3">System Menu</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive 
                  ? 'bg-emerald-500/10 text-white border border-emerald-500/20 shadow-lg shadow-black/20' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'}`} />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Admin Profile & Logout */}
      <div className="p-4 border-t border-emerald-800/30 bg-[#020617]/30">
        <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-bold shadow-md border border-white/10">
                AD
            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">Administrator</p>
                <p className="text-xs text-emerald-500 truncate">Super Access</p>
            </div>
        </div>
        
        <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-400 text-sm font-medium hover:bg-rose-500/20 hover:text-rose-300 transition-all active:scale-95"
        >
            <LogOut className="w-4 h-4" />
            System Logout
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Hamburger Trigger */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-emerald-950 border-b border-emerald-800/30 z-50 flex items-center px-4 justify-between shadow-lg shadow-black/20">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                <img src="/logo mindora.png" className="w-6 h-6 brightness-0 invert" alt="Logo" />
            </div>
            <span className="font-bold text-white tracking-wider text-sm">MINDORA ADMIN</span>
        </div>
        <button 
          onClick={() => setIsMobileOpen(true)}
          className="p-2 bg-emerald-900/50 rounded-lg text-emerald-400 hover:bg-emerald-800 transition-colors border border-emerald-800/30"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-emerald-950 border-r border-emerald-900/50 fixed left-0 top-0 z-40 text-slate-300 shadow-2xl shadow-black/20">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />
          
          {/* Slide-in Sidebar */}
          <aside className="absolute left-0 top-0 w-[80%] max-w-xs h-full bg-emerald-950 border-r border-emerald-800/30 flex flex-col shadow-2xl animate-slide-in">
            <button 
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-4 right-4 p-2 text-emerald-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
}
