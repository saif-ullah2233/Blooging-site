import React from "react";
import number3 from "../images/3.png"; // Large background "03"
import thirdimage from "../images/image3.png"; // Hand holding compass (right side)

export const Mapunderstanding = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0B1D27] flex items-center overflow-hidden py-20 px-10 md:px-24 lg:px-48">
      
      {/* 1. BACKGROUND DECORATIVE NUMBER "03" */}
      {/* Positioned behind the text on the left side */}
      <div className="absolute top-10 left-10 md:left-24 lg:left-32 z-0 opacity-50 pointer-events-none">
        <img 
          src={number3} 
          alt="03" 
          className="w-auto h-40 md:h-64 lg:h-80 object-contain"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
        
        {/* 2. TEXT CONTENT COLUMN (Left Side) */}
        <div className="flex flex-col space-y-6 max-w-xl">
          {/* Subtitle with Gold Line */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-[#FBD38D]"></div>
            <span className="text-[#FBD38D] tracking-[0.4em] font-bold text-xs md:text-sm uppercase">
              Where you go is the key
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Understand Your <br /> Map & Timing
          </h2>

          {/* Paragraph Content */}
          <p className="text-white text-sm md:text-base leading-relaxed opacity-80 font-light">
            To start, print out the hiking guide and map. If it’s raining, throw them in a
            Zip-Lock bag. Read over the guide, study the map, and have a good idea
            of what to expect. I like to know what my next landmark is as I hike. For
            example, I’ll read the guide and know that say, in a mile, I make a right turn
            at the junction.
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

        {/* 3. IMAGE COLUMN (Right Side) */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[4/5] max-w-md lg:max-w-lg shadow-2xl">
            <img 
              src={thirdimage} 
              alt="Compass and Map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};