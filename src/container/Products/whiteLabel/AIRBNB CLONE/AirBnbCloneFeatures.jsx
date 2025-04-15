import SelfOpenFeatureList from "@/container/Products/whiteLabel/AllInOneCode/SelfOpenFeatureList";
import { LayoutDashboard, Search, UserCheck, CreditCard, Star, MapPin, CalendarCheck, MessageSquare, Globe, ShieldCheck, TrendingUp } from "lucide-react";

const AirBnbFeatures = [
  {
    title: "User-Friendly Interface",
    icon: LayoutDashboard,  
    description: "Intuitive design for seamless booking. Our platform offers a clean and easy-to-use interface, ensuring a smooth booking experience for both hosts and guests.",
    detailContent: "Our platform offers a clean and easy-to-use interface, ensuring a smooth booking experience for both hosts and guests."
  },
  {
    title: "Advanced Search & Filters",
    icon: Search,
    description: "Location, price, amenities, ratings. Easily find the perfect property with powerful search tools and multiple filters to narrow down options.",
    detailContent: "Easily find the perfect property with powerful search tools and multiple filters to narrow down options."
  },
  {
    title: "Host & Guest Dashboards",
    icon: UserCheck,
    description: "Profile management, booking tracking. Both hosts and guests get dedicated dashboards to manage their profiles, bookings, and interactions.",
    detailContent: "Both hosts and guests get dedicated dashboards to manage their profiles, bookings, and interactions."
  },
  {
    title: "Payment Gateway Integration",
    icon: CreditCard,
    description: "Stripe, PayPal, Crypto, etc. Secure and seamless payments with multiple payment gateway integrations for a hassle-free transaction process.",
    detailContent: "Secure and seamless payments with multiple payment gateway integrations for a hassle-free transaction process."
  },
  {
    title: "Reviews & Ratings",
    icon: Star,
    description: "Build trust with customer feedback. Hosts and guests can leave ratings and reviews, ensuring trust and transparency in every transaction.",
    detailContent: "Hosts and guests can leave ratings and reviews, ensuring trust and transparency in every transaction."
  },
  {
    title: "Map Integration",
    icon: MapPin,
    description: "Google Maps or OpenStreetMap for property locations.Integrated maps provide location insights and help users find properties with ease.",
    detailContent: "Integrated maps provide location insights and help users find properties with ease."
  },
  {
    title: "Booking Management",
    icon: CalendarCheck,
    description: "Availability calendar, instant booking, cancellations. An efficient booking system allowing real-time availability tracking and easy cancellations.",
    detailContent: "An efficient booking system allowing real-time availability tracking and easy cancellations."
  },
  {
    title: "Messaging System",
    icon: MessageSquare,
    description: "Secure communication between hosts and guests.A built-in messaging system enables direct and secure communication between users.",
    detailContent: "A built-in messaging system enables direct and secure communication between users."
  },
  {
    title: "Multi-Language & Currency Support",
    icon: Globe,
    description: "Expand to a global audience. Support for multiple languages and currencies ensures accessibility for users worldwide.",
    detailContent: "Support for multiple languages and currencies ensures accessibility for users worldwide."
  },
  {
    title: "Admin Panel",
    icon: ShieldCheck,
    description: "Manage users, properties, payments, and reports. An intuitive admin dashboard to oversee platform operations, including user management and financial tracking.",
    detailContent: "An intuitive admin dashboard to oversee platform operations, including user management and financial tracking."
  },
  {
    title: "AI-Powered Pricing Suggestions",
    icon: TrendingUp,
    description: "Smart pricing based on demand and location. Machine learning algorithms suggest optimal pricing based on demand, location, and seasonality.",
    detailContent: "Machine learning algorithms suggest optimal pricing based on demand, location, and seasonality."
  }
];

const AirBnbCloneFeatures = () => {
  return (
    <SelfOpenFeatureList
      title="Key Features of Our AirBNB Clone "
      description="A powerful and customizable vacation rental platform designed to connect hosts and travelers seamlessly."
      services={AirBnbFeatures.map((feature) => ({
        ...feature,
        icon: feature.icon, 
      }))}
    />
  );
};

export default AirBnbCloneFeatures;

