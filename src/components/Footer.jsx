import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1D27] py-24 px-10 md:px-24 lg:px-48 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16">
        
        {/* 1. BRAND COLUMN */}
        <div className="flex flex-col space-y-6 max-w-sm">
          <div className="text-2xl font-serif font-bold tracking-widest uppercase">
            MNTN
          </div>
          <p className="text-sm leading-relaxed opacity-90 font-medium">
            Get out there & discover your next slope, mountain & destination!
          </p>
          {/* Bottom Copyright - positioned to sit low like the image */}
          <div className="pt-20 text-white/40 text-xs font-medium">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </div>
        </div>

        {/* 2. NAVIGATION COLUMNS GROUP */}
        <div className="flex flex-row gap-20 md:gap-32 lg:gap-40">
          
          {/* More on The Blog */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[#FBD38D] font-bold text-lg leading-none mb-2">
              More on The Blog
            </h4>
            <nav className="flex flex-col space-y-3 text-sm font-medium">
              <a href="#" className="hover:text-[#FBD38D] transition-colors">About MNTN</a>
              <a href="#" className="hover:text-[#FBD38D] transition-colors">Contributors & Writers</a>
              <a href="#" className="hover:text-[#FBD38D] transition-colors">Write For Us</a>
              <a href="#" className="hover:text-[#FBD38D] transition-colors">Contact Us</a>
              <a href="#" className="hover:text-[#FBD38D] transition-colors">Privacy Policy</a>
            </nav>
          </div>

          {/* More on MNTN */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[#FBD38D] font-bold text-lg leading-none mb-2">
              More on MNTN
            </h4>
            <nav className="flex flex-col space-y-3 text-sm font-medium">
              <a href="#" className="hover:text-[#FBD38D] transition-colors">The Team</a>
              <a href="#" className="hover:text-[#FBD38D] transition-colors">Jobs</a>
              <a href="#" className="hover:text-[#FBD38D] transition-colors">Press</a>
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
};