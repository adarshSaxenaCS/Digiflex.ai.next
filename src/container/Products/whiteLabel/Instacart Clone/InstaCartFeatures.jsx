"use client";

import React from "react";
import { ShoppingCart, CreditCard, Clock, Shield, Gift, PhoneCall, MapPin, ThumbsUp } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const features = [
  {
    title: "Easy Shopping Cart",
    description: "Users can quickly add groceries to their cart with a seamless UI.",
    icon: <ShoppingCart size={32} />,
  },
  {
    title: "Multiple Payment Options",
    description: "Supports credit cards, UPI, and wallets for easy checkout.",
    icon: <CreditCard size={32} />,
  },
  {
    title: "Scheduled Deliveries",
    description: "Customers can choose preferred delivery time slots.",
    icon: <Clock size={32} />,
  },
  {
    title: "Secure Transactions",
    description: "All payments and personal data are securely handled.",
    icon: <Shield size={32} />,
  },
  {
    title: "Exclusive Offers",
    description: "Get personalized coupons and discount codes.",
    icon: <Gift size={32} />,
  },
  {
    title: "24/7 Support",
    description: "Instant help via chat, phone, or email.",
    icon: <PhoneCall size={32} />,
  },
  {
    title: "Track Orders",
    description: "Track your order live from the app or website.",
    icon: <MapPin size={32} />,
  },
  {
    title: "User Friendly",
    description: "Simple and intuitive user interface.",
    icon: <ThumbsUp size={32} />,
  },
];

const InstaCartFeatures = () => {
  return (
    <WrapperContainer>
      <div className="py-10">
        <Heading className="text-center text-4xl font-bold mb-10 text-black">
          Features of Our Instacart Clone
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 bg-white shadow-md p-6 rounded-xl hover:bg-green-50 transition"
            >
              <div className="text-green-600">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-black">{feature.title}</h3>
                <Paragraph className="text-sm text-gray-600">{feature.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default InstaCartFeatures;
