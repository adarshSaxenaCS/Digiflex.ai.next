'use client'
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import * as LucideIcons from 'lucide-react'; // Import all icons dynamically

const FeatureList = ({ title, description, services }) => {
  const [activeService, setActiveService] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleServiceClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <WrapperContainer>
      <div className="font-sans antialiased flex justify-center">
        <section className="w-full max-w-6xl">
          <div className="text-center mb-12">
            <Heading>{title}</Heading>
            <Paragraph className="text-center">{description}</Paragraph>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
            >
              <ArrowLeft size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
              {services.slice(currentIndex, currentIndex + 3).map((service, index) => {
                const IconComponent = LucideIcons[service.icon]; // Dynamically get icon component
                const isActive = activeService === index;

                return (
                  <div
                    key={index}
                    className={`border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white p-6 flex flex-col items-center text-center ${
                      isActive ? 'ring-2 ring-blue-600' : ''
                    }`}
                  >
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-4 shadow-md">
                      {IconComponent && <IconComponent size={28} className="text-blue-600" />}
                    </div>
                    <Subheading>{service.title}</Subheading>
                    <Paragraph className="text-center">{service.description}</Paragraph>

                    <button
                      onClick={() => handleServiceClick(index)}
                      className="mt-4 border border-blue-600 text-blue-600 font-medium py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center"
                    >
                      <span>{isActive ? 'Hide Details' : 'View Details'}</span>
                      <ArrowRight size={16} className="ml-2" />
                    </button>

                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-700 w-full text-left">
                        <p>{service.detailContent}</p>
                        <button className="mt-3 text-blue-600 font-medium flex items-center hover:text-blue-800 transition">
                          <span>Request Consultation</span>
                          <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </section>
      </div>
    </WrapperContainer>
  );
};

export default FeatureList;
