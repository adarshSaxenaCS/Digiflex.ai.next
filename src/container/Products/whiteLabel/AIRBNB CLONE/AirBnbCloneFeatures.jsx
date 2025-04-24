import {
  LayoutDashboard,
  Search,
  UserCheck,
  CreditCard,
  Star,
  MapPin,
  CalendarCheck,
  MessageSquare,
  Globe,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const AirBnbFeatures = [
  {
    title: "User-Friendly Interface",
    icon: LayoutDashboard,  
    description: "Intuitive design for seamless booking. Our platform offers a clean and easy-to-use interface, ensuring a smooth booking experience for both hosts and guests."
  },
  {
    title: "Advanced Search & Filters",
    icon: Search,
    description: "Location, price, amenities, ratings. Easily find the perfect property with powerful search tools and multiple filters to narrow down options."
  },
  {
    title: "Host & Guest Dashboards",
    icon: UserCheck,
    description: "Profile management, booking tracking. Both hosts and guests get dedicated dashboards to manage their profiles, bookings, and interactions."
  },
  {
    title: "Payment Gateway Integration",
    icon: CreditCard,
    description: "Stripe, PayPal, Crypto, etc. Secure and seamless payments with multiple payment gateway integrations for a hassle-free transaction process."
  },
  {
    title: "Reviews & Ratings",
    icon: Star,
    description: "Build trust with customer feedback. Hosts and guests can leave ratings and reviews, ensuring trust and transparency in every transaction."
  },
  {
    title: "Map Integration",
    icon: MapPin,
    description: "Google Maps or OpenStreetMap for property locations. Integrated maps provide location insights and help users find properties with ease."
  },
  {
    title: "Booking Management",
    icon: CalendarCheck,
    description: "Availability calendar, instant booking, cancellations. An efficient booking system allowing real-time availability tracking and easy cancellations."
  },
  {
    title: "Messaging System",
    icon: MessageSquare,
    description: "Secure communication between hosts and guests. A built-in messaging system enables direct and secure communication between users."
  },
  {
    title: "Multi-Language & Currency Support",
    icon: Globe,
    description: "Expand to a global audience. Support for multiple languages and currencies ensures accessibility for users worldwide."
  },
  {
    title: "Admin Panel",
    icon: ShieldCheck,
    description: "Manage users, properties, payments, and reports. An intuitive admin dashboard to oversee platform operations, including user management and financial tracking."
  },
  {
    title: "AI-Powered Pricing Suggestions",
    icon: TrendingUp,
    description: "Smart pricing based on demand and location. Machine learning algorithms suggest optimal pricing based on demand, location, and seasonality."
  }
];

const AirBnbCloneFeatures = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Heading className="text-3xl font-bold mb-2 text-center">Key Features of Our Airbnb Clone</Heading>
      <Paragraph className="text-gray-600 mb-8 text-center">
        A powerful and customizable vacation rental platform designed to connect hosts and travelers seamlessly.
      </Paragraph>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AirBnbFeatures.map((feature, index) => (
          <div
            key={index}
            className="p-5 border rounded-xl shadow transition bg-white hover:bg-gradient-to-r hover:from-red-100 hover:to-red-300"
          >
            <feature.icon className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirBnbCloneFeatures;
