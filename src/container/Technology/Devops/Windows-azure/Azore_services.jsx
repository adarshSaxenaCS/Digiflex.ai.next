import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";

const data = [
  {
    title: "Azure DevOps Consulting",
    num: "01",
    description:
      "Our experts assess your existing workflow and provide a tailored DevOps strategy to maximize efficiency.",
  },
  {
    title: "CI/CD Pipeline Implementation",
    num: "02",
    description:
      "We design and implement robust Continuous Integration and Continuous Deployment (CI/CD) pipelines for faster, error-free releases.",
  },
  {
    title: "Infrastructure as Code (IaC)",
    num: "03",
    description:
      "Leverage tools like Terraform, ARM Templates, and Bicep to manage infrastructure programmatically.",
  },
  {
    title: "Cloud-Native App Development",
    num: "04",
    description:
      "Deploy and manage cloud-native applications using Azure Kubernetes Service (AKS), Azure Functions, and Azure App Services.",
  },
  {
    title: "Security & Compliance",
    num: "05",
    description:
      "Implement Azure Policy, Role-Based Access Control (RBAC), and Key Vault to secure your DevOps pipeline.",
  },
  {
    title: "Monitoring & Logging",
    num: "06",
    description:
      "Optimize performance with Azure Monitor, Log Analytics, and Application Insights to detect and fix issues proactively.",
  },
];

function Azore_services() {
  return (
    <WrapperContainer>
      <Heading>Our DevOps Services on Windows Azure</Heading>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data.map((value, index) => (
          <div 
            key={index} 
            className="border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <Subheading className="text-lg md:text-xl font-semibold">
                {value.title}
              </Subheading>
              <span className="text-gray-300 text-5xl md:text-6xl font-bold">
                {value.num}
              </span>
            </div>
            
            <Paragraph className="mt-2 text-sm md:text-base text-gray-600">
              {value.description}
            </Paragraph>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default Azore_services;
