import React from "react";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import Image from "next/image";
import Heading from "@/Layout/Heading";

const SeamlessBooking = () => {
  return (
    <WrapperContainer>
      <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <Heading className="text-white text-3xl font-bold">
            Effortless Booking, Anytime!
          </Heading>
          <Paragraph className="text-white text-lg leading-relaxed mt-4">
            Enjoy a seamless and hassle-free booking experience with real-time updates,
            instant confirmation, and a **user-friendly interface**.
          </Paragraph>
          <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Start Booking
          </button>
        </div>

        {/* Image Section with a Stylish Cut */}
        <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
          <div className="relative rounded-xl overflow-hidden shadow-lg transform rotate-3">
            <img
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Seamless-Booking.png"
              alt="Seamless Booking"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default SeamlessBooking;
