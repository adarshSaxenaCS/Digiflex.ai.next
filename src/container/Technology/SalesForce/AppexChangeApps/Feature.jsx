"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCloud, FaCogs, FaShieldAlt, FaPlug, FaBolt } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

const FeaturesOfAppExchange = () => {
  return (
    <WrapperContainer>
      <section className="flex flex-col justify-center items-center bg-white text-blue-900 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Features of AppExchange Apps
        </motion.h1>

        {/* Features Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-full max-w-6xl">
          {/* Left Side - Features */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {[
              {
                icon: <FaCloud size={30} className="text-blue-950" />,
                title: "Seamless Salesforce Integration",
                description:
                  "AppExchange apps work effortlessly within the Salesforce ecosystem for a smooth experience.",
              },
              {
                icon: <FaCogs size={30} className="text-blue-950" />,
                title: "Highly Customizable",
                description:
                  "Flexible solutions tailored to meet diverse business needs and workflows.",
              },
              {
                icon: <FaShieldAlt size={30} className="text-blue-950" />,
                title: "Enterprise-Grade Security",
                description:
                  "Robust security measures ensure data protection and compliance with industry standards.",
              },
              {
                icon: <FaPlug size={30} className="text-blue-950" />,
                title: "Pre-Built Integrations",
                description:
                  "Easily integrate with third-party applications to extend Salesforce capabilities.",
              },
              {
                icon: <FaBolt size={30} className="text-blue-950" />,
                title: "AI & Automation",
                description:
                  "Leverage AI-driven insights and automated workflows to enhance productivity.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg shadow-md w-full bg-blue-100"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {feature.icon}
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    {feature.title}
                  </h3>
                  <p className="text-md text-gray-700">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Enlarged Image with Animation */}
          <motion.div
            className="w-full max-w-lg h-[500px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1719839720683-72c8eb65b10a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="AppExchange Features"
                width={700}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default FeaturesOfAppExchange;
