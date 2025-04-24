import React from 'react'
import TodayDeals from './TodayDeals'
import NearbyRestaurants from './NearbyRestaurants'
import TestimonialSection from './TestimonialSection'
import TopRatedChefs from './TopRatedChefs'
import { FoodPandaFaqs } from '../FaqData'
import Faq from '@/components/Faq'

export default function Body() {
  return (
    <>
      <NearbyRestaurants/>
      <TodayDeals/>
      <TestimonialSection/>
      <TopRatedChefs/>
      <Faq faqs={FoodPandaFaqs} />
    </>
  )
}


