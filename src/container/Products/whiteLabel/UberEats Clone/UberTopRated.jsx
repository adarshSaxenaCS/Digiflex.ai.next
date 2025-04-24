import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { Star, MapPin, Coffee } from "lucide-react";
import Image from "next/image";

const topRatedSpots = [
  {
    name: "Golden Spoon",
    rating: 4.9,
    location: "Chanakyapuri, Delhi",
    review: "An elite dining experience with fast delivery.",
  },
  {
    name: "Spice Kingdom",
    rating: 4.8,
    location: "Khan Market, Delhi",
    review: "Award-winning dishes and top chef specials.",
  },
  {
    name: "Dilli Diner",
    rating: 4.7,
    location: "Lajpat Nagar, Delhi",
    review: "Classic comfort food with consistent quality.",
  },
  {
    name: "Curry House",
    rating: 4.6,
    location: "Connaught Place, Delhi",
    review: "Spicy curries delivered hot and fast.",
  },
  {
    name: "Urban Tadka",
    rating: 4.5,
    location: "Hauz Khas, Delhi",
    review: "Trendy twists on traditional dishes.",
  },
  {
    name: "Bistro Bites",
    rating: 4.4,
    location: "Saket, Delhi",
    review: "Cozy ambiance with gourmet selections.",
  },
  {
    name: "Green Leaf Cafe",
    rating: 4.3,
    location: "MG Road, Delhi",
    review: "Fresh salads and health-focused bowls.",
  },
  {
    name: "Taco Fiesta",
    rating: 4.2,
    location: "Rajouri Garden, Delhi",
    review: "Authentic Mexican flavors in every bite.",
  },
  {
    name: "Sweet Tooth",
    rating: 4.1,
    location: "Lajpat Nagar, Delhi",
    review: "Decadent desserts and artisanal treats.",
  },
];

const primaryColor = "#162452";

const UberTopRated = () => {
  return (
    <WrapperContainer>
      {/* Section Header */}
      <div className="text-center mb-8">
        <Heading className="text-4xl font-bold" style={{ color: primaryColor }}>
          Top Rated Eateries on UberEats
        </Heading>
        <Paragraph className="mt-2 text-gray-600 max-w-xl mx-auto">
          Customers can’t get enough of these favorites—high ratings and rave
          reviews guaranteed.
        </Paragraph>
      </div>

      {/* Global Uber Eats Locations Image Section */}
      <div className="relative mt-12 mb-10">
        <Image
          src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Uber-Eats-Worldwide-Locations.png"
          alt="Uber Eats"
          width={1240}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h2 className="text-4xl font-bold text-white">Uber Eats Worldwide</h2>
        </div>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {topRatedSpots.map((spot, idx) => (
          <div
            key={idx}
            className="group min-w-[280px] flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl transform transition duration-300 hover:scale-95 hover:bg-[#162452] hover:from-[#162452] hover:to-[#162452]"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="flex items-center text-xl font-semibold text-[#162452] group-hover:text-white">
                <Coffee size={18} className="mr-2" />
                {spot.name}
              </h3>
              <span className="flex items-center text-sm font-medium text-yellow-400 group-hover:text-white">
                <Star size={14} className="mr-1" /> {spot.rating}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-red-400 mb-2 group-hover:text-white">
              <MapPin
                size={14}
                className="mr-1 text-green-800 group-hover:text-white"
              />
              {spot.location}
            </div>
            <Paragraph className="italic text-blue-800 text-sm group-hover:text-white">
              "{spot.review}"
            </Paragraph>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default UberTopRated;
