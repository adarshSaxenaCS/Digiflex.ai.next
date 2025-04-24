import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";
import Image from "next/image"; // Assuming you're using Next.js

const steps = [
  {
    title: "Discover Local Flavors",
    desc: "Explore top-rated restaurants and cuisines—find everything from spicy Indian to cheesy Italian and fresh sushi. Unleash your taste buds!",
    icon: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Discover Local Flavors.png",
  },
  {
    title: "Customize Your Meal",
    desc: "Choose your meal, add extra toppings, pick your spice level, and make it just the way you want. From mild to spicy, it's your choice!",
    icon: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Customize Your Meal.png",
  },
  {
    title: "Track & Enjoy",
    desc: "Track your food in real-time! Watch as your meal arrives fresh, hot, and ready to enjoy. No more waiting, just immediate satisfaction!",
    icon: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Track & Enjoy.png",
  },
  {
    title: "Rate & Share",
    desc: "After your meal, rate your experience and share your feedback. Help others discover the best spots and make your voice heard!",
    icon: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Rate & Share.png",
  },
];

const StepsToOrder = () => {
  return (
    <WrapperContainer>
      <Heading className="text-center text-[#162451] text-4xl font-extrabold">
        How It Works
      </Heading>
      <Paragraph className="max-w-2xl mx-auto text-[#162451] text-lg mt-4 text-center">
        It's simple and easy to order from your favorite local spots. Just
        follow these steps, and your meal will be on its way in no time!
      </Paragraph>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
        {steps.map((item, index) => (
          <div
            key={index}
            className="relative group w-full bg-[#162451] rounded-2xl shadow-xl p-8 overflow-hidden flex flex-col justify-between"
          >
            {/* Background image on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:opacity-100 opacity-0"
              style={{ backgroundImage: `url(${item.icon})` }}
            ></div>

            {/* Content Section */}
            <div className="relative z-10 transition-all duration-300">
              {/* Icon hidden on hover */}
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl mx-auto group-hover:hidden">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56} // Set the width for the icon image
                  height={56} // Set the height for the icon image
                  className="w-14 h-14 object-cover rounded-full"
                />
              </div>

              {/* Default heading - hidden on hover */}
              <Subheading className="text-white text-xl font-semibold text-center mb-4 group-hover:hidden">
                {item.title}
              </Subheading>

              {/* Paragraph hidden on hover */}
              <Paragraph className="text-white text-sm text-center group-hover:hidden">
                {item.desc}
              </Paragraph>
            </div>

            {/* Heading only shown on hover at bottom, with image */}
            <Subheading className="hidden group-hover:block text-white text-xl font-semibold text-center mt-6 bg-[#162451] p-3 rounded-md transition-all duration-300 z-20">
              {item.title}
            </Subheading>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default StepsToOrder;
