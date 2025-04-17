'use client';

import WrapperContainer from '../../../../Layout/WrapperContainer';
import { useState } from 'react';

const slides = [
    {
      title: 'CI/CD Pipeline Development',
      description: 'We build robust and scalable CI/CD pipelines that automate software integration, testing, and deployment, enabling faster and more reliable releases.',
      points: [
        'Automated Build & Deployment Pipelines',
        'Code Integration & Version Control',
        'Secure, Scalable, & Fault-Tolerant Architecture',
      ],
    },
    {
      title: 'Continuous Integration (CI)',
      description: 'Continuous Integration ensures that code changes are automatically merged, built, and tested before deployment, reducing errors and speeding up software delivery.',
      points: [
        'Automated Code Merging',
        'Unit & Integration Testing',
        'Build Validation & Error Reporting',
      ],
    },
    {
      title: 'Continuous Deployment (CD)',
      description: 'We implement Continuous Deployment to automate software delivery to staging, production, or hybrid cloud environments without manual intervention.',
      points: [
        'Zero-Downtime Deployments',
        'Rollback & Disaster Recovery Strategies',
        'Automated Release Management',
      ],
    },
    {
      title: 'Infrastructure as Code (IaC) Implementation',
      description: 'Using Terraform, Ansible, and CloudFormation, we enable automated infrastructure provisioning for scalable and consistent environments.',
      points: [
        'Cloud-Native Deployments (AWS, Azure, GCP)',
        'Version-Controlled Infrastructure Management',
        'Automated Configuration & Compliance',
      ],
    },
    {
      title: 'Automated Testing & Quality Assurance',
      description: 'We integrate automated testing into CI/CD pipelines to ensure software reliability, security, and performance.',
      points: [
        'Unit, Functional, & Regression Testing',
        'Security & Compliance Testing',
        'Performance & Load Testing (JMeter, Selenium)',
      ],
    },
    {
      title: 'DevOps Security (DevSecOps)',
      description: 'We embed security into your CI/CD pipeline to ensure compliance and protect against vulnerabilities.',
      points: [
        'Static & Dynamic Code Analysis',
        'Secrets Management & Access Controls',
        'Automated Vulnerability Scanning',
      ],
    },
    {
      title: 'Multi-Cloud & Hybrid Cloud Deployments',
      description: 'We design CI/CD pipelines for AWS, Azure, Google Cloud, and hybrid environments, allowing seamless software delivery across multiple platforms.',
      points: [
        'Cloud-Native & Serverless CI/CD',
        'On-Premise to Cloud Migrations',
        'Containerized & Kubernetes Deployments',
      ],
    },
  ];
  

function Cicd_services() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <WrapperContainer>
    <div className=" flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div
          key={current}
          className="bg-[#1D4ED8] p-6 sm:p-8 rounded-2xl shadow-lg w-full transition-all duration-500 transform flex flex-col sm:flex-row"
        >
          <div className="w-full sm:w-1/2 pr-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{slides[current].title}</h2>
            <p className="text-white mb-4">{slides[current].description}</p>
            <p className="text-gray-300">{slides[current].help}</p>
          </div>
          <div className="w-full sm:w-1/2 pl-4 border-t sm:border-t-0 sm:border-l border-white mt-4 sm:mt-0">
            <ul className="text-gray-300 list-none space-y-2">
              {slides[current].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex mt-4 space-x-4 sm:space-x-0 sm:space-y-0">
          <button onClick={prevSlide} className="text-4xl px-4">&#60;</button>
          <button onClick={nextSlide} className="text-4xl px-4">&#62;</button>
        </div>
      </div>
    </div>
    </WrapperContainer>
  );
}

export default Cicd_services