import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

// Lucide Icons
import {
  Utensils,
  CarFront,
  Package,
  Mail,
  Scissors,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    name: "Food Delivery",
    description:
      "Order food from top restaurants and have it delivered in minutes.",
    icon: Utensils,
  },
  {
    name: "Ride Service",
    description:
      "Book a ride from a variety of options: Economy, Premium, and XL.",
    icon: CarFront,
  },
  {
    name: "Package Delivery",
    description:
      "Send packages of various sizes with secure and quick delivery.",
    icon: Package,
  },
  {
    name: "Courier Service",
    description:
      "Send important documents or small parcels with a reliable courier.",
    icon: Mail,
  },
  {
    name: "Beauty & Health",
    description:
      "Book beauty treatments, health services, or massage appointments.",
    icon: Scissors,
  },
  {
    name: "Grocery Delivery",
    description:
      "Order groceries from your favorite stores and get them delivered to your door.",
    icon: ShoppingCart,
  },
];

function XJekServices() {
  return (
    <WrapperContainer>
      {/* Hero Section */}
      <div className="relative bg-[#162350] rounded-2xl overflow-hidden mb-12 py-16 px-4 md:px-10 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/services-banner.jpg')`,
          }}
        ></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <Heading className="text-4xl md:text-5xl font-bold leading-tight text-white">
            101+ Services at Your Fingertips
          </Heading>
          <Paragraph className="text-lg md:text-xl font-medium text-white">
            Access services ranging from food delivery to transportation and
            beauty services.
          </Paragraph>
        </div>
      </div>

      {/* Service Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => {
    const Icon = service.icon;
    return (
      <div
        key={index}
        className="group border-2 border-transparent text-[#162350] p-6 rounded-2xl shadow-md transition-all duration-300 bg-white hover:shadow-xl hover:border-[#162350]"
      >
        <div className="flex justify-center mb-4">
          <Icon size={48} strokeWidth={2.5} className="text-[#162350]" />
        </div>
        <h4 className="text-xl font-semibold text-center mb-2 inline-block px-4 py-1 bg-transparent group-hover:bg-[#162350] group-hover:text-[#FACC15] transition mx-auto">
          {service.name}
        </h4>
        <p className="text-center">{service.description}</p>
      </div>
    );
  })}
</div>



      {/* Call to Action */}
      <div className="mt-8   text-center ">
  <Paragraph className="text-[#162350] text-lg font-medium">
    Want to provide more services? Join the <span className="bg-[#172453] text-white p-1 rounded">GOJek 2025 </span>network now!
  </Paragraph>
 
</div>

    </WrapperContainer>
  );
}

export default XJekServices;
