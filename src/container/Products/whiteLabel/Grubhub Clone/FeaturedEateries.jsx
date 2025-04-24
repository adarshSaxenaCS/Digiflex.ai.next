import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";

const restaurants = [
  {
    name: "Spice Junction",
    desc: "Bold Indian flavors served piping hot, straight from the tandoor. Try our signature butter chicken and garlic naan combo.",
    icon: "🍛",
    branches: [
      { name: "Downtown", location: "123 Spice St." },
      { name: "Uptown", location: "456 Curry Rd." },
    ],
    dishes: [
      { name: "Butter Chicken", price: "$12" },
      { name: "Garlic Naan", price: "$3" },
    ],
  },
  {
    name: "Green Fork",
    desc: "Wholesome salads, wraps, and smoothies made from organic ingredients. Ideal for healthy lunches and clean eating.",
    icon: "🥗",
    branches: [
      { name: "Central", location: "789 Green Ln." },
      { name: "West Side", location: "101 Salad Blvd." },
    ],
    dishes: [
      { name: "Caesar Salad", price: "$10" },
      { name: "Avocado Wrap", price: "$8" },
    ],
  },
  {
    name: "Sushi Lab",
    desc: "Premium sushi and sashimi crafted by top Japanese chefs. Fresh, delicate, and beautifully presented.",
    icon: "🍣",
    branches: [
      { name: "Ocean View", location: "123 Sushi Bay" },
      { name: "Sushi Street", location: "456 Fish Rd." },
    ],
    dishes: [
      { name: "Tuna Sushi", price: "$15" },
      { name: "Salmon Sashimi", price: "$18" },
    ],
  },
  {
    name: "Pasta Paradise",
    desc: "Delicious Italian pastas made fresh with the finest ingredients. Taste the best of Italy in every bite.",
    icon: "🍝",
    branches: [
      { name: "City Center", location: "321 Pasta Ave" },
      { name: "East Side", location: "567 Noodle Rd." },
    ],
    dishes: [
      { name: "Spaghetti Carbonara", price: "$14" },
      { name: "Penne Arrabbiata", price: "$12" },
    ],
  },
];

const FeaturedEateries = () => {
  return (
    <WrapperContainer>
      <Heading className="text-4xl text-center font-bold mb-6 text-[#162451]">
        Top Picks For You
      </Heading>
      <Paragraph className="text-center text-[#162451] text-lg mb-12 max-w-2xl mx-auto">
        Explore our handpicked selection of the most-loved restaurants, serving up some of the finest cuisines in the city.
      </Paragraph>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {restaurants.map((res, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl border-l-4 border-[#162451] p-6 w-full max-w-sm mx-auto"
          >
            {/* Icon */}
            <div className="w-24 h-24 bg-[#162451] text-white rounded-full flex items-center justify-center mb-6 text-3xl font-semibold shadow-lg">
              {res.icon}
            </div>

            {/* Restaurant Name */}
            <Subheading className="text-2xl font-semibold text-[#162451] mb-4 text-center">
              {res.name}
            </Subheading>

            {/* Description */}
            <Paragraph className="text-center text-gray-600 text-lg mb-6 leading-relaxed">
              {res.desc}
            </Paragraph>

            {/* Dishes */}
            <div className="text-center mb-6">
              <Subheading className="text-xl text-[#162451] mb-4">Featured Dishes</Subheading>
              <ul className="list-none space-y-2">
                {res.dishes.map((dish, index) => (
                  <li key={index} className="text-gray-700">
                    {dish.name} - <span className="font-bold">{dish.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default FeaturedEateries;
