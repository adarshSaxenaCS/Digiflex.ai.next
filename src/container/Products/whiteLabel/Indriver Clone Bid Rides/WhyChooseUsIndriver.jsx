import React from 'react';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import { BadgeCheck, UserCheck, MapPin } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';

function WhyChooseUsIndriver() {
  return (
    <WrapperContainer>
      <Heading className="text-4xl text-[#172453] font-bold mb-4 text-center">
        So, why choose us?
      </Heading>
      <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
        We offer a variety of services at affordable rates, backed by technology and excellent customer support.
      </Paragraph>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <BadgeCheck className="text-white w-7 h-7" />,
            title: 'Fair prices',
            description: 'Choose the best offer at your price',
          },
          {
            icon: <UserCheck className="text-white w-7 h-7" />,
            title: 'Verified drivers',
            description: 'Choose your driver based on their rating, reviews, and car',
          },
          {
            icon: <MapPin className="text-white w-7 h-7" />,
            title: 'Door-to-door service',
            description: 'You can be picked up and dropped off directly at your desired location',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#f5f7fa] rounded-2xl p-6 shadow-2xl transform transition-transform duration-300 hover:scale-105 text-left"
          >
            <div className="bg-[#172554] w-14 h-14 flex items-center justify-center rounded-xl mb-4 mx-auto sm:mx-0">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#172453] mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default WhyChooseUsIndriver;
