import React from 'react'
import About from './About'
import Services from './Services'
import WhyChoose from './WhyChoose'
import Faq from '@/components/Faq'; 
import {financialServicesCloudFAQ} from '../FAQData'

const Body = () => {
  return (
    <>
    <About/>
    <Services/>
    <WhyChoose/>
    <Faq faqs={financialServicesCloudFAQ} />
    </>
  )
}

export default Body