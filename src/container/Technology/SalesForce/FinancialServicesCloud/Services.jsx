
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import WrapperContainer from '@/Layout/WrapperContainer';
import { FaChartLine, FaShieldAlt, FaHandsHelping, FaRobot, FaSyncAlt, FaUsers } from 'react-icons/fa';

export default function Services() {
  return (
    <>
  <WrapperContainer>


    <div className="bg-white flex flex-col items-center">
      {/* Header */}
      <div className="text-center ">
        <Heading>Our Services</Heading>
        <Paragraph>
          Explore our AI-driven solutions designed for seamless banking, wealth management, and insurance services.
        </Paragraph>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <service.icon className="text-blue-500 text-5xl mb-4" />
            <Subheading>{service.title}</Subheading>
            <Paragraph>{service.description}</Paragraph>
          </div>
        ))}
      </div>
    </div>

    </WrapperContainer>
    </>
  );
}

const services = [
  { title: 'AI-Powered Analytics', description: 'Leverage AI to gain insights and optimize financial decisions.', icon: FaChartLine },
  { title: 'Secure Transactions', description: 'Ensure top-tier security and encryption for all financial operations.', icon: FaShieldAlt },
  { title: ' Wealth Management', description: 'Provide tailored financial planning and investment solutions.', icon: FaHandsHelping },
  { title: 'Automation & Efficiency', description: 'Streamline workflows with AI-driven automation.', icon: FaRobot },
  { title: 'Seamless Integration', description: 'Easily integrate with banking, insurance, and CRM platforms.', icon: FaSyncAlt },
  { title: 'Customer-Centric Solutions', description: 'Enhance user experience with AI-driven engagement tools.', icon: FaUsers },
];
