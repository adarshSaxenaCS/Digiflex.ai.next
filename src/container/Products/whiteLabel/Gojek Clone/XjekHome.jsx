import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Image from "next/image";
import {
  Truck,
  Wallet,
  Headphones,
  ShieldCheck,
  Users,
  Clock3,
} from "lucide-react";

function XjekHome() {
  return (
    <WrapperContainer>
      {/* Hero Section */}
      <section className="text-center py-2 px-2 text-[#1e3a8a]">
        <div className="flex flex-col items-center space-y-2">
          <Heading className="text-4xl md:text-5xl font-bold">
            Welcome to GoJek 2025
          </Heading>
          <Paragraph className="text-lg md:text-xl max-w-2xl font-medium text-gray-700">
            Your Gateway to 101+ Essential Services. Build Your Empire with the
            Ultimate Super App!
          </Paragraph>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-10 p-10 md:p-16 rounded-3xl shadow-lg bg-[#f1f5f9]">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
    {/* Left Side - Text Content */}
    <div className="flex-1">
      <Heading className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
        Start Your GoJek Journey
      </Heading>
      <Paragraph className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
        Join the revolution of digital services. Download the app and explore 101+ on-demand services in one place.
      </Paragraph>

      {/* Features with Lucide Icons */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
        {[
          { icon: Truck, title: "Instant Delivery", desc: "Get food, rides & packages in minutes." },
          { icon: Wallet, title: "Smart Wallet", desc: "Pay seamlessly across all services." },
          { icon: Headphones, title: "24/7 Support", desc: "We’re always here to help you out." },
          { icon: ShieldCheck, title: "Secure Services", desc: "Your data and payments are fully protected." },
          { icon: Users, title: "Trusted by Millions", desc: "Serving users across the country every day." },
          { icon: Clock3, title: "Time-Saving", desc: "Do more in less time with one app." }
        ].map((feature, i) => (
          <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg hover:bg-[#172453] hover:text-white transition-all duration-300">
            <feature.icon className="w-8 h-8 text-[#2563eb]" />
            <div>
              <h5 className="text-lg font-semibold">{feature.title}</h5>
              <p className="text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Side - App Illustration */}
    <div className="flex-1">
      <Image
        src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/GoJek-App.png"
        alt="GoJek-App"
        width={500}
        height={300}
        className="mx-auto rounded-xl transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>

</WrapperContainer>
  );
}

export default XjekHome;
