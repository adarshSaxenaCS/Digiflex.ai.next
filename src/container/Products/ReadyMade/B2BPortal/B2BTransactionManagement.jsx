import React from "react";
import Image from "next/image"; // Import Next.js Image
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import {
  FaClock,
  FaGlobe,
  FaCogs,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const B2BTransactionManagement = () => {
  const features = [
    {
      title: "Automated Reconciliation",
      desc: "Real-time matching of payments to invoices, eliminating manual errors and delays.",
      points: [
        "Auto-Matching Payments",
        "Customizable Reconciliation Rules",
        "Automated Bank Feeds",
        "Seamless ERP Integration",
        "Detailed Audit Trails",
      ],
      icon: <FaClock className="text-4xl text-blue-600" />,
      image:
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Automated-Reconciliation.png", // Image path
    },
    {
      title: "Multi-Currency Transactions",
      desc: "Handle 180+ currencies with optimized exchange rates and dynamic conversion.",
      points: [
        "Global Payments Access",
        "Dynamic Currency Conversion",
        "Real-time Exchange Rates",
        "Multi-Currency Wallet",
        "Regulatory Compliance Support",
      ],
      icon: <FaGlobe className="text-4xl text-green-600" />,
      image:
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Multi-Currency-Transactions.png",
    },
    {
      title: "Smart Invoicing",
      desc: "Design, dispatch, and track invoices efficiently across B2B partners.",
      points: [
        "Custom Invoice Templates",
        "Recurring Invoicing",
        "Multi-Language Support",
        "Real-time Tracking",
        "Secure Document Storage",
      ],
      icon: <FaCogs className="text-4xl text-purple-600" />,
      image:
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Smart-Invoicing.png",
    },
    {
      title: "Fraud Detection System",
      desc: "AI-driven security layers to protect transactions and detect anomalies instantly.",
      points: [
        "24/7 AI Monitoring",
        "Real-Time Risk Scoring",
        "Suspicious Activity Reports",
        "Data Encryption Layers",
        "Adaptive Authentication",
      ],
      icon: <FaShieldAlt className="text-4xl text-red-600" />,
      image:
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Fraud-Detection-System.png",
    },
    {
      title: "Instant Settlements",
      desc: "Minimize your waiting time with quick settlements directly into your account.",
      points: [
        "Same-Day Processing",
        "Automated Payout Scheduling",
        "Settlement Tracking Dashboard",
        "Instant Bank Transfers",
        "Bulk Payment Processing",
      ],
      icon: <FaMoneyBillWave className="text-4xl text-yellow-600" />,
      image:
        "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Instant-Settlements.png",
    },
  ];

  return (
    <WrapperContainer>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 text-center shadow-md">
        <Heading>B2B Transaction Management</Heading>
        <Paragraph className="mt-8 max-w-3xl mx-auto text-center bg-blue-50 text-blue-800 p-8 rounded-3xl shadow-lg border border-blue-200 leading-relaxed tracking-wide">
          <span className="text-2xl font-bold text-blue-900 block mb-2">
            Empower Your B2B Transactions
          </span>
          Simplify your{" "}
          <span className="font-semibold text-blue-700">
            financial operations
          </span>{" "}
          with seamless payment processing, intelligent fraud prevention, and
          global scalability.
        </Paragraph>
      </div>

      {/* Timeline Section */}
      <div className="relative mt-1">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-800 transform -translate-x-1/2"></div>

        {/* Feature List */}
        <div className="flex flex-col items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative w-full flex flex-col md:flex-row items-center justify-between mb-16"
            >
              {/* Branch Line */}
              <div
                className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0 ? "left-1/2  rotate-180" : "right-1/2"
                } h-1 w-40 bg-blue-800`}
              ></div>

              {/* Content when index is EVEN */}
              {index % 2 === 0 ? (
                <>
                  {/* Card on Left */}
                  <div className="w-full md:w-5/12 p-6 flex flex-col items-end">
                    <div className="flex flex-col items-start bg-[#172554] text-white p-6 rounded-xl shadow-md w-full hover:bg-white hover:text-black transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        {feature.icon}
                        <h4 className="text-2xl font-bold">{feature.title}</h4>
                      </div>
                      <p className="text-sm mb-4">{feature.desc}</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {feature.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image on Right */}
                  <div className="hidden md:flex w-4/12 justify-start mr-10">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={300}
                      height={300}
                      className="rounded-lg object-contain"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Image on Left */}
                  <div className="hidden md:flex w-4/12 justify-end ml-12">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={300}
                      height={300}
                      className="rounded-lg object-contain"
                    />
                  </div>

                  {/* Card on Right */}
                  <div className="w-full md:w-5/12 p-6 flex flex-col items-start">
                    <div className="flex flex-col items-start bg-[#172554] text-white p-6 rounded-xl shadow-md w-full hover:bg-white hover:text-black transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        {feature.icon}
                        <h4 className="text-2xl font-bold">{feature.title}</h4>
                      </div>
                      <p className="text-sm mb-4">{feature.desc}</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {feature.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default B2BTransactionManagement;
