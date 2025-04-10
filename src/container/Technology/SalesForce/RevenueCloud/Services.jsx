import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";
import { FaMoneyCheckAlt, FaSyncAlt, FaChartLine, FaFileInvoiceDollar, FaShieldAlt, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "Revenue Automation",
    description: "Automate revenue processes from pricing and invoicing to revenue recognition. Eliminate errors and accelerate growth with AI insights.",
    icon: <FaMoneyCheckAlt className="text-blue-600 text-5xl" />,
  },
  {
    title: "Subscription Management",
    description: "Manage recurring billing and subscription lifecycles efficiently, ensuring seamless customer retention with automated invoicing.",
    icon: <FaSyncAlt className="text-green-600 text-5xl" />,
  },
  {
    title: "Sales & Finance Integration",
    description: "Connect sales and finance teams with real-time revenue tracking. Improve forecasting and eliminate revenue leakage.",
    icon: <FaChartLine className="text-purple-600 text-5xl" />,
  },
  {
    title: "Quote-to-Cash Optimization",
    description: "Streamline quote-to-cash processes, from generating accurate quotes to managing contracts and processing payments effectively.",
    icon: <FaFileInvoiceDollar className="text-yellow-600 text-5xl" />,
  },
  {
    title: "Revenue Intelligence & Forecasting",
    description: "Leverage AI analytics to predict revenue trends, optimize sales strategies, and make data-driven decisions for maximum profitability.",
    icon: <FaCogs className="text-red-600 text-5xl" />,
  },
  {
    title: "Compliance & Security",
    description: "Ensure regulatory compliance with automated financial reporting and security measures, protecting sensitive revenue data.",
    icon: <FaShieldAlt className="text-gray-600 text-5xl" />,
  },
];

const Services = () => {
  return (
    <>
    <WrapperContainer>  
    <div>
      <div className="max-w-5xl mx-auto text-center">
        <Heading>
          Our Revenue Cloud Services
        </Heading>
        <Paragraph>
          Unlock the full potential of Salesforce Revenue Cloud with our expert solutions tailored to optimize your revenue processes.
        </Paragraph>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>
            
            {/* Title */}
            <Subheading>{service.title}</Subheading>
            
            {/* Description */}
            <Paragraph>{service.description}</Paragraph>
          </div>
        ))}
      </div>

    </div>
    </WrapperContainer>

    </>
  );
};

export default Services;
