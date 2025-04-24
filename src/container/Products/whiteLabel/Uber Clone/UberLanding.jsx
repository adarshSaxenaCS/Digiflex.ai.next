import React from "react";
import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import { Truck, Car } from "lucide-react"; // Import Lucide icons

const UberLanding = () => {

  return (
    <>
      {/* Hero Section */}
      <WrapperContainer className="py-10 md:py-20 bg-white flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Left Section with Heading */}
          <div className="flex flex-col items-start space-y-4 text-center md:text-left">
            <Heading className="text-4xl md:text-6xl lg:text-9xl font-bold text-[#172452] transition duration-300 hover:text-[#172452]">
              Go Anywhere with Uber.
            </Heading>
          </div>

          {/* Center Section with GIF */}
          <div className="flex justify-center items-center">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Uber-landing-image.png"
              alt="Uber-landing-image"
              width={350} // Decreased width for mobile
              height={350} // Adjusted height for better balance
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Icons below the GIF with background hover effect */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 text-4xl text-[#172452] mt-8 md:mt-16">
          <div className="flex flex-col items-center p-4 rounded-lg bg-gray-100 hover:bg-[#172452] hover:text-white transition duration-300">
            <Car />
            <p className="text-lg">Ride</p>
            <p className="text-sm text-center text-gray-500 mt-2">Get to your destination quickly and conveniently.</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-[#172452] text-white hover:bg-white hover:text-[#172452] transition duration-300">
  <Truck />
  <p className="text-lg">Courier</p>
  <p className="text-sm text-center mt-2">Deliver parcels and goods with ease across the city.</p>
</div>

        </div>
      </WrapperContainer>
    </>
  );
};

export default UberLanding;
