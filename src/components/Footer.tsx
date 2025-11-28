import React from 'react';
import { Heart, Globe, Instagram, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Left: Brand & Tagline */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-rose-50 p-2.5 rounded-xl border border-rose-100">
                <Heart className="h-6 w-6 text-rose-500 fill-rose-500" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                SEHATI<span className="text-rose-500">+</span>
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-xs">
              Ruang aman untuk setiap cerita. Karena kesehatan mentalmu adalah prioritas utama kami.
            </p>
            <div className="flex items-center gap-4">
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="https://sehati.plus" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-500 transition-colors">
                 <Globe className="w-5 h-5" />
               </a>
            </div>
          </div>
          
          {/* Middle: Links */}
          <div className="flex flex-col md:items-center">
            <div>
                <h4 className="font-bold text-slate-900 mb-6 text-lg">Navigasi</h4>
                <ul className="space-y-4 text-slate-600">
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link></li>
                <li><Link href="/materi" className="hover:text-blue-600 transition-colors">Materi Edukasi</Link></li>
                <li><Link href="/admin/login" className="hover:text-blue-600 transition-colors">Login Admin</Link></li>
                </ul>
            </div>
          </div>

          {/* Right: Supported By */}
          <div>
             <h4 className="font-bold text-slate-900 mb-6 text-lg">Didukung Oleh</h4>
             <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 inline-block">
                <div className="flex items-center gap-4">
                    <img 
                      src="/logo%20ummigo.png" 
                      alt="Ummigo" 
                      className="h-10 w-auto hover:scale-105 transition-transform opacity-80 hover:opacity-100" 
                    />
                    <img 
                      src="/logo%20pasalku.ai.jpg" 
                      alt="Pasalku AI" 
                      className="h-10 w-auto hover:scale-105 transition-transform opacity-80 hover:opacity-100 rounded-md" 
                    />
                    <img 
                      src="/logo%20smartapd.jpg" 
                      alt="SmartAPD" 
                      className="h-10 w-auto hover:scale-105 transition-transform opacity-80 hover:opacity-100 rounded-md" 
                    />
                </div>
             </div>
             <div className="mt-6 flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                <p>SMAN Negeri Ngoro<br/>Jombang, Jawa Timur</p>
             </div>
          </div>

        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 SMAN Ngoro Jombang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
