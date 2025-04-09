import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from "@/Layout/Subheading";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const Body = () => {
  return (
    <WrapperContainer className="bg-white">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 p-4">
        {/* Left Content Section */}
        <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
          <Heading>Comprehensive Software Test Automation Services</Heading>

          <Paragraph>
            Overcome manual testing limitations with our automation services.
            Ensure consistent quality, comprehensive coverage, and faster
            release cycles. Integrate seamlessly with your CI/CD pipelines and
            empower your team to focus on innovation while we handle the
            rigorous testing process.
          </Paragraph>
        </div>

        {/* Right Video/Image Section */}
        <div className="sm:w-[224px] md:w-[384px] flex justify-center items-center">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Software _Testing.jpeg"
            width={500}
            height={300}
            alt="Software Testing"
            className="rounded-lg max-w-full h-auto"
            priority={false}
          />
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Body;
