"use client";
import React, { useEffect, useRef } from "react";

function Hero() {
  const letterRefs = useRef([]);
  const text = "Commerce Cloud";

  useEffect(() => {
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        letter.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          className="absolute object-cover w-full h-full"
        >
          <source
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Salesforce.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-transparent to-blue-900/50 -z-10" />

      {/* Animated Particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative flex items-center justify-center z-20 min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto text-center transform hover:scale-105 transition-transform duration-700">
          {/* Animated Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {text.split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => (letterRefs.current[index] = el)}
                className="inline-block animate-letter-rotate hover:text-blue-400 transition-colors duration-300"
              >
                {char}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Commerce Cloud enhances online shopping with AI-driven personalization, scalability, and seamless customer experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
