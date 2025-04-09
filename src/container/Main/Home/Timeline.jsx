"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import WrapperContainer from "@/Layout/WrapperContainer";

function App() {
  const [activeId, setActiveId] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const timelineRefs = useRef([]);
  const scrollTimeout = useRef(null);
  const scrollingTimeout = useRef(null);

  const timelineData = [
    {
      id: 1,
      title: "Project Inception",
      description: "Initial project planning and requirements gathering phase.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Project Inception.jfif",
    },
    {
      id: 2,
      title: "Design Phase",
      description:
        "Creating wireframes, mockups, and finalizing the design system.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Design Phase.jfif",
    },
    {
      id: 3,
      title: "Development Start",
      description: "Beginning the development process with core functionality.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Development Start.jfif",
    },
    {
      id: 4,
      title: "Initial Prototype",
      description: "First working prototype ready for testing and feedback.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Initial Prototype.jfif",
    },
    {
      id: 5,
      title: "Testing and Refinement",
      description: "Comprehensive testing phase including bug fixes.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Testing and Refinement.jfif",
    },
    {
      id: 6,
      title: "Project Launch",
      description: "Final deployment and official launch.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Project Launch.jfif",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolling state to true
      setIsScrolling(true);

      if (scrollingTimeout.current) {
        clearTimeout(scrollingTimeout.current);
      }

      // Reset scrolling state after scrolling stops
      scrollingTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const scrollContainer = document.querySelector(".timeline-scroll");
        if (!scrollContainer) return;

        const containerRect = scrollContainer.getBoundingClientRect();
        const containerCenter = containerRect.top + containerRect.height / 2;

        let closestId = activeId;
        let minDistance = Number.MAX_VALUE;

        timelineRefs.current.forEach((el, index) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;

            const distance = Math.abs(elementCenter - containerCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closestId = timelineData[index].id;
            }
          }
        });

        if (closestId === activeId) {
          setActiveId(closestId);
        }
      }, 100);
    };

    const scrollContainer = document.querySelector(".timeline-scroll");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      handleScroll(); // Initial check
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (scrollingTimeout.current) {
        clearTimeout(scrollingTimeout.current);
      }
    };
  }, [activeId]);

  const handleItemClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="bg-white">
      <WrapperContainer>
        <div className="text-center">
          <h2 className="text-4xl pb-5 sm:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Project Methodology
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow our structured approach to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8">
          <div className="timeline-scroll relative py-8 pr-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, margin: "-10%", amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  onClick={() => handleItemClick(item.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-500 ${
                    activeId === item.id && !isScrolling
                      ? "bg-blue-50 shadow-lg transform scale-105"
                      : "hover:bg-gray-50 hover:shadow-md"
                  }`}
                >
                  <span className="text-sm font-medium text-blue-500">
                    Step {item.id}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* {/ Image container - hidden on mobile, visible on lg screens /} */}
          <div className="hidden lg:block relative h-[600px] rounded-2xl overflow-hidden bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeId}
                src={timelineData.find((item) => item.id === activeId)?.image}
                alt="Timeline illustration"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default App;
