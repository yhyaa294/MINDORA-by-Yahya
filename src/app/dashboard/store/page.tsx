"use client";

import React from 'react';
import { ShoppingBag, ExternalLink, Star } from 'lucide-react';

export default function StorePage() {
  const products = [
    {
      id: 1,
      name: "The Gratitude Journal",
      price: "Rp 89.000",
      description: "Jurnal harian untuk melatih rasa syukur dan mindfulness.",
      image: "📓", // Placeholder emoji, replace with actual image if available
      bgColor: "bg-stone-100",
      textColor: "text-stone-600",
      link: "#"
    },
    {
      id: 2,
      name: "Calm Scented Candle",
      price: "Rp 45.000",
      description: "Lilin aromaterapi Lavender untuk relaksasi maksimal.",
      image: "🕯️",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      link: "#"
    },
    {
      id: 3,
      name: "Fidget Cube Focus Tool",
      price: "Rp 25.000",
      description: "Alat bantu fokus untuk mengurangi kecemasan dan gelisah.",
      image: "🎲",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      link: "#"
    },
    {
      id: 4,
      name: "Sleep Mask Silk",
      price: "Rp 35.000",
      description: "Masker mata sutra lembut untuk kualitas tidur yang lebih baik.",
      image: "😴",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      link: "#"
    },
    {
      id: 5,
      name: "Stress Relief Ball",
      price: "Rp 15.000",
      description: "Bola peremas anti-stres yang ergonomis.",
      image: "🎾",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFBEB] pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        
        {/* Header */}
        <header className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShoppingBag className="w-3 h-3" />
            Wellness Store
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-emerald-950 mb-4">
            MINDORA Curated.
          </h1>
          <p className="text-slate-600 max-w-2xl">
            Koleksi alat bantu pilihan untuk mendukung ketenangan pikiran dan kesejahteraan mentalmu.
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all group flex flex-col">
              <div className={`w-full aspect-square ${product.bgColor} rounded-2xl flex items-center justify-center text-6xl mb-6 group-hover:scale-105 transition-transform duration-300`}>
                {product.image}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>4.8</span>
                    </div>
                </div>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-50">
                <span className="font-bold text-emerald-900">{product.price}</span>
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900 text-white text-sm font-medium rounded-full hover:bg-emerald-800 transition-colors"
                >
                  Shop Now
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Affiliate Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-400">
            <p>*Sebagian dari hasil penjualan akan digunakan untuk pengembangan fitur gratis Mindora.</p>
        </div>

      </div>
    </div>
  );
}
