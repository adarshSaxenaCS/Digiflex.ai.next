import React from 'react'
import Faq from '@/components/Faq'; 
import {educationCloudFAQ} from '../FAQData'

const Body = () => {
  return (
<>
<Faq faqs={educationCloudFAQ} />
</>
  )
}

export default Body