import React from 'react';
import { Crown } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export const HeroProfileFrame: React.FC = () => {
  return (
    <div className="relative mx-auto flex items-center justify-center py-4 sm:py-6 select-none">
      {/* ── Background Abstract Shapes & Depth Glows ── */}
      <div
        className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-8 -right-6 sm:-bottom-12 sm:-right-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[440px] sm:h-[440px] rounded-full bg-indigo-500/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative subtle dashed circle behind for 3D depth */}
      <div
        className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[490px] lg:h-[490px] rounded-full border border-blue-400/20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] lg:w-[440px] lg:h-[440px] rounded-full border border-dashed border-cyan-400/20 pointer-events-none rotate-45"
        aria-hidden="true"
      />

      {/* ── Main Floating Image Container ── */}
      <div className="relative profile-floating-frame hover:scale-[1.02] transition-transform duration-300">
        {/* Custom Asymmetrical Frame with 7px White Border & Soft Blue Gradient */}
        <div
          className="relative w-[280px] h-[280px] xs:w-[310px] xs:h-[310px] sm:w-[380px] sm:h-[380px] md:w-[410px] md:h-[410px] lg:w-[470px] lg:h-[470px] xl:w-[490px] xl:h-[490px] overflow-hidden border-[6px] sm:border-[7px] border-white shadow-[0_25px_50px_-12px_rgba(59,130,246,0.38),0_12px_24px_-8px_rgba(37,99,235,0.25)]"
          style={{
            borderRadius: '30% 24% 28% 22%',
            background: 'linear-gradient(135deg, #E6F0FF 0%, #8CB5FF 55%, #3B82F6 100%)',
          }}
        >
          {/* Subtle Inner Highlight Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Original Portrait Image - Centered, upper body & face visible */}
          <img
            src={personalInfo.photoUrl}
            alt={personalInfo.name}
            className="w-full h-full object-cover object-[center_12%] scale-[1.03] transition-transform duration-500 hover:scale-105"
            loading="eager"
          />
        </div>

        {/* ── Active for Hire Badge ── */}
        <div className="absolute -bottom-2 right-1 sm:-bottom-3 sm:-right-2 md:-bottom-2 md:-right-3 z-20 badge-floating">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-100 shadow-[0_12px_28px_rgba(37,99,235,0.22),0_4px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.3)] transition-all cursor-default">
            {/* Gold Crown Icon */}
            <Crown
              className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#F59E0B] fill-[#F59E0B] shrink-0"
              aria-hidden="true"
            />

            {/* Green Pulsing Status Indicator */}
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-500" />
            </span>

            {/* Badge Text in #2563EB */}
            <span className="font-heading font-extrabold text-xs sm:text-sm text-[#2563EB] tracking-tight whitespace-nowrap">
              Active for Hire
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
