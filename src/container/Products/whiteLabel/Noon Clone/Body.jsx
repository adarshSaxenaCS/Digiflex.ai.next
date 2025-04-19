import React from 'react'
import NoonCloneFeatures from '@/container/products/WhiteLabel/Noon Clone/NoonCloneFeatures';
import NoonClonePage from '@/container/products/WhiteLabel/Noon Clone/NoonClonePage';
import Faq from '@/components/Faq';
import { NoonFaqs } from '../FaqData';

export default function Body() {
  return (
    <>
      <NoonCloneFeatures/>
      <NoonClonePage/>
      <Faq faqs={NoonFaqs}/>
    </>
  )
}


