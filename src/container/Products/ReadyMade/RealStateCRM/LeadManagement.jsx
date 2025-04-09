import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { UserPlus, PhoneCall, Mail, CheckCircle } from "lucide-react";

const LeadManagement = () => {
  return (
    <WrapperContainer>
      <div className="bg-gradient-to-b from-gray-50 to-white rounded-lg">
        <Heading>Lead & Client Management</Heading>
        <Paragraph className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Elevate your real estate sales with seamless lead tracking, automated
          follow-ups, and personalized engagement tools. Manage leads
          effectively, nurture client relationships, and maximize conversions
          with smart CRM solutions tailored for real estate professionals.
        </Paragraph>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Smart Lead Tracking */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl border border-gray-200 duration-300">
            <div className="w-20 h-20 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg animate-pulse mb-4">
              <UserPlus className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mt-2">
              Smart Lead Tracking
            </h3>
            <p className="text-gray-700 text-center mt-2">
              Automatically categorize and manage potential property buyers,
              ensuring no lead is lost.
            </p>
          </div>

          {/* Automated Follow-Ups */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl border border-gray-200 duration-300">
            <div className="w-20 h-20 flex items-center justify-center bg-green-600 text-white rounded-full shadow-lg animate-pulse mb-4">
              <PhoneCall className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mt-2">
              Automated Follow-Ups
            </h3>
            <p className="text-gray-700 text-center mt-2">
              Never miss a lead! Set auto-reminders for calls, messages, and
              important interactions.
            </p>
          </div>

          {/* Email & SMS Alerts */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl border border-gray-200 duration-300">
            <div className="w-20 h-20 flex items-center justify-center bg-purple-600 text-white rounded-full shadow-lg animate-pulse mb-4">
              <Mail className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mt-2">
              Email & SMS Alerts
            </h3>
            <p className="text-gray-700 text-center mt-2">
              Engage clients with automated property updates and alerts, keeping
              them informed in real-time.
            </p>
          </div>
        </div>

        {/* More Benefits Section */}
        <div className="mt-16 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 bg-white">
            {/* Left Side - Heading and Description */}
            <div>
              <h3 className="text-4xl font-extrabold mb-6 text-blue-900 leading-tight">
                Additional Benefits of Our CRM
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover how our CRM system enhances your business operations by
                providing smart, scalable, and secure solutions designed for the
                modern world.
              </p>
            </div>

            {/* Right Side - Benefits List */}
            <div className="space-y-6">
              {[
                "Centralized lead database for easy access and tracking.",
                "AI-powered insights to prioritize high-converting leads.",
                "Customizable workflow automation to streamline tasks.",
                "Secure cloud-based access from anywhere, anytime.",
                "Built-in analytics to measure campaign effectiveness.",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start group hover:translate-x-1 transition-transform"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 shadow-md">
                    <CheckCircle className="text-white w-7 h-7" />
                  </div>
                  <p className="ml-5 text-gray-800 font-semibold text-base group-hover:text-blue-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center px-6">
          {/* Heading */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 leading-tight tracking-tight">
            Ready to Revolutionize Your Sales Process?
          </h3>

          {/* Paragraph */}
          <Paragraph className="text-gray-700 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Take the first step towards smarter, faster, and better client
            management today.
          </Paragraph>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default LeadManagement;
