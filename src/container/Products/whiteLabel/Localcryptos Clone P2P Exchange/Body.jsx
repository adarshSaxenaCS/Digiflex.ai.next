import React from 'react'
import Features from '@/container/products/WhiteLabel/LocalCryptos Clone P2P Exchange/Features';
import CryptoUsersByContinent from '@/container/products/WhiteLabel/LocalCryptos Clone P2P Exchange/CryptoUsersByContinent';
import Security from '@/container/products/WhiteLabel/LocalCryptos Clone P2P Exchange/Security';
import Faq from '@/components/Faq';
import { LocalCryptosFaqs } from '../FaqData';

export default function Body() {
  return (
    <div>
      <Features/>
      <CryptoUsersByContinent/>
      <Security/>
      <Faq faqs={LocalCryptosFaqs} />
    </div>
  )
}


