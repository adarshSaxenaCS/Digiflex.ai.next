import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://video-previews.elements.envatousercontent.com/h264-video-previews/18e20497-1649-4361-9498-aaad11e836c5/51157855.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl text-white px-6 py-12">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-shadow-md">
          HRMS Solutions
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-xl opacity-80">
        "Discover the best HRMS software for small businesses and enterprises. Manage payroll, employee records, and HR operations with top HR management systems."
        </p>
       
        
      </div>
      <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
              <Image
                src="https://img.freepik.com/free-vector/house-searching-concept-landing-page_23-2148298372.jpg?ga=GA1.1.1704139200.1743657496&semt=ais_hybrid&w=740" // your logo path here
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full bg-white p-1"
              />
              <span className="text-white text-lg font-semibold">HRMS Solutions</span>
            </div>
    </div>
  );
}

export default Hero;
