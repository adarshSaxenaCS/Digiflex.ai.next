import React from 'react';
import { CheckCircle2, Users, HeadphonesIcon, BarChart3, MessageSquare, Shield } from 'lucide-react';
import Heading from '@/Layout/Heading'

const ServiceFeatures = () => {
  const features = [
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-blue-500" />,
      title: "24/7 Customer Support",
      description: "Provide round-the-clock support to your customers with advanced case management and routing."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Omni-Channel Experience",
      description: "Deliver seamless customer service across phone, email, social media, and chat platforms."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with real-time analytics and customizable dashboards."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: "AI-Powered Chatbots",
      description: "Automate customer interactions with intelligent chatbots and virtual agents."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Knowledge Management",
      description: "Create and maintain a comprehensive knowledge base for quick issue resolution."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
      title: "Service Automation",
      description: "Streamline workflows and automate routine tasks for increased efficiency."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heading>Service Cloud Features</Heading>
          <p className="mt-4 text-lg text-gray-600">
            Transform your customer service with powerful features designed for success
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
