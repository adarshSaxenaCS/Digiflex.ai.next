import React from "react";
import { ShieldCheck, Users, TrendingUp, Globe } from "lucide-react"; // Updated Icons
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-3xl p-8 relative overflow-hidden h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    {/* Background Accent */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full -translate-y-1/2 opacity-95" />
    
    {/* Icon */}
    <div className="relative z-10 flex justify-center -mt-6">
      <Icon className="w-10 h-10 text-gray-800" />
    </div>
    
    {/* Content */}
    <div className="text-center mt-4">
      <Subheading className="mb-2 text-lg font-semibold">{title}</Subheading>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyChooseDigiflex = () => {
  const features = [
    {
      icon: Users,
      title: "Tailored Nonprofit Solutions",
      description: "We create customized solutions to streamline your nonprofit operations and maximize efficiency.",
    },
    {
      icon: TrendingUp,
      title: "Intelligent Donor Engagement",
      description: "Our AI-driven donor engagement strategies enhance fundraising efforts and donor retention.",
    },
    {
      icon: ShieldCheck,
      title: "Unmatched Security & Compliance",
      description: "We ensure your data is protected with industry-leading security measures and regulatory compliance.",
    },
    {
      icon: Globe,
      title: "Scalable & Future-Ready",
      description: "Our Nonprofit Cloud solutions grow with you, providing seamless scalability for expanding missions.",
    },
  ];

  return (
    <WrapperContainer>
        <Heading>Why Choose Digiflex.ai for Nonprofit Cloud?</Heading>
        <Paragraph>Digiflex.ai empowers nonprofits with secure, scalable, and intelligent cloud solutions.</Paragraph>
     

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default WhyChooseDigiflex;
