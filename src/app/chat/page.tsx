"use client";

import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Send, Bot, User, Loader2, AlertTriangle, Phone } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
  isCrisis?: boolean;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: 'Halo! Aku Sobat SEHATI. Aku siap mendengarkan ceritamu tanpa menghakimi. Apa yang sedang kamu rasakan?'
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

  const handleSend = async (e: React.FormEvent) => {
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
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content }),
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
    <div className="flex flex-col h-screen bg-slate-50">
      <Navbar />

      {/* Chat Container */}
      <main className="flex-1 max-w-2xl w-full mx-auto p-4 flex flex-col relative">
        
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto space-y-4 pb-4 rounded-2xl p-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 shadow-sm text-sm md:text-base ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-sm'
                    : msg.isCrisis 
                        ? 'bg-rose-50 text-rose-800 border border-rose-200 rounded-tl-sm'
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-sm'
                }`}
              >
                {msg.role === 'ai' && (
                    <div className="flex items-center gap-2 mb-2 opacity-70">
                        {msg.isCrisis ? <AlertTriangle className="w-4 h-4 text-rose-600" /> : <Bot className="w-4 h-4" />}
                        <span className="text-xs font-bold">{msg.isCrisis ? 'SISTEM DARURAT' : 'Sobat SEHATI'}</span>
                    </div>
                )}
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-500 rounded-2xl rounded-tl-sm p-4 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-xs">Sedang mengetik...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Panic Button Overlay (Only shows when needed) */}
        {showPanic && (
            <div className="mb-4 animate-bounce-in">
                <a 
                    href="https://wa.me/6281234567890?text=Halo%20Kak%20GenRe,%20aku%20butuh%20bantuan%20darurat.%20Aku%20merasa%20tidak%20aman."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-rose-600 hover:bg-rose-700 text-white p-4 rounded-xl shadow-xl shadow-rose-500/30 transition-all font-bold"
                >
                    <Phone className="w-5 h-5 animate-pulse" />
                    HUBUNGI KAKAK GENRE SEKARANG (DARURAT)
                </a>
            </div>
        )}

        {/* Input Area */}
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 mt-auto">
          <form onSubmit={handleSend} className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ceritakan apa yang kamu rasakan..."
              className="flex-1 bg-slate-50 border-0 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 rounded-xl px-4 py-3"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-blue-500/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <p className="text-center text-[10px] text-slate-400 mt-3">
            Chat ini bersifat privat. AI bisa membuat kesalahan.
          </p>
        </div>

      </main>
    </div>
  );
}
