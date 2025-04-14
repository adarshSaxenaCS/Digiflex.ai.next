import React from 'react'
import Image from 'next/image'
import WrapperContainer from '@/Layout/WrapperContainer'

const About = () => {
  return (
    <>
    <WrapperContainer>

  
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Image Section - Centered */}
        <div className="flex justify-center">
          <Image 
            src="https://www.jadeglobal.com/themes/custom/jade_subtheme/images/salesforce_Infographics-min.jpg" 
            alt="About Revenue Cloud" 
            width={600} 
            height={450} 
       
          />
        </div>

        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <p className="text-lg text-gray-700">
            Salesforce Revenue Cloud is a powerful solution designed to optimize and automate revenue processes for 
            businesses. It helps companies streamline sales, pricing, subscription management, and billing to improve 
            efficiency and accelerate growth.
          </p>
          <p className="text-lg text-gray-700 mt-3">
            With Revenue Cloud, businesses can enhance sales performance, integrate finance and sales teams, and 
            ensure accurate revenue forecasting. It eliminates revenue leakage, improves pricing strategies, and 
            simplifies revenue recognition across multiple streams.
          </p>
          <p className="text-lg text-gray-700 mt-3">
            Whether it's subscription models, one-time purchases, or complex contracts, Revenue Cloud provides 
            flexibility and transparency, allowing businesses to deliver seamless experiences to customers.
          </p>
        </div>
      </div>
    </div>
    </WrapperContainer>
    </>
  )
}

export default About
