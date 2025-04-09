import React from 'react'
import WhyChooseCRM from './WhyChooseCRM'
import CRMFeatures from './CRMFeatures'
import GetStarted from './GetStarted'
import Faq from '@/components/Faq'
import { TravelCrmFaq } from '../Faqdata'


function Body() {
  return (
    <>
      <CRMFeatures/>
      <WhyChooseCRM/>
      <GetStarted/>
      <Faq faqs={TravelCrmFaq}/>
    </>
  )
}

export default Body
