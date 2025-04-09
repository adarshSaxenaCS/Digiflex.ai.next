"use client";

import React, { useEffect, useRef } from "react";

const Aiapphero = () => {
  const letterRefs = useRef([]);
  const text = "Build Smarter Apps with AI";

  useEffect(() => {
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        letter.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
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
            src='https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/homePageVedio.mp4' // Replace with your video URL
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Aiapphero;









