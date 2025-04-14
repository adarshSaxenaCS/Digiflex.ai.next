import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

function BillingAndInvoicingFeature() {
  return (
    <WrapperContainer>
      <div className="bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-fade-in">
        {/* Left Content Section */}
        <div className="space-y-10 text-[#162350]">
          <div className="space-y-6">
            <Heading className="text-3xl md:text-4xl font-extrabold text-[#162350]">
              Billing & Invoicing
            </Heading>
            <Paragraph className="text-gray-600 leading-relaxed text-lg">
              <span className="font-semibold text-blue-600">Simplify</span> and{" "}
              <span className="font-semibold text-green-600">automate</span>{" "}
              your hospital's financial workflows. Generate invoices, accept
              secure payments, and manage insurance claims — all in one place.
            </Paragraph>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Automated Invoicing",
              "Secure Payments",
              "Billing History",
              "Insurance Integration",
              "Custom Billing Templates",
              "Multi-Currency Support",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 p-5 rounded-xl border border-gray-200 bg-white transition-all duration-500 hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-2xl cursor-pointer"
              >
                <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-lg transition-all duration-500 group-hover:bg-white group-hover:text-purple-600">
                  {idx + 1}
                </div>
                <h4 className="text-md font-semibold text-[#162350] group-hover:text-white">
                  {feature}
                </h4>
              </div>
            ))}
          </div>

          {/* Secure Note + CTA */}
          <div className="flex flex-col gap-5 pt-4">
            <p className="text-xs text-gray-500 italic">
              * All billing data is stored securely with end-to-end encryption.
            </p>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="flex flex-col items-center text-center gap-6">
          {/* Top Content */}
          <div className="space-y-2 p-6 border rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
            {/* Decorative Line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

            {/* Actual Content */}
            <h3 className="text-2xl font-bold text-[#162350] group-hover:text-blue-600 transition-colors duration-300">
              See How It Works
            </h3>
            <p className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300">
              Quick demo of our billing & invoicing system in action.
            </p>
          </div>

          {/* Video */}
          <div className="rounded-3xl overflow-hidden shadow-lg w-full">
            <video
              autoPlay
              loop
              muted
              className="w-full h-64 md:h-80 object-cover scale-100 hover:scale-105 transition-transform duration-500"
            >
              <source
                src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/hospitalCRM-BillingInvoice-Video.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Bottom Content */}
          <div className="space-y-2">
            <p className="text-xs text-gray-500 italic">
              * Your data remains 100% confidential and protected.
            </p>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default BillingAndInvoicingFeature;
