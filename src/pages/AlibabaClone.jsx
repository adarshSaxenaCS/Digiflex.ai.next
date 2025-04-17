import Hero from '@/container/Products/WhiteLabel/AllInOneCode/Hero'
import Body from '@/container/Products/WhiteLabel/Alibaba Clone/Body'
import Faq from '@/components/Faq'
import { alibabaClonefaq } from '@/container/Products/WhiteLabel/faq'

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