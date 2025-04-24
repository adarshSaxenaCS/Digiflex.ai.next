import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Image from "next/image";
import { ArrowDown } from 'lucide-react'; // Importing the icon


const UberCityCoverage = () => {
  return (
    <WrapperContainer>
      {/* Main Heading aligned left */}
      <div className=" text-left">
        <Heading className="text-4xl font-bold text-[#172452] !text-left">
          Uber Coverage Across Cities -
        </Heading>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Section with Image (66.6%) */}
        <div className="md:w-8/12 w-full">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Uber-Coverage.png"
            alt="Uber-Coverage"
            width={1000}
            height={500}
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Right Section with Text (33.3%) */}
        <div className="md:w-4/12 w-full">
          {/* Subheading */}
          <h3 className="text-2xl font-semibold text-[#172452] mb-4 leading-snug">
            Expanding Your <span className="text-[#276EF1]">Reach</span>
          </h3>

          <Paragraph className="text-base text-gray-700 leading-relaxed tracking-wide">
            <span className="font-semibold text-[#172452]">Uber</span> is
            revolutionizing how people move, offering a
            <span className="font-medium text-[#276EF1]"> seamless</span> and
            <span className="font-medium text-[#276EF1]"> affordable</span> way
            to navigate your city—day or night.
          </Paragraph>

          <Paragraph className="mt-5 text-base text-gray-700 leading-relaxed tracking-wide">
            Whether it’s{" "}
            <span className="font-semibold text-[#172452]">commuting</span> to
            work,
            <span className="font-semibold text-[#172452]">
              {" "}
              meeting friends
            </span>
            , or
            <span className="font-semibold text-[#172452]">
              {" "}
              discovering new spots
            </span>
            , Uber is available wherever life takes you, across
            <span className="font-medium text-[#276EF1]">
              {" "}
              cities worldwide
            </span>
            .
          </Paragraph>

          <div className="flex justify-center mt-6">
    <ArrowDown className="text-[#162452] text-3xl" />
  </div>

  <hr className="mt-4 border-t-2 border-[#162452] w-1/2 mx-auto" />
        </div>
      </div>
    </WrapperContainer>
  );
};

export default UberCityCoverage;
