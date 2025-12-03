"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChatRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/chat/ai");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBEB]">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-900/10 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-emerald-900 text-sm font-medium">Connecting to Mind Companion...</p>
      </div>
    </div>
  );
}
