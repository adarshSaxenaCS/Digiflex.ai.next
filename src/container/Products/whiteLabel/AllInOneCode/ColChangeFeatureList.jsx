import React from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import * as LucideIcons from 'lucide-react';

const ColChangeFeatureList = ({ title, description, services }) => {
  return (
    <WrapperContainer>
      <section>
        <div className="text-center mb-4">
          <Heading>{title}</Heading>
          <Paragraph className="text-center">{description}</Paragraph>
        </div>

        {/* SCROLLABLE BOX CONTAINER */}
        <div className="flex flex-col items-center max-h-[700px] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
          {services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon];
            const isLast = index === services.length - 1;

            return (
              <div key={service.title} className="flex flex-col items-center">
                {/* Box */}
                <div className="bg-white/30 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg pt-3 pb-4 px-4 flex flex-col sm:flex-row">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-200 rounded-full flex items-center justify-center shadow-md mb-3 sm:mb-0 sm:mr-4">
                    {IconComponent && <IconComponent size={22} className="text-blue-600" />}
                  </div>
                  <div className="flex flex-col flex-1">
                    <Subheading className="mt-0 mb-1 text-center sm:text-left">{service.title}</Subheading>
                    <Paragraph className="mb-2 text-center sm:text-left">{service.description}</Paragraph>
                    <div className="border-gray-100 text-[15px] text-gray-700 max-h-32 overflow-auto text-center sm:text-left">
                      <p>{service.detailContent}</p>
                    </div>
                  </div>
                </div>

                {/* Line between boxes */}
                {!isLast && <div className="h-6 w-1 bg-blue-400"></div>}
              </div>
            );
          })}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default ColChangeFeatureList;
