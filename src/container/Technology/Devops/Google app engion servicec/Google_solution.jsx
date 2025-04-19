'use client';

import WrapperContainer from '../../../../Layout/WrapperContainer';
import { useState } from 'react';

const slides = [
  {
    title: 'CI/CD Implementation',
    description: 'Continuous Integration and Continuous Deployment (CI/CD) is crucial for delivering high-quality applications quickly.',
    points: [
      'Automated Build & Deployment Pipelines – We use Google Cloud Build, Jenkins, and GitHub Actions to automate builds.',
      'Zero-Downtime Deployment – Ensuring no disruptions while deploying new updates.',
      'Canary Releases & Blue-Green Deployment – For safe, controlled rollouts of new features.',
    ],
    help: 'We design custom CI/CD pipelines tailored for your business needs, ensuring smooth development cycles and faster time-to-market.',
  },
  {
    title: 'Infrastructure as Code (IaC) for App Engine',
    description: 'Managing cloud resources manually can be inefficient. With IaC, infrastructure is managed using code.',
    points: [
      'Terraform & Google Cloud Deployment Manager – Automating infrastructure setup.',
      'Scalable & Repeatable Environments – Easy replication across different environments.',
      'Version Control for Infrastructure – Rollback and track changes in infrastructure.',
    ],
    help: 'We set up IaC frameworks that enhance efficiency, scalability, and security while reducing manual errors.',
  },
  {
    title: 'Monitoring & Logging',
    description: 'Ensuring application reliability requires proactive monitoring.',
    points: [
      'Google Cloud Operations Suite (Stackdriver) – Real-time monitoring & logging.',
      'Prometheus & Grafana – Custom dashboarding for better insights.',
      'Error Reporting & Alerts – Immediate detection of issues and automated alerts.',
    ],
    help: 'We configure custom monitoring solutions that track performance metrics, identify bottlenecks, and optimize resource utilization.',
  },
  {
    title: 'Security & Compliance',
    description: 'Security is a top priority when running applications on Google App Engine.',
    points: [
      'Role-Based Access Control (RBAC) – Implementing least privilege access for security.',
      'Data Encryption – At-rest and in-transit encryption using Google Cloud’s security standards.',
      'API Gateway & IAM Policies – Secure APIs and enforce access control policies.',
    ],
    help: 'We implement security best practices to protect applications, data, and infrastructure against vulnerabilities.',
  },
  {
    title: 'Cost Optimization Strategies',
    description: 'Optimizing cloud costs without compromising performance is essential.',
    points: [
      'Auto-scaling & Instance Scheduling – Reducing unnecessary resource usage.',
      'Monitoring Usage & Anomaly Detection – Identifying excessive spending areas.',
      'Optimized Database Solutions – Choosing the right database for performance and cost-efficiency.',
    ],
    help: 'We conduct cost audits and optimizations to help businesses maximize efficiency while minimizing expenses on Google App Engine.',
  },
];

export default function GoogleSolution() {
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
