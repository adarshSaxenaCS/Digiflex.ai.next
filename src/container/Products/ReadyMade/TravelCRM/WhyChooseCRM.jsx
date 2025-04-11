import Image from "next/image";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";

function WhyChooseCRM() {
  return (
    <WrapperContainer>
      <div className="relative text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-3xl group">
            <Heading className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text leading-tight animate-fade-in-up">
              Why Choose Our Travel CRM?
            </Heading>

            <Paragraph className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed tracking-wide group-hover:text-gray-800 transition duration-300 animate-fade-in-up">
              Experience seamless{" "}
              <span className="text-blue-600 font-semibold">
                travel management
              </span>{" "}
              with our intuitive CRM that helps you
              <span className="underline underline-offset-4 decoration-blue-400">
                {" "}
                optimize business processes
              </span>
              .
              <span className="text-indigo-600 font-semibold">
                {" "}
                Automate bookings
              </span>
              , track{" "}
              <span className="text-purple-600 font-semibold">
                customer insights
              </span>{" "}
              in real-time, and enjoy{" "}
              <span className="text-green-600 font-semibold">24/7 support</span>{" "}
              – all in one platform!
            </Paragraph>

            <Paragraph className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed tracking-wide group-hover:text-gray-800 transition duration-300 animate-fade-in-up">
              Our CRM is designed for both
              <span className="text-blue-600 font-semibold">
                {" "}
                small travel agencies
              </span>{" "}
              and
              <span className="text-purple-600 font-semibold">
                {" "}
                large enterprises
              </span>
              , ensuring
              <span className="underline underline-offset-4 decoration-indigo-400">
                {" "}
                scalability and efficiency
              </span>
              . With{" "}
              <span className="text-pink-600 font-semibold">
                AI-driven analytics
              </span>{" "}
              and
              <span className="text-yellow-600 font-semibold">
                {" "}
                multi-channel integration
              </span>
              , you'll
              <span className="text-green-600 font-semibold">
                {" "}
                never miss a lead
              </span>
              .
            </Paragraph>

            <Paragraph className="mt-6 text-base md:text-lg text-[#162350] italic border-l-4 border-blue-500 pl-4">
              <i>"Empowering your travel business to scale effortlessly."</i>
            </Paragraph>
          </div>

          {/* Right Column: Features Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Feature Cards */}
            {[
              {
                title: "Easy to Use",
                description:
                  "Designed for speed and simplicity, ensuring effortless navigation and fast adoption.",
                image:
                  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Easy-to-Use.png",
              },
              {
                title: "Customizable CRM",
                description:
                  "Tailor workflows, branding, and automation rules to fit your business model.",
                image:
                  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Customizable-CRM.png",
              },
              {
                title: "24/7 Support",
                description:
                  "Our expert team ensures round-the-clock assistance, minimizing downtime.",
                image:
                  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/24-7-Support.png",
              },
              {
                title: "Seamless Integrations",
                description:
                  "Connect with GDS, payment gateways, and marketing tools effortlessly.",
                image:
                  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Seamless-Integrations.png",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative bg-white/20 backdrop-blur-lg rounded-lg shadow-md hover:scale-105 transition-all duration-300 overflow-hidden h-[110px] flex items-center justify-center"
              >
                {/* Image Background */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-lg" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-4 py-3">
                  <h3 className="text-sm md:text-base font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-white">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default WhyChooseCRM;
