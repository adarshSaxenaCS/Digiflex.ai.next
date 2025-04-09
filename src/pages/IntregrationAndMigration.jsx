"use client";

import React from "react";
import { motion } from "framer-motion";
import Mobile2 from "../container/Services/Custom App/Intregation and Migration/Mobile2";
import Mobile3 from "../container/Services/Custom App/Intregation and Migration/Mobile3";
import Mobile4 from "../container/Services/Custom App/Intregation and Migration/mobile4";
import WrapperContainer from "../Layout/WrapperContainer";
import { IntegrationMigrationFAQ} from "../container/Services/Cloud/Faqdata";
import Faq from "../components/Faq";
import Head from "next/head";

const Mobile = () => {
  return (
    <>
       <Head>
    <title>Expert Website & Server Migration Services | AWS & Azure Cloud Migration – Digiflex  </title>
    <meta name="description" content="Digiflex provides seamless website migration services, server relocation, and cloud migration solutions. Our experts handle AWS, Azure, WordPress, and SQL server migrations with minimal downtime and maximum security." />
    <meta name="keywords" content="website migration services, server migration services, aws migration services, aws application migration service, wordpress migration service, azure migration service, amazon migration services,migrate sql server to azure, azure data migration service, server relocation, aws cloud migration services "/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
      <div className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchain_video.mp4" type="video/mp4" />
        </video>

        {/* Content Section */}
        <motion.div
          className="relative z-10 max-w-2xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Reliable Website & Cloud Migration Services – Seamless AWS & Azure Migrations by Digiflex
          </h1>
          
          <p className="mt-4 text-lg">
          Seamless Integration & Hassle-Free Migration for a Smoother Digital Transformation! </p>
          <div className="flex justify-center py-5">
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

      
      

      <WrapperContainer>
      <Mobile2 />
      <Mobile3 />
      <Mobile4 />
      </WrapperContainer>
    <Faq faqs={IntegrationMigrationFAQ}/>
    </>
  );
};

export default Mobile;
