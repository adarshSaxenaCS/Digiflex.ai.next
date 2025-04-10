import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";

const features = [
  { 
    icon: "💰", 
    title: "Tailored Financial Solutions", 
    description: "Customized financial services to meet unique client needs and drive growth." 
  },
  { 
    icon: "🔐", 
    title: "Enterprise-Grade Security", 
    description: "Robust security and compliance to protect sensitive financial data." 
  },
  { 
    icon: "📊", 
    title: "Data-Driven Insights", 
    description: "Leverage AI-powered analytics for smarter financial decision-making." 
  },
  { 
    icon: "🔄", 
    title: "Seamless Integration", 
    description: "Effortlessly integrate with banking, insurance, and wealth management tools." 
  },
  { 
    icon: "⚡", 
    title: "Enhanced Productivity", 
    description: "Automate workflows and streamline operations for maximum efficiency." 
  },
  { 
    icon: "🤝", 
    title: "Superior Client Engagement", 
    description: "Deliver personalized client experiences with a 360-degree financial view." 
  },
];

export default function WhyChooseUs() {
  return (
    <WrapperContainer>
      <section >
        <div className="text-center ">
            <Heading >Why Choose Us for Financial Services Cloud?</Heading>
          <Paragraph>
            Empowering financial institutions with innovative and secure cloud solutions.
          </Paragraph>
        </div>
        
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden transition-all duration-300 hover:translate-y-[-8px]"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="p-8 bg-white hover:bg-blue-50 transition-colors duration-300 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 pl-16">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
}