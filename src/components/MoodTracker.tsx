"use client";

import React, { useState, useEffect } from 'react';

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState('');

  const moods = [
    { emoji: "🤩", label: "Senang", quote: "Keren! Pertahankan semangatmu ya! 🌟" },
    { emoji: "🙂", label: "Baik", quote: "Alhamdulillah, semoga harimu menyenangkan! 🍃" },
    { emoji: "😐", label: "Biasa", quote: "Gapapa, hari yang biasa juga berharga kok. ☕" },
    { emoji: "😔", label: "Sedih", quote: "It's okay to be sad. Peluk jauh buat kamu! 🤗" },
    { emoji: "😫", label: "Lelah", quote: "Istirahat dulu ya. Kamu sudah berjuang hebat hari ini. 💤" }
  ];

  const handleMoodSelect = (mood: typeof moods[0]) => {
    setSelectedMood(mood.label);
    setQuote(mood.quote);
    setShowQuote(true);

    // Save to LocalStorage
    const log = {
      mood: mood.label,
      timestamp: new Date().toISOString()
    };
    
    // Get existing logs or init empty array
    const existingLogs = JSON.parse(localStorage.getItem('sehati_mood_logs') || '[]');
    localStorage.setItem('sehati_mood_logs', JSON.stringify([...existingLogs, log]));

    // Hide quote after 3 seconds
    setTimeout(() => setShowQuote(false), 5000);
  };

  return (
    <section className="py-16 bg-bg-soft">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 relative overflow-hidden">
          <h2 className="text-2xl font-bold text-text-main mb-8">Apa yang kamu rasakan hari ini?</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {moods.map((mood, idx) => (
              <button 
                key={idx}
                onClick={() => handleMoodSelect(mood)}
                className={`group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2 focus:outline-none ${selectedMood === mood.label ? 'scale-110' : ''}`}
              >
                <div className={`w-16 h-16 flex items-center justify-center text-4xl bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors shadow-sm group-hover:shadow-md ${selectedMood === mood.label ? 'bg-primary/20 border-primary' : ''}`}>
                  {mood.emoji}
                </div>
                <span className={`text-sm font-medium group-hover:text-primary transition-colors ${selectedMood === mood.label ? 'text-primary font-bold' : 'text-slate-500'}`}>
                  {mood.label}
                </span>
              </button>
            ))}
          </div>

          {/* Simple Toast / Notification Area inside the card */}
          {showQuote && (
             <div className="mt-8 p-4 bg-blue-50 text-primary rounded-xl animate-fade-in-up">
               <p className="font-semibold text-lg">"{quote}"</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
}

