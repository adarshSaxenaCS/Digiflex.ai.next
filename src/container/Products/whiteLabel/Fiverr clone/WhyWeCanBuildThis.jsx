// components/WhyWeCanBuild.js
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';

const features = [
  "Hands-on experience with MERN stack (MongoDB, Express, React, Node.js)",
  "Role-based access for Buyer & Seller Dashboards",
  "Real-time chat with Socket.IO",
  "Secure login system using JWT and bcrypt",
  "UI/UX design expertise with Tailwind CSS",
  "Integrated payment gateways like Razorpay or Stripe",
  "Cloud storage (Cloudinary) for gig images",
];

const WhyWeCanBuild = () => {
    return (
        <WrapperContainer>
          <section className="text-center my-16">
            <Heading>🛠️ Why We Can Build This</Heading>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              We have the right skills, tools, and experience to develop a scalable and secure Fiverr-like platform.
            </p>
      
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-100 transition"
                >
                  <CheckCircle2 className="text-green-600 mt-1" />
                  <p className="text-left text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </WrapperContainer>
      );
      
};

export default WhyWeCanBuild;
