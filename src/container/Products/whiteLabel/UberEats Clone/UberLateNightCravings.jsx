import React from 'react';
import Image from 'next/image'; // ✅ Importing Next.js Image
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { Clock, Star, MapPin } from "lucide-react";

function UberLateNightCravings() {
  const lateNightSpots = [
    {
      name: "Nocturnal Bites",
      openTill: "4AM",
      rating: 4.7,
      location: "Hauz Khas, Delhi",
      highlight: "Night owls' favorite hub for spicy munchies.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Nocturnal-Bites.png",
      altText: "Nocturnal-Bites"
    },
    {
      name: "Moonlight Meals",
      openTill: "3:30AM",
      rating: 4.5,
      location: "CP, Delhi",
      highlight: "Glowing reviews and glowing neon!",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Moonlight-Meals.png",
      altText: "Moonlight-Meals"
    },
    {
      name: "ZzzFood",
      openTill: "5AM",
      rating: 4.8,
      location: "South Ex, Delhi",
      highlight: "Sleep late, eat great!",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/ZzzFood.png",
      altText: "ZzzFood"
    },
  ];

  return (
    <WrapperContainer>
      <div className="text-center mb-12">
        <Heading className="text-4xl font-extrabold">
          Midnight Hunger? We Got You.
        </Heading>
        <Paragraph className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Delhi never sleeps, and neither should your cravings. Whether you're pulling an all-nighter, binge-watching your favorite show, or heading home after a late shift — these food joints have got your back with sizzling flavors and unbeatable vibes till the early hours.
        </Paragraph>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lateNightSpots.map((spot, i) => (
          <div
            key={i}
            className="bg-[#172554] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition relative"
          >
            <div className="relative w-full h-48">
              <Image
                src={spot.image}
                alt={spot.altText} // Shorter alt text
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
                priority
              />
            </div>
            <div className="p-5 space-y-2 text-white">
              <h2 className="text-xl font-bold text-yellow-400">{spot.name}</h2>
              <p className="text-sm text-gray-300 italic">{spot.highlight}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm mt-3">
                <span className="flex items-center gap-1 text-blue-300">
                  <Clock size={16} /> Till {spot.openTill}
                </span>
                <span className="flex items-center gap-1 text-yellow-300">
                  <Star size={16} /> {spot.rating}
                </span>
                <span className="flex items-center gap-1 text-pink-300">
                  <MapPin size={16} /> {spot.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default UberLateNightCravings;
