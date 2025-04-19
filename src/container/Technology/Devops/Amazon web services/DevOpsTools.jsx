import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import React from "react";

const devOpsData = [
  {
    category: "Version Control",
    service: "AWS CodeCommit",
    purpose: "Source code management",
  },
  {
    category: "CI/CD",
    service: "AWS CodeBuild, CodePipeline",
    purpose: "Continuous Integration & Deployment",
  },
  {
    category: "Deployment",
    service: "AWS CodeDeploy, Elastic Beanstalk",
    purpose: "Automated deployments",
  },
  {
    category: "Infrastructure as Code",
    service: "AWS CloudFormation, Terraform",
    purpose: "Automated infrastructure management",
  },
  {
    category: "Monitoring & Logging",
    service: "AWS CloudWatch, AWS X-Ray",
    purpose: "Application performance monitoring",
  },
  {
    category: "Security & Compliance",
    service: "AWS IAM, AWS Shield, AWS Config",
    purpose: "Security, authentication, and compliance",
  },
  {
    category: "Containerization",
    service: "Amazon ECS, Amazon EKS, Fargate",
    purpose: "Kubernetes and Docker container management",
  },
];

export default function DevOpsTools() {
  return (
    <WrapperContainer>
    <Heading>DevOps Tools & Technologies on AWS</Heading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devOpsData.map((item, index) => (
          <div key={index} className="shadow-lg rounded-xl p-4 bg-white border">
            <h2 className="text-xl font-semibold text-blue-600">{item.category}</h2>
            <p className="text-gray-700 mt-2 font-medium">{item.service}</p>
            <p className="text-gray-600 mt-1">{item.purpose}</p>
          </div>
        ))}
      </div>
      </WrapperContainer>
  );
}