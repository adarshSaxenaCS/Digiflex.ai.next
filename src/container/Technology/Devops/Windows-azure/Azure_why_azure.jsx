import Subheading from '../../../../Layout/Subheading';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import React from 'react';

const Azure_why_azure = () => {

    const data = [
        {
            step: "1",
            title: "End-to-End Automation",
            description: "Azure DevOps provides a fully automated CI/CD pipeline through Azure Pipelines, allowing teams to automate builds, testing, and deployments seamlessly. This ensures faster releases, minimal manual intervention, and improved software quality with continuous integration and delivery."
        },
        {
            step: "2",
            title: "Scalability & Flexibility",
            description: "Azure offers highly scalable and flexible cloud infrastructure with Azure Kubernetes Service (AKS) and Azure Virtual Machines. These services allow businesses to dynamically scale their applications based on demand, ensuring optimal performance and cost efficiency while supporting microservices architecture."
        },
        {
            step: "3",
            title: "Secure & Compliant",
            description: "Security is a top priority in Azure DevOps. With Azure Security Center, organizations can detect threats in real-time, apply advanced security policies, and maintain compliance with industry regulations such as GDPR, ISO, and HIPAA. This ensures data protection and secure development practices."
        },
        {
            step: "4",
            title: "Seamless Integration",
            description: "Azure DevOps seamlessly integrates with popular development and automation tools, including GitHub, Jenkins, Terraform, and Kubernetes. This enables developers to use their preferred tools while leveraging Azure’s cloud capabilities for streamlined collaboration and efficient workflows."
        },
        {
            step: "5",
            title: "Monitoring & Insights",
            description: "Azure Monitor and Application Insights provide real-time monitoring, detailed logs, and performance analytics for applications. This helps teams identify bottlenecks, troubleshoot issues proactively, and optimize system performance to deliver a seamless user experience."
        }
    ];

  return (
    <WrapperContainer>
        
        <div className="text-center mb-16">
            <Heading>Why Choose Azure for DevOps?</Heading>
        </div>

        <div className="max-w-4xl mx-auto">
            {
                data.map( (process, index) => (
                    <div key={index} className="flex mb-8 last:mb-0">
                        <div className="mr-6">
                            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {process.step}
                            </div>
                            {index < 4 && <div className="h-full w-0.5 bg-indigo-200 mx-auto mt-2"></div>}
                        </div>
                        <div className="bg-white rounded-lg shadow p-6 flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                            <p className="text-gray-600">{process.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        
        
    </WrapperContainer>
  )
}

export default Azure_why_azure
