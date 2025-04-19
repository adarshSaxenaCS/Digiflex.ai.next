import PancakeSwapCloneFeatures from '@/container/products/WhiteLabel/Pancakeswap Clone/PancakeSwapCloneFeatures';
import PancakeSwapFunctionalities from '@/container/products/WhiteLabel/Pancakeswap Clone/PancakeSwapFunctionalities';
import HowItWorks from '@/container/products/WhiteLabel/Pancakeswap Clone/HowItWorks';
import Faq from '@/components/Faq';
import { PancakeSwapFaqs } from '../FaqData';

export default function Body() {
  return (
    <div>
      <PancakeSwapCloneFeatures/>
      <PancakeSwapFunctionalities/>
      <HowItWorks/>
      <Faq faqs={PancakeSwapFaqs}/>
    </div>
  )
}


