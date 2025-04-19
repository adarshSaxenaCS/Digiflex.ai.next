import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Subheading from '../../../../Layout/Subheading';
import Heading from '../../../../Layout/Heading';

const technologies = [
  {
    title: 'CI/CD Pipeline Tools',
    points: [
      'Jenkins',
      'GitHub Actions',
      'GitLab CI/CD',
      'Bitbucket Pipelines',
      'CircleCI',
    ],
  },
  {
    title: 'Containerization & Orchestration',
    points: [
      'Docker',
      'Kubernetes',
      'Helm',
      'ArgoCD',
    ],
  },
  {
    title: 'Infrastructure as Code (IaC)',
    points: [
      'Terraform',
      'Ansible',
      'AWS CloudFormation',
    ],
  },
  {
    title: 'Security & Compliance',
    points: [
      'SonarQube',
      'OWASP ZAP',
      'HashiCorp Vault',
      'Snyk',
    ],
  },
  {
    title: 'Automated Testing Tools',
    points: [
      'Selenium',
      'JMeter',
      'Postman',
      'Cypress',
    ],
  },
];

function Cicd_technologies() {
  return (
    <WrapperContainer>
      <div>
        <Heading>
          <span>
            <h2>Technologies Used at Digiflex.ai</h2>
          </span>
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Subheading>
                <span>
                  <h3 className='w-full h-14'>{tech.title}</h3>
                </span>
              </Subheading>
              <ul className="mt-4 space-y-2">
                {tech.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500 text-xl">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Cicd_technologies;
