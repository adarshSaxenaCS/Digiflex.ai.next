import React from 'react';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import { ArrowRight } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';

const routes = [
  { from: 'New Delhi', to: 'Mumbai', timing: '6:00 AM - 10:00 AM' },
  { from: 'Bangalore', to: 'Chennai', timing: '7:30 AM - 11:30 AM' },
  { from: 'Kolkata', to: 'Hyderabad', timing: '8:00 AM - 12:00 PM' },
  { from: 'Ahmedabad', to: 'Pune', timing: '9:00 AM - 1:00 PM' },
  { from: 'Jaipur', to: 'Udaipur', timing: '10:00 AM - 2:00 PM' },
  { from: 'Goa', to: 'Mangalore', timing: '11:30 AM - 3:30 PM' },
];

function PopularRoutes() {
  return (
    <WrapperContainer className="py-10 bg-[#F9FAFB]">
      <Heading className="text-4xl text-[#172453] font-bold mb-4 text-center">
        Popular Routes
      </Heading>
      <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
        Explore our most booked and loved routes across various cities. Travel seamlessly with Indriver 2025!
      </Paragraph>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-[#172453] text-[#172453] shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center space-x-2 text-xl font-semibold">
                <span>{route.from}</span>
                <ArrowRight size={20} />
                <span>{route.to}</span>
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {route.timing}
              </div>
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default PopularRoutes;
