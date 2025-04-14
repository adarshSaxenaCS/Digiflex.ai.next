
import React from 'react'
import About from './About'
import Services from './Services'
import Feature from './Feature'
import Benifits from './Benifits'
import Faq from '@/components/Faq'; 
import {revenueCloudFaqs} from '../FAQData'
const Body = () => {
  return (
  <>
  <About/>
  <Services/>
  <Feature/>
  <Benifits/>
  <Faq faqs={revenueCloudFaqs} />
  </>
  )
}

export default Body