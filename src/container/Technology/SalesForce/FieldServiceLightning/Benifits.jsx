import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon from react-icons
import WrapperContainer from '@/Layout/WrapperContainer';
import Paragraph from '@/Layout/Paragraph';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';

const Benefits = () => {
  const benefits = [
    {
      title: "Improved Productivity",
      description:
        "With AI-driven automation, Field Service Lightning helps businesses streamline operations and reduce manual efforts.",
      icon: <FaCheckCircle className="text-purple-700 text-3xl" />,
    },
    {
      title: "Enhanced Customer Experience",
      description:
        "Real-time scheduling and efficient dispatching ensure quick resolution of customer issues, improving satisfaction.",
      icon: <FaCheckCircle className="text-purple-700 text-3xl" />,
    },
    {
      title: "Seamless Mobile Access",
      description:
        "Technicians can access job details, update records, and work efficiently even in offline mode with mobile accessibility.",
      icon: <FaCheckCircle className="text-purple-700 text-3xl" />,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Advanced analytics and reports help businesses make informed decisions and optimize field service operations.",
      icon: <FaCheckCircle className="text-purple-700 text-3xl" />,
    },
  ];

  return (
    <>
  <WrapperContainer>
  <Heading>Benefits Of Field Service Lightning</Heading>

    <div className="max-w-5xl mx-auto  flex flex-col md:flex-row items-center gap-28">
      {/* Image Section */}
      <Image
        src="https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2020/11/17055731/salesforce-field-service-lightning.png"
        alt="Field Service Lightning"
        width={600}
        height={400}
      />

      {/* Benefits Section */}
      <div>
    
        <div className="space-y-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              {benefit.icon}
              <div>
                <Subheading>{benefit.title}</Subheading>
                <Paragraph>{benefit.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </WrapperContainer>
    </>
  );
};

export default Benefits;
