import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import {
  Star,
  MapPin,
  TrendingUp,
  Info,
  ShoppingCart,
  ForkKnife,
  Truck,
} from "lucide-react";
import Image from "next/image";

const restaurants = [
  {
    name: "Indian Accent",
    distance: "5.4 km",
    rating: 4.8,
    location: "Friends Colony, New Delhi",
    cuisine: "Contemporary Indian",
  },
  {
    name: "Bukhara",
    distance: "3.2 km",
    rating: 4.7,
    location: "Diplomatic Enclave, New Delhi",
    cuisine: "North-West Frontier",
  },
  {
    name: "Dum Pukht",
    distance: "4.1 km",
    rating: 4.6,
    location: "Diplomatic Enclave, New Delhi",
    cuisine: "Awadhi",
  },
  {
    name: "Leela Palace",
    distance: "2.8 km",
    rating: 4.9,
    location: "Diplomatic Enclave, New Delhi",
    cuisine: "Fine Dining",
  },
  {
    name: "Karim's",
    distance: "6.1 km",
    rating: 4.5,
    location: "Old Delhi",
    cuisine: "Mughlai",
  },
  {
    name: "Trishna",
    distance: "3.6 km",
    rating: 4.7,
    location: "Connaught Place, New Delhi",
    cuisine: "Seafood",
  },
  {
    name: "SodaBottleOpenerWala",
    distance: "4.9 km",
    rating: 4.3,
    location: "Khan Market, New Delhi",
    cuisine: "Parsi",
  },
  {
    name: "Tandoori Flames",
    distance: "3.5 km",
    rating: 4.4,
    location: "Rajouri Garden, New Delhi",
    cuisine: "Tandoori",
  },
  {
    name: "Masala Library",
    distance: "4.4 km",
    rating: 4.6,
    location: "Janpath, New Delhi",
    cuisine: "Modern Indian",
  },
  {
    name: "Saravana Bhavan",
    distance: "5.0 km",
    rating: 4.2,
    location: "Connaught Place, New Delhi",
    cuisine: "South Indian",
  },
];

