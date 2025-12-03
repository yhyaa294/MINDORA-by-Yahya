"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, MessageCircle, BookOpen, User, ShoppingBag } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/dashboard', icon: LayoutGrid },
    { name: 'Chat', href: '/chat', icon: MessageCircle },
    { name: 'Store', href: '/dashboard/store', icon: ShoppingBag },
    { name: 'Materi', href: '/materi', icon: BookOpen },
    { name: 'Akun', href: '/profile', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FFFBEB]/95 backdrop-blur-lg border-t border-emerald-100 z-[999] pb-6 pt-3 shadow-[0_-4px_20px_-4px_rgba(6,78,59,0.1)]">
      <div className="flex justify-around items-center px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full space-y-1 transition-all duration-200 ${
                isActive ? 'text-emerald-700' : 'text-emerald-900/40 hover:text-emerald-700'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-emerald-100/50 translate-y-[-2px]' : ''}`}>
                <Icon className={`w-6 h-6 ${isActive ? 'fill-emerald-700/20 stroke-[2.5px]' : 'stroke-2'}`} />
              </div>
              <span className={`text-[10px] font-bold tracking-tight ${isActive ? 'text-emerald-800' : ''}`}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
