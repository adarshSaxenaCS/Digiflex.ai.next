import React from 'react';
import { Brain, Sparkles, UserCheck, ShoppingCart, BarChart3, Settings } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';

const aiFeatures = [
  {
    icon: Brain,
    title: 'AI-Driven Insights',
    description: 'Leverage machine learning to analyze user behavior and enhance customer engagement.'
  },
  {
    icon: Sparkles,
    title: 'Personalized Recommendations',
    description: 'Deliver tailored product suggestions based on browsing and purchase history.'
  },
  {
    icon: UserCheck,
    title: 'Customer Segmentation',
    description: 'Group customers dynamically using AI-powered segmentation for targeted marketing.'
  },
  {
    icon: ShoppingCart,
    title: 'Smart Shopping Experience',
    description: 'Optimize the checkout process with AI-driven cart abandonment solutions.'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecast trends and customer demand with AI-powered analytics and reporting tools.'
  },
  {
    icon: Settings,
    title: 'Automation & Optimization',
    description: 'Utilize AI for automated inventory management, pricing, and promotions.'
  }
];

export default function AIPersonalizationPage() {
  return (
    <>
   <WrapperContainer>

    <div className=" flex flex-col items-center">
      <div className="max-w-4xl text-center ">
        <Heading>AI & Personalization in Commerce Cloud</Heading>
        <Paragraph>
          Explore how AI enhances personalization, optimizes experiences, and drives e-commerce success.
        </Paragraph>
      </div>

      <div className="space-y-12 max-w-5xl w-full">
        {aiFeatures.map((feature, index) => (
          <div key={index} className="relative flex items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md overflow-hidden border-l-8 border-blue-600 dark:border-blue-400">
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-600 dark:bg-blue-400 text-white flex items-center justify-center rounded-full shadow-md">
              <feature.icon className="h-8 w-8" />
            </div>
            <div className="ml-16">
              <Subheading>{feature.title}</Subheading>
              <Paragraph>{feature.description}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </WrapperContainer>
    </>
  );
}