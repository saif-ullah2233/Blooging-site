import React from "react";
import herobgimage from "../images/Herobgimage.jpg";
import { Navbare } from "./Navbare";


export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0B1D27]">
      {/* 1. NAVIGATION BAR */}
      <Navbare/>

      {/* 2. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src={herobgimage} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-top opacity-90" 
        />
      </div>

      {/* 3. CINEMATIC GRADIENT SHADE (Top & Bottom Fade) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(11, 29, 39, 0) 25%, rgba(11, 29, 39, 0) 60%, rgba(11, 29, 39, 0.8) 85%, rgba(11, 29, 39, 1) 100%)' 
        }}
      ></div>

      {/* 4. LEFT SIDE: VERTICAL SOCIALS (Pixel Perfect Alignment) */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-6 text-white font-bold tracking-widest text-xs">
        <span className="rotate-90 origin-center whitespace-nowrap mb-6">Follow us</span>
        <a href="#" className="hover:text-[#FBD38D] transition-colors cursor-pointer">
          <i className="fab fa-instagram text-lg"></i>
        </a>
        <a href="#" className="hover:text-[#FBD38D] transition-colors cursor-pointer">
          <i className="fab fa-twitter text-lg"></i>
        </a>
      </div>

      {/* 5. MAIN CONTENT LAYER */}
      <div className="relative z-20 flex flex-col justify-center h-full px-16 md:px-32 lg:px-64">
        <div className="max-w-4xl">
          {/* Subtitle with Gold Line */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[2px] bg-[#FBD38D]"></div>
            <span className="text-[#FBD38D] tracking-[0.4em] font-bold text-xs uppercase">
              A Hiking Guide
            </span>
          </div>
          
          {/* Main Title - Font size adjusted for Hero impact */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.1] mb-8">
            Be Prepared For The <br /> Mountains And Beyond!
          </h1>
          
          {/* Scroll Down CTA */}
          <div className="flex items-center gap-3 text-white font-bold cursor-pointer hover:text-[#FBD38D] transition-all group">
            <span className="text-sm">scroll down</span>
            <span className="text-lg group-hover:translate-y-1 transition-transform">↓</span>
          </div>
        </div>
      </div>

      {/* 6. RIGHT SIDE: VERTICAL SLIDER (Pixel Perfect Indicator) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex flex-col text-white font-bold text-sm">
        <div className="flex flex-col border-r-2 border-white/20">
          <div className="flex flex-col items-end">
             {/* "Start" is the active item with the thick white border */}
            <span className="px-6 py-4 border-r-4 border-white -mr-[3px]">Start</span>
            <span className="px-6 py-4 text-white/40 hover:text-white transition-colors cursor-pointer">01</span>
            <span className="px-6 py-4 text-white/40 hover:text-white transition-colors cursor-pointer">02</span>
            <span className="px-6 py-4 text-white/40 hover:text-white transition-colors cursor-pointer">03</span>
          </div>
        </div>
      </div>

    </section>
  );
};