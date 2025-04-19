'use client';

import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import { CheckCircle } from 'lucide-react';

export default function DevOpsServerlessBenefits() {
  const benefits = [
    { title: 'Faster Deployments', description: 'Automate CI/CD pipelines for rapid software delivery.' },
    { title: 'Scalability', description: 'Applications scale automatically based on demand.' },
    { title: 'Cost-Effective', description: 'Pay only for the resources used.' },
    { title: 'Enhanced Security', description: 'Minimized attack surface with managed services.' },
    { title: 'High Availability', description: 'Resilient and fault-tolerant architectures.' },
  ];

  return (
    <>
    <WrapperContainer>
    <div className="flex justify-center items-center">
      <div className="text-center">
<Heading>Key Benefits of DevOps Serverless</Heading>        
<p className="text-gray-600 mt-2">Empowering businesses with efficiency and agility.</p>
        <div className="mt-8 flex flex-col items-center w-full space-y-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md w-full max-w-md"
            >
              <CheckCircle className="text-green-500 w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </WrapperContainer>
    </>
  );
}