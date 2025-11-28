"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Skull, AlertTriangle, Book, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MODULES_DATA = [
    {
        id: 1,
        title: "Kesehatan Reproduksi",
        desc: "Pentingnya menjaga kebersihan dan kesehatan organ reproduksi sejak dini.",
        icon: <Heart className="w-8 h-8 text-rose-500" />,
        bg: "bg-rose-50",
        border: "border-rose-100"
    },
    {
        id: 2,
        title: "Bahaya NAPZA",
        desc: "Narkotika, Psikotropika, dan Zat Adiktif lainnya. Kenali dampaknya sebelum terlambat.",
        icon: <Skull className="w-8 h-8 text-slate-700" />,
        bg: "bg-slate-100",
        border: "border-slate-200"
    },
    {
        id: 3,
        title: "Pernikahan Dini",
        desc: "Kenapa harus buru-buru? Fokus pada pendidikan dan karir dulu yuk!",
        icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
        bg: "bg-orange-50",
        border: "border-orange-100"
    },
    {
        id: 4,
        title: "Bullying & Cyberbullying",
        desc: "Cara menghadapi perundungan di sekolah maupun di media sosial.",
        icon: <Users className="w-8 h-8 text-blue-500" />,
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
    {
        id: 5,
        title: "Manajemen Stress",
        desc: "Tips praktis mengelola stress akademik dan tekanan teman sebaya.",
        icon: <Book className="w-8 h-8 text-green-500" />,
        bg: "bg-green-50",
        border: "border-green-100"
    }
];

export default function MateriPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
        <Navbar />
        
        <section className="pt-32 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Pojok Materi GenRe</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Belajar seru seputar kesehatan mental dan Triad KRR. Tambah wawasanmu biar makin bijak mengambil keputusan!
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MODULES_DATA.map((mod) => (
                    <div key={mod.id} className={`p-8 rounded-3xl border ${mod.border} ${mod.bg} hover:shadow-xl transition-all duration-300 group cursor-pointer`}>
                        <div className="mb-6 bg-white p-4 rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                            {mod.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{mod.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">{mod.desc}</p>
                        <div className="flex items-center text-sm font-bold text-slate-900 group-hover:translate-x-2 transition-transform">
                            Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <Footer />
    </main>
  );
}
