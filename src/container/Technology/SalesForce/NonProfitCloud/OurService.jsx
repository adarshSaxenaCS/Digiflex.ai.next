import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import { FaHandsHelping, FaChartLine, FaUsers, FaCogs } from "react-icons/fa";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

export default function NonprofitCloudServices() {
  const services = [
    {
      icon: <FaHandsHelping className="text-5xl text-purple-700" />, 
      title: "Fundraising & Donor Management",
      description: "Streamline fundraising efforts and manage donor relationships with ease using powerful automation and analytics."
    },
    {
      icon: <FaChartLine className="text-5xl text-purple-700" />, 
      title: "Impact & Program Management",
      description: "Monitor and measure the impact of your programs while optimizing resource allocation for maximum efficiency."
    },
    {
      icon: <FaUsers className="text-5xl text-purple-700" />, 
      title: "Volunteer & Community Engagement",
      description: "Enhance volunteer coordination and engage with your community through seamless communication tools."
    },
    {
      icon: <FaCogs className="text-5xl text-purple-700" />, 
      title: "Automation & AI-Powered Insights",
      description: "Leverage AI-driven insights to automate tasks, optimize workflows, and improve decision-making."
    }
  ];

  return (
    <WrapperContainer>
      <div className="max-w-5xl mx-auto text-center">
        <Heading>Our Nonprofit Cloud Services</Heading>
        <Paragraph>
          Digiflex.ai empowers nonprofits with cutting-edge technology to enhance impact, efficiency, and engagement.
        </Paragraph>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md">
            {service.icon}
            <Subheading>{service.title}</Subheading>
            <Paragraph>{service.description}</Paragraph>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}
