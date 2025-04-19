import AmazonCloneFeatures from '@/container/products/WhiteLabel/Amazon CLONE/AmazonCloneFeatures';
import WhatWeProvide from '@/container/products/WhiteLabel/Amazon Clone/WhatWeProvide';
import TechStackSection from '@/container/products/WhiteLabel/Amazon Clone/TechStackSection';
import Faq from "@/components/Faq";
import { AmazonFaqs } from '../FaqData';

export default function Body() {
  return (
    <>
      <AmazonCloneFeatures/>
      <WhatWeProvide/>
      <TechStackSection/>
      <Faq faqs={AmazonFaqs} />
    </>
  )
}
