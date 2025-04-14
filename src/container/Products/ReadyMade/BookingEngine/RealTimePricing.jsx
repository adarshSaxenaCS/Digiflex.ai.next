import React from "react";
import Image from "next/image";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const RealTimePricing = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col md:flex-row items-center rounded-lg  overflow-hidden bg-white">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[700px]">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Real-Time-Pricing.png"
            alt="Real-Time Pricing"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-start text-left bg-[#0F172A]">
          <Heading className="text-2xl md:text-4xl font-bold drop-shadow-md leading-snug text-blue">
            Real-Time Pricing & Availability
          </Heading>

          <Paragraph className="text-white text-sm md:text-lg mt-2 md:mt-4 leading-relaxed">
            Stay ahead with{" "}
            <span className="font-semibold text-blue-400">
              live pricing updates
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-400">
              real-time availability
            </span>
            . Our system ensures seamless, accurate bookings with{" "}
            <span className="font-semibold text-blue-400">
              instant synchronization
            </span>
            .
          </Paragraph>

          <Paragraph className="text-white text-sm md:text-lg mt-2 md:mt-4 leading-relaxed">
            Get immediate access to the best deals with our{" "}
            <span className="font-semibold text-blue-400">
              dynamic pricing engine
            </span>
            .
            <span className="font-semibold text-blue-400">
              {" "}
              No more manual updates
            </span>{" "}
            — stay synchronized with the latest offers automatically!
          </Paragraph>

          <Paragraph className="text-white text-sm md:text-lg mt-2 md:mt-4 leading-relaxed">
            Experience enhanced customer satisfaction with{" "}
            <span className="font-semibold text-blue-400">
              up-to-the-minute data
            </span>
            . Make smarter decisions and secure better conversions effortlessly.
          </Paragraph>

          {/* Glassmorphism Boxes */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-start gap-4 w-full">
            {/* Smallest Box */}
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg w-full sm:w-40 md:w-48 min-w-[180px] text-sm text-center">
              <p className="text-white font-medium">"Fast & Reliable"</p>
            </div>

            {/* Medium Box */}
            <div className="bg-[#FF941D]/80 backdrop-blur-md rounded-lg p-5 shadow-lg w-full sm:w-56 md:w-64 min-w-[200px] text-base text-center">
              <p className="text-white font-medium">
                "Always up-to-date, always accurate."
              </p>
            </div>

            {/* Largest Box */}
            <div className="bg-[#EC5E00]/80 backdrop-blur-md rounded-lg p-6 shadow-lg w-full sm:w-72 md:w-80 min-w-[240px] text-lg text-center">
              <p className="text-white font-medium">
                "Seamless booking experience with real-time updates!"
              </p>
            </div>

            {/* New Extra Small Box */}
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 shadow-lg w-full sm:w-32 md:w-36 min-w-[180px] text-xs text-center">
              <p className="text-white font-medium">"Instant Sync"</p>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default RealTimePricing;
