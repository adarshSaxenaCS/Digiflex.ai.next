import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { MapPin, Star, Ruler, Clock } from "lucide-react";

const lateNightEats = [
  {
    name: "Nocturnal Nibbles",
    distance: "1.2 km",
    rating: 4.4,
    location: "Malviya Nagar, Delhi",
    hours: "Open 24/7",
    description:
      "Satisfy your late-night cravings with delicious sandwiches, fries, and hot chocolate at Nocturnal Nibbles.",
  },
  {
    name: "Midnight Munch",
    distance: "2.6 km",
    rating: 4.5,
    location: "RK Puram, Delhi",
    hours: "Open till 3 AM",
    description:
      "Craving something spicy? Midnight Munch offers hot momos, cheesy pizzas, and more for the perfect midnight snack.",
  },
  {
    name: "Crave Corner",
    distance: "3.0 km",
    rating: 4.2,
    location: "Saket, Delhi",
    hours: "Open 24/7",
    description:
      "A favorite late-night spot for burgers, fries, and milkshakes. The best place to satisfy your cravings after dark.",
  },
  {
    name: "The Midnight Diner",
    distance: "1.5 km",
    rating: 4.6,
    location: "Vasant Vihar, Delhi",
    hours: "Open 24/7",
    description:
      "Enjoy diner classics like hotdogs, shakes, and fries at The Midnight Diner, serving your favorites at any hour.",
  },
];

const MidnightCravings = () => {
  return (
    <WrapperContainer>
      <div className="text-center mb-10">
        <Heading className="text-4xl font-extrabold text-[#0f172a]">
          Midnight Cravings?
        </Heading>
        <Paragraph className="text-gray-600 mt-4 text-base leading-relaxed max-w-6xl mx-auto">
          Late-night hunger is real, and we've got your back with{" "}
          <span className="text-[#FACC15] font-semibold">24x7</span> open joints
          serving hot, delicious meals right when you need them the most.{" "}
          <span className="text-[#162350] font-semibold">
            Don’t sleep hungry!
          </span>
          From mouthwatering{" "}
          <span className="text-red-500 font-bold">pizzas</span> to savory{" "}
          <span className="text-yellow-400 font-bold">rolls</span> and indulgent{" "}
          <span className="text-pink-400 font-bold">desserts</span>, these
          places have you covered, so you never have to settle for late-night
          snacks. Whether you're{" "}
          <span className="text-green-500 font-bold">studying for exams</span>,
          working on a late{" "}
          <span className="text-blue-400 font-bold">project</span>, or just
          craving something{" "}
          <span className="text-orange-500 font-bold">tasty</span>, these joints
          are ready to satisfy your midnight cravings. So grab your friends, get
          comfy, and let the{" "}
          <span className="text-[#FACC15] font-bold">midnight feast</span>{" "}
          begin!
        </Paragraph>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {lateNightEats.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl bg-[#0f172a] text-white p-6 shadow-lg border border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_#38bdf8]"
          >
            {/* Glowing ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl z-0 animate-spin-slow"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-yellow-400">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{item.location}</p>
              </div>
              <div className="space-y-2 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <Ruler size={18} className="text-blue-300" />
                  <span>{item.distance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-yellow-300" />
                  <span>{item.rating} ★</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-pink-300" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-green-300" />
                  <span>{item.hours}</span>
                </div>
              </div>
              <p className="text-xs mt-4 text-blue-200 italic">
                {item.description}
              </p>
              
            </div>
          </div>
          
        ))}
      </div>
    </WrapperContainer>
  );
};

export default MidnightCravings;
