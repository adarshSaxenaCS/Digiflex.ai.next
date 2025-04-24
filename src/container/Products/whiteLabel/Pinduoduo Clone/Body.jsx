import PinduoduoCloneFeatures from '@/container/products/WhiteLabel/Pinduoduo clone/PinduoduoCloneFeatures';
import WhatWeProvide from '@/container/products/WhiteLabel/Pinduoduo clone/WhatWeProvide';
import WhyPinduoduoClone from '@/container/products/WhiteLabel/Pinduoduo Clone/WhyPinduoduoClone';
import Faq from '@/components/Faq';
import { PinduoduoFaqs } from '../FaqData';

export default function Body() {
  return (
    <>
      <PinduoduoCloneFeatures/>
      <WhatWeProvide/>
      <WhyPinduoduoClone/>
      <Faq faqs={PinduoduoFaqs} />
    </>
  )
}


