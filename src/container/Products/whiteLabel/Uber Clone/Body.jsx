import React from 'react'
import UberLanding from './UberLanding'
import UberCityCoverage from './UberCityCoverage'
import UberFeatures from './UberFeatures'
import UberBusinessFeatures from './UberBusinessFeatures'
import Faq from '@/components/Faq'
import { UberFaqs } from '../FaqData'

export default function Body() {
  return (
    <>
    <UberLanding/>
    <UberCityCoverage/>

    <UberFeatures/>
    <UberBusinessFeatures/>
    <Faq faqs={UberFaqs}/>
    </>
  )
}
