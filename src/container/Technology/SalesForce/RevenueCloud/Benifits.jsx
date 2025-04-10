"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import { FaMoneyBillWave, FaSyncAlt, FaCogs, FaChartLine, FaShieldAlt, FaShoppingCart } from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <WrapperContainer>
      <div className="text-center">
        {/* Section Heading */}
        <Heading>  
          Benefits of Salesforce Revenue Cloud
        </Heading>

        {/* Section Description */}
        <Paragraph>
          Unlock new revenue opportunities, enhance efficiency, and improve customer experience with Salesforce Revenue Cloud.
        </Paragraph>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Benefit Icon */}
              <div className="text-blue-600 text-4xl mb-4">
                {benefit.icon}
              </div>

              {/* Benefit Title */}
              <Subheading>
                {benefit.title}
              </Subheading>

              {/* Benefit Description */}
              <Paragraph >
                {benefit.description}
              </Paragraph>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

// Benefits Data
const benefits = [
  {
    icon: <FaMoneyBillWave />,
    title: "Increased Revenue Efficiency",
    description:
      "Automate pricing, billing, and revenue recognition to reduce manual errors and increase revenue accuracy.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Faster Sales Cycle",
    description:
      "Enable quick quoting, contract approvals, and automated invoicing for a seamless customer experience.",
  },
  {
    icon: <FaCogs />,
    title: "Improved Sales & Finance Alignment",
    description:
      "Bridge the gap between sales and finance with seamless data flow for accurate forecasting and reporting.",
  },
  {
    icon: <FaChartLine />,
    title: "Scalability & Flexibility",
    description:
      "Handle complex revenue models like subscriptions, one-time purchases, and usage-based billing effortlessly.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Regulatory Compliance",
    description:
      "Ensure compliance with industry regulations and financial standards while maintaining high security.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Seamless CPQ Integration",
    description:
      "Configure, price, and quote with real-time accuracy to close deals faster and drive customer satisfaction.",
  },
];

export default BenefitsSection;
