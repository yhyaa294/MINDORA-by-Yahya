"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutGrid, MessageCircle, BookOpen, Building, LogOut, User, Shield, ShoppingBag, Sprout } from 'lucide-react';
import MindoraLogo from './MindoraLogo';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState('Teman Mindora');

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('sehati_user');
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        setUserRole(parsed.role);
        setUserName(parsed.name);
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      // Clear invalid data
      localStorage.removeItem('sehati_user');
      localStorage.removeItem('sehati_role');
    }
  }, []);

  const studentItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
    { name: 'Konsultasi', href: '/chat', icon: MessageCircle },
    { name: 'Wellness Store', href: '/dashboard/store', icon: ShoppingBag },
    { name: 'Growth Library', href: '/materi', icon: Sprout },
  ];

  const adminItems = [
    { name: 'Dashboard Konselor', href: '/dashboard/counselor', icon: LayoutGrid },
    { name: 'Growth Library', href: '/materi', icon: Sprout }, 
    { name: 'Lihat Sebagai Siswa', href: '/dashboard', icon: User },
  ];

  const menuItems = userRole === 'admin' ? adminItems : studentItems;

  const handleLogout = () => {
    localStorage.removeItem('sehati_user');
    localStorage.removeItem('sehati_role');
    router.push('/login');
  };

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-[#FFFBEB] border-r border-emerald-900/10 fixed left-0 top-0 z-40">
      {/* Header / Logo */}
      <div className="p-6 border-b border-emerald-900/10 flex items-center justify-start">
        <MindoraLogo className="h-8" color="dark" />
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        <p className="px-4 text-xs font-bold text-emerald-900/40 uppercase tracking-wider mb-2">Menu Utama</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive 
                  ? 'bg-emerald-100 text-emerald-800 shadow-sm' 
                  : 'text-slate-500 hover:bg-white hover:text-emerald-700 hover:shadow-sm'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-700' : 'text-slate-400 group-hover:text-emerald-600'}`} />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-emerald-900/10 bg-white/50">
        <div className="flex items-center gap-3 mb-4 px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md ${userRole === 'admin' ? 'bg-gradient-to-br from-emerald-700 to-emerald-900' : 'bg-gradient-to-br from-emerald-500 to-teal-600'}`}>
                {userRole === 'admin' ? <Shield className="w-5 h-5" /> : <User className="w-5 h-5" />}
            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-bold text-emerald-950 truncate">{userName}</p>
                <p className="text-xs text-emerald-700/60 truncate">{userRole === 'admin' ? 'Administrator' : 'Teman Mindora'}</p>
            </div>
        </div>
        
        <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-rose-600 text-sm font-medium hover:bg-rose-50 hover:border-rose-100 transition-colors"
        >
            <LogOut className="w-4 h-4" />
            Keluar
        </button>
      </div>
    </aside>
  );
}
