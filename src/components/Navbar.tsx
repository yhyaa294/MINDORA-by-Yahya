"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, ChevronDown } from 'lucide-react';
import MindoraLogo from './MindoraLogo';

export default function Navbar() {
  const pathname = usePathname();

  // Hide Navbar on Dashboard and Chat pages (they use Sidebar/BottomNav)
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/chat')) {
      return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <Link href="/" className="flex items-center gap-2">
              <MindoraLogo className="h-9" color="dark" />
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase tracking-wide">Beta</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-emerald-800 font-medium transition-colors">
              Beranda
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-600 hover:text-emerald-800 font-medium transition-colors">
                Layanan
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Dropdown */}
              <div className="absolute top-full -left-2 w-48 bg-white rounded-xl shadow-xl shadow-emerald-900/5 border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/login" className="block px-4 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-900">
                    Mind Companion
                  </Link>
                  <Link href="/login" className="block px-4 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-900">
                    Expert Connect
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/materi" className="text-slate-600 hover:text-emerald-800 font-medium transition-colors">
              Library
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link 
              href="/login"
              className="bg-emerald-900 text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-sm hover:bg-emerald-800 transition-all"
            >
              Masuk
            </Link>
          </div>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden flex items-center">
            <button className="text-text-main">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
