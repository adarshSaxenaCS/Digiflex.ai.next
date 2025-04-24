import React from 'react'
import XjekHome from './XjekHome'
import XJekServices from './XJekServices'
import XJekPricing from './XJekPricing'
import { GojekFaqs } from '../FaqData'
import Faq from '@/components/Faq'

export default function Body() {
  return (
    <>
      <XjekHome/>
      <XJekServices/>
      <XJekPricing/>
      <Faq faqs={GojekFaqs} />
    </>
  )
}


