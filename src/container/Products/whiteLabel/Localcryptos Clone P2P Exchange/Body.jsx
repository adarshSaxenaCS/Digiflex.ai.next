import React from 'react'
<<<<<<< HEAD
import Features from '@/container/products/WhiteLabel/LocalCryptos Clone P2P Exchange/Features';
import CryptoUsersByContinent from '@/container/products/WhiteLabel/LocalCryptos Clone P2P Exchange/CryptoUsersByContinent';
import Security from '@/container/products/WhiteLabel/LocalCryptos Clone P2P Exchange/Security';
import Faq from '@/components/Faq';
import { LocalCryptosFaqs } from '../FaqData';
=======
import Features from '@/container/Products/WhiteLabel/LocalCryptos Clone P2P Exchange/Features';
import CryptoUsersByContinent from '@/container/Products/WhiteLabel/LocalCryptos Clone P2P Exchange/CryptoUsersByContinent';
import Security from '@/container/Products/WhiteLabel/LocalCryptos Clone P2P Exchange/Security';
>>>>>>> 886e26feb3489e64e350ec7dcb695bd063deac7e

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


