import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { Home, MapPin, Image as ImageIcon, DollarSign, ShieldCheck } from "lucide-react";

const PropertyListings = () => {
  return (
    <WrapperContainer>
      <div className="relative bg-gradient-to-b from-blue-100 to-white p-14 rounded-3xl shadow-2xl border border-blue-300 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-20"></div>
        
        <Heading className="text-blue-900 text-5xl font-extrabold text-center">
          Smart Property Management
        </Heading>
        <Paragraph className="text-blue-700 mt-4 text-center max-w-3xl mx-auto">
          A modern platform to manage, showcase, and analyze real estate listings with advanced tools.
        </Paragraph>
        <Paragraph className="text-blue-700 mt-2 text-center max-w-3xl mx-auto">
          Streamline your workflow with intuitive features designed to enhance property visibility and transaction security.
        </Paragraph>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Property Listings", desc: "Add, edit, and manage your property details seamlessly. List properties with ease and make updates in real-time.", icon: <Home className="text-4xl" /> },
            { title: "Photo Galleries", desc: "Upload and showcase high-resolution property images. Attract buyers with visually appealing galleries.", icon: <ImageIcon className="text-4xl" /> },
            { title: "Location Insights", desc: "Interactive maps and geolocation tools for easy navigation. Provide potential buyers with key location data.", icon: <MapPin className="text-4xl" /> },
            { title: "Pricing & Valuation", desc: "Get AI-powered market-based pricing estimates. Stay competitive with accurate property valuations.", icon: <DollarSign className="text-4xl" /> },
            { title: "Secure Transactions", desc: "Ensure safe and verified property transactions. Utilize encryption and verification to protect buyers and sellers.", icon: <ShieldCheck className="text-4xl" /> },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-blue-50 p-8 rounded-2xl shadow-xl border border-blue-300 transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-md transition-transform hover:scale-110"> {item.icon} </div>
              <h3 className="text-2xl font-bold text-blue-900 mt-6">{item.title}</h3>
              <p className="mt-3 text-blue-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default PropertyListings;
