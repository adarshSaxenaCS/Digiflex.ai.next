import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

import {
  Car,
  CreditCard,
  MapPin,
  Share2,
  History,
} from "lucide-react";

const features = [
  {
    title: "Schedule Rides",
    desc: "Book your ride in advance and never be late again. Whether it's for work or personal trips, Careem lets you plan ahead.",
    icon: Car,
  },
  {
    title: "Cashless Payments",
    desc: "No need to carry cash. Pay securely via card or wallet and enjoy a seamless experience.",
    icon: CreditCard,
  },
  {
    title: "Ride Tracking",
    desc: "Track your ride in real-time. Know where your driver is and when they'll arrive.",
    icon: MapPin,
  },
  {
    title: "Ride Sharing",
    desc: "Share your ride with others going the same way. Save money and reduce your carbon footprint.",
    icon: Share2,
  },
  {
    title: "Ride History",
    desc: "View all your past trips in one place. Keep track of your ride details, dates, and payments.",
    icon: History,
  },
];

const CareemFeatures = () => {
  return (
    <WrapperContainer>
      <div className="text-center mb-14">
        <Heading className="text-4xl font-extrabold text-[#162452] relative inline-block pb-2">
          Why Choose Careem?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-[#162452] rounded-full"></span>
        </Heading>
        <Paragraph className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
          Careem is more than just a ride — it’s your smart, reliable and modern travel partner.
        </Paragraph>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map(({ title, desc, icon: Icon }, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.03] hover:border-[#162452] hover:shadow-[#162452]/30 group"
          >
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 rounded-full bg-[#162452] text-white shadow-md group-hover:animate-pulse">
              <Icon size={28} />
            </div>
            <h3 className="text-lg font-semibold text-[#162452] group-hover:text-[#162452] transition-colors mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-700 group-hover:text-gray-900">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default CareemFeatures;
