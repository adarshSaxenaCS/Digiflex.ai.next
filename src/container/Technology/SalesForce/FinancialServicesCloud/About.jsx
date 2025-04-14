;
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import WrapperContainer from '@/Layout/WrapperContainer';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function About() {
  return (
    <WrapperContainer>

    <div className=" flex flex-col items-center">
      {/* Hero Section */}
      <div className="max-w-4xl text-center">
        <Heading>About Financial Services Cloud</Heading>
        <Paragraph>
          Financial Services Cloud revolutionizes banking, wealth management, and insurance with AI-driven insights, automation, and customer-centric solutions.
        </Paragraph>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-lg">
            <FaRegCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{benefit.title}</h2>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </WrapperContainer>
  );
}

const benefits = [
  { title: 'AI-Driven Insights', description: 'Harness AI to optimize financial operations and customer engagement.' },
  { title: 'Seamless Automation', description: 'Reduce manual processes with intelligent automation tools.' },
  { title: 'Enhanced Security', description: 'Ensure data security and compliance with advanced encryption.' },
  { title: 'Personalized Services', description: 'Deliver tailored financial solutions to meet customer needs.' },
];
