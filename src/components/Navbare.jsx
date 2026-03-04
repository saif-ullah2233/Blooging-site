import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbare = () => {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 w-full z-[100] px-10 md:px-24 lg:px-20 py-8 flex items-center justify-between bg-transparent">
 
      <div 
        className="flex-shrink-0 cursor-pointer" 
        onClick={() => navigate("/")}
      >
        <span className="text-white text-2xl md:text-3xl font-extrabold tracking-[0.15em] uppercase transition-all duration-300 hover:text-[#FBD38D]">
          MNTN
        </span>
      </div>

      <ul className="hidden md:flex items-center gap-10 lg:gap-14 text-white font-bold tracking-wide">
        <li className="cursor-pointer hover:text-[#FBD38D] transition-colors duration-300">
          Home
        </li>
        <li className="cursor-pointer hover:text-[#FBD38D] transition-colors duration-300">
          About
        </li>
        <li className="cursor-pointer hover:text-[#FBD38D] transition-colors duration-300">
          All posts
        </li>
      </ul>

      

       
      <div className="flex items-center gap-6 md:gap-10">
        
     
        <div className="flex items-center gap-2 border-b border-white/20 pb-1 focus-within:border-[#FBD38D] transition-all">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-white" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent text-white placeholder-white/50 outline-none text-sm w-20 md:w-32"
          />
        </div>

       
        <button 
          className="text-white font-bold text-sm md:text-base hover:text-[#FBD38D] transition-colors flex items-center gap-2 group" 
          onClick={() => navigate("/login")}
        >
          Login
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
      
    </nav>
  );
};