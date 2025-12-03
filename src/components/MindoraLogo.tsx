import React from 'react';

interface LogoProps {
  className?: string; // Buat ngatur ukuran (w-32, h-10, dll)
  color?: 'dark' | 'light'; // Buat di background terang/gelap
}

export default function MindoraLogo({ className = "", color = 'dark' }: LogoProps) {
  // Warna: Emerald-900 untuk Dark, Cream-50 untuk Light
  const textColor = color === 'dark' ? '#064E3B' : '#FFFBEB'; 
  const accentColor = '#F97316'; // Muted Orange/Coral

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* ICON: Logo Image from Public */}
      <img 
        src="/logo mindora.png" 
        alt="MINDORA Logo" 
        className="h-full w-auto aspect-square object-contain"
      />

      {/* TEXT: Typography Logo */}
      <span 
        className="font-serif font-bold tracking-tight text-xl sm:text-2xl"
        style={{ color: textColor }}
      >
        MINDORA
      </span>
    </div>
  );
}
