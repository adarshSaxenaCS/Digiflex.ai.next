import React from 'react';
import { TrendingUp, Clock, Users, Shield, Heart, Award } from 'lucide-react';
import Heading from '@/Layout/Heading'

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Increased Efficiency",
      description: "Boost agent productivity by up to 25% with streamlined workflows and automated processes."
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: "Faster Resolution",
      description: "Reduce average case resolution time by 35% with AI-powered recommendations."
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Better Collaboration",
      description: "Enable seamless teamwork with integrated communication tools and shared knowledge base."
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Enhanced Security",
      description: "Protect customer data with enterprise-grade security features and compliance tools."
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: "Customer Satisfaction",
      description: "Improve CSAT scores by delivering personalized and proactive service experiences."
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "Service Excellence",
      description: "Achieve service excellence with comprehensive reporting and analytics."
    }
  ];

  return (
    <div className="py-16 bg-white">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading>Benefits of Service Cloud</Heading>
          <p className="mt-4 text-lg text-gray-600">
            Discover how Service Cloud can transform your customer service operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300">
            <span className="text-lg font-medium">Learn more about Service Cloud benefits</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Benefits;
