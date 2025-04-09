import React from "react";
import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const BusinessNetworkOverview = () => {
  return (
    <WrapperContainer>
      <div className="bg-[#172553] text-white p-10 rounded-lg shadow-xl">
        <Heading className="text-3xl font-bold text-center">
          Business Network Overview
        </Heading>
        <Paragraph className="text-center text-white mt-4 max-w-2xl mx-auto">
          Expand your reach with a **global network** of verified business partners.  
          Our platform enables **seamless collaborations, international transactions,**
          and a **growth-driven approach** for businesses of all sizes.
        </Paragraph>

        {/* Network Map with Responsive Images */}
        <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full bg-gray-800 p-6 rounded-lg">
          <Image
            src="https://img.freepik.com/free-vector/gradient-b2b-illustration_23-2149322240.jpg?ga=GA1.1.1704139200.1743657496"
            alt="Business Network"
            width={250}
            height={180}
            className="w-full h-auto mx-auto rounded-md shadow-md"
          />
          <Image
            src="https://img.freepik.com/free-vector/steal-data-cyber-attack-concept_23-2148535703.jpg"
            alt="Business Network"
            width={250}
            height={180}
            className="w-full h-auto mx-auto rounded-md shadow-md"
          />
          <Image
            src="https://img.freepik.com/free-vector/website-setup-concept-landing-page_23-2148309892.jpg?ga=GA1.1.1704139200.1743657496"
            alt="Business Network"
            width={250}
            height={180}
            className="w-full h-auto mx-auto rounded-md shadow-md"
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <Heading className="text-2xl font-bold text-center text-blue-400">
            Why Choose Our Business Network?
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-blue-700 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Global Expansion</h3>
              <p className="text-gray-200 mt-1">Connect with businesses in 100+ countries.</p>
            </div>
            <div className="p-4 bg-green-700 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Verified Partners</h3>
              <p className="text-gray-200 mt-1">Work with **trusted & certified** businesses.</p>
            </div>
            <div className="p-4 bg-purple-700 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">AI-Powered Insights</h3>
              <p className="text-gray-200 mt-1">Real-time analytics to **boost your business.**</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-12">
          <Heading className="text-2xl font-bold text-center text-blue-400">
            Success Stories
          </Heading>
          <Paragraph className="text-center text-white mt-2 max-w-2xl mx-auto">
            Learn how businesses have grown using our **B2B network.**  
          </Paragraph>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-300">TechSolutions Inc.</h3>
              <p className="text-gray-300 mt-2">
                Grew their **international presence** by 200% with our **automated trade platform**.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-300">Swift Logistics</h3>
              <p className="text-gray-300 mt-2">
                Expanded to **10+ new countries** through our **seamless supplier network**.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default BusinessNetworkOverview;
