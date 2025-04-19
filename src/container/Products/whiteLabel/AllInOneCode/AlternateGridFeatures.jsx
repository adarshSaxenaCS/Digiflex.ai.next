import React from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import * as LucideIcons from 'lucide-react';

const AlternateGridFeatures = ({ title, description, services }) => {
  return (
    <WrapperContainer>
      <div className="font-sans antialiased flex flex-col items-center">
        <section>
          <div className="text-center mb-6">
            <Heading>{title}</Heading>
            <Paragraph className="text-center">{description}</Paragraph>
          </div>

          <div className="flex flex-col items-center space-y-6">
            {services.map((service) => {
              const IconComponent = LucideIcons[service.icon];

              return (
                <div
                  key={service.title}
                  className="w-full border border-gray-200 rounded-xl overflow-hidden shadow-md transition duration-300 bg-white hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-300 p-4 flex flex-col md:flex-row items-start md:items-center text-center transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center shadow-md mb-4 md:mb-0 md:mr-4">
                    {IconComponent && <IconComponent size={24} className="text-blue-600" />}
                  </div>

                  <div className="flex flex-col flex-1">
                    <Subheading>{service.title}</Subheading>
                    <Paragraph>{service.description}</Paragraph>
                    <div className="pt-3 border-t border-gray-100 text-[15px] text-gray-700 max-h-32 overflow-y-auto pr-1">
                      <p>{service.detailContent}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </WrapperContainer>
  );
};

export default AlternateGridFeatures;
