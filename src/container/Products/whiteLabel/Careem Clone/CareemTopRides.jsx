import React from "react";
import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const features = [
  "Affordable rides for everyday travel",
  "Premium cars for business needs",
  "Bike rides for quick solo trips",
  "Parcel delivery on-the-go",
  "Spacious vans for group travel",
];

const CareemTopRides = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col md:flex-row gap-8 items-center py-10">
        {/* Left Section */}
        <div className="md:w-[40%] space-y-6">
          <div>
            <Heading className="text-4xl font-bold text-[#162452] relative inline-block pb-2">
              Top Rides on Careem
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#162452] rounded-full"></span>
            </Heading>
          </div>

          <Paragraph className="text-gray-600 leading-relaxed indent-4">
            Whether you're commuting or sending something across the city, Careem has the perfect ride for you. Our variety of options ensures every journey fits your needs.
          </Paragraph>

          <div className="space-y-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-white shadow-sm border-l-4 border-[#162452] rounded-md transition-transform hover:translate-x-1"
              >
                <span className="text-[#162452] text-xl mt-1">✓</span>
                <span className="text-[#162452] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[60%] w-full flex flex-col items-center">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Careem-ride-illustration.png"
              alt="Careem-ride-illustration"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-[#162452] font-medium">
            Reliable rides, right at your doorstep.
          </p>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default CareemTopRides;
