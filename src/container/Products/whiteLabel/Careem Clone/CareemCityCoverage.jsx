import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Image from 'next/image';

const cityHighlights = [
  {
    name: "Karachi",
    description:
      "Navigate the bustling streets of Karachi with ease. Whether you're headed to Clifton or Saddar, Careem ensures timely rides.",
    image:
      "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Karachi.png",
  },
  {
    name: "Lahore",
    description:
      "From Liberty Market to the Walled City, experience Lahore’s culture and chaos with the comfort of Careem.",
    image:
      "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Lahore.png",
  },
  {
    name: "Dubai",
    description:
      "Commute across the glamorous city of Dubai—from Marina to Downtown—in air-conditioned luxury and style.",
    image:
      "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Dubai.png",
  },
  {
    name: "Riyadh",
    description:
      "Seamlessly travel across Riyadh, whether you’re headed to business hubs or heritage sites.",
    image:
      "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Riyadh.png",
  },
  {
    name: "Cairo",
    description:
      "Beat the traffic of Cairo with Careem and explore the ancient city without stress.",
    image:
      "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Cairo.png",
  },
];

const CareemCityCoverage = () => {
  return (
    <WrapperContainer>
      {/* Main Heading */}
      <div className="text-center mb-8">
        <Heading className="text-4xl font-bold text-[#162452]">
          Cities Covered by <span className="border-b-4 max-w-6  border-black">Careem</span>
        </Heading>
        <Paragraph className="mt-2 text-gray-600 max-w-xl mx-auto">
          Careem is currently operating in the following major cities across
          regions.
        </Paragraph>
      </div>

      {/* Cities Tags */}
      <div className="flex flex-wrap justify-center gap-4 text-[#162452] font-medium mb-10">
        {cityHighlights.map((city, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-green-100 rounded-full"
          >
            {city.name}
          </span>
        ))}
      </div>

      {/* City Highlights Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cityHighlights.map((city, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <Heading className="text-xl font-semibold text-[#162452]">
                {city.name}
              </Heading>
              <Paragraph className="text-gray-600 mt-2 text-sm">
                {city.description}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default CareemCityCoverage;
