"use client";
import Image from "next/image";
import React, { useState } from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";

const data = [
  {
    img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/IntercloudCloud.avif",
    title: "Cloud-to-Cloud Migration",
    description:
      "Digiflex.ai ensures smooth migration of applications, workloads, and data between cloud platforms like AWS and Azure, optimizing performance and cost-efficiency.",
  },
  {
    img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Intercloudimg.avif",
    title: "Hybrid Cloud Migration",
    description:
      "With Digiflex.ai, businesses can seamlessly move data between private and public clouds, ensuring security, scalability, and operational efficiency.",
  },
  {
    img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/IntercloudHybrid.avif",
    title: "Multi-Cloud Deployment",
    description:
      "Digiflex.ai enables businesses to leverage multiple cloud providers simultaneously, distributing workloads for enhanced reliability and flexibility.",
  },
];

function IntercloudType() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <WrapperContainer>
      <Heading>Intercloud Migration Services by Digiflex.ai</Heading>
      <Subheading>
        <p className="text-center ">
          Digiflex.ai provides cutting-edge intercloud migration solutions to
          help businesses optimize their cloud strategy efficiently and
          securely.
        </p>
      </Subheading>
      <div className="flex flex-wrap justify-center gap-6 pt-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-72 p-4 shadow-lg rounded-lg transition-all duration-300 bg-white overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={300} 
              height={160}
              className="w-full h-40 object-cover rounded-md"
              priority={false}
            />

            <h2 className="text-lg font-semibold mt-2 text-center">
              {item.title}
            </h2>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-white p-4 flex items-center justify-center text-center transition-transform duration-500 ease-in-out rounded-lg shadow-lg ${
                hoveredIndex === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <h2 className="text-lg font-semibold mt-2 pr-2 text-center">
                {item.title}
              </h2>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default IntercloudType;
