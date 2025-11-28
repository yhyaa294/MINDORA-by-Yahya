"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define Public Routes (Navbar Only, No Sidebar/BottomNav)
  const isPublicPage = pathname === '/' || pathname === '/login' || pathname === '/register';
  
  // Special case for Chat AI Page (Mobile Only)
  // On mobile, the Chat Room (/chat/ai) usually hides the BottomNav to give more space for the keyboard
  // But for now, let's keep it simple.
  
  if (isPublicPage) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        {/* Footer could go here if we had one */}
      </div>
    );
  }

  // App Routes (Dashboard, Chat, Profile, Materi)
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen pb-16 md:pb-0">
        <main className="flex-1 p-0">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <BottomNav />
    </div>
  );
}
