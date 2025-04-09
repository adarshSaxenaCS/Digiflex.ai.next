import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Fontheading from "@/Layout/Fontheading";
import Subheading from "@/Layout/Subheading";

function Aws_busines() {
  const benefits = [
    "Scalability & Flexibility",
    "Cost-Effectiveness",
    "Security & Compliance",
    "Global Infrastructure",
    "Wide Range of Services",
  ];

  return (
    <WrapperContainer>
      <div className="flex flex-col items-center text-center">
        <Heading>Why Businesses Choose Digiflex.ai for AWS Solutions</Heading>

        <Image
          src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AWS_logo.avif"
          width={500}
          height={300}
          alt="AWS Cloud"
          className="w-[60px] md:w-[80px] lg:w-[100px]"
          priority={false}
        />

        <Subheading>
          Digiflex.ai utilizes AWS to deliver scalable, secure, and
          cost-effective cloud solutions, helping businesses optimize
          operations, enhance security, and drive innovation with advanced cloud
          infrastructure.
        </Subheading>
      </div>

      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 
                      mt-8 md:mt-5 px-4 md:px-8"
      >
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Aws_intro.avif"
            width={500}
            height={300}
            alt="AWS Infrastructure"
            className="w-full max-w-[500px] "
            priority={false}
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-[500px]">
          <ul className="space-y-3 w-full">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="p-4 bg-white hover:shadow-lg transition duration-700 
                          rounded-lg border border-gray-100"
              >
                <Fontheading>{benefit}</Fontheading>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Aws_busines;
