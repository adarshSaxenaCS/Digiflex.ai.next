import React from 'react'
import StepsToOrder from './StepsToOrder'
import FeaturedEateries from './FeaturedEateries'
import MobileAccessPromo from './MobileAccessPromo'
import { GrubhubFaqs } from '../FaqData'
import Faq from '@/components/Faq'

function Body() {
  return (
    <>
    <StepsToOrder/>
    <FeaturedEateries/>
    <MobileAccessPromo/>
    <Faq faqs={GrubhubFaqs} />
    
    </>
  )
}

export default Body
