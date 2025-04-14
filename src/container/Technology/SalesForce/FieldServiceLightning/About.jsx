import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import WrapperContainer from '@/Layout/WrapperContainer';
import React from 'react';

const About = () => {
  return (
    <>
    <WrapperContainer>
    <div className="max-w-5xl mx-auto">
 
      <div className="text-center">
        <Heading>About Salesforce Field Service Lightning</Heading>
        <Paragraph>
          Salesforce Field Service Lightning (FSL) is a powerful tool designed to enhance field service operations 
          through intelligent scheduling, real-time tracking, and AI-driven automation. It enables organizations to 
          deliver seamless customer experiences  while optimizing workforce productivity.
        </Paragraph>
      </div>


      {/* Benefits Section */}
      <div className="mt-12">
        <Heading>Why Use Field Service Lightning?</Heading >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[
            {
              title: "Increased Efficiency",
              description: "Optimize technician schedules and reduce travel time for improved service delivery.",
              icon: "⚡",
            },
            {
              title: "Improved First-Time Fix Rate",
              description: "Ensure technicians have the right tools and information to resolve issues on the first visit.",
              icon: "✅",
            },
            {
              title: "Cost Reduction",
              description: "Lower operational costs by automating processes and reducing service delays.",
              icon: "💰",
            },
            {
              title: "Enhanced Customer Satisfaction",
              description: "Deliver faster and more accurate service, leading to better customer experiences.",
              icon: "😊",
            },
          ].map((benefit, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md flex items-start gap-4">
              <span className="text-4xl">{benefit.icon}</span>
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

export default About;
