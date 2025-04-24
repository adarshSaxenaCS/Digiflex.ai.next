import React from "react";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { Star, ShieldCheck, PhoneCall } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Image from "next/image"; // Import next/image for optimized images

function SafetyInfo() {
  return (
    <WrapperContainer className="py-10 bg-[#F9FAFB]">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#172453]">
          We care about{" "}
          <span className="bg-[#172554] text-white px-2 py-0.5 rounded-md">
            safety
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
          Your safety is our priority. We ensure sanitized vehicles,
          background-verified drivers, and 24x7 support.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Image Section */}
        <div className="flex-1">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Safety-ImageIndriver.png"
            alt="Safety-ImageIndriver"
            width={740} // Provide the width of the image
            height={400} // Provide the height of the image
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex-1 h-[400px] bg-white p-8 rounded-xl shadow-xl overflow-y-auto">
          <div className="space-y-4 text-left">
            {/* Rating System */}
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-[#172554] p-2 rounded-md text-white">
                  <Star size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-[#172453]">
                  Rating system
                </h3>
              </div>
              <p className="text-lg text-gray-700">
                We ask users to give us their honest feedback after each ride.
                You can choose your driver based on the experience of previous
                riders.
              </p>
            </div>

            {/* Mandatory Checks */}
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-[#172554] p-2 rounded-md text-white">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-[#172453]">
                  Mandatory checks
                </h3>
              </div>
              <p className="text-lg text-gray-700">
                All drivers must pass background checks before driving with
                inDrive.
              </p>
            </div>

            {/* Safety Button */}
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-[#172554] p-2 rounded-md text-white">
                  <PhoneCall size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-[#172453]">
                  Safety button
                </h3>
              </div>
              <p className="text-lg text-gray-700">
                Tap it to quickly contact the police or emergency services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default SafetyInfo;
