import React from "react";
import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { MapPin } from "lucide-react";

const foodCourts = [
  {
    name: "City Bites Court",
    rating: 4.6,
    location: "Karol Bagh, Delhi",
    image:
      "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/City-Bites-Court-Image.png",
    alt: "City-Bites-Court-Image",
  },
  {
    name: "Urban Munch Zone",
    rating: 4.4,
    location: "Rajouri Garden, Delhi",
    image:
      "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Urban-Munch-Zone-Image.png",
    alt: "Urban-Munch-Zone-Image",
  },
  {
    name: "Great boys Food Court",
    rating: 4.5,
    location: "Haus Khas, Delhi",
    image:
      "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Great-Boys-Food-Court-Image.png",
    alt: "Great-Boys-Food-Court-Image",
  },
];

const foodLogos = [
  {
    src: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Antojitos-Logo.png",
    alt: "Antojitos-Logo",
  },
  {
    src: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Gradient-Restaurant-Logo.png",
    alt: "Gradient-Restaurant-Logo",
  },
  {
    src: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Healthy-Food-Logo.png",
    alt: "Healthy-Food-Logo",
  },
  {
    src: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Esquites-Logo.png",
    alt: "Esquites-Logo",
  },
  {
    src: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Biriyani-Culture-Logo.png",
    alt: "Biriyani-Culture-Logo",
  },
  {
    src: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Spicy-Food-Logo.png",
    alt: "Spicy-Food-Logo",
  },
];

const TrendingFoodCourts = () => {
  return (
    <WrapperContainer>
      <div className="text-center mb-10">
        <Heading className="text-3xl font-bold text-[#1e293b]">
          Trending Food Courts
        </Heading>
        <Paragraph className="text-gray-600 mt-2 max-w-4xl mx-auto">
          Buzzing with energy and{" "}
          <span className="text-[#f97316] font-semibold">
            delicious variety
          </span>{" "}
          — these food courts are the{" "}
          <span className="text-[#2563eb] font-semibold">talk of the town</span>
          ! From sizzling{" "}
          <span className="text-[#22c55e] font-semibold">
            street-style bites
          </span>{" "}
          to cozy cafés with{" "}
          <span className="text-[#ec4899] font-semibold">fusion flavors</span>,
          there’s something for every foodie. A perfect spot to{" "}
          <span className="text-[#eab308] font-semibold">chill</span>,{" "}
          <span className="text-[#10b981] font-semibold">eat</span>, and{" "}
          <span className="text-[#7c3aed] font-semibold">vibe</span>.
        </Paragraph>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {foodCourts.map((fc, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition"
          >
            {/* Rating Badge */}
            <span className="absolute top-2 right-2 bg-yellow-400 text-[#1e293b] text-xs px-2 py-1 rounded-full font-bold z-10">
              {fc.rating} ★
            </span>

            {/* Image with next/image */}
            <div className="relative h-36 w-full">
              <Image
                src={fc.image}
                alt={fc.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#1e293b]">
                {fc.name}
              </h3>
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <MapPin size={16} className="mr-1 text-pink-500" />
                {fc.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Marquee Section */}
      {/* Food Logos Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-[#1e293b] text-center mb-6">
          Food Brands & Partners
        </h3>
        <div className="flex justify-center flex-wrap gap-6">
          {foodLogos.map((logo, index) => (
            <div
              key={index}
              className="relative group p-1 rounded-full transition-all duration-300"
            >
              {/* Multicolor Circle on Hover */}
              <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Inner white background and image */}
              <div className="relative z-10 bg-white rounded-full p-2">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TrendingFoodCourts;
