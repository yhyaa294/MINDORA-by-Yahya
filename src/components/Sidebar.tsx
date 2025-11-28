"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutGrid, MessageCircle, BookOpen, Building, LogOut, User, Shield } from 'lucide-react';
import MysteryLogo from './MysteryLogo';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState('Sobat Sehati');

  useEffect(() => {
    const storedUser = localStorage.getItem('sehati_user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUserRole(parsed.role);
      setUserName(parsed.name);
    }
  }, []);

  const studentItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
    { name: 'Konsultasi', href: '/chat', icon: MessageCircle },
    { name: 'Materi GenRe', href: '/materi', icon: BookOpen },
    { name: 'Profil Sekolah', href: 'https://smanegeringoro.sch.id/', icon: Building, external: true },
  ];

  const adminItems = [
    { name: 'Dashboard Konselor', href: '/dashboard/counselor', icon: LayoutGrid },
    { name: 'Kelola Materi', href: '/materi', icon: BookOpen }, // Assuming shared for now
    { name: 'Lihat Sebagai Siswa', href: '/dashboard', icon: User },
  ];

  const menuItems = userRole === 'admin' ? adminItems : studentItems;

  const handleLogout = () => {
    localStorage.removeItem('sehati_user');
    localStorage.removeItem('sehati_role');
    router.push('/login');
  };

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-white/90 backdrop-blur-xl border-r border-slate-100 fixed left-0 top-0 z-40">
      {/* Header / Logo */}
      <div className="p-6 border-b border-slate-100 flex items-center justify-center">
        <MysteryLogo className="w-32 h-10" text="SEHATI+" subtext={userRole === 'admin' ? "COUNSELOR" : "STUDENT"} />
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Menu Utama</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-4 px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md ${userRole === 'admin' ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gradient-to-br from-blue-500 to-indigo-500'}`}>
                {userRole === 'admin' ? <Shield className="w-5 h-5" /> : <User className="w-5 h-5" />}
            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-bold text-slate-800 truncate">{userName}</p>
                <p className="text-xs text-slate-500 truncate">{userRole === 'admin' ? 'Duta GenRe' : 'Siswa SMANERO'}</p>
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
