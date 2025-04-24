import React from 'react'
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const pricingPlans = [
  {
    plan: "Basic",
    price: "$10/month",
    description: "Access to basic services like ride bookings and food delivery.",
  },
  {
    plan: "Standard",
    price: "$25/month",
    description: "All basic services plus premium services like courier and beauty treatments.",
  },
  {
    plan: "Premium",
    price: "$50/month",
    description: "Access to all services including priority support and faster deliveries.",
  },
];

function XJekPricing() {
  return (
    <WrapperContainer>
      {/* Hero Section */}
      <div className="relative bg-[#172453] p-6 md:p-12 rounded-lg overflow-hidden mb-6 shadow-lg">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{
      backgroundImage: `url('https://img.freepik.com/free-photo/payment-options-banner.jpg')`,
    }}
  ></div>
  <div className="relative z-10 text-center px-4">
    <Heading className="text-4xl sm:text-5xl md:text-6xl text-[#f9f9f9] font-bold leading-tight mb-4">
      Pricing & Subscription Plans
    </Heading>
    <Paragraph className="text-lg sm:text-xl text-white rounded-3xl p-3 font-semibold max-w-3xl mx-auto mt-4">
      Choose a plan that suits your business and start earning with GoJek 2025!
    </Paragraph>
  </div>
</div>




      {/* Pricing Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#172554] text-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform"
          >
            <h4 className="text-3xl font-semibold text-center text-[#FACC15] mb-4">{plan.plan}</h4>
            <h5 className="text-2xl font-bold text-center text-[#F1A33A] mb-6">{plan.price}</h5>
            <p className="text-center text-sm text-[#ffffff]">{plan.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Paragraph className="text-[#162350] text-lg mb-6">
          Ready to start your journey with XJek 2025? Choose a plan and get started today!
        </Paragraph>
       
      </div>
    </WrapperContainer>
  );
}

export default XJekPricing;
