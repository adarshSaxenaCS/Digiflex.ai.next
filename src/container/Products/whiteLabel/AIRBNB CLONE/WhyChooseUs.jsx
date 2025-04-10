import { ShieldCheck, Bolt, Globe, Clock, LifeBuoy } from "lucide-react";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";

const features = [
  {
    title: "Custom Development",
    description: "Tailor-made solutions, not just pre-built templates.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Architecture",
    description: "Suitable for startups and enterprises.",
    icon: Globe,
  },
  {
    title: "Secure & Reliable",
    description: "SSL encryption, secure payments, and data protection.",
    icon: Bolt,
  },
  {
    title: "Fast Deployment",
    description: "Get your platform live in weeks, not months.",
    icon: Clock,
  },
  {
    title: "Ongoing Support",
    description: "Continuous updates and customer support.",
    icon: LifeBuoy,
  },
];

const WhyChooseUs = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col items-center justify-center mb-12">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 animate-fadeIn">
          Why Choose Us?
        </h2>

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
              className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-lg animate-fadeIn"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <feature.icon size={48} className="mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default WhyChooseUs;