const TopIndianMeals = () => {
  const total = restaurants.length;
  const avgRating = (
    restaurants.reduce((sum, r) => sum + r.rating, 0) / total
  ).toFixed(1);
  const highest = restaurants.reduce(
    (prev, curr) => (curr.rating > prev.rating ? curr : prev),
    restaurants[0]
  );
  const nearest = restaurants.reduce(
    (prev, curr) =>
      parseFloat(curr.distance) < parseFloat(prev.distance) ? curr : prev,
    restaurants[0]
  );
  const farthest = restaurants.reduce(
    (prev, curr) =>
      parseFloat(curr.distance) > parseFloat(prev.distance) ? curr : prev,
    restaurants[0]
  );

  return (
    <WrapperContainer>
      <Heading className="text-center text-[#1e293b] text-4xl font-semibold mb-4">
        Best Restaurants in Delhi
      </Heading>

      <Paragraph className="text-center text-[#475569] mb-6 bg-gradient-to-r from-[#e0e7ff] to-[#e0e7ff] p-4 rounded-xl shadow-sm border border-[#c7d2fe]">
        From traditional{" "}
        <span className="text-[#172554] font-medium">Mughlai flavors</span> to
        modern <span className="text-[#172554] font-medium">Indian fusion</span>
        , Delhi's culinary landscape offers an unforgettable journey for every{" "}
        <span className="text-[#172554] font-semibold">food lover</span>.
        Discover the city's{" "}
        <span className="text-[#172554] font-medium">highest-rated</span> and
        most{" "}
        <span className="text-[#172554] font-medium">
          conveniently located restaurants
        </span>{" "}
        to make your dining experience truly{" "}
        <span className="text-[#172554] font-semibold">memorable</span>.
      </Paragraph>

      {/* Table and Video Section */}
      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        {/* Table Section */}
        <div className="w-full lg:w-2/3 overflow-x-auto max-h-[400px] overflow-y-scroll border border-[#c7d2fe] rounded-2xl shadow-lg bg-white">
          <table className="w-full min-w-[600px] table-auto text-sm text-left text-slate-700">
            <thead className="bg-[#e0e7ff] sticky top-0 z-10">
              <tr className="text-[#172554] text-sm font-semibold">
                <th className="px-6 py-4">Restaurant</th>
                <th className="px-6 py-4">Cuisine</th>
                <th className="px-6 py-4">Distance</th>
                <th className="px-6 py-4">Rating</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((res, i) => (
                <tr
                  key={i}
                  className="hover:bg-[#e0e7ff] transition duration-200 border-b border-slate-200"
                >
                  <td className="px-6 py-4 font-medium text-slate-800 whitespace-nowrap">
                    {res.name}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{res.cuisine}</td>
                  <td className="px-6 py-4 text-slate-500 flex items-center gap-1 whitespace-nowrap">
                    <MapPin size={16} className="text-[#172554]" />
                    {res.distance}
                  </td>
                  <td className="px-6 py-4 text-slate-600 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      <Star size={16} className="text-yellow-500" />
                      {res.rating}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Section with Video and Icons */}
        <div className="w-full lg:w-1/3">

<div className="sticky top-0 space-y-4">
  <Image
    src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Delhi-Food-Tour.png"
    alt="Delhi-Food-Tour"
    width={740}
    height={256} // h-64 = 16rem = 256px
    className="w-full rounded-xl object-cover"
  />

  {/* Just Eat Inspired Icons */}
  <div className="flex justify-between items-center bg-gradient-to-r from-[#e0e7ff] via-white to-[#e0e7ff] px-2 py-3 rounded-2xl shadow-sm border border-[#c7d2fe]">
    <div className="flex flex-col items-center p-4 text-[#172554] text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md rounded-lg cursor-pointer">
      <ForkKnife size={28} className="mb-1" />
      Dine-In
    </div>
    <div className="flex flex-col items-center p-4 text-[#172554] text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md rounded-lg cursor-pointer">
      <ShoppingCart size={28} className="mb-1" />
      Takeaway
    </div>
    <div className="flex flex-col items-center p-4 text-[#172554] text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md rounded-lg cursor-pointer">
      <TrendingUp size={28} className="mb-1" />
      Top Picks
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Info Box */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-[#e2e8f0]">
        <div className="flex items-center mb-4">
          <Info className="text-[#172554] mr-2" size={20} />
          <h2 className="text-[#1e293b] text-lg font-semibold">
            Summary Overview
          </h2>
        </div>
        <div className="bg-[#f0f9ff] p-4 rounded-lg mb-6 border border-[#bae6fd]">
          <p className="text-sm text-[#1e293b]">
            Total: <span className="font-semibold">{total}</span> restaurants •
            Avg. Rating:{" "}
            <span className="font-semibold">
              {avgRating} <Star size={14} className="inline-block" />
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center bg-[#f8fafc] p-4 rounded-lg shadow-sm">
            <TrendingUp className="mr-3 text-[#172554]" size={20} />
            <div>
              <p className="text-xs text-[#64748b]">Highest Rated</p>
              <p className="font-medium text-[#1e293b]">
                {highest.name} ({highest.rating})
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#f8fafc] p-4 rounded-lg shadow-sm">
            <MapPin className="mr-3 text-[#172554]" size={20} />
            <div>
              <p className="text-xs text-[#64748b]">Nearest</p>
              <p className="font-medium text-[#1e293b]">
                {nearest.name} ({nearest.distance})
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#f8fafc] p-4 rounded-lg shadow-sm">
            <MapPin className="mr-3 text-[#172554]" size={20} />
            <div>
              <p className="text-xs text-[#64748b]">Farthest</p>
              <p className="font-medium text-[#1e293b]">
                {farthest.name} ({farthest.distance})
              </p>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TopIndianMeals;
