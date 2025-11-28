import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-slate-50 p-1.5 rounded-full border border-red-100">
                <Heart className="h-6 w-6 text-accent fill-accent" />
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">
                SEHATI<span className="text-accent">+</span>
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-sm">
              Sistem Ekosistem Hati & Intelegensi. Platform kesehatan mental sahabat remaja Indonesia.
            </p>
            <div className="flex items-center gap-4">
                {/* Logos */}
                <img 
                 src="/logo%20nero.jpg" 
                 alt="SMK Nero" 
                 className="h-12 w-auto grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100"
               />
                <img 
                 src="/logo%20bkkbn.webp" 
                 alt="BKKBN" 
                 className="h-12 w-auto grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
               />
               <img 
                 src="/logo%20genre.webp" 
                 alt="GenRe" 
                 className="h-12 w-auto grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
               />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-text-main mb-4">Menu</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Konsultasi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Materi GenRe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tentang Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-main mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-slate-600">
              <li>support@sehatiplus.id</li>
              <li>Jombang, Jawa Timur</li>
              <li>Instagram: @sehatiplus</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">&copy; {new Date().getFullYear()} SEHATI+ Project. All rights reserved.</p>
          <p className="text-slate-500 flex items-center gap-1">
            Created & Developed by <a href="https://instagram.com/syarfddn_yhya" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-secondary transition-colors">@syarfddn_yhya</a> 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
