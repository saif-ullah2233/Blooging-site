import React from "react";
import number2 from "../images/2.png"; // Large background "02"
import secondimage from "../images/image2.png"; // Hiker on the rock (left side)

export const Hikingassintials = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0B1D27] flex items-center overflow-hidden py-20 px-10 md:px-24 lg:px-48">
      
      {/* 1. BACKGROUND DECORATIVE NUMBER "02" */}
      {/* Positioned behind the text on the right side */}
      <div className="absolute top-10 right-10 md:right-24 lg:right-48 z-0 opacity-50 pointer-events-none">
        <img 
          src={number2} 
          alt="02" 
          className="w-auto h-40 md:h-64 lg:h-80 object-contain"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center w-full">
        
        {/* 2. IMAGE COLUMN (Now on the Left) */}
        <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full aspect-[4/5] max-w-md lg:max-w-lg shadow-2xl">
            <img 
              src={secondimage} 
              alt="Picking the right gear" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3. TEXT CONTENT COLUMN (Now on the Right) */}
        <div className="flex flex-col space-y-6 max-w-xl order-1 lg:order-2">
          {/* Subtitle with Gold Line */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-[#FBD38D]"></div>
            <span className="text-[#FBD38D] tracking-[0.4em] font-bold text-xs md:text-sm uppercase">
              Hiking Essentials
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Picking the right <br /> Hiking Gear!
          </h2>

          {/* Paragraph Content */}
          <p className="text-white text-sm md:text-base leading-relaxed opacity-80 font-light">
            The nice thing about beginning hiking is that you don't really need any
            special gear; you can probably get away with things you already have.
            Let's start with clothing. A typical mistake hiking beginners make is wearing
            jeans and regular clothes, which will get heavy and chafe if they get
            sweaty or wet.
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-3 text-[#FBD38D] font-bold cursor-pointer group pt-4">
            <span className="text-sm uppercase tracking-widest border-b border-transparent group-hover:border-[#FBD38D] transition-all">
              read more
            </span>
            <span className="text-xl transition-transform group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};