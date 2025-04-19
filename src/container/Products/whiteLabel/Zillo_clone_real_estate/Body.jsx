import React from 'react'
import RealEstateServices from '@/container/products/WhiteLabel/Zillo_clone_real_estate/RealEstateServices';
import TechStack from '@/container/products/WhiteLabel/Zillo_clone_real_estate/TechStack';
import Comparison from '@/container/products/WhiteLabel/Zillo_clone_real_estate/Comparison';
import Faq from '@/components/Faq';
import { ZillowFaqs } from '../FaqData';

export default function Body() {
  return (
    <div>
      <RealEstateServices/>
      <TechStack/>
      <Comparison/>
      <Faq faqs={ZillowFaqs}/>
    </div>
  )
}
