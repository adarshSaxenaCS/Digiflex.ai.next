"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Saas2 from "../container/Services/Custom App/Saas Devlopment/Saas2";
import Saas3 from "../container/Services/Custom App/Saas Devlopment/Saas3";
import Saas4 from "../container/Services/Custom App/Saas Devlopment/Saas4";
import Heading from "../Layout/Heading";
import Subheading from "../Layout/Subheading";
import { SaaSfaqs } from "../container/Services/Cloud/Faqdata";
import Faq from "../components/Faq";
import Head from "next/head";

const clients = [
  {
    name: "Universal",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBM7RW2MYrGDHBmKM99UUycqt995yTLhWww&s",
  },
  {
    name: "NHS",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbnhs://encrypted-tbn0.gstatic.com/images?q=tbn9GcShGtutCNQT5sDXQvTm17rkNot67tFpR38Jig&s",
  },
  {
    name: "Guinness",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBcKvoP84DeACaP9kvyPCakbXbWXrYb1ztA&s",
  },
  {
    name: "E-commerce",
    src: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png",
  },
];

const Saas = () => {
  return (
    <>
   <Head>
    <title>Top SaaS Development Company | Scalable SaaS Software Solutions – Digiflex</title>
    <meta name="description" content="Digiflex provides expert SaaS software development services, delivering scalable and secure SaaS applications. As a leading SaaS development company, we build high-performance cloud-based solutions for businesses." />
    <meta name="keywords" content="saas software development, saas application development, saas development company, saas software development services "/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
      {/* Hero Section with Video Background */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchain_video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Content */}
        <motion.div
          className="relative z-30 text-white max-w-4xl p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Top SaaS Software Development Services – Scalable & Secure Solutions by Digiflex
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Scalable, Secure, and High-Performance SaaS Solutions for Modern
            Businesses.
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center space-x-4">
              <button className="bg-white text-[#172554] px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300">
                Get Started
              </button>
              <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#172554] transition-transform transform hover:scale-105 duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Clients Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading>Our Clients</Heading>
          <p className="text-gray-600">
            The world's leading companies trust our software development
            expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                width={120} // Adjust based on actual logo size or desired display
                height={48} // Adjust based on actual logo size or desired display
                className="max-h-12 w-auto object-contain"
                priority={false}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Heading>Why Choose Our SaaS Solutions?</Heading>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Subheading className="text-xl font-semibold mb-2">
                Scalability
              </Subheading>
              <p className="text-gray-600">
                Our solutions grow with your business needs.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Subheading className="text-xl font-semibold mb-2">
                Security
              </Subheading>
              <p className="text-gray-600">
                We implement top security measures to protect your data.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Subheading className="text-xl font-semibold mb-2">
                Seamless Integration
              </Subheading>
              <p className="text-gray-600">
                Compatible with various platforms and tools.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <Saas2 />
      <Saas3 />
      <Saas4 />
      <Faq faqs={SaaSfaqs} />
    </>
  );
};

export default Saas;