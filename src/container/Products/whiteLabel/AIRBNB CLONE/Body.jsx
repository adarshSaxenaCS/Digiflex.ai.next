import AirBnbCloneFeatures from '@/container/products/WhiteLabel/AIRBNB CLONE/AirBnbCloneFeatures';
import WhyChooseUs from '@/container/products/WhiteLabel/AIRBNB CLONE/WhyChooseUs';
import GalleryPage from '@/container/products/WhiteLabel/AIRBNB CLONE/GalleryPage';
import Faq from "@/components/Faq";
import { AirbnbFaqs } from '@/container/products/WhiteLabel/FaqData';

export default function Body() {
  return (
    <>
      <AirBnbCloneFeatures/>
      <WhyChooseUs/>
      <GalleryPage/>
      <Faq faqs={AirbnbFaqs} />
    </>
  )
}
