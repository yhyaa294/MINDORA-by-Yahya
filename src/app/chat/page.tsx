"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar";
import { useChatAI } from "@/hooks/useChatAI";
import { Send, Bot, User, MoreVertical, AlertTriangle, MessageCircle, Calendar, UserPlus } from 'lucide-react';

export default function ChatPage() {
  const { messages, isLoading, sendMessage } = useChatAI();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'ai' | 'counselor'>('ai');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (activeTab === 'ai') {
      scrollToBottom();
    }
  }, [messages, isLoading, activeTab]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <main className="min-h-screen bg-bg-soft flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-6 flex flex-col h-[calc(100vh-64px)]">
        
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-4 bg-white p-2 rounded-xl shadow-sm">
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200 ${
              activeTab === 'ai' 
                ? 'bg-primary text-white shadow-md font-semibold' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Bot className="h-5 w-5" />
            <span>Chat AI</span>
          </button>
          <button
            onClick={() => setActiveTab('counselor')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200 ${
              activeTab === 'counselor' 
                ? 'bg-secondary text-white shadow-md font-semibold' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <UserPlus className="h-5 w-5" />
            <span>Chat Konselor</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          
          {/* AI CHAT TAB */}
          {activeTab === 'ai' && (
            <>
              {/* Header Area */}
              <div className="bg-white p-4 border-b border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="font-bold text-text-main text-lg">Sobat SEHATI</h1>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-xs text-slate-500">Online • AI Counselor</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                   <button className="p-2 hover:bg-red-50 text-red-500 rounded-full transition-colors" title="Bantuan Darurat">
                     <AlertTriangle className="h-5 w-5" />
                   </button>
                   <button className="p-2 hover:bg-slate-100 text-slate-600 rounded-full transition-colors">
                     <MoreVertical className="h-5 w-5" />
                   </button>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 bg-white overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex max-w-[85%] md:max-w-[70%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-200' : 'bg-blue-100'}`}>
                        {msg.role === 'user' ? <User className="h-5 w-5 text-slate-600" /> : <Bot className="h-5 w-5 text-primary" />}
                      </div>

                      {/* Bubble */}
                      <div className={`p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-primary text-white rounded-tr-none' 
                          : 'bg-slate-50 text-text-main border border-slate-100 rounded-tl-none'
                      }`}>
                        {msg.content}
                        <div className={`text-[10px] mt-1 opacity-70 ${msg.role === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex max-w-[80%] gap-3">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="bg-white p-4 border-t border-slate-100">
                <form onSubmit={handleSubmit} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ketik pesanmu di sini..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    disabled={isLoading}
                  />
                  <button 
                    type="submit" 
                    disabled={!input.trim() || isLoading}
                    className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </>
          )}

          {/* COUNSELOR CHAT TAB */}
          {activeTab === 'counselor' && (
            <div className="flex-1 flex flex-col p-8 overflow-y-auto">
              <div className="max-w-lg mx-auto w-full space-y-8">
                <div className="text-center space-y-2">
                  <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserPlus className="h-10 w-10 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-main">Janji Temu Konselor</h2>
                  <p className="text-slate-500">
                    Ingin ngobrol lebih dalam dengan Kakak GenRe atau Guru BK? Isi form ini untuk menjadwalkan sesi curhat privat.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-main">Nama Kamu (Boleh Samaran)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all" placeholder="Contoh: Bunga" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-main">Topik Curhat</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all">
                      <option>Masalah Sekolah / Belajar</option>
                      <option>Hubungan dengan Teman/Pacar</option>
                      <option>Keluarga</option>
                      <option>Kesehatan Mental (Cemas/Sedih)</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-main">Pilih Konselor</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 has-[:checked]:border-secondary has-[:checked]:bg-secondary/5 transition-all">
                        <input type="radio" name="counselor" className="accent-secondary" />
                        <div className="text-sm">
                          <div className="font-bold text-text-main">Kakak GenRe</div>
                          <div className="text-xs text-slate-500">Teman Sebaya</div>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 has-[:checked]:border-secondary has-[:checked]:bg-secondary/5 transition-all">
                        <input type="radio" name="counselor" className="accent-secondary" />
                        <div className="text-sm">
                          <div className="font-bold text-text-main">Guru BK</div>
                          <div className="text-xs text-slate-500">Profesional</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-main">Pesan Singkat (Opsional)</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all h-24 resize-none" placeholder="Ceritain dikit dong apa yang kamu rasain..."></textarea>
                  </div>

                  <button type="button" className="w-full py-4 bg-secondary text-white rounded-xl font-bold shadow-lg hover:bg-secondary/90 hover:shadow-secondary/30 transition-all transform hover:-translate-y-1">
                    Kirim Permintaan
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
        
        {activeTab === 'ai' && (
          <p className="text-center text-xs text-slate-400 mt-2">
            Sobat SEHATI adalah AI. Untuk keadaan darurat, hubungi profesional segera.
          </p>
        )}
      </div>
    </main>
  );
}
