import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Image from 'next/image';
import React from 'react';

function AzureDevOpsIntro() {
  return (
    <WrapperContainer>
      <Heading>Accelerate Your DevOps Journey with Microsoft Azure</Heading>
      <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
        <div className="md:w-2/3">
          <Paragraph>
            At Digiflex.ai, we specialize in DevOps Windows Azure solutions,
            enabling businesses to streamline development, deployment, and
            operations using Microsoft’s powerful cloud ecosystem. Our Azure
            DevOps services enhance automation, scalability, and security,
            ensuring seamless cloud integration, optimized workflows, and
            accelerated software delivery. By leveraging advanced tools and best
            practices, we help organizations improve collaboration, boost
            productivity, and maintain high-performance, reliable applications.
            Whether automating CI/CD pipelines, managing infrastructure as code,
            or enhancing security and compliance, our expertise ensures efficient
            cloud operations, empowering businesses to innovate and scale
            effortlessly in today’s competitive digital landscape.
          </Paragraph>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXo6nu9gFfcWJxryiZjWhaqH-xtobJXXPDMQ&s" 
            alt="Azure DevOps"
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </WrapperContainer>
  );
}

export default AzureDevOpsIntro;
