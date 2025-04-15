import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import {
  Lock,
  MessageSquare,
  ShieldCheck,
  Globe,
  Wallet,
  Banknote,
  Users,
  Star,
  FileText,
  SearchCheck,
  Repeat,
} from "lucide-react";
import Image from "next/image";
import Heading from "@/Layout/Heading";

export default function Features() {
  const features = [
    {
      icon: <Wallet className="w-6 h-6 text-indigo-600" />,
      title: "Non-Custodial Wallets",
      description: "Users keep control of their private keys and funds at all times.",
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-600" />,
      title: "Secure Escrow System",
      description: "Smart contracts ensure fair trading without third-party risk.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
      title: "End-to-End Encrypted Chat",
      description: "Private messaging with built-in encryption for safe communication.",
    },
    {
      icon: <Banknote className="w-6 h-6 text-indigo-600" />,
      title: "Fiat-to-Crypto Trading",
      description: "Supports trading with local currencies via trusted P2P methods.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: "Reputation System",
      description: "Ratings and reviews for buyers and sellers to build trust.",
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      title: "Global Accessibility",
      description: "Trade with users worldwide with no geographic limitations.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Referral Program",
      description: "Earn rewards by inviting friends and growing the user base.",
    },
    {
      icon: <Star className="w-6 h-6 text-indigo-600" />,
      title: "Verified Traders",
      description: "Filter and trade with KYC-verified and trusted users.",
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      title: "Dispute Resolution",
      description: "Admin support for handling transaction conflicts and issues.",
    },
    {
      icon: <SearchCheck className="w-6 h-6 text-indigo-600" />,
      title: "Advanced Search Filters",
      description: "Search offers based on payment method, country, or user rating.",
    },
  ];

  const renderFeatureBox = (feature, index) => (
    <div
      key={index}
      className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md hover:scale-[1.02] transition-all duration-300 text-left"
    >
      <div className="mb-4">{feature.icon}</div>
      <Heading className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</Heading>
      <Paragraph className="text-sm text-gray-600">{feature.description}</Paragraph>
    </div>
  );

  return (
    <WrapperContainer>
      <section className="bg-white">
        <div className="text-center">
          <Heading className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Features of Our LocalCryptos Clone
          </Heading>
          <Paragraph className="text-gray-600 mb-10 text-base sm:text-lg">
            A secure, private, and user-friendly peer-to-peer crypto exchange platform.
          </Paragraph>

          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {features.slice(0, 3).map(renderFeatureBox)}
          </div>

          {/* Second Row: 4 image 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-8 mb-8">
            {renderFeatureBox(features[3], 3)}

            <div className="hidden sm:block">
              <Image
                src="https://img.freepik.com/free-photo/beautiful-cryptocurrwncy-concept_23-2149250224.jpg?t=st=1744371765~exp=1744375365~hmac=ebed9e90d958d8e08f30724a84e46b665a634ed46a78f2c24d18cf4439773494&w=996" // ✅ replace with your actual image
                alt="How It Works"
                width={300}
                height={300}
                className="mx-auto rounded-lg"
              />
            </div>

            {renderFeatureBox(features[4], 4)}
          </div>

          {/* Third Row: 6 image 7 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-8 mb-8">
            {renderFeatureBox(features[5], 5)}

            <div className="hidden sm:block">
              <Image
                src="https://img.freepik.com/free-photo/beautiful-cryptocurrency-hologram-design_23-2149250217.jpg?t=st=1744371782~exp=1744375382~hmac=10a38ea44aae99437fe2eea1f83e3c367ddf34b858c09e4c2b2bfcbbc54de17e&w=996" // ✅ replace with another image
                alt="Secure Features"
                width={300}
                height={300}
                className="mx-auto rounded-lg"
              />
            </div>

            {renderFeatureBox(features[6], 6)}
          </div>

          {/* Fourth Row: 8 9 10 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.slice(7, 10).map(renderFeatureBox)}
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
}
