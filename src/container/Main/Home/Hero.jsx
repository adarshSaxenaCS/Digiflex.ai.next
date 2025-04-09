"use client";
import Image from "next/image";
import Head from "next/head"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MetallicPaint from "@/components/ui/MetallicPaint"; // Ensure this is the correct path
// Using public folder for media files in Next.js
// import bg from "@https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/HomeHeroBg4.mp4";
// import bg2 from "@https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/HomeHeroBg.jpg";

// Client component for text effect
const TextEffect = () => {
  const [textImageData, setTextImageData] = useState(null);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let debounceTimer;
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(debounceTimer);
    };
  }, []);

  const calculateResponsiveFontSize = (width) => {
    const baseSize = 500;
    const baseWidth = 1920;
    const minSize = 180;
    const maxSize = 500;
    const calculatedSize = Math.round((width / baseWidth) * baseSize);
    return Math.max(minSize, Math.min(calculatedSize, maxSize));
  };

  useEffect(() => {
    const lines = ["The Next ", "Evolution of", "Intelligence", "is Here."];
    const fontSize = calculateResponsiveFontSize(screenSize.width);
    const fontSizeRatio = fontSize / 500;
    const canvasWidth = Math.round(3700 * fontSizeRatio);
    const canvasHeight = Math.round(2100 * fontSizeRatio);
    const lineHeightValue = Math.round(460 * fontSizeRatio);

    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    lines.forEach((line, index) => {
      ctx.fillText(line, canvasWidth / 2, (index + 1) * lineHeightValue);
    });

    setTextImageData(ctx.getImageData(0, 0, canvasWidth, canvasHeight));
  }, [screenSize]);

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <MetallicPaint imageData={textImageData} />
    </div>
  );
};

// Server component for static content
const HeroContent = () => (
  <div className="relative w-full h-full md:h-screen flex flex-col md:flex-row bg-[#021B3B] overflow-hidden transition-all duration-500 ease-in-out">
    <motion.div
      className="w-full md:w-1/2 h-full md:h-full flex flex-col items-center justify-center text-white relative z-20 p-6 sm:p-8 md:p-10 text-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/HomeHeroBg.jpg"
        width={500}
        height={300}
        alt="Background"
        priority={true}
      />
      <TextEffect />
    </motion.div>

    <motion.div
      className="relative hidden md:block w-full md:w-1/2 h-full overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/homePageVedio.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#021B3B] w-full sm:w-2/3 md:w-1/4"></div>
    </motion.div>
  </div>
);

export default HeroContent;
