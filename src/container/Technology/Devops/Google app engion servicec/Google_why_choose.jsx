import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import React from 'react'

const features = [
    {
      id: 1,
      text: "Experienced DevOps Engineers – Expertise in Google Cloud Platform (GCP), Kubernetes, and CI/CD."
    },
    {
      id: 2,
      text: "Custom-Tailored Solutions – We design solutions specific to business needs."
    },
    {
      id: 3,
      text: "End-to-End Cloud Management – From deployment to monitoring and security."
    },
    {
      id: 4,
      text: "Cost-Effective & Scalable – Optimizing cloud costs while ensuring performance."
    }
  ];
  
  function Google_why_choose() {
    return (
        <WrapperContainer>
      <div className="text-center">
        <Heading>          
        Why Choose Digiflex.ai for DevOps Google App Engine Services?
        </Heading>
        <Subheading>          
        At Digiflex.ai, we specialize in building high-performance, scalable, and secure cloud applications using Google App Engine and DevOps best practices.
        </Subheading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-3">
              <p className="text-gray-800 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
      </WrapperContainer>
    );
  }
export default Google_why_choose