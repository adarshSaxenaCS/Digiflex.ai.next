import LightningFeatures from './LightningFeatures'
import LightningProcess from './LightningProcess'
import LightningTools from './LightningTools'
import Benefits from './Benefits'
import Faq from '@/components/Faq'; 
import { LightningExperienceFAQData } from '../FAQData'

const Body = () => {
  return (
    <>
      <LightningFeatures />
      <LightningProcess />
      <LightningTools />
      <Benefits />
      <Faq faqs={LightningExperienceFAQData} />
    </>
  )
}

export default Body