
import { FaCloud, FaCogs, FaShieldAlt, FaPlug, FaBolt, FaSync } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";

const services = [
  {
    icon: <FaCloud size={40} className="text-blue-900" />,
    title: "Seamless Salesforce Integration",
    description:
      "AppExchange apps integrate effortlessly with Salesforce, ensuring a smooth and efficient user experience.",
  },
  {
    icon: <FaCogs size={40} className="text-blue-900" />,
    title: "Highly Customizable Solutions",
    description:
      "Designed to be flexible, AppExchange apps adapt to various business needs and workflows.",
  },
  {
    icon: <FaShieldAlt size={40} className="text-blue-900" />,
    title: "Enterprise-Grade Security",
    description:
      "Advanced security protocols ensure data protection and compliance with industry standards.",
  },
  {
    icon: <FaPlug size={40} className="text-blue-900" />,
    title: "Pre-Built Integrations",
    description:
      "Easily connect with third-party apps to expand Salesforce functionalities without hassle.",
  },
  {
    icon: <FaBolt size={40} className="text-blue-900" />,
    title: "AI & Automation Capabilities",
    description:
      "Enhance efficiency with AI-powered insights and automated workflows, optimizing productivity.",
  },
  {
    icon: <FaSync size={40} className="text-blue-900" />,
    title: "Regular Updates & Support",
    description:
      "Get continuous improvements, new features, and dedicated support for seamless operations.",
  },
];

const Services = () => {
  return (
    <WrapperContainer>
      <section className="flex flex-col items-center text-blue-900 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full">
        <Heading>
          Our AppExchange Services
        </Heading>
     
    
     <Paragraph>

          AppExchange apps offer seamless integration, security, and powerful automation for businesses.
     </Paragraph>
    

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-16 w-full max-w-6xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex gap-6 items-start"
            >
              <div>{service.icon}</div>
              <div>
                <Subheading>{service.title}</Subheading>
                <Paragraph>{service.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default Services;
