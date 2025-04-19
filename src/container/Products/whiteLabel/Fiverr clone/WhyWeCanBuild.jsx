// components/WhyWeCanBuild.js
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';

const features = [
  "Hands-on MERN Stack Experience — We’ve successfully built and deployed projects using MongoDB, Express.js, React, and Node.js.",
  "Real-world Project Exposure — We’ve developed production-ready platforms with authentication, authorization, and user dashboards.",
  "Experience with Role-Based Systems — We know how to structure buyer/seller roles and their access within the app.",
  "Integrated Payment Gateways — Stripe, Razorpay, and PayPal integration is something we’ve implemented in live projects.",
  "Real-time Features with Socket.IO — We have implemented chat systems and notifications using real-time technologies.",
  "Secure Authentication Flow — JWT-based login/registration with bcrypt password encryption is our standard practice.",
  "Cloud Storage & Optimization — We use Cloudinary and Firebase for efficient media storage and delivery.",
  "UI/UX Expertise — We focus on clean, responsive, and modern UI designs using Tailwind CSS and component libraries.",
  "API & Database Management — We are skilled at building scalable REST APIs and managing data using MongoDB and Mongoose.",
  "Agile & Adaptive Mindset — We learn fast, adapt quickly to new tech, and follow agile methods for continuous delivery."
];

const WhyWeCanBuild = () => {
  return (
    <WrapperContainer>
      <section className="my-16">
        <Heading className="text-center">🛠️ Why We Can Build This</Heading>
        <Paragraph className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
          We have the right skills, tools, and experience to develop a scalable and secure Fiverr-like platform.
        </Paragraph>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side images */}
          <div className="space-y-6">
            <img
              src="https://i.pinimg.com/736x/5a/1b/ce/5a1bcec7738ab131af8d1396d39a3c8a.jpg"
              alt="Team working"
              className="rounded-xl shadow-lg w-full object-cover h-65"
            />
            {/* <img
              src="https://i.pinimg.com/736x/55/4b/48/554b488b0361f0dc3d12eedb88560523.jpg"
              alt="Development tools"
              className="rounded-xl shadow-lg w-full object-cover h-65"
            /> */}
            <img
              src="https://i.pinimg.com/originals/ad/3a/a1/ad3aa168b76a1846c56edad68c218242.gif"
              alt="Development tools"
              className="rounded-xl shadow-lg w-full object-cover h-65"
            />
          </div>

          {/* Right side features */}
          <div className="space-y-4">
            {features.map((item, index) => {
              const [boldPart, rest] = item.split(" — ");
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-100 transition"
                >
                  <CheckCircle2 className="text-green-600 mt-1" />
                  <p className="text-left text-gray-800">
                    <strong>{boldPart}</strong>{rest ? ` — ${rest}` : ''}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default WhyWeCanBuild;
