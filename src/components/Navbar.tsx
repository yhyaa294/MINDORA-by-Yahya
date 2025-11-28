"use client";

import React from 'react';
import Link from 'next/link';
import { Heart, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            {/* Logo BKKBN, GenRe, & School */}
            <div className="flex items-center gap-3 border-r border-slate-200 pr-4 mr-2">
               <img 
                 src="/logo%20nero.jpg" 
                 alt="SMK Nero" 
                 className="h-10 w-auto"
               />
               <div className="h-6 w-px bg-slate-200 mx-1"></div>
               <img 
                 src="/logo%20bkkbn.webp" 
                 alt="BKKBN" 
                 className="h-10 w-auto"
               />
               <img 
                 src="/logo%20genre.webp" 
                 alt="GenRe" 
                 className="h-10 w-auto"
               />
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-full border border-red-100">
                <Heart className="h-6 w-6 text-accent fill-accent" />
              </div>
              <span className="font-bold text-xl tracking-tight text-primary hidden sm:block">
                SEHATI<span className="text-accent">+</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text-main hover:text-primary font-medium transition-colors">
              Beranda
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-text-main hover:text-primary font-medium transition-colors">
                Konsultasi
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Dropdown */}
              <div className="absolute top-full -left-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/chat" className="block px-4 py-2 text-sm text-text-main hover:bg-bg-soft hover:text-primary">
                    Curhat AI
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-text-main hover:bg-bg-soft hover:text-primary">
                    Curhat Kakak GenRe
                  </Link>
                </div>
              </div>
            </div>

            <Link href="#" className="text-text-main hover:text-primary font-medium transition-colors">
              Materi GenRe
            </Link>
            <a 
              href="https://smanegeringoro.sch.id/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-main hover:text-primary font-medium transition-colors flex items-center gap-1"
            >
              Profil Sekolah
            </a>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link 
              href="/login"
              className="bg-white text-primary border border-primary/20 px-6 py-2.5 rounded-full font-semibold shadow-sm hover:bg-primary hover:text-white transition-all transform hover:-translate-y-0.5"
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
