"use client";

import React from "react";
import { ShoppingCart, CreditCard, Clock, Shield, Gift, PhoneCall, MapPin, ThumbsUp } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const features = [
  {
    title: "Easy Shopping Cart",
    description:
      "Users can quickly add groceries to their cart with a seamless UI that supports drag-and-drop functionality, quantity adjustments, and instant price updates.",
    icon: <ShoppingCart size={32} />,
  },
  {
    title: "Multiple Payment Options",
    description:
      "Supports a wide range of payment methods including credit/debit cards, UPI, mobile wallets, and net banking, ensuring a smooth and convenient checkout experience for all users.",
    icon: <CreditCard size={32} />,
  },
  {
    title: "Scheduled Deliveries",
    description:
      "Customers can select their preferred delivery slots while placing an order, enabling them to receive groceries at a time that's most convenient for them.",
    icon: <Clock size={32} />,
  },
  {
    title: "Secure Transactions",
    description:
      "Our platform uses end-to-end encryption and follows industry-standard security protocols to ensure that all transactions and user data remain safe and confidential.",
    icon: <Shield size={32} />,
  },
  {
    title: "Exclusive Offers",
    description:
      "Users can enjoy regular deals, seasonal discounts, personalized coupons, and referral bonuses that help them save more on every purchase.",
    icon: <Gift size={32} />,
  },
  {
    title: "24/7 Support",
    description:
      "We provide around-the-clock customer service through multiple channels including live chat, phone, and email, ensuring your queries are always answered on time.",
    icon: <PhoneCall size={32} />,
  },
  {
    title: "Track Orders",
    description:
      "Track your orders in real-time with live delivery status, estimated arrival time, and updates on each delivery stage, right from the app or website.",
    icon: <MapPin size={32} />,
  },
  {
    title: "User Friendly",
    description:
      "Designed with a clean, intuitive interface that allows users of all ages to browse, search, and order products effortlessly without any learning curve.",
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
              className="flex items-start gap-6 bg-white shadow-md p-6 rounded-xl hover:bg-blue-50 transition"
            >
              <div className="text-blue-600">{feature.icon}</div>
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
