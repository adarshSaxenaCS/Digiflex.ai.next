import React from 'react'
import OurService from './OurService'
import Benifits from './Benifits'
import WhyChoose from './WhyChoose'
import Faq from '@/components/Faq'; 
import {nonprofitCloudFAQ } from '../FAQData'

const Body = () => {
  return (
   <>
   <OurService/>
   <Benifits/>
   <WhyChoose/>
    <Faq faqs={nonprofitCloudFAQ} />
   </>
  )
}

export default Body