'use client'
import React from 'react';
import { Star, Zap, Trophy } from 'lucide-react';
import Heading from '@/Layout/Heading'
import Image from 'next/image';

const ServiceIntro = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading>Transform Your Customer Service Experience</Heading>
            <p className="text-lg text-gray-600 mb-8">
              Salesforce Service Cloud empowers your team to deliver exceptional customer service across all channels. Build stronger relationships and increase customer satisfaction with our comprehensive solution.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: <Star className="w-6 h-6 text-yellow-400" />,
                  text: "Industry-leading customer satisfaction rates"
                },
                {
                  icon: <Zap className="w-6 h-6 text-blue-500" />,
                  text: "Faster case resolution with AI-powered tools"
                },
                {
                  icon: <Trophy className="w-6 h-6 text-purple-500" />,
                  text: "Award-winning service platform"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/ServiceCloud.jpg"
              
                alt="Service Cloud Dashboard"
                className="w-full h-auto"
                width={1380}
                height={1000}
                loading="lazy"
        

              />


            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full opacity-50 z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
