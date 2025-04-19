import Image from "next/image";
import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

function Cicd_advantage() {
  return (
    <WrapperContainer>
      <Heading>Advantage of CI/CD Automation with Digiflex.ai</Heading>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 mt-10 bg-gray-50 rounded-xl shadow-lg">
        {/* Advantages List - Left */}
        <div className="flex flex-col gap-4 text-lg font-medium text-gray-700">
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">
          Faster Software Releases
          </p>
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">
          Reduced Errors & Downtime
          </p>
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">
          Improved Developer Productivity
          </p>
        </div>

        {/* Image Center */}
        <div className="flex justify-center">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Nativ_advantage.avif"
            width={500}
            height={300}
            alt="Digiflex Advantage"
            className="w-64 md:w-80 rounded-xl shadow-md"
            priority={false}
          />
        </div>

        {/* Advantages List - Right */}
        <div className="flex flex-col gap-4 text-lg font-medium text-gray-700">
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">
          Enhanced Collaboration
          </p>
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">
          Scalable & Secure Deployments
          </p>
          <p className="bg-blue-100 px-4 py-2 rounded-lg shadow">
          Cost Efficiency
          </p>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Cicd_advantage