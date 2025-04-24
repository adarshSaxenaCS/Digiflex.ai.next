import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

// Deals data with icons and descriptions
const deals = [
  {
    name: "Burger Combo",
    price: "$8",
    tag: "🔥 Hot Deal",
    icon: "🍔",
    description: "Delicious, juicy burger combo served with crispy fries.",
  },
  {
    name: "Pizza Mania",
    price: "$10",
    tag: "🍕 Buy 1 Get 1",
    icon: "🍕",
    description: "Taste the best pizza in town. Get 1 free with every order.",
  },
  {
    name: "Sushi Pack",
    price: "$12",
    tag: "⏳ Limited Offer",
    icon: "🍣",
    description: "Fresh sushi rolls and sashimi at a great price!",
  },
  {
    name: "Taco Fiesta",
    price: "$9",
    tag: "🌮 Spicy Deal",
    icon: "🌮",
    description: "Tacos bursting with flavor, perfect for spice lovers.",
  },
  {
    name: "Pasta Delight",
    price: "$11",
    tag: "🍝 Chef’s Special",
    icon: "🍝",
    description: "Creamy pasta with a rich, savory sauce you'll love.",
  },
];

const TodayDeals = () => {
  return (
    <WrapperContainer>
      <Heading className="text-center text-4xl font-bold text-[#162451] mb-6">
        Today’s Hot Deals
      </Heading>
      <Paragraph className="text-center text-[#162451] text-lg mb-12 max-w-2xl mx-auto">
        Grab these delicious deals before they’re gone! Limited-time offers for food lovers.
      </Paragraph>

      {/* Top 3 cards in grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {deals.slice(0, 3).map((deal, i) => (
          <div
            key={i}
            className="bg-white p-6 max-w-[300px] w-full rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 relative"
          >
            <div className="w-16 h-16 bg-[#162451] text-white rounded-full flex items-center justify-center mb-4 text-4xl">
              {deal.icon}
            </div>

            <h3 className="text-2xl font-semibold text-[#162451] mb-2 text-center">
              {deal.name}
            </h3>

            <p className="text-gray-700 mb-4 text-center">{deal.description}</p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-[#162451]">{deal.price}</span>
            </div>

            <span className="absolute right-[-22px] top-1/2 -translate-y-1/2 rotate-90 origin-right bg-[#162451] text-white text-xs px-4 py-1 rounded-full shadow-md">
              {deal.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom 2 cards centered */}
      <div className="mt-10 flex flex-wrap justify-center gap-28">
        {deals.slice(3).map((deal, i) => (
          <div
            key={i}
            className="bg-white p-6 max-w-[300px] w-full rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 relative"
          >
            <div className="w-16 h-16 bg-[#162451] text-white rounded-full flex items-center justify-center mb-4 text-4xl">
              {deal.icon}
            </div>

            <h3 className="text-2xl font-semibold text-[#162451] mb-2 text-center">
              {deal.name}
            </h3>

            <p className="text-gray-700 mb-4 text-center">{deal.description}</p>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-[#162451]">{deal.price}</span>
            </div>

            <span className="absolute right-[-22px] top-1/2 -translate-y-1/2 rotate-90 origin-right bg-[#162451] text-white text-xs px-4 py-1 rounded-full shadow-md">
              {deal.tag}
            </span>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default TodayDeals;
