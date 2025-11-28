import React from 'react';

interface MysteryLogoProps {
  className?: string;
  text?: string;
  subtext?: string;
}

const MysteryLogo: React.FC<MysteryLogoProps> = ({ 
  className = "w-36 h-12", 
  text = "COMING SOON",
  subtext = "SECRET PROJECT"
}) => {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-gradient-to-b from-slate-800 to-slate-950 flex flex-col items-center justify-center border border-slate-700 shadow-inner group ${className}`}>
      {/* Silhouette / Background Pattern Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      
      {/* Glowing Light Effect (Animated) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

      {/* Text Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <span className="text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] text-xs sm:text-sm font-extrabold tracking-[0.2em] animate-pulse">
          {text}
        </span>
        {subtext && (
            <span className="text-[8px] text-slate-500 tracking-widest uppercase mt-0.5">
                {subtext}
            </span>
        )}
      </div>
    </div>
  );
};

export default MysteryLogo;
