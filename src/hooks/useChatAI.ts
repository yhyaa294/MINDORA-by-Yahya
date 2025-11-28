import { useState, useCallback } from 'react';

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const SAFETY_KEYWORDS = ['bunuh diri', 'sakit banget', 'mati aja', 'dipukul', 'lukai', 'darah'];

const PERSONA_SYSTEM_PROMPT = `
Identity: Sobat SEHATI (17-year-old peer counselor).
Tone: Casual, empathetic, slang (aku-kamu, santai aja), emojis 💙.
Core Knowledge: Triad KRR (Seksualitas, HIV/AIDS, NAPZA).
`;

// Simulated AI Response logic for Demo purposes
// In a real app, this would call an API endpoint (e.g., /api/chat)
const generateMockResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  // 1. Safety Protocol Check
  if (SAFETY_KEYWORDS.some(keyword => lowerInput.includes(keyword))) {
    return "Aku dengar kamu, dan aku khawatir banget. 😟 Ini terdengar berat. Tolong, kamu gak sendirian. Bisakah kamu tekan tombol 'Bantuan Darurat' di menu atas? Atau cerita ke orang dewasa yang kamu percaya ya. Aku di sini buat dengerin, tapi keamananmu nomor satu. 💙";
  }

  // 2. Greeting / Intro
  if (lowerInput.match(/halo|hi|hai|pagi|siang|malam/)) {
    return "Halo bestie! 👋 Ada cerita apa hari ini? Santai aja, aku siap dengerin kok. Mau curhat soal sekolah, temen, atau gebetan? 😉";
  }

  // 3. Emotional Validation (Sadness)
  if (lowerInput.match(/sedih|galau|capek|lelah|nangis/)) {
    return "Peluk jauh! 🤗 Valid banget perasaanmu itu. Kadang hidup emang bikin capek ya. Mau cerita lebih detail kenapa rasanya berat hari ini? Aku dengerin.";
  }

  // 4. Triad KRR - NAPZA
  if (lowerInput.match(/narkoba|obat|rokok|minum/)) {
    return "Waduh, hati-hati ya bestie. 🙅‍♂️ Hal-hal kayak gitu emang kadang bikin penasaran atau pelarian sesaat, tapi dampaknya panjang banget. Mending kita ngobrolin hobi kamu yuk? Kamu sukanya ngapain kalo lagi gabut?";
  }

  // 5. Default Empathetic Response
  return "Hmm, aku ngerti. Terus gimana lagi? Ceritain aja semuanya, aku di sini gak bakal nge-judge kok. 💙";
};

export function useChatAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hai! Aku Sobat SEHATI 💙. Ada yang lagi ngeganjel di hati? Cerita sini, aman kok!',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    // Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    // Simulate Network Delay (Human-like typing)
    setTimeout(() => {
      const responseText = generateMockResponse(content);
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5s and 2.5s

  }, []);

  return {
    messages,
    isLoading,
    sendMessage
  };
}
