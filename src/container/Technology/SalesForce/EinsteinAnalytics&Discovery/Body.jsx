import EinsteinFeatures from './EinsteinFeatures'
import EinsteinProcess from './EinsteinProcess'
import EinsteinTools from './EinsteinTools'
import Benefits from './Benefits'
import Faq from '@/components/Faq'; 
import { EinsteinAnalyticsFAQData } from '../FAQData'

const Body = () => {
  return (
    <>
      <EinsteinFeatures />
      <EinsteinProcess />
      <EinsteinTools />
      <Benefits />
      <Faq faqs={EinsteinAnalyticsFAQData} />
    </>
  )
}

export default Body