import React from "react";

export default function AboutMe() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      <div className="  p-8 grid md:grid-cols-2 gap-8 text-white">
        
        {/* Left Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
            alt="Saifullah"
            className=" shadow-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-400">
            About Me
          </h1>

          <h2 className="text-2xl font-semibold mb-2">
            Hi, I'm Saifullah!
          </h2>

          <p className="text-lg text-gray-200 mb-6 text-xl">
            I'm passionate about exploring the beauty of Kashmir and sharing
            unforgettable travel experiences with the world. My mission is to
            help travelers discover hidden gems and plan perfect adventures.
          </p>

          <div className="space-y-3">
            <p>
              <span className="font-semibold text-orange-400">
                My Mission:
              </span>{" "}
              Helping you discover the hidden gems of Kashmir.
            </p>

            <p>
              <span className="font-semibold text-orange-400">
                My Expertise:
              </span>{" "}
              Tour Planning & Travel Guidance.
            </p>

            <p>
              <span className="font-semibold text-orange-400">
                What You'll Find:
              </span>{" "}
              Travel Guides, Adventure Stories & Business Ideas.
            </p>
          </div>

          <div className="mt-6">
            <p className="italic text-orange-300">
              “Travel is the only thing you buy that makes you richer.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}