import React from 'react'
import UniswapCloneFeatures from '@/container/products/WhiteLabel/Uniswap Clone/UniswapCloneFeatures';
import TokenPage from '@/container/products/WhiteLabel/Uniswap Clone/TokenPage';
import Faq from '@/components/Faq';
import { UniswapFaqs } from '../FaqData';

export default function Body() {
  return (
    <div>
      <UniswapCloneFeatures/>
      <TokenPage/>
      <Faq faqs={UniswapFaqs}/>
    </div>
  )
}


