import React from 'react'
import Feature from './Feature'
import Services from './Services'
import Expertise from './Expertice'
import WhyChoose from './WhyChoose'
import Faq from '@/components/Faq'; 
import {AppExchangeAppFAQ } from '../FAQData'

const Body = () => {
  return (
    <>
    <Feature/>
    <Services/>
    <Expertise/>
    <WhyChoose/>
    <Faq faqs={AppExchangeAppFAQ} />
    </>
  )
}

export default Body