import React from "react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const Expertise = () => {
  const expertiseList = [
    {
      title: "Cloud-Based Solutions",
      description: "We develop scalable and reliable AppExchange apps using cloud technologies.",
    },
    {
      title: "Custom App Development",
      description: "Tailor-made solutions crafted to align with specific business requirements.",
    },
    {
      title: "Enterprise Security Standards",
      description: "Our apps ensure top-tier security, compliance, and data protection.",
    },
    {
      title: "Seamless Integrations",
      description: "Connect AppExchange apps with third-party platforms effortlessly.",
    },
    {
      title: "AI & Automation",
      description: "We integrate AI-powered automation for efficiency and smart workflows.",
    },
    {
      title: "Ongoing Maintenance & Support",
      description: "Ensuring continuous updates, security patches, and feature enhancements.",
    },
  ];

  return (
    <WrapperContainer>
      <div>
        <Heading>Our Expertise in AppExchange Development</Heading>
        <Paragraph className="text-center">
          We specialize in developing secure, scalable, and innovative AppExchange applications.
        </Paragraph>

        <div className=" relative z-10 space-y-8">
          {expertiseList.map((expertise, index) => (
            <div
              key={index}
              className={`relative group ${index % 2 === 0 ? "ml-0 md:ml-12" : "ml-0 md:ml-24"}`}
            >
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-600 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Blue circle decoration */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-100 rounded-full"></div>

                {/* Number indicator */}
                <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-semibold -ml-2 -mt-2 shadow-md rounded-br-lg z-10">
                  {index + 1}
                </div>

                <div className="flex items-start">
                  <div className="ml-4">
                    <Subheading>{expertise.title}</Subheading>
                    <Paragraph>{expertise.description}</Paragraph>
                  </div>
                </div>

                {/* Blue line decoration */}
                <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Connecting line between features */}
              {index < expertiseList.length - 1 && (
                <div className="absolute h-8 w-1 bg-blue-100 left-5 bottom-0 z-0 transform translate-y-full hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Expertise;
