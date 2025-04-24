import React from "react";
import Image from 'next/image'; // Importing Next.js Image
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";

function HowItWorksIndriver() {
  return (
    <WrapperContainer>
    <div className="py-10 bg-white">
      <div className="text-center mb-14 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#172453]">
          How does{" "}
          <span className="bg-[#172554] text-white px-4 py-1.5 rounded-md">
            it work?
          </span>
        </h2>
        <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Choose your service, confirm your ride, and go! Indriver 2025 simplifies every step from booking to delivery.
        </Paragraph>
      </div>

      {/* Only Middle Step */}
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-left space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-[#172554] text-white p-3 rounded-md text-3xl w-14 h-14 flex items-center justify-center">
                1
              </div>
              <h3 className="text-2xl font-semibold text-[#172453]">
                Fill in the order form
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#172554] text-white p-3 rounded-md text-3xl w-14 h-14 flex items-center justify-center">
                2
              </div>
              <h3 className="text-2xl font-semibold text-[#172453]">
                Wait for offers from drivers
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#172554] text-white p-3 rounded-md text-3xl w-14 h-14 flex items-center justify-center">
                3
              </div>
              <h3 className="text-2xl font-semibold text-[#172453]">
                Accept the best offer
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#172554] text-white p-3 rounded-md text-3xl w-14 h-14 flex items-center justify-center">
                4
              </div>
              <h3 className="text-2xl font-semibold text-[#172453]">
                Call the driver and discuss the details of your ride
              </h3>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Indriver-How-it-works-illustration.png"
              alt="Indriver-How-it-works-illustration"
              width={740} // Specify the width
              height={400} // Set a static height value
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </WrapperContainer>
  );
}

export default HowItWorksIndriver;
