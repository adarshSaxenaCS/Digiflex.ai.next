import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Serverless Architecture Design",
    description: "Build highly efficient cloud-native applications.",
  },
  {
    title: "CI/CD for Serverless Applications",
    description: "Automate deployments with DevOps best practices.",
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Manage cloud resources with tools like Terraform & AWS CDK.",
  },
  {
    title: "Monitoring & Logging",
    description: "Optimize performance with real-time insights.",
  },
  {
    title: "Security & Compliance",
    description: "Implement serverless security best practices.",
  },
];

export default function ServerlessServices() {
  return (
    <WrapperContainer>
      <div className="container mx-auto text-center">
        <Heading>Our DevOps Serverless Services</Heading>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-blue-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-700">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}
