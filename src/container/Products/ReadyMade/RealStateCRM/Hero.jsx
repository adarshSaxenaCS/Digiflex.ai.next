import React from "react";
import Image from "next/image"; // If you're using Next.js. Otherwise use <img> tag

function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://video-previews.elements.envatousercontent.com/h264-video-previews/18e20497-1649-4361-9498-aaad11e836c5/51157855.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

      {/* Center Content */}
      <div className="relative z-10 max-w-3xl text-white px-6 py-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Real Estate CRM
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-medium">
          "Discover the best real estate CRM software for agents and realtors.
          Manage leads, properties, and client relationships efficiently with a
          top-rated CRM system."{" "}
        </p>
      </div>

      {/* Logo and Heading at Bottom Left */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
        <Image
          src="https://img.freepik.com/free-vector/house-searching-concept-landing-page_23-2148298372.jpg?ga=GA1.1.1704139200.1743657496&semt=ais_hybrid&w=740" // your logo path here
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full bg-white p-1"
        />
        <span className="text-white text-lg font-semibold">
          Real Estate CRM
        </span>
      </div>
    </div>
  );
}

export default Hero;
