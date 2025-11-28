import React from 'react';
import { Bot, Users, BookOpen } from 'lucide-react';
import { modules } from '@/data/modules';

const features = [
  {
    title: "AI Care Assistant",
    description: "Curhat awal dengan AI yang mengerti perasaanmu 24/7. Respon cepat dan empatik.",
    icon: Bot,
    color: "bg-blue-100 text-blue-600",
    borderColor: "border-blue-100"
  },
  {
    title: "Konselor Sebaya",
    description: "Ngobrol langsung dengan teman PIK-R yang terlatih. Cerita lebih nyambung sesama remaja.",
    icon: Users,
    color: "bg-yellow-100 text-yellow-600",
    borderColor: "border-yellow-100"
  },
  {
    title: "Modul GenRe",
    description: "Info kesehatan remaja, tips anti-galau, dan panduan hidup produktif.",
    icon: BookOpen,
    color: "bg-red-100 text-red-600",
    borderColor: "border-red-100"
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-text-main mb-4">Fitur Unggulan SEHATI+</h2>
          <p className="text-slate-600">Kami menyediakan ekosistem pendukung yang lengkap untuk kesehatan mental dan pengembangan diri kamu.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              
              <div className={`inline-flex items-center justify-center p-4 rounded-xl ${feature.color} mb-6 relative z-10`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold text-text-main mb-3 relative z-10">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Modules Section */}
        <div className="bg-bg-soft rounded-3xl p-8 md:p-12">
          <div className="flex justify-between items-end mb-8">
            <div>
               <h3 className="text-2xl font-bold text-text-main mb-2">Modul Terbaru</h3>
               <p className="text-slate-500">Bacaan ringan untuk upgrade diri.</p>
            </div>
            <button className="text-primary font-semibold hover:text-secondary transition-colors text-sm">Lihat Semua</button>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
             {modules.map((mod) => (
               <div key={mod.id} className="bg-white rounded-xl border border-slate-100 hover:shadow-md transition-all cursor-pointer group overflow-hidden flex flex-col h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={mod.thumbnail} 
                      alt={mod.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide text-slate-600 shadow-sm">
                      {mod.category}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h4 className="font-bold text-text-main text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {mod.title}
                    </h4>
                    <div className="mt-auto pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-50">
                       <span>{mod.readTime} baca</span>
                       <span className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">Baca &rarr;</span>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

