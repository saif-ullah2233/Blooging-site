import React from "react";
import number1 from "../images/01.png"; // The large background '01'
import image1 from "../images/image1.png"; // The hiker image on the right

export const Getstarted = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0B1D27] flex items-center overflow-hidden py-20 px-10 md:px-24 lg:px-48">
      
      
      <div className="absolute top-10 left-10 md:left-24 lg:left-32 z-0 opacity-50 pointer-events-none">
        <img 
          src={number1} 
          alt="01" 
          className="w-auto h-40 md:h-64 lg:h-80 object-contain"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
    
        <div className="flex flex-col space-y-6 max-w-xl">
        
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-[#FBD38D]"></div>
            <span className="text-[#FBD38D] tracking-[0.4em] font-bold text-xs md:text-sm uppercase">
              Get Started
            </span>
          </div>

        
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            What level of hiker are you?
          </h2>

          <p className="text-white text-sm md:text-base leading-relaxed opacity-90">
            Determining what level of hiker you are can be an important tool when 
            planning future hikes. This hiking level guide will help you plan hikes 
            according to different hike ratings set by various websites like All Trails 
            and Modern Hiker. What type of hiker are you – novice, moderate, advanced 
            moderate, expert, or expert backpacker?
          </p>

          <div className="flex items-center gap-3 text-[#FBD38D] font-bold cursor-pointer group pt-4">
            <span className="text-sm uppercase tracking-widest border-b border-transparent group-hover:border-[#FBD38D] transition-all">
              read more
            </span>
            <span className="text-xl transition-transform group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[4/5] max-w-md lg:max-w-lg shadow-2xl">
            <img 
              src={image1} 
              alt="Hiker on trail" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};