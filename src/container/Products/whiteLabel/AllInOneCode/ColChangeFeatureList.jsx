import React from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';

const ColChangeFeatureList = ({ title, description, services }) => {
  return (
    <WrapperContainer>
      <section>
        <div className="text-center mb-6">
          <Heading>{title}</Heading>
          <Paragraph className="text-center">{description}</Paragraph>
        </div>

        <div className="flex flex-col items-center mx-auto">
          {services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon];
            const isLast = index === services.length - 1;

            return (
              <div key={service.title} className="flex flex-col items-center w-full relative">
                {/* Box */}
                <div className="flex flex-row items-center w-full transition duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:bg-white/40 rounded-2xl">
                  
                  {/* Conditional Image */}
                  {service.image ? (
                    <Image
                      width={300}
                      height={500}
                      src={service.image}
                      alt={service.title}
                      className="w-[200px] h-[200px] object-cover rounded-xl shadow-lg"
                    />
                  ) : null}

                  {/* Content */}
                  <div className={`bg-white/30 backdrop-blur-lg border border-gray-300 rounded-xl shadow-lg p-6 flex items-center ml-6 ${service.image ? 'w-[1000px]' : 'w-full'}`}>
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center shadow-md mr-4">
                      {IconComponent && <IconComponent size={25} className="text-blue-600" />}
                    </div>
                    <div className="flex flex-col flex-1">
                      <Subheading className="mb-2 justify-center text-center">{service.title}</Subheading>
                      <Paragraph className="mb-3">{service.description}</Paragraph>
                      <div className="pt-3 border-t border-gray-100 text-[15px] text-gray-700 max-h-24 pr-2">
                        <p>{service.detailContent}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Line directly touching the box */}
                {!isLast && (
                  <div className="h-6 w-1 bg-blue-400"></div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default ColChangeFeatureList;
