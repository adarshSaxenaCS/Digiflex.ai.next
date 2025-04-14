import React from 'react'
import Feature from './Feature';
import Architecture from './Architecture';
import AIPersonalization from './AiPersnalize';
import Benifits from './Benifits';
import Faq from '@/components/Faq'; 
import {commerceCloudFAQ } from '../FAQData'

const Body = () => {
  return (
    <>
    <Architecture/>
    <Feature/>
    <AIPersonalization/>
    <Benifits/>
    <Faq faqs={commerceCloudFAQ} />

    </>
  )
}

export default Body