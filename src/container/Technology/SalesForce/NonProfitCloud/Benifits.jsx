import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const benefits = [
  {
    id: 1,
    title: "Streamlined Fundraising Management",
    description:
      "Nonprofit Cloud simplifies fundraising by providing tools to track donors, manage campaigns, and automate donation processing.",
  },
  {
    id: 2,
    title: "Improved Donor Engagement",
    description:
      "With personalized outreach and engagement tools, nonprofits can build stronger relationships with donors and supporters.",
  },
  {
    id: 3,
    title: "Efficient Volunteer Management",
    description:
      "Manage volunteer programs seamlessly, from scheduling to communication, ensuring smooth operations for nonprofit organizations.",
  },
  {
    id: 4,
    title: "Impact Measurement & Analytics",
    description:
      "Track and analyze program impact using data-driven insights, helping nonprofits demonstrate transparency and effectiveness.",
  },
  {
    id: 5,
    title: "Grant & Program Management",
    description:
      "Automate grant tracking and manage programs effectively to maximize impact and improve operational efficiency.",
  },
  {
    id: 6,
    title: "Secure & Scalable Cloud Infrastructure",
    description:
      "Benefit from a secure and scalable cloud-based platform that ensures data security while allowing nonprofits to grow efficiently.",
  },
];

const NonprofitCloudBenefits = () => {
  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center">
          <Heading>Key Benefits of Salesforce Nonprofit Cloud</Heading>
          <Paragraph className="text-center">
            Empower your nonprofit organization with Salesforce Nonprofit Cloud—streamlining fundraising, engagement, and impact measurement.
          </Paragraph>
        </div>

        {/* Alternating Timeline */}
        <div className="relative wrap overflow-hidden">
          
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={benefit.id}
                className={`
                  mb-8 flex gap-5 flex-col md:flex-row items-center w-full 
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Empty space on one side */}
                <div className="order-1 md:w-5/12 w-full"></div>

                {/* Purple circle with step number */}
                <div className="z-20 flex items-center order-1 bg-[#1D4ED8] shadow-xl w-10 h-10 rounded-full">
                  <span className="mx-auto font-bold text-white">
                    {benefit.id}
                  </span>
                </div>

                {/* Benefit content box */}
                <div className="order-1 bg-white rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4 mt-4 md:mt-0">
                  <Subheading>
                    <div>{benefit.title}</div>
                  </Subheading>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default NonprofitCloudBenefits;
