"use client";
import React from "react";

function PortfolioHero() {
  return (
    <div className="relative w-full min-h-[60vh] overflow-hidden bg-black"> {/* Further reduced height to 60% of the viewport */}
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          style={{ position: "absolute", top: "0", left: "0" }}
        >
          <source
            src="https://cdn.pixabay.com/video/2016/02/12/2127-155244168_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 z-0 backdrop-blur-lg" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-purple-900/90 to-black/95 z-10 animate-gradient-extreme mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-transparent to-blue-900/50 z-10 animate-gradient-reverse mix-blend-multiply" />

      {/* Content */}
      <div className="relative flex items-center justify-center z-20 min-h-[60vh] px-6"> {/* Decreased content height */}
        <div className="text-center text-white max-w-3xl">
          {/* Subtitle */}
          <h3 className="text-sm md:text-base uppercase tracking-wide text-gray-300">
            AI-Driven Web & Mobile App Solutions
          </h3>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Innovate <span className="text-purple-500">Faster</span> , Scale Smarter!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PortfolioHero;
