import React from 'react';
import { ShoppingCart, TrendingUp, Globe, Server, ShieldCheck, Layers } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';

const benefits = [
  {
    icon: ShoppingCart,
    title: 'Seamless Shopping Experience',
    description: 'Enhance user experience with smooth, fast, and responsive e-commerce features.'
  },
  {
    icon: TrendingUp,
    title: 'Boosted Sales & Revenue',
    description: 'Leverage AI-driven insights and personalization to drive conversions and sales.'
  },
  {
    icon: Globe,
    title: 'Global Reach & Scalability',
    description: 'Expand your business globally with multi-currency, multi-language, and cloud scalability.'
  },
  {
    icon: Server,
    title: 'High Performance & Availability',
    description: 'Cloud-based infrastructure ensures reliability, uptime, and high-speed transactions.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Compliant Transactions',
    description: 'Enterprise-grade security and compliance measures protect sensitive customer data.'
  },
  {
    icon: Layers,
    title: 'Flexible & API-Driven Architecture',
    description: 'Headless commerce and API integrations provide adaptability across platforms.'
  }
];

export default function BenefitsPage() {
  return (
    <>
  <WrapperContainer>

    <div className=" flex flex-col items-center">
      <div className="max-w-5xl text-center">
        <Heading>Benefits of Commerce Cloud</Heading>
        <Paragraph>
          Discover the key advantages of Commerce Cloud and how it transforms digital commerce.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {benefits.map((benefit, index) => (
          <div key={index} className="relative flex items-center bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md overflow-hidden border-b-4 border-blue-600 dark:border-blue-400 transition-transform transform hover:scale-105">
            <div className="w-14 h-14 bg-blue-600 dark:bg-blue-400 text-white flex items-center justify-center rounded-full shadow-md mr-6">
              <benefit.icon className="h-8 w-8" />
            </div>
            <div>
              <Subheading>{benefit.title}</Subheading>
              <Paragraph>{benefit.description}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </WrapperContainer>
    </>
  );
}
