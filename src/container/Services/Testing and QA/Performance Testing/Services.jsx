import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const Service = ({ img, title, description }) => (
  <div className="relative w-full bg-black border border-green-500 text-white rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="relative">
      <Image
        src={img}
        alt={title}
        width={500}
        height={192}
        className="w-full h-48 object-cover opacity-70 group-hover:opacity-90 transition-all duration-500"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
    <div className="absolute top-0 left-0 w-full p-4">
      <h3 className="font-bold text-lg text-white drop-shadow-lg mb-2 transform group-hover:translate-x-2 transition-transform">
        {title}
      </h3>
      <p className="text-sm text-white/80 mb-2">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/load_Testing.jpeg",
      title: "Load Testing",
      description:
        "Ensure your software performs seamlessly under normal and peak load conditions with our expert load testing solutions.",
    },
    {
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/stress_Testing.jpeg",
      title: "Stress Testing",
      description:
        "Discover your software's limits by determining the maximum load it can endure before failure, ensuring reliability and robustness with our stress testing services.",
    },
    {
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/volume_Testing.jpeg",
      title: "Volume Testing",
      description:
        "Validate your system's ability to manage and process large volumes of data effectively, guaranteeing performance consistency.",
    },
    {
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/scalability_Testing.jpeg",
      title: "Scalability Testing",
      description:
        "Evaluate and optimize your software's ability to scale effortlessly in response to fluctuating user demands, a core aspect of our performance testing suite.",
    },
    {
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/endurance_Testing.jpeg",
      title: "Endurance Testing",
      description:
        "Assess your software's capacity to operate under sustained loads over extended periods, ensuring durability and long-term reliability.",
    },
    {
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/load_Testing.jpeg",
      title: "Load Testing",
      description:
        "Ensure your software performs seamlessly under normal and peak load conditions with our expert load testing solutions.",
    },
    {
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/stress_Testing.jpeg",
      title: "Stress Testing",
      description:
        "Discover your software's limits by determining the maximum load it can endure before failure, ensuring reliability and robustness with our stress testing services.",
    },
    {
      img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/volume_Testing.jpeg",
      title: "Volume Testing",
      description:
        "Validate your system's ability to manage and process large volumes of data effectively, guaranteeing performance consistency.",
    },
  ];

  return (
    <WrapperContainer>
      <div>
        <Heading>Services We Provide</Heading>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl">
            {services.map((service, index) => (
              <Service
                key={index}
                img={service.img}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Services;
