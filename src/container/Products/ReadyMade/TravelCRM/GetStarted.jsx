import Image from "next/image";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";
import { Workflow, MessageCircle, BarChart3 } from "lucide-react";

function GetStarted() {
  return (
    <WrapperContainer>
      <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 py-20 px-6">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/TravelCRM-Logo.png"
            alt="CRM Image"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight animate-fade-in-up">
            Get Started with <span className="text-blue-700">Travel CRM</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up">
            Revolutionize your travel business with our powerful CRM. Automate
            workflows, manage interactions, and boost revenue — all on a single
            platform.
          </p>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg p-8 rounded-2xl border-l-4 border-blue-900 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
                  <Workflow className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Automate Your Workflow
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Reduce manual tasks and let our CRM handle bookings,
                    invoicing, and follow-ups effortlessly.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg p-8 rounded-2xl border-l-4 border-blue-900 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Seamless Communication
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Stay connected with customers via automated emails, WhatsApp
                    messages, and AI-driven chatbots.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg p-8 rounded-2xl border-l-4 border-blue-900 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Real-time Insights
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Make data-driven decisions with powerful analytics on
                    bookings, revenue, and customer behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-900 text-white py-14 px-8 rounded-3xl shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center md:text-left leading-tight">
              Why Choose Our CRM?
            </h3>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Column: Feature List */}
              <ul className="space-y-4 text-white/90 text-base leading-relaxed">
                {[
                  "24/7 Customer Support & Dedicated Training",
                  "Scalable for Small & Large Travel Agencies",
                  "AI-Powered Customer Insights & Lead Management",
                  "Secure Cloud-Based Infrastructure with Data Encryption",
                  "Integration with GDS, Airlines, and Payment Gateways",
                  "Multi-User Access with Role-Based Permissions",
                  "Automated Booking & Payment Reminders",
                  "Real-Time Reporting & Performance Analytics",
                  "Seamless Mobile & Tablet Access",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    ✅ <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Right Column: CTA & Benefits */}
              <div className="bg-white/20 p-10 rounded-2xl shadow-md text-center md:text-left">
                <p className="text-lg font-semibold leading-relaxed">
                  "Join thousands of travel agencies optimizing their business
                  with our CRM. Get real-time analytics, seamless bookings, and
                  effortless team collaboration."
                </p>

                <p className="mt-6 text-sm text-white/80 leading-relaxed">
                  Our all-in-one solution helps you manage bookings, automate
                  customer interactions, and increase revenue without the
                  hassle!
                </p>

                <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                  
                  <p className="text-xs text-white/80">
                    No credit card required. Full access for 14 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default GetStarted;
