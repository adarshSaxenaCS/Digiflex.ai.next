import ForceFeatures from './ForceFeatures'
import ForceProcess from './ForceProcess'
import ForceTools from './ForceTools'
import Benefits from './Benefits'
import Faq from '@/components/Faq'; 
import { ForceComFAQData } from '../FAQData' 

const Body = () => {
  return (
    <div className="space-y-20">
      <ForceFeatures />
      <ForceProcess />
      <ForceTools />
      <Benefits />
      <Faq faqs={ForceComFAQData} />
    </div>
  )
}

export default Body