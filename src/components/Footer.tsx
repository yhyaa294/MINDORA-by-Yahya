import React from 'react';
import { Heart, Globe, Instagram, MapPin, ShieldCheck, Zap, LifeBuoy } from 'lucide-react';
import Link from 'next/link';
import MindoraLogo from './MindoraLogo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Left: Brand & Tagline */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <MindoraLogo className="h-10" color="dark" />
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-xs text-sm">
              Platform kesehatan mental modern yang memprioritaskan privasi dan empati.
            </p>
            <div className="flex items-center gap-4">
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="https://mindora.app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                 <Globe className="w-5 h-5" />
               </a>
            </div>
          </div>
          
          {/* Middle: Links */}
          <div className="flex flex-col md:items-center">
            <div>
                <h4 className="font-bold text-emerald-950 mb-6 text-lg font-serif">Menu</h4>
                <ul className="space-y-4 text-slate-500 text-sm">
                <li><Link href="/" className="hover:text-emerald-700 transition-colors">Beranda</Link></li>
                <li><Link href="/about" className="hover:text-emerald-700 transition-colors">Tentang Kami</Link></li>
                <li><Link href="/login" className="hover:text-emerald-700 transition-colors">Portal Admin</Link></li>
                </ul>
            </div>
          </div>

          {/* Right: Supported By */}
          <div>
             <h4 className="font-bold text-emerald-950 mb-6 text-lg font-serif">Developer Ecosystem</h4>
             <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 opacity-80 grayscale hover:grayscale-0 transition-all">
                    <img src="/logo%20ummigo.png" alt="Ummigo" className="h-6 w-auto" />
                    <img src="/logo%20pasalku.ai.jpg" alt="Pasalku AI" className="h-6 w-auto rounded-md" />
                    <img src="/logo%20smartapd.jpg" alt="SmartAPD" className="h-6 w-auto rounded-md" />
                 </div>
                 
                 <div className="h-px bg-slate-100 my-2"></div>

                 <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                        <div className="text-sm text-slate-600">Secure & Encrypted</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <div className="text-sm text-slate-600">AI Powered</div>
                    </div>
                 </div>
             </div>
             <div className="mt-6 flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                <p>Jakarta, Indonesia</p>
             </div>
          </div>

        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 MINDORA Inc. Designed & Built by Yahya.</p>
        </div>
      </div>
    </footer>
  );
}
