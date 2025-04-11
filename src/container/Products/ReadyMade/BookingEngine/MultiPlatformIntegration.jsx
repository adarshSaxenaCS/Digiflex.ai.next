import React from "react";
import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import { Laptop, Smartphone, Workflow } from "lucide-react";

const MultiPlatformIntegration = () => {
  const data = [
    {
      title: "Web Integration",
      desc: "Effortlessly embed your booking engine into your website for a smooth and intuitive customer experience. Optimized for speed, SEO, and responsiveness.",
      tagline: "Boost Your Website Performance Instantly!",
      feature: ["SEO Friendly", "Fast Loading", "Responsive Design"],
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Web-Integration.png",
      bg: "bg-blue-50",
      reverse: false,
      icon: <Laptop className="w-8 h-8"  />,
    },
    {
      title: "Mobile Integration",
      desc: "Enable your customers to book on the go with mobile-optimized apps and experiences. Fast, secure, and user-friendly on every device.",
      tagline: "Mobile First, Always Connected!",
      feature: ["Touch Optimized", "Fast Payments", "Push Notifications"],
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Mobile-Integration.png",
      bg: "bg-yellow-50",
      reverse: true,
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: "Third-Party Integration",
      desc: "Seamlessly connect with travel portals, OTAs, and third-party apps. Synchronize data in real-time and expand your visibility across global platforms.",
      tagline: "Expand Beyond Boundaries!",
      feature: ["Real-Time Sync", "Global Reach", "Easy API Connections"],
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Third-Party-Integration.png",
      bg: "bg-green-50",
      reverse: false,
      icon: <Workflow className="w-8 h-8" />,
    },
  ];

  return (
    <WrapperContainer>
      <div className="rounded-lg">
        {/* Heading */}
        <Heading className="text-center text-blue-900 text-2xl md:text-4xl font-extrabold leading-tight tracking-wide mb-12">
          Multi-Platform Integration
        </Heading>

        {/* Section Cards */}
        <div className="space-y-12">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} flex flex-col md:flex-row ${
                item.reverse ? "md:flex-row-reverse" : ""
              } items-center rounded-2xl p-6 md:p-10 shadow-md group transition-all hover:shadow-lg hover:scale-[1.02] duration-300`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-64 md:h-80"
                />
              </div>

              {/* Divider line for small devices */}
              <div className="w-full h-px bg-gray-300 my-6 md:hidden" />

              {/* Text */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:px-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-blue-600 text-3xl">{item.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                {/* Tagline */}
                <p className="text-blue-600 font-semibold mb-3 italic">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-base md:text-lg leading-relaxed border-l-4 border-blue-300 pl-4 bg-gradient-to-r from-blue-100 via-transparent to-blue-100 py-2 rounded-md transition-all duration-300 mb-4">
                  {item.desc}
                </p>

                {/* Features List */}
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {item.feature.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700 text-base md:text-lg pl-2 py-2 transition-all duration-300 hover:text-blue-600 hover:pl-4"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default MultiPlatformIntegration;
