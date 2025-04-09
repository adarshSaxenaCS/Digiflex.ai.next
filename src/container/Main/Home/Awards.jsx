"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function App() {
  const sectionRef = useRef(null);
  const [sectionDimensions, setSectionDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const updateSectionDimensions = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionDimensions({
          width: rect.width,
          height: rect.height,
          top: rect.top + window.scrollY,
          left: rect.left,
        });
      }
    };

    updateSectionDimensions();
    window.addEventListener("resize", updateSectionDimensions);

    return () => window.removeEventListener("resize", updateSectionDimensions);
  }, []);

  // Award badges with specific size configurations and multipliers
  const targetSize = 200; // Target size for all badges
  const awards = [
    {
      id: 1,
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/clutch.png",
      alt: "Clutch Award Badge",
      link: "https://clutch.co",
      width: 200,
      height: 200,
      multiplier: 2.2, // Already at target size
    },
    {
      id: 2,
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/goodfirms.png",
      alt: "Top Web Development Company",
      link: "https://www.goodfirms.co",
      width: 180,
      height: 180,
      multiplier: targetSize / 180, // 1.111
    },
    {
      id: 3,
      image: "https://erawebstudio.com/wp-content/uploads/2022/04/upwork-badge.png",
      alt: "Upwork Top Rated Badge",
      link: "https://www.upwork.com",
      width: 180,
      height: 180,
      multiplier: targetSize / 180, // 1.111
    },
    {
      id: 4,
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/google.png",
      alt: "Google 5-Star Rating",
      link: "https://www.google.com",
      width: 250,
      height: 250,
      multiplier: 2.2,
    },
    {
      id: 5,
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/mobapp.png",
      alt: "Top Rated App Development",
      link: "https://www.softwareworld.co",
      width: 170,
      height: 170,
      multiplier: 1.0, 
    },
    {
      id: 6,
      image: "https://www.softwaresuggest.com/award_logo/customer-choice-winter-2025.png",
      alt: "Customer Choice Winter 2025",
      link: "https://www.softwaresuggest.com",
      width: 160,
      height: 160,
      multiplier: targetSize / 160, // 1.25
    },
    {
      id: 7,
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/globalSpring.png",
      alt: "Clutch Global Spring 2024",
      link: "https://clutch.co",
      width: 160,
      height: 160,
      multiplier: targetSize / 160, // 1.25
    },
    {
      id: 8,
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/manifest.png",
      alt: "Most Reviewed AI Company",
      link: "https://themanifest.com",
      width: 160,
      height: 160,
      multiplier: 0.8, 
    },
  ];

  const Star = ({ delay = 0, size = 2 }) => {
    const randomX = React.useMemo(
      () => Math.random() * sectionDimensions.width,
      [sectionDimensions.width]
    );
    const randomY = React.useMemo(
      () => Math.random() * sectionDimensions.height,
      [sectionDimensions.height]
    );

    return (
      <motion.div
        className="absolute"
        style={{ left: randomX, top: randomY }}
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
      >
        <svg
          width={size * 16}
          height={size * 16}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
            fill="currentColor"
            className="text-yellow-300"
          />
        </svg>
      </motion.div>
    );
  };

  const Confetti = ({ count = 50 }) => {
    return (
      <>
        {[...Array(count)].map((_, i) => {
          const randomX = Math.random() * sectionDimensions.width;
          const randomDelay = Math.random() * 20;
          const randomDuration = 15 + Math.random() * 10;
          const randomColor = [
            "bg-blue-400",
            "bg-purple-400",
            "bg-pink-400",
            "bg-yellow-400",
            "bg-green-400",
          ][Math.floor(Math.random() * 5)];
          const size = Math.random() * 8 + 4;

          return (
            <motion.div
              key={i}
              className={`absolute h-2 w-1 rounded-full ${randomColor}`}
              style={{ width: size, height: size, left: randomX }}
              initial={{ y: -20, rotate: 0 }}
              animate={{
                y: sectionDimensions.height + 20,
                rotate: 360,
                x: randomX + (Math.random() - 0.5) * 100,
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear",
              }}
            />
          );
        })}
      </>
    );
  };

  const CelebrationBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sectionDimensions.width > 0 && [
        ...[...Array(15)].map((_, i) => (
          <Star
            key={`star-${i}`}
            delay={i * 0.2}
            size={1 + Math.random() * 1.5}
          />
        )),
        <Confetti key="confetti" count={30} />,
        ...[...Array(5)].map((_, i) => {
          const randomX = Math.random() * sectionDimensions.width;
          const randomY = Math.random() * sectionDimensions.height;

          return (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-20 blur-xl"
              style={{ height: "8rem", width: "8rem", left: randomX, top: randomY }}
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 2, 1],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 2,
              }}
            />
          );
        }),
      ]}
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      <section
        ref={sectionRef}
        className="py-12 sm:py-20 px-4 relative max-w-7xl mx-auto"
      >
        <CelebrationBackground />
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="text-blue-700 text-4xl sm:text-5xl md:text-6xl font-bold">
            Awards & Recognitions
          </h2>
        </div>

        {/* Fixed size award grid with better consistency */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <div className="relative flex items-center justify-center p-2">
                  {/* Use fixed target size with multiplier applied to original dimensions */}
                  <Image
                    src={award.image}
                    alt={award.alt}
                    width={targetSize}
                    height={targetSize}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                      transform: `scale(${award.multiplier})`, // Apply multiplier
                      transformOrigin: "center",
                    }}
                    quality={90}
                    loading="lazy"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;