import React from 'react'
import SeamlessBooking from './SeamlessBooking'
import RealTimePricing from './RealTimePricing'
import MultiPlatformIntegration from './MultiPlatformIntegration'
import Faq from '@/components/Faq'
import { BookingEngineFaq } from '../Faqdata'
import AnalyticsReporting from './AnalyticsReporting'

function Body() {
  return (
    <>
     <SeamlessBooking/>
     <RealTimePricing/>
     <MultiPlatformIntegration/>
     <AnalyticsReporting/>
     <Faq faqs={BookingEngineFaq}/>
    </>
  )
}

export default Body
