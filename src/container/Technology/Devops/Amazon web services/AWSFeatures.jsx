import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import { Server, Code, Boxes, Shield, DollarSign, Eye } from "lucide-react";

const features = [
  {
    title: "Automated Infrastructure Management",
    description:
      "Deploy infrastructure using Infrastructure as Code (IaC) with AWS CloudFormation.",
    icon: Server,
  },
  {
    title: "CI/CD Pipeline",
    description:
      "Build, test, and deploy applications faster with AWS CodePipeline.",
    icon: Code,
  },
  {
    title: "Containerization & Orchestration",
    description:
      "Deploy scalable microservices with AWS ECS, EKS, and Kubernetes.",
    icon: Boxes,
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure enterprise-grade security with AWS IAM, AWS Shield, and AWS Security Hub.",
    icon: Shield,
  },
  {
    title: "Cost Optimization",
    description:
      "Optimize resource usage with AWS Auto Scaling and AWS Cost Explorer.",
    icon: DollarSign,
  },
  {
    title: "Observability & Logging",
    description:
      "Get deep insights using AWS CloudWatch Logs and AWS X-Ray.",
    icon: Eye,
  },
];

export default function AWSFeatures() {
  return (
    <WrapperContainer>
      <Heading>Key Features of AWS DevOps</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center border p-4 gap-6 sm:gap-10 rounded-xl shadow-md"
          >
            <div className="flex-1">
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-600 w-full sm:w-80">{feature.description}</p>
            </div>
            <feature.icon className="w-16 h-16 text-blue-500 self-end sm:self-center" />
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}