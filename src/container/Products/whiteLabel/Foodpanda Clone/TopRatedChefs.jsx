import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const chefs = [
  {
    name: "Chef Arjun",
    specialty: "North Indian Cuisine",
    rating: 4.9,
    dish: "Butter Chicken",
    dishDescription: "A creamy, spicy North Indian curry with tender chicken pieces.",
  },
  {
    name: "Chef Lisa",
    specialty: "Italian Pasta & Pizza",
    rating: 4.8,
    dish: "Margherita Pizza",
    dishDescription: "A classic pizza with fresh tomatoes, mozzarella, and basil.",
  },
  {
    name: "Chef Nakamura",
    specialty: "Japanese Sushi",
    rating: 5.0,
    dish: "Dragon Roll",
    dishDescription: "A sushi roll with shrimp tempura, avocado, and a spicy kick.",
  },
];

const TopRatedChefs = () => {
  return (
    <WrapperContainer>
      <Heading className="text-center text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#162451] via-yellow-400 to-[#162451]">
        Meet Our Top-Rated Chefs
      </Heading>
      <Paragraph className="text-center text-[#162451] mb-10 text-lg font-medium">
        Discover the culinary experts who make every dish unforgettable.
      </Paragraph>

      {/* Marquee Section */}
      <div className="overflow-hidden mb-8">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          loop="infinite"
          className="bg-[#162451] text-white py-2"
        >
          {chefs.map((chef) => `${chef.name} - ${chef.specialty} | `)}
          {chefs.map((chef) => `${chef.name} - ${chef.specialty} | `)}
          {chefs.map((chef) => `${chef.name} - ${chef.specialty} | `)}
          {chefs.map((chef) => `${chef.name} - ${chef.specialty} | `)}
          {chefs.map((chef) => `${chef.name} - ${chef.specialty} | `)}
          {chefs.map((chef) => `${chef.name} - ${chef.specialty} | `)}
        </marquee>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {chefs.map((chef, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-[#162451] hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Chef Name */}
            <h3 className="text-xl font-semibold text-[#162451] mb-2">{chef.name}</h3>

            {/* Specialty */}
            <p className="text-gray-700 mb-2 font-medium">{chef.specialty}</p>

            {/* Rating */}
            <p className="text-gray-700 mb-4">
              Rating: <span className="text-yellow-500">⭐ {chef.rating}</span>
            </p>

            {/* Featured Dish */}
            <div className="bg-[#162451] text-white rounded-lg p-4 mt-4">
              <h4 className="text-lg font-semibold mb-2">Dish of the Day</h4>
              <p className="font-bold text-lg">{chef.dish}</p>
              <p className="text-sm">{chef.dishDescription}</p>
            </div>

            {/* Description */}
            <div className="text-sm text-gray-600 mt-4">
              <p className="italic">
                A true culinary artist, Chef {chef.name.split(" ")[1]} specializes in
                creating mouth-watering dishes that delight every palate.
              </p>
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default TopRatedChefs;
