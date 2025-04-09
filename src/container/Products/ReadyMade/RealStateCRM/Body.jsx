import React from 'react'
import LeadManagement from './LeadManagement'
import PropertyListings from './PropertyListings'
import FinancialInsights from './FinancialInsights'
import Faq from '@/components/Faq'
import { RealEstateCrmFaq } from '../Faqdata'

function Body() {
  return (
    <>
      <LeadManagement/>
      <FinancialInsights />
      <PropertyListings />
      <Faq faqs={RealEstateCrmFaq}/>
    </>
  )
}

export default Body
