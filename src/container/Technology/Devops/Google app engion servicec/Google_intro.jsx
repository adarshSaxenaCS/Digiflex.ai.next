import Heading from '../../../../Layout/Heading'
import Paragraph from '../../../../Layout/Paragraph'
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Image from 'next/image'
import React from 'react'

function GoogleIntro() {
  return (
    <WrapperContainer>
      <Heading>Introduction to Google App Engine and DevOps</Heading>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <Paragraph>
            Google App Engine is a fully managed serverless platform that enables developers to build, deploy, 
            and scale applications without managing infrastructure. It supports multiple programming languages, 
            automatic scaling, and built-in security, making it ideal for businesses seeking efficient cloud-based 
            application development. By eliminating server maintenance, it allows teams to focus on coding while ensuring 
            seamless performance and scalability.
            <br />
            At <strong>Digiflex.ai</strong>, we offer <strong>DevOps solutions</strong> for Google App Engine to enhance deployment efficiency, security, 
            and performance. Our services include automated CI/CD pipelines, real-time monitoring, and infrastructure optimization 
            to ensure seamless scalability and cost-efficiency. With advanced security measures and best DevOps practices, we help 
            businesses achieve high-performance, secure, and reliable cloud applications, allowing them to focus on innovation 
            while we manage the technical complexities.
          </Paragraph>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/googleDevops.avif" 
            alt="Google App Engine" 
            width={500} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </WrapperContainer>
  )
}

export default GoogleIntro
