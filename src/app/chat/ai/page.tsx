"use client";

import { useState, useRef, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { Send, Bot, Loader2, AlertTriangle, Phone, ArrowLeft, Zap } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
  isCrisis?: boolean;
};

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: 'Hai, aku Mindora. Ruang ini aman buat cerita apa aja. Apa yang lagi ngeganjel di pikiranmu?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPanic, setShowPanic] = useState(false); // State for Panic Button Highlight
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowPanic(false); // Reset panic state on new message

    try {
      // Send chat history context
      const history = messages.map(m => ({
          isUser: m.role === 'user',
          text: m.content
      })).slice(-5); // Send last 5 messages for context

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content, history }),
      });

      const data = await res.json();

      if (res.ok) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'ai',
          content: data.response,
          isCrisis: data.isCrisis
        };
        setMessages(prev => [...prev, aiMessage]);
        
        if (data.isCrisis) {
            setShowPanic(true);
        }
      } else {
        throw new Error(data.error || 'Failed to fetch');
      }
    } catch (error) {
      console.error(error);
      // Fallback error message
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: "Maaf, aku sedang pusing (koneksi error). Bisa ulangi lagi nanti?"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#FFFBEB] font-sans">
      
      {/* 1. CHAT HEADER (Fixed Top) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 h-16 flex items-center px-4 shadow-sm">
        <Link href="/dashboard" className="p-2 mr-2 rounded-full hover:bg-emerald-50 text-emerald-700 transition-colors">
            <ArrowLeft className="w-6 h-6" />
        </Link>
        
        <div className="flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                    <Zap className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
                <h1 className="font-bold text-emerald-950 text-sm md:text-base">MINDORA</h1>
                <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    AI Online
                </p>
            </div>
        </div>
      </header>

      {/* 2. CHAT AREA (Scrollable Middle) */}
      <main className="flex-1 overflow-y-auto pt-20 pb-32 px-4 scrollbar-hide">
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Welcome Timestamp */}
          <div className="text-center">
              <span className="bg-emerald-100/50 text-emerald-600 text-[10px] px-3 py-1 rounded-full font-medium">
                  Hari ini, {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
              </span>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] md:max-w-[70%] p-4 shadow-sm text-sm md:text-base relative group ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-emerald-600 to-emerald-500 text-white rounded-2xl rounded-tr-none shadow-emerald-200'
                    : msg.isCrisis 
                        ? 'bg-rose-50 text-rose-800 border border-rose-200 rounded-2xl rounded-tl-none'
                        : 'bg-white text-emerald-950 border border-emerald-100 rounded-2xl rounded-tl-none'
                }`}
              >
                {msg.role === 'ai' && msg.isCrisis && (
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-rose-200/50 text-rose-600 font-bold text-xs uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4" />
                        Peringatan Krisis
                    </div>
                )}
                
                <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                
                {/* Time Indicator */}
                <div className={`text-[10px] mt-1 text-right opacity-60 ${msg.role === 'user' ? 'text-emerald-50' : 'text-slate-400'}`}>
                    {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white text-emerald-600 rounded-2xl rounded-tl-none p-4 flex items-center gap-3 shadow-sm border border-emerald-100">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-xs font-medium">Mindora sedang mengetik...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* 3. INPUT AREA (Fixed Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-emerald-100 pb-safe">
        <div className="max-w-3xl mx-auto relative p-4 pb-8 md:pb-4">
            
            {/* Panic Button Overlay */}
            {showPanic && (
                <div className="absolute bottom-full left-0 right-0 mb-4 animate-bounce-in px-4">
                    <a 
                        href="https://wa.me/6281234567890?text=Halo%20Kak%20GenRe,%20aku%20butuh%20bantuan%20darurat.%20Aku%20merasa%20tidak%20aman."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full bg-rose-600 hover:bg-rose-700 text-white p-4 rounded-xl shadow-xl shadow-rose-500/30 transition-all font-bold border-2 border-rose-400 ring-4 ring-rose-200"
                    >
                        <Phone className="w-6 h-6 animate-pulse" />
                        HUBUNGI KAKAK GENRE (DARURAT)
                    </a>
                </div>
            )}

            <form onSubmit={handleSend} className="flex items-end gap-3">
                <div className="flex-1 bg-slate-50 rounded-[2rem] px-5 py-3 focus-within:ring-2 focus-within:ring-emerald-500/50 transition-all border border-slate-200 focus-within:border-emerald-500 focus-within:bg-white shadow-inner">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend(e);
                            }
                        }}
                        placeholder="Ceritakan apa yang kamu rasakan..."
                        className="w-full bg-transparent border-0 p-0 text-slate-900 placeholder:text-slate-400 focus:ring-0 resize-none max-h-32 min-h-[24px] text-sm md:text-base leading-relaxed"
                        rows={1}
                        disabled={isLoading}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-3.5 rounded-full shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                    <Send className="w-5 h-5 ml-0.5" />
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}
