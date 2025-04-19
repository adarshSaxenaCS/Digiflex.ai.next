import UpworkFeatures from '@/container/products/WhiteLabel/Upwork Clone/UpworkFeatures';
import ShowcaseImages from '@/container/products/WhiteLabel/Upwork Clone/ShowcaseImages';
import GrowthMetric from '@/container/products/WhiteLabel/Upwork Clone/GrowthMetrics';
import Faq from '@/components/Faq';
import { UpworkFaqs } from '../FaqData';

export default function Body() {
  return (
    <div>
      <UpworkFeatures/>
      <ShowcaseImages/>
      <GrowthMetric/>
      <Faq faqs={UpworkFaqs}/>
    </div>
  )
}


