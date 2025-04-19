import AlibabaCloneFeatures from '@/container/products/WhiteLabel/Alibaba Clone/AlibabaCloneFeatures';
import TechStack from '@/container/products/WhiteLabel/Alibaba Clone/Techstack';
import AliBabaApps from '@/container/products/WhiteLabel/Alibaba Clone/AlibabaApps';
import Faq from "@/components/Faq";
import { AlibabaFaqs } from '@/container/products/WhiteLabel/FaqData';

export default function Body() {
  return (
    <>
      <AlibabaCloneFeatures/>
      <TechStack />
      <AliBabaApps />
      <Faq faqs={AlibabaFaqs} />
    </>
  );
}
