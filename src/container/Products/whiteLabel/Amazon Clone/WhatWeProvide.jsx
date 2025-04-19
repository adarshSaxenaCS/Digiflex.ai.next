import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { Monitor, Moon, Move, Tag, BarChart, LifeBuoy, Shield, Lock } from "lucide-react"; // Import icons

export default function WhatWeProvide() {
  const boxColors = [
    "hover:bg-blue-100",
    "hover:bg-green-100",
    "hover:bg-yellow-100",
    "hover:bg-pink-100",
    "hover:bg-purple-100",
    "hover:bg-red-100",
    "hover:bg-orange-100",
    "hover:bg-emerald-100",
  ];

  return (
    <WrapperContainer>
      <div className="min-h-[60vh] mb-20 bg-gray-100 p-10">
        <Heading className="text-4xl font-bold text-center text-blue-600 mb-10">
          What We Provide
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${boxColors[index % boxColors.length]}`}
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <Heading className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </Heading>
              </div>
              <Paragraph className="text-gray-600">{feature.description}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

const features = [
  { 
    title: "Modern UI Design", 
    description: "We provide a clean, intuitive, and mobile-friendly interface designed to offer a smooth user experience. Our modern UI makes navigation simple, ensuring that users can find products, manage accounts, and interact with the platform with ease. The design prioritizes accessibility and responsiveness, offering optimal views across various devices, including phones, tablets, and desktops.",
    icon: <Monitor className="text-blue-600 w-8 h-8" /> // Icon for Modern UI Design
  },
  { 
    title: "Dark Mode Support", 
    description: "Our platform comes with an optional dark theme to improve user comfort and reduce eye strain, especially in low-light environments. Dark mode not only enhances readability but also helps in conserving battery life on devices with OLED or AMOLED screens. It's a popular feature for users who prefer a less intense, more relaxing viewing experience during extended usage.",
    icon: <Moon className="text-gray-800 w-8 h-8" /> // Icon for Dark Mode Support
  },
  { 
    title: "Product Animation", 
    description: "Smooth hover effects and transitions are implemented for a more dynamic and engaging user experience. Product images and details come to life with subtle animations, making the shopping experience visually appealing. These animations help users interact with products more intuitively, providing instant feedback when they hover or click, enhancing their overall shopping journey.",
    icon: <Move className="text-purple-600 w-8 h-8" /> // Icon for Product Animation
  },
  { 
    title: "Commission-Based Selling", 
    description: "We empower sellers by allowing them to list their products and pay a commission based on their sales. This business model ensures that the platform is mutually beneficial for both the sellers and the marketplace. By taking a percentage from each sale, we can continuously improve the platform, attract new sellers, and provide a range of tools to help sellers succeed in the competitive marketplace.",
    icon: <Tag className="text-green-600 w-8 h-8" /> // Icon for Commission-Based Selling
  },
  { 
    title: "Ads & Sponsored Listings", 
    description: "Sellers can increase their product visibility by paying for premium listings and ads that appear in top spots across the platform. Sponsored listings ensure that products reach a wider audience by appearing more prominently in search results or category pages. This feature is essential for businesses looking to boost their sales and get noticed in a crowded marketplace.",
    icon: <BarChart className="text-orange-600 w-8 h-8" /> // Icon for Ads & Sponsored Listings
  },
  { 
    title: "Live Chat Support", 
    description: "Real-time assistance is provided to customers via our live chat feature, allowing for quick resolution of issues or inquiries. Whether it’s helping with product questions, order tracking, or technical support, our team is available to assist 24/7. This fosters a better relationship with customers, providing them with immediate solutions to enhance their shopping experience.",
    icon: <LifeBuoy className="text-cyan-600 w-8 h-8" /> // Icon for Live Chat Support
  },
  { 
    title: "GDPR Compliance", 
    description: "We are committed to protecting user data and complying with the General Data Protection Regulation (GDPR) to ensure privacy and security. All personal data provided by our users is stored securely, and they have control over how their data is used. We prioritize transparency and user consent in all aspects of data collection and processing, ensuring that users’ rights are respected.",
    icon: <Shield className="text-red-600 w-8 h-8" /> // Icon for GDPR Compliance
  },
  { 
    title: "SSL Encryption", 
    description: "We ensure that all sensitive information, such as credit card details and personal data, is transmitted securely through SSL encryption. This industry-standard security protocol prevents unauthorized access during data exchange between users and our platform. SSL encryption helps safeguard both the users and the platform from potential threats, building trust and providing a secure shopping environment.",
    icon: <Lock className="text-yellow-600 w-8 h-8" /> // Icon for SSL Encryption
  },
];
