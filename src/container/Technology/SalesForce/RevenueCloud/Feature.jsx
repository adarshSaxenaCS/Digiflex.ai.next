"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import { FaMoneyBillWave, FaSyncAlt, FaCogs, FaChartLine, FaShieldAlt, FaShoppingCart } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <WrapperContainer>
      <div>
        {/* Heading */}
        <Heading className="text-center">  
          Key Features of Revenue Cloud
        </Heading>

        {/* Description */}
        <Paragraph className="text-center">
          Unlock the full potential of your revenue process with Salesforce Revenue Cloud. Automate billing, enhance sales efficiency, and drive seamless customer experiences.
        </Paragraph>

        {/* Features List */}
        <div className="max-w-4xl mx-auto mt-8 space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Feature Icon */}
              <div className="flex-shrink-0 text-blue-600 text-3xl">
                {feature.icon}
              </div>

              {/* Feature Text */}
              <div>
                <Subheading className="mb-2 text-lg font-semibold text-gray-800">
                  {feature.title}
                </Subheading>
                <Paragraph className="text-gray-600">
                  {feature.description}
                </Paragraph>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

// Updated Features List for Revenue Cloud
const features = [
  {
    icon: <FaMoneyBillWave />,
    title: "Automated Revenue Management",
    description:
      "Streamline and automate revenue recognition, invoicing, and pricing to improve cash flow and operational efficiency.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Subscription & Usage-Based Billing",
    description:
      "Handle complex pricing models with ease, supporting subscriptions, pay-as-you-go, and one-time purchases efficiently.",
  },
  {
    icon: <FaCogs />,
    title: "AI-Driven Sales Optimization",
    description:
      "Leverage AI-powered analytics to enhance sales performance, optimize pricing strategies, and improve forecasting accuracy.",
  },
  {
    icon: <FaChartLine />,
    title: "Integrated Sales & Finance",
    description:
      "Bridge the gap between sales and finance with seamless data flow, reducing errors and enhancing collaboration.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Compliance",
    description:
      "Ensure full compliance with financial regulations while maintaining enterprise-grade security for all revenue transactions.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Seamless CPQ (Configure, Price, Quote)",
    description:
      "Generate accurate, customized quotes instantly, streamlining the sales cycle and improving customer experience.",
  },
];

export default FeaturesSection;
