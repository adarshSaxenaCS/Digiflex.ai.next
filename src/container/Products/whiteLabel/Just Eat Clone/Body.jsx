import React from 'react'
import TopIndianMeals from './TopIndianMeals'
import PopularDeliverySpots from './PopularDeliverySpots'
import LateNightEats from './LateNightEats'
import { JustEatFaqs } from '../FaqData'
import Faq from '@/components/Faq'

function Body() {
  return (
    <div>
      <PopularDeliverySpots/>
      <LateNightEats/>
      <TopIndianMeals/> 
            <Faq faqs={JustEatFaqs} />
      
    </div>
  )
}

export default Body
