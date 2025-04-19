import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import React from 'react';

const features = [
    {
      title: "Plan & Develop",
      items: [
        "Use AWS CodeCommit (Git repository) for version control.",
        "Collaborate using AWS CodeStar to manage development projects."
      ]
    },
    {
      title: "Build & Test",
      items: [
        "Automate builds using AWS CodeBuild.",
        "Perform continuous testing with AWS Device Farm and third-party tools."
      ]
    },
    {
      title: "Release & Deploy",
      items: [
        "Automate deployments using AWS CodeDeploy and AWS CodePipeline.",
        "Implement Blue-Green Deployments and Canary Releases for seamless updates."
      ]
    },
    {
      title: "Operate & Monitor",
      items: [
        "Use Amazon CloudWatch, AWS X-Ray, and AWS CloudTrail for monitoring.",
        "Automate incident response with AWS Lambda and AWS Systems Manager."
      ]
    }
];

const FeatureCard = ({ title, items }) => (
    <div className="bg-white border border-gray-300  p-6 shadow-md w-full md:w-1/3">
      <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-200 pb-2">{title}</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {items.map((item, index) => (
          <li key={index} className=" text-blue-600 cursor-pointer hover:text-xl">{item}</li>
        ))}
      </ul>
    </div>
);

function Amazon_aws_devops() {
  return (
    <>
        <WrapperContainer>
            <Heading>What is AWS DevOps?</Heading>
            <Paragraph>AWS DevOps is a set of cloud services, tools, and best practices offered by Amazon Web Services that helps organizations automate software development, testing, deployment, and infrastructure management. With AWS DevOps, businesses can scale applications efficiently, improve security, and reduce downtime.</Paragraph>
           
            <div className=" flex flex-wrap justify-center gap-6">
                {features.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} items={feature.items} />
                ))}
            </div>
        </WrapperContainer>
    </>
  );
}

export default Amazon_aws_devops;
