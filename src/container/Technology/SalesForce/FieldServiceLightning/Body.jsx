import React from 'react'
import Feature from './Feature'
import Benifits from './Benifits'
import About from './About'
import Faq from '@/components/Faq'; 
import {fieldServiceLightningFAQ} from '../FAQData'

const Body = () => {
  return (
    <>
    <About/>
    <Benifits/>
    <Feature/>
    <Faq faqs={fieldServiceLightningFAQ} />

    </>
  )
}

export default Body