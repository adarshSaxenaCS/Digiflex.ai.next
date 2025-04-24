import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { MapPin, Star, Ruler } from "lucide-react";

const spots = [
  {
    name: "Zomato Lounge",
    distance: "1.9 km",
    rating: 4.5,
    location: "South Ex, Delhi",
  },
  {
    name: "Swiggy Hub",
    distance: "2.8 km",
    rating: 4.6,
    location: "Saket, Delhi",
  },
  {
    name: "Domino's Base",
    distance: "4.3 km",
    rating: 4.3,
    location: "Green Park, Delhi",
  },
  {
    name: "Pizza Hut Corner",
    distance: "3.1 km",
    rating: 4.4,
    location: "Hauz Khas, Delhi",
  },
];

const PopularDeliverySpots = () => {
  return (
    <WrapperContainer>
      <div className="text-center mb-10">
        <Heading className="text-4xl font-extrabold text-[#0f172a]">
          Popular Delivery Spots
        </Heading>
        <Paragraph className="text-gray-600 mt-4 text-base leading-relaxed max-w-6xl mx-auto">
          Looking for the{" "}
          <span className="text-[#FACC15] font-semibold">fastest</span> and most{" "}
          <span className="text-[#FACC15] font-semibold">
            reliable food delivery spots
          </span>
          ? We've handpicked the{" "}
          <span className="text-[#162350] font-semibold">top-rated joints</span>{" "}
          loved by thousands for their{" "}
          <span className="text-[#FACC15] font-medium">delicious bites</span>,
          quick service, and unbeatable convenience. Whether you're chilling at
          home or grinding at work, we've got your cravings covered with the{" "}
          <span className="text-[#162350] font-semibold">best in town</span>.
          Discover flavors that speak louder than words, only a tap away!
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side - Delivery Locations */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {spots.map((s, i) => (
            <div
              key={i}
              className="bg-[#162350] text-white rounded-2xl shadow-xl border border-blue-200/10 p-6 relative overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-blue-500/30 group"
            >
              {/* Glow effect behind icon */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full z-0"></div>

              {/* Header */}
              <div className="relative z-10 flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="bg-yellow-400 text-[#162350] text-xs font-semibold px-2 py-1 rounded-full">
                  Top Pick
                </span>
              </div>

              {/* Details with icons */}
              <div className="relative z-10 space-y-2 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <Ruler className="text-blue-300" size={18} />
                  <span>{s.distance} from you</span>
                </div>

                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400" size={18} />
                  <span>{s.rating} ★ Rated by foodies</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="text-pink-300" size={18} />
                  <span>{s.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="relative z-10 mt-4 text-xs text-blue-200 leading-relaxed">
                • Perfect for quick bites • Loved by locals
              </p>
            </div>
          ))}
        </div>

        {/* Right Feature Panel */}
        <div className="bg-[#172554] text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4">🔥 Top Rated</h3>
            <p className="text-gray-200 text-sm mb-6">
              These places are fan favorites! Based on delivery speed, customer
              love, and quality bites.
            </p>

            {spots
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 2)
              .map((spot, idx) => (
                <div
                  key={idx}
                  className="bg-white text-[#172554] rounded-xl p-4 mb-4 shadow-md"
                >
                  <h4 className="text-lg font-semibold">{spot.name}</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    <Star size={14} className="inline text-yellow-500 mr-1" />
                    {spot.rating} • {spot.location}
                  </p>
                </div>
              ))}
          </div>

          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-[#172554] font-semibold py-2 rounded-xl transition">
            Explore More Spots
          </button>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default PopularDeliverySpots;
