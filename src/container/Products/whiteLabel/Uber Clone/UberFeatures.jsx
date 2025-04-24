import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { FaCar, FaMoneyCheckAlt, FaClock } from "react-icons/fa"; // Icons for the features

const features = [
  {
    title: "Ride in Minutes",
    desc: "Get picked up from your location quickly with real-time tracking and estimated arrival. We ensure a smooth and quick experience for all riders.",
    icon: <FaClock size={40} className="text-[#ffffff]" />, // Icon for this feature
  },
  {
    title: "Earn as a Driver",
    desc: "Drive with Uber and earn on your schedule. Whether full-time or part-time, you decide when you want to work and how much you want to earn.",
    icon: <FaCar size={40} className="text-[#162452]" />, // Icon for this feature
  },
  {
    title: "Secure Payments",
    desc: "Cashless and safe—pay via cards, wallets, or UPI with transaction security at every step. Your payment data is securely encrypted for your peace of mind.",
    icon: <FaMoneyCheckAlt size={40} className="text-[#ffffff]" />, // Icon for this feature
  },
];

const UberFeatures = () => {
  return (
    <WrapperContainer className="py-20">
      {/* Main Heading Aligned to the Right */}
      <div className="text-right mb-12">
        <Heading className="text-4xl font-bold text-[#1a2e70] text-right">
          How companies leverage Uber for Business
        </Heading>
        <Paragraph className="mt-4 text-gray-600 w-full text-right">
          From safety to flexibility, Uber offers features that stand out above the rest.
        </Paragraph>
      </div>

      {/* Features Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 text-left transition-all duration-300 rounded-lg ${
              index === 0 || index === features.length - 1
                ? "bg-[#172553] text-white" // Blue background, white text for first and last box
                : "bg-white text-[#172553]" // White background, blue text for middle boxes
            }`}
          >
            {/* Feature Icon */}
            <div
              className={`mb-4 flex justify-start items-center ${
                index === 0 || index === features.length - 1
                  ? "text-white" // White icon for first and last box
                  : "text-[#172553]" // Blue icon for middle boxes
              }`}
            >
              {feature.icon}
            </div>
            {/* Feature Title */}
            <h3
              className={`text-xl font-semibold mb-2 ${
                index === 0 || index === features.length - 1
                  ? "text-white" // White text for first and last box
                  : "text-[#172553]" // Blue text for middle boxes
              }`}
            >
              {feature.title}
            </h3>
            {/* Feature Description */}
            <p
              className={`text-sm ${
                index === 0 || index === features.length - 1
                  ? "text-white" // White text for first and last box
                  : "text-[#172553]" // Blue text for middle boxes
              }`}
            >
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default UberFeatures;
