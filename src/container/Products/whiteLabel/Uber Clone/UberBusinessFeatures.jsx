import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Image from "next/image";

const UberBusinessFeatures = () => {
  return (
    <WrapperContainer className="py-20">
      {/* Main Heading */}
      <div className="text-left mb-12">
        <Heading className="text-4xl font-bold text-[#192d6b] !text-left">
          Get Started with No Upfront Costs -
        </Heading>
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-start relative">
        {/* Left Side: Images */}
        <div className="flex flex-col items-center gap-y-16 w-full md:w-1/4 mb-10 md:mb-0">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/uberbussi1.png"
            alt="uberbussi1"
            width={196}
            height={196}
            className="object-cover"
          />
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/uberbussi2.png"
            alt="uberbussi2"
            width={196}
            height={196}
            className="object-cover"
          />
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/uberbussi3.png"
            alt="uberbussi3"
            width={196}
            height={196}
            className="object-cover"
          />
        </div>

        {/* Middle: Vertical Line with Dots - Hidden on mobile */}
        <div className="relative w-12 justify-center hidden md:flex">
          <div className="w-0.5 bg-[#162452] border-l-2 border-dotted border-[#162452] h-[500px]"></div>
          <div className="absolute top-[10px] w-4 h-4 bg-[#162452] rounded-full"></div>
          <div className="absolute top-[200px] w-4 h-4 bg-[#162452] rounded-full"></div>
          <div className="absolute top-[390px] w-4 h-4 bg-[#162452] rounded-full"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-3/4 md:pl-6">
          <div className="mb-16 md:mb-24">
            <Heading className="text-xl font-semibold text-[#172553]">
              Customize your travel and meal programs
            </Heading>
            <Paragraph className="mt-2 text-sm text-gray-600">
              Set your own policies, help ensure T&E compliance, and get full visibility into every ride and meal. You can easily integrate with the top expensing partners for seamless expensing without paying a service fee.
            </Paragraph>
          </div>

          <div className="mb-16 md:mb-24">
            <Heading className="text-xl font-semibold text-[#172553]">
              Onboard people at your own pace
            </Heading>
            <Paragraph className="mt-2 text-sm text-gray-600">
              Add individuals, specific teams, or your entire organization at once. After your employees are invited, they can add a business profile for work-related rides and meals to their existing Uber account that they know and trust for business rides and meals.
            </Paragraph>
          </div>

          <div>
            <Heading className="text-xl font-semibold text-[#172553]">
              Set up amenities for customers
            </Heading>
            <Paragraph className="mt-2 text-sm text-gray-600">
              Send Uber credit in the form of gift cards and vouchers for rides, meals, and more in a snap. You can even request rides for others to make their travel experience practically effortless.
            </Paragraph>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default UberBusinessFeatures;
