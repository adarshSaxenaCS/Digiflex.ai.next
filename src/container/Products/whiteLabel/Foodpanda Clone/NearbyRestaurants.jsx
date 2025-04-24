import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

// Sample restaurant data (India's best restaurants)
const restaurants = [
  { 
    name: "Indian Accent", 
    distance: "5.4 km", 
    rating: 4.8, 
    location: "The Manor, 77, Friends Colony, New Delhi, Delhi 110065" 
  },
  { 
    name: "Bukhara", 
    distance: "3.2 km", 
    rating: 4.7, 
    location: "ITC Maurya, Sardar Patel Marg, Diplomatic Enclave, New Delhi, Delhi 110021" 
  },
  { 
    name: "Dum Pukht", 
    distance: "4.1 km", 
    rating: 4.6, 
    location: "ITC Maurya, Sardar Patel Marg, Diplomatic Enclave, New Delhi, Delhi 110021" 
  },
  { 
    name: "Leela Palace", 
    distance: "2.8 km", 
    rating: 4.9, 
    location: "The Leela Palace, Diplomatic Enclave, New Delhi, Delhi 110023" 
  },
  { 
    name: "Karim's", 
    distance: "6.1 km", 
    rating: 4.5, 
    location: "16, Gali Kababian, Jama Masjid, Old Delhi, Delhi 110006" 
  },
  { 
    name: "Trishna", 
    distance: "3.6 km", 
    rating: 4.7, 
    location: "Intercontinental, The Oberoi, 7, Shankar Market, Connaught Place, New Delhi, Delhi 110001" 
  },
  { 
    name: "SodaBottleOpenerWala", 
    distance: "4.9 km", 
    rating: 4.3, 
    location: "Khan Market, New Delhi, Delhi 110003" 
  }
];

// Static image sources
const staticImages = [
  {
    src: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Restaurant-Takeout-Delivery.png",
    alt: "Restaurant-Takeout-Delivery"
  },
  {
    src: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Indian-Cuisine-Illustration.png",
    alt: "Indian-Cuisine-Illustration"
  },
  {
    src: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Restaurant-Location-on-Map.png",
    alt: "Restaurant-Location-on-Map"
  }
];

const NearbyRestaurants = () => {
  return (
    <WrapperContainer>
      <Heading className="text-center text-[#172554] text-4xl mb-4">
        Best Restaurants in India
      </Heading>

      <Paragraph className="text-center bg-[#172554] text-white p-1 mb-8">
        Explore the best dining spots around India.
      </Paragraph>

      {/* Flex layout: Left, Center, Right */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        
        {/* Left side: Restaurant List */}
        <div className="w-full lg:w-1/3 bg-white">
          <h3 className="text-2xl font-semibold text-[#172554] mb-4">Restaurants List</h3>
          <ul className="space-y-4">
            {restaurants.map((r, i) => (
              <li key={i} className="flex flex-col">
                <h4 className="text-xl font-bold text-[#172554]">{r.name}</h4>
                <p className="text-gray-700">Distance: {r.distance}</p>
                <p className="text-gray-700">Rating: ⭐ {r.rating}</p>
                <p className="text-gray-700">Location: {r.location}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Center side: Image */}
        <div className="w-full lg:w-1/3 bg-white p-6 space-y-6">
          {staticImages.map((image, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Right side: Restaurant List */}
        <div className="w-full lg:w-1/3 bg-white">
          <h3 className="text-2xl font-semibold text-[#172554] mb-4 text-right">Restaurants List</h3>
          <ul className="space-y-4">
            {restaurants.map((r, i) => (
              <li key={i} className="flex flex-col items-end">
                <h4 className="text-xl font-bold text-[#172554]">{r.name}</h4>
                <p className="text-gray-700">Distance: {r.distance}</p>
                <p className="text-gray-700">Rating: ⭐ {r.rating}</p>
                <p className="text-gray-700">Location: {r.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default NearbyRestaurants;
