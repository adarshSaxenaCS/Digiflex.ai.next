import React from 'react';
import { ShoppingCart, Globe, Server, ShieldCheck, Layers, Code } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';

const features = [
  {
    icon: ShoppingCart,
    title: 'Seamless E-Commerce',
    description: 'Enhance your shopping experience with a fast, reliable, and user-friendly commerce platform.'
  },
  {
    icon: Globe,
    title: 'Global Scalability',
    description: 'Expand your business globally with multi-currency and multi-language support.'
  },
  {
    icon: Server,
    title: 'Cloud-Powered',
    description: 'Leverage cloud infrastructure for high availability, security, and scalability.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'Secure transactions and data protection with advanced encryption and compliance.'
  },
  {
    icon: Layers,
    title: 'Headless Commerce',
    description: 'Decouple front-end and back-end for flexibility and seamless integration.'
  },
  {
    icon: Code,
    title: 'API-First Approach',
    description: 'Integrate with third-party services effortlessly using REST and GraphQL APIs.'
  }
];

export default function FeaturesPage() {
  return (
    <>
   
    <WrapperContainer>
    <div className=" bg-white dark:bg-gray-900  flex flex-col items-center">
      <div>
        <Heading>
        Commerce Cloud Features
        </Heading>
        <Paragraph>
          Discover the powerful features that make Commerce Cloud the best solution for your business.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <Subheading>{feature.title}</Subheading>
            <Paragraph>{feature.description}</Paragraph>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>

    </>
  );
}