import React from 'react';
import { Server, Cloud, Link, Database, ShieldCheck, Layers } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';

const architectureElements = [
  {
    icon: Server,
    title: 'Microservices Architecture',
    description: 'Commerce Cloud leverages microservices to provide flexibility and scalability.'
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Infrastructure',
    description: 'Built on a reliable cloud platform to ensure high availability and performance.'
  },
  {
    icon: Link,
    title: 'API-First Approach',
    description: 'Integrates seamlessly with third-party systems via REST and GraphQL APIs.'
  },
  {
    icon: Database,
    title: 'Scalable Data Management',
    description: 'Manages large-scale transactions with optimized database solutions.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'Ensures data protection with advanced encryption and compliance standards.'
  },
  {
    icon: Layers,
    title: 'Headless Commerce',
    description: 'Decouples front-end and back-end for seamless omnichannel experiences.'
  }
];

export default function ArchitecturePage() {
  return (

    <WrapperContainer>
    <div className=" bg-white dark:bg-gray-900 flex flex-col items-center">
      <div>
        <Heading>
        Commerce Cloud Architecture
        </Heading>
        <Paragraph>
          Explore the core architectural principles of Commerce Cloud and how they enable seamless e-commerce experiences.
        </Paragraph>
      </div>

      <div className="flex flex-col gap-8 max-w-5xl w-full">
        {architectureElements.map((element, index) => (
          <div 
            key={index} 
            className="flex items-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-blue-900"
          >
            <div className="flex-shrink-0">
              <element.icon className="h-16 w-16 text-blue-600 dark:text-blue-400 mr-6" />
            </div>
            <div>
              <Subheading>{element.title}</Subheading>
              <Paragraph>{element.description}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>

  );
}