import React from "react";
import Image from "next/image"; // ✅ If you're using Next.js
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { MapPin, Star, Ruler, Clock } from "lucide-react";

const quickSpots = [  {
  name: "Fast Bite Cafe",
  distance: "0.9 km",
  rating: 4.2,
  location: "Lajpat Nagar, Delhi",
  hours: "Open 24x7",
  description: "Grab your favorite snacks anytime!",
},
{
  name: "Speedy Meals",
  distance: "1.5 km",
  rating: 4.3,
  location: "Karol Bagh, Delhi",
  hours: "Open till Midnight",
  description: "Tasty meals on the go!",
},
{
  name: "Midnight Munch",
  distance: "2.1 km",
  rating: 4.5,
  location: "Saket, Delhi",
  hours: "Open 6PM - 6AM",
  description: "Late-night hunger? We got you!",
},
{
  name: "Urban Bites",
  distance: "3.2 km",
  rating: 4.1,
  location: "Connaught Place, Delhi",
  hours: "10AM - 10PM",
  description: "City’s best comfort food served fast.",
}, {
  name: "Tandoori Express",
  distance: "1.2 km",
  rating: 4.0,
  location: "Rajouri Garden, Delhi",
  hours: "11AM - 11PM",
  description: "Quick tandoori delights straight off the grill.",
},
{
  name: "Wrap It Up",
  distance: "0.7 km",
  rating: 4.6,
  location: "Green Park, Delhi",
  hours: "Open 24 Hours",
  description: "Delicious wraps and rolls on the go.",
},
{
  name: "Momo Junction",
  distance: "1.8 km",
  rating: 4.4,
  location: "Janakpuri, Delhi",
  hours: "12PM - 12AM",
  description: "Fresh hot momos served instantly.",
},
{
  name: "Snackify",
  distance: "2.5 km",
  rating: 4.2,
  location: "Malviya Nagar, Delhi",
  hours: "9AM - 11PM",
  description: "Perfect for snack cravings any time of the day.",
},
{
  name: "Pizza Dash",
  distance: "3.0 km",
  rating: 4.3,
  location: "Dwarka, Delhi",
  hours: "10AM - 1AM",
  description: "Fast and cheesy — pizzas at your doorstep!",
},
{
  name: "Burger Street",
  distance: "2.9 km",
  rating: 4.1,
  location: "Vikaspuri, Delhi",
  hours: "Open till 2AM",
  description: "Juicy burgers made fast & fresh.",
},
];

const QuickEatsNearYou = () => {
  return (
    <WrapperContainer>
      <div className="text-center mb-10">
        <Heading className="text-4xl font-extrabold text-[#0f172a]">
          Quick Eats Near You
        </Heading>
        <Paragraph className="text-gray-600 mt-4 text-base leading-relaxed max-w-6xl mx-auto">
          Discover quick and tasty options around you.{" "}
          <span className="text-[#FACC15] font-bold">Fast service</span>,{" "}
          <span className="text-[#162350] font-bold">great flavors</span>!
        </Paragraph>
      </div>

      <div className="bg-[#162350] text-white rounded-2xl shadow-lg border border-blue-300/10 flex overflow-hidden">
        {/* Left Scrollable Data Section */}
        <div className="w-1/2 max-h-[1000px] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-blue-100 space-y-6">
          {quickSpots.map((item, index) => (
            <div key={index} className="border-b border-blue-100/20 pb-4">
              <h3 className="text-xl font-bold text-yellow-400">{item.name}</h3>
              <div className="space-y-1 text-sm text-blue-100 mt-2">
                <div className="flex items-center gap-2">
                  <Ruler size={16} className="text-blue-300" />
                  <span>{item.distance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-300" />
                  <span>{item.rating} ★</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-pink-300" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-green-300" />
                  <span>{item.hours}</span>
                </div>
              </div>
              <p className="text-xs text-blue-200 italic mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 relative">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Quick-Eats.png"
            alt="Quick-Eats"
            fill
            className="object-cover rounded-r-2xl"
            priority
          />
        </div>
      </div>
    </WrapperContainer>
  );
};

export default QuickEatsNearYou;
