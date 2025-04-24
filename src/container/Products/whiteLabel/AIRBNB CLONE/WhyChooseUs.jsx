import { ShieldCheck, Bolt, Globe, Clock, LifeBuoy } from "lucide-react";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const features = [
  {
    title: "Custom Development",
    description: "We offer fully customized web solutions built from scratch, tailored to your business needs. No cookie-cutter templates—just powerful, purpose-driven code that fits like a glove.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Architecture",
    description: "Our platforms are built to grow with you. Whether you're a startup or an enterprise, we ensure the infrastructure supports growth, traffic surges, and new feature additions with ease.",
    icon: Globe,
  },
  {
    title: "Secure & Reliable",
    description: "With advanced encryption, secure payment integrations, and regular audits, we prioritize the safety of your data and ensure consistent uptime and trustworthiness.",
    icon: Bolt,
  },
  {
    title: "Fast Deployment",
    description: "We cut through delays with agile development practices. Your platform goes live faster, helping you reach the market quickly without compromising quality.",
    icon: Clock,
  },
  {
    title: "Ongoing Support",
    description: "Our relationship doesn’t end at deployment. We provide continuous support, updates, and optimizations to keep your platform secure, relevant, and high-performing.",
    icon: LifeBuoy,
  },
];

const WhyChooseUs = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col items-center justify-center mb-12">
        {/* Title */}
        <Heading className="text-4xl font-bold mb-6 text-center text-blue-600 animate-fadeIn">
          Why Choose Us?
        </Heading>

        {/* Subtitle */}
        <Paragraph className="text-gray-700 text-center text-[20px] mb-[40px] animate-fadeIn delay-150">
          We provide top-notch development solutions with a focus on security,
          scalability, and seamless deployment.
        </Paragraph>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:bg-gradient-to-r hover:from-red-100 hover:to-red-300 animate-fadeIn"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <feature.icon size={48} className="mx-auto text-blue-500 mb-4" />
              <Heading className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </Heading>
              <p className="text-gray-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default WhyChooseUs;
