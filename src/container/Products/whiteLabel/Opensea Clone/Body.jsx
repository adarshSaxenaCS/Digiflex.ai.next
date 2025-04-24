import OpenSeaCloneFeatures from '@/container/products/WhiteLabel/Opensea Clone/OpenSeaCloneFeatures';
import GlobalReach from '@/container/products/WhiteLabel/Opensea Clone/GlobalReach';
import OpenSeaRealWorld from '@/container/products/WhiteLabel/Opensea Clone/OpenSeaRealWorld';
import Faq from '@/components/Faq';
import { OpenSeaFaqs } from '../FaqData';

export default function Body() {
  return (
    <>
      <OpenSeaCloneFeatures/>
      <GlobalReach/>
      <OpenSeaRealWorld/>
      <Faq faqs={OpenSeaFaqs}/>
    </>
  )
}


