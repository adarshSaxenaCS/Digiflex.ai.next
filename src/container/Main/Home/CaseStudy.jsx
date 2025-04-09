"use client";
import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaLock,
  FaCloud,
  FaMicrochip,
  FaCubes,
  FaEye,
  FaNetworkWired,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";
import WrapperContainer from "../../../Layout/WrapperContainer";

const images1 = [
  "https://i.pinimg.com/736x/ae/5f/c6/ae5fc66ea21871dd7aa620e7109f048d.jpg",
  "https://i.pinimg.com/736x/85/2b/2f/852b2f1dda4e60109535ae25327391e6.jpg",
  "https://i.pinimg.com/736x/ae/70/96/ae7096e8c42185fbc1eda6b54eefa4f8.jpg",
  "https://i.pinimg.com/736x/91/fc/ed/91fced729a9ceb98fc3889b23a38c184.jpg",
];

const images2 = [
  "https://i.pinimg.com/736x/0e/c2/94/0ec294ac6fc6e583ad648f9aefd01666.jpg",
  "https://i.pinimg.com/736x/57/a2/07/57a2079f1f20614c08e84d596cc7d0f1.jpg",
  "https://i.pinimg.com/736x/dc/03/2f/dc032f4708ac43b395204450bd888ac3.jpg",
  "https://i.pinimg.com/736x/47/f6/82/47f682ac56e35aa606baa273b2810931.jpg",
];

const technologies = [
  {
    name: "Artificial Intelligence",
    description: "AI powers automation, chatbots, and smart assistants.",
    icon: <FaRobot />,
  },
  {
    name: "Machine Learning",
    description: "ML enables systems to learn and improve from data.",
    icon: <FaBrain />,
  },
  {
    name: "Blockchain",
    description:
      "Decentralized and secure technology for digital transactions.",
    icon: <FaCubes />,
  },
  {
    name: "Cybersecurity",
    description: "Protecting digital assets from cyber threats.",
    icon: <FaLock />,
  },
  {
    name: "Cloud Computing",
    description: "Scalable and flexible storage solutions.",
    icon: <FaCloud />,
  },
  {
    name: "IoT (Internet of Things)",
    description: "Connecting smart devices for automation.",
    icon: <FaNetworkWired />,
  },
  {
    name: "Quantum Computing",
    description: "Next-gen computing for complex problem-solving.",
    icon: <FaMicrochip />,
  },
  {
    name: "AR/VR (Augmented & Virtual Reality)",
    description: "Immersive digital experiences.",
    icon: <FaEye />,
  },
];

const Marquee = ({ images, direction }) => {
  // Calculate total content height to ensure seamless looping
  const imageHeight = 100; // Height of each image
  const gap = 16; // Gap between images (4 in gap-4 = 16px)
  const totalContentHeight = images.length * (imageHeight + gap);
  
  return (
    <div className="overflow-hidden h-[300px] md:h-[350px] lg:h-[400px] w-[140px] md:w-[150px] lg:w-[160px] relative">
      <motion.div
        animate={{ 
          y: direction === "up" 
            ? [-totalContentHeight / 2, -totalContentHeight - totalContentHeight / 2] 
            : [-totalContentHeight - totalContentHeight / 2, -totalContentHeight / 2]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 15,
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex flex-col gap-4"
      >
        {/* Triple the images to ensure no empty space during transition */}
        {[...images, ...images, ...images].map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Marquee Image"
            width={160}
            height={imageHeight}
            className="w-[140px] md:w-[150px] lg:w-[160px] h-[100px] object-cover mx-auto"
            priority={index < images.length} // Prioritize loading first set
          />
        ))}
      </motion.div>
    </div>
  );
};

const TechnologyCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 w-full">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="p-3 md:p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 bg-white text-black flex items-center gap-3 md:gap-4"
        >
          <div className="text-blue-600 text-xl md:text-2xl">{tech.icon}</div>
          <div>
            <h3 className="font-bold text-base md:text-lg">{tech.name}</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              {tech.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Custom breakpoint for iPads
const useIpadBreakpoint = () => {
  const [isIpad, setIsIpad] = React.useState(false);

  React.useEffect(() => {
    const checkIfIpad = () => {
      // iPad Mini is 768px width, iPad Air is 820px width in portrait mode
      const width = window.innerWidth;
      setIsIpad(width >= 768 && width <= 1024);
    };

    checkIfIpad();
    window.addEventListener("resize", checkIfIpad);
    return () => window.removeEventListener("resize", checkIfIpad);
  }, []);

  return isIpad;
};

const KeyFeatures = () => {
  const isIpad = useIpadBreakpoint();

  return (
    <WrapperContainer>
      <div className="relative w-full max-w-[1400px] rounded-[2.5rem] p-0.5 overflow-hidden bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20">
        {/* Animated gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[250px] md:w-[300px] lg:w-[400px] h-[250px] md:h-[300px] lg:h-[400px] bg-blue-400 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[250px] md:w-64 lg:w-96 h-[250px] md:h-64 lg:h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Inner Content */}
        <div className="relative bg-white rounded-[2.4rem] p-6 md:p-8 lg:p-12 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6 md:mb-8"
          >
            Key Functions
          </motion.h2>

          {/* iPad-specific layout adjustments */}
          <div
            className={`flex ${
              isIpad ? "flex-col" : "flex-col lg:flex-row"
            } gap-6 md:gap-8 items-center`}
          >
            <div className="flex gap-4 justify-center">
              <Marquee images={images1} direction="up" />
              <Marquee images={images2} direction="down" />
            </div>
            <TechnologyCards />
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default KeyFeatures;
