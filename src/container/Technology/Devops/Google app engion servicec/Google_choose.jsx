import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import React from 'react';

const benefits = [
    {
      title: "Automatic Scaling",
      description: "Dynamically adjusts resources based on traffic.",
    },
    {
      title: "Serverless Deployment",
      description: "No need to manage infrastructure.",
    },
    {
      title: "Built-in Security",
      description: "Google Cloud’s security model ensures protection.",
    },
    {
      title: "Managed Databases",
      description: "Seamless integration with Firestore, Cloud SQL, and Datastore.",
    },
    {
      title: "Versioning & Traffic Splitting",
      description: "A/B testing and version control for continuous improvements.",
    },
  ];

function Google_choose() {
  return (
    <WrapperContainer>
      <Heading>
        Why Choose Google App Engine?
      </Heading>
      <Subheading className='text-center'>
        Google App Engine provides a scalable, secure, and managed platform for deploying applications. It supports multiple programming languages, including Python, Java, Node.js, Go, PHP, Ruby, and .NET.
      </Subheading>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Key Benefits of Google App Engine
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full justify-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs"
            >
              <span className="absolute top-2 right-2 text-2xl text-gray-400 font-bold">{index + 1}</span>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {benefit.title}
              </h2>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-700 mt-10 text-center max-w-4xl">
          At <span className="font-bold text-blue-600">Digiflex.ai</span>, we help businesses leverage these benefits by integrating DevOps best practices into their Google App Engine workflows.
        </p>
      </div>
    </WrapperContainer>
  );
}

export default Google_choose;