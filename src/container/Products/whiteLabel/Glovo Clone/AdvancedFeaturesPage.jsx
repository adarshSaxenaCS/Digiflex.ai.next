import WrapperContainer from '@/Layout/WrapperContainer';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const advancedFeatures = [
  {
    title: "Scheduled Orders",
    description: "Let users place orders in advance and receive them at a specific time."
  },
  {
    title: "In-App Chat or Support",
    description: "Real-time chat with support agents or delivery partners for smooth communication."
  },
  {
    title: "Multi-Vendor Cart",
    description: "Add items from multiple restaurants in a single order and checkout seamlessly."
  },
  {
    title: "Live Order Tracking with Map",
    description: "Interactive map showing delivery location and ETA updates."
  },
  {
    title: "Loyalty & Rewards Program",
    description: "Earn points and unlock exclusive rewards with every order."
  },
  {
    title: "Voice-Based Search or Ordering",
    description: "Use voice commands to search for food or place orders hands-free."
  },
  {
    title: "Dark Mode Toggle",
    description: "Switch to dark mode for a better viewing experience at night."
  },
  {
    title: "Multi-Currency / Multi-Language",
    description: "Serve global customers by supporting different currencies and languages."
  },
  {
    title: "Referral System",
    description: "Let users invite friends and earn rewards on successful referrals."
  },
  {
    title: "AI-Based Recommendations",
    description: "Suggest dishes and restaurants based on user preferences and history."
  },
  {
    title: "Dietary Filters & Nutrition Info",
    description: "Filter by dietary needs and view nutrition info of food items."
  },
  {
    title: "Wallet Integration",
    description: "Add funds to a digital wallet for faster payments and cashback offers."
  },
  {
    title: "Augmented Reality (AR) Food Preview",
    description: "Visualize dishes in real size using your camera before ordering."
  },
  {
    title: "Order via QR Code",
    description: "Scan QR codes at restaurants or posters to instantly place orders."
  },
  {
    title: "User Roles Dashboard",
    description: "Separate dashboards for Admin, Vendors, Riders, and Users for tailored experiences."
  }
];

export default function AdvancedFeaturesPage() {
  return (
    <WrapperContainer>
      <div className="bg-gradient-to-br from-yellow-50 to-blue-50 font-sans">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-4 mt-4 pt-4">
          Advanced Features for Glovo Clone
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Explore our next-level features that take your food delivery experience to new heights. Designed with innovation and convenience at the core.
        </p>

        {/* Left Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="https://i.pinimg.com/736x/80/87/83/808783d2bcb86d9b459d492bf45e8bcf.jpg"
              alt="Advanced Features"
              width={500}
              height={300}
              className="rounded-lg shadow-lg mb-6 h-[900px] w-[110%]"
            />
          </div>
          <div className="flex flex-col gap-6">
            {advancedFeatures.slice(0, 7).map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:bg-gradient-to-r from-yellow-100 to-blue-100 transition-all duration-300 flex items-start gap-4"
              >
                <CheckCircle className="text-green-500 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-8">
          <div className="flex flex-col gap-6">
            {advancedFeatures.slice(7).map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:bg-gradient-to-r from-yellow-100 to-blue-100 transition-all duration-300 flex items-start gap-4"
              >
                <CheckCircle className="text-green-500 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="https://i.pinimg.com/736x/d1/11/f9/d111f9a77fde1fb2a0322686564467e5.jpg"
              alt="Advanced Features"
              width={500}
              height={100}
              className="rounded-lg shadow-lg mb-6 w-[110%] h-[500px]"
            />
            {/* Additional Image Below */}
            <Image
              src="https://i.pinimg.com/736x/43/af/aa/43afaab9cbac75721499cb0d510e245e.jpg" // Example URL
              alt="Additional Advanced Features"
              width={500}
              height={100}
              className="rounded-lg shadow-lg w-[110%] h-[500px]"
            />
          </div>
        </div>

      </div>
    </WrapperContainer>
  );
}
