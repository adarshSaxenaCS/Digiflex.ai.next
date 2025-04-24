import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Anjali",
    feedback:
      "The delivery was super quick, and the food was hot & fresh! I always get my orders in record time, and the packaging is always neat and secure.",
    rating: 5,
    avatar: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Anjali.png",
  },
  {
    name: "Ravi",
    feedback:
      "I love how easy it is to find restaurants near me. Highly recommended! The UI is very intuitive, and I can browse menus in just a few clicks.",
    rating: 4,
    avatar: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Ravi.png",
  },
  {
    name: "Meena",
    feedback:
      "Great experience every time. The deals are unbeatable! I’ve saved so much using the discount offers. Always a smooth experience.",
    rating: 5,
    avatar: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Meena.png",
  },
  {
    name: "Suresh",
    feedback:
      "Fast delivery and great customer support. I can always count on this service for an exceptional experience.",
    rating: 4,
    avatar: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Suresh.png",
  },
];

const TestimonialSection = () => {
  return (
    <WrapperContainer>
      {/* Page Heading with deep blue gradient */}
      <Heading className="text-center text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#172554] via-indigo-800 to-[#172554]">
        What Our Customers Are Saying
      </Heading>

      <Paragraph className="text-center text-[#172554] mb-8 text-lg font-medium">
        Real words from our happy foodies. Join the many satisfied customers who trust us for quick and fresh delivery.
      </Paragraph>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#E8EAF6] shadow-lg rounded-xl p-8 w-full sm:w-[220px] lg:w-[240px] mx-auto transition-transform transform hover:scale-105"
          >
            {/* Customer Avatar */}
            <div className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-[#172554]">
              <Image
                src={t.avatar}
                alt={t.name}
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Customer Feedback */}
            <p className="text-gray-700 mb-4 text-center italic text-lg leading-relaxed">
              {`“${t.feedback}”`}
            </p>

            {/* Customer Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(t.rating)].map((_, idx) => (
                <Star key={idx} className="text-[#172554] mr-1" />
              ))}
            </div>

            {/* Customer Name */}
            <h4 className="text-[#172554] font-semibold text-center text-xl">{t.name}</h4>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default TestimonialSection;
