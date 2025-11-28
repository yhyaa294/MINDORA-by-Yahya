import React from 'react';
import { Heart, Coffee, ExternalLink, Scale, Shield, Globe, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Col 1: Brand & Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-rose-50 p-2 rounded-full border border-rose-100">
                <Heart className="h-6 w-6 text-rose-500 fill-rose-500" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                SEHATI<span className="text-rose-500">+</span>
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Platform kesehatan mental sahabat remaja Indonesia. Tempat ternyaman untuk bercerita dan bertumbuh bersama.
            </p>
            <div className="flex items-center gap-3 mb-6">
               {/* Instagram Promo */}
               <a
                href="https://www.instagram.com/syarfddn_yhya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:shadow-lg transition-all"
              >
                <Instagram className="h-3 w-3" />
                Follow @syarfddn_yhya
              </a>
            </div>
          </div>
          
          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Akses Cepat</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="/" className="hover:text-rose-500 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-200"></div> Beranda</a></li>
              <li><a href="/login" className="hover:text-rose-500 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-200"></div> Konsultasi AI</a></li>
              <li><a href="/materi" className="hover:text-rose-500 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-200"></div> Pojok Materi</a></li>
            </ul>
          </div>

          {/* Col 3: Supported By (BKKBN Focus) */}
          <div>
             <h4 className="font-bold text-slate-900 mb-6">Didukung Oleh</h4>
             <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                <img 
                  src="/logo%20bkkbn.webp" 
                  alt="BKKBN Logo" 
                  className="h-16 w-auto mx-auto mb-3 hover:scale-105 transition-transform" 
                />
                <p className="text-xs text-slate-500 font-medium">
                  Badan Kependudukan dan Keluarga Berencana Nasional
                </p>
             </div>
             <div className="mt-6">
                <a 
                  href="https://saweria.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-yellow-400/10 text-yellow-700 px-4 py-3 rounded-xl text-sm font-bold hover:bg-yellow-400/20 transition-colors border border-yellow-400/20"
                >
                  <Coffee className="h-4 w-4" />
                  Traktir Kopi (Saweria)
                </a>
             </div>
          </div>

        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500 font-medium">&copy; {new Date().getFullYear()} SEHATI+ Project.</p>
          <p className="text-slate-400 flex items-center gap-1 text-xs">
            Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> by <a href="https://www.instagram.com/syarfddn_yhya" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-600 hover:text-rose-500 transition-colors">Yahya</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
