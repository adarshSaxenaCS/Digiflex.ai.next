import React from 'react';
import {
  Briefcase,
  MonitorSmartphone,
  BrainCircuit,
  Headphones,
  MailCheck,
  MessagesSquare
} from 'lucide-react';
import Heading from '@/Layout/Heading'

const ServiceTools = () => {
  const tools = [
    {
      icon: <Briefcase size={48} className="text-blue-500" />,
      title: "Case Management",
      features: ["Automated case routing", "SLA management", "Escalation rules"]
    },
    {
      icon: <MonitorSmartphone size={48} className="text-green-500" />,
      title: "Service Console",
      features: ["360° customer view", "Unified agent workspace", "Quick actions"]
    },
    {
      icon: <BrainCircuit size={48} className="text-purple-500" />,
      title: "Einstein AI",
      features: ["Predictive service", "Automated responses", "Smart recommendations"]
    },
    {
      icon: <Headphones size={48} className="text-red-500" />,
      title: "CTI Integration",
      features: ["Click-to-call", "Call recording", "IVR integration"]
    },
    {
      icon: <MailCheck size={48} className="text-yellow-500" />,
      title: "Email-to-Case",
      features: ["Auto-response rules", "Email templates", "Threading"]
    },
    {
      icon: <MessagesSquare size={48} className="text-indigo-500" />,
      title: "Live Chat",
      features: ["Real-time visitor tracking", "Pre-chat forms", "Chat transfer"]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading>Service Cloud Tools</Heading>
          <p className="mt-4 text-lg text-gray-600">
            Powerful tools to enhance your customer service capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {tool.title}
                </h3>
                <ul className="space-y-2">
                  {tool.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="text-gray-600 flex items-center justify-center space-x-2"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTools;
