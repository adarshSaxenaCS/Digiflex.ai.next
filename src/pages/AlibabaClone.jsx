import Hero from '@/container/products/whiteLabel/AllInOneCode/Hero'
import Body from '@/container/products/whiteLabel/Alibaba Clone/Body'
import Faq from '@/components/Faq'
import { alibabaClonefaq } from '@/container/products/whiteLabel/faq'

export default function AlibabaClone() {
  return (
    <div>
        <Hero 
        title="Alibaba Clone & Wholesale Ecommerce Solutions | Start Your Online Marketplace" 
        description="Create your own Alibaba-style online marketplace with the best Alibaba clone script. Explore Alibaba dropshipping, wholesale shopping, and ecommerce solutions." 
      />
        <Body/>
        <Faq faqs={alibabaClonefaq}/>
    </div>
  )
}