import React from 'react';
import { ArrowRight, MessageCircle, RefreshCcw, Database, CheckSquare } from 'lucide-react';
import Heading from '@/Layout/Heading'

const ServiceProcess = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: "Case Creation",
      description: "Customer inquiries are automatically converted into cases and routed to the right team."
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-green-500" />,
      title: "Automated Workflow",
      description: "Cases are processed through predefined workflows for efficient handling and resolution."
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Knowledge Base Integration",
      description: "Agents access relevant articles and solutions from the integrated knowledge base."
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-indigo-500" />,
      title: "Resolution & Follow-up",
      description: "Cases are resolved and followed up with customer satisfaction surveys."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading>Service Cloud Process</Heading>
          <p className="mt-4 text-lg text-gray-600">
            Streamlined workflow for exceptional customer service delivery
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute top-12 left-0 w-full border-t-2 border-gray-100"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-4 relative z-10">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full transform -translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
