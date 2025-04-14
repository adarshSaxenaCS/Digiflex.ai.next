import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import * as LucideIcons from 'lucide-react';

const AlternateGridFeatures = ({ title, description, services }) => {
  const staticServices = services.slice(0, 4); // just first 4, no dynamic index

  return (
    <WrapperContainer>
      <div className="font-sans antialiased flex flex-col items-center">
        <section>
          <div className="text-center mb-6">
            <Heading>{title}</Heading>
            <Paragraph className="text-center">{description}</Paragraph>
          </div>

          {/* <div className="flex flex-col items-center space-y-3 mb-6">
            <button disabled className="p-2 bg-gray-400 text-white rounded-full shadow-md cursor-not-allowed">
              <ArrowUp size={24} />
            </button>
          </div> */}

          <div className="w-full flex flex-col items-center space-y-6">
            {staticServices.map((service, index) => {
              const IconComponent = LucideIcons[service.icon];
              const isEven = index % 2 !== 0;

              return (
                <div key={service.title} className="w-full flex items-center justify-center">
                  {isEven && service.link && (
                    <div className="w-1/3 flex justify-center">
                      <a href={service.link} target="_blank" rel="noopener noreferrer">
                        <img src={service.image} alt={service.title} className="w-80 h-[200px] object-cover rounded-lg shadow-md hover:opacity-80 transition" />
                      </a>
                    </div>
                  )}

                  <div
                    className="w-[800px] h-[200px] border border-gray-200 rounded-xl overflow-hidden shadow-md transition duration-300 bg-white p-4 flex items-center text-left"
                  >
                    {!isEven && (
                      <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center shadow-md mr-4">
                        {IconComponent && <IconComponent size={25} className="text-blue-600" />}
                      </div>
                    )}
                    <div className="flex flex-col flex-1">
                      <Subheading className="mb-2 flex items-center justify-center">{service.title}</Subheading>
                      <Paragraph className="mb-3">{service.description}</Paragraph>
                      <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-700 overflow-y-auto max-h-24 pr-2">
                        <p>{service.detailContent}</p>
                      </div>
                    </div>
                    {isEven && (
                      <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center shadow-md ml-4">
                        {IconComponent && <IconComponent size={25} className="text-blue-600" />}
                      </div>
                    )}
                  </div>

                  {!isEven && service.link && (
                    <div className="w-1/3 flex justify-center">
                      <a href={service.link} target="_blank" rel="noopener noreferrer">
                        <img src={service.image} alt={service.title} className="w-80 h-[200px] object-cover rounded-lg shadow-md hover:opacity-80 transition" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* <div className="flex flex-col items-center mt-6 space-y-3">
            <button disabled className="p-2 bg-gray-400 text-white rounded-full shadow-md cursor-not-allowed">
              <ArrowDown size={24} />
            </button>
          </div> */}
        </section>
      </div>
    </WrapperContainer>
  );
};

export default AlternateGridFeatures;
