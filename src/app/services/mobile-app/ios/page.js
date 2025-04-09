import Hero from '../../../../container/Technology/MobileAppDev/IOS Devlopment/Hero';
import WhyChooseDigiflex from '../../../../container/Technology/MobileAppDev/IOS Devlopment/WhyChooseDigiflex';
import Industries from "../../../../container/Technology/MobileAppDev/IOS Devlopment/Industries";
import TechStack from "../../../../container/Technology/MobileAppDev/IOS Devlopment/TechStack";
import FAQItem from "../../../../container/Technology/MobileAppDev/IOS Devlopment/FAQItem";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Faq from "../../../../components/Faq";
import { IosfaqData } from "../../../../container/Services/Cloud/Faqdata";

export const metadata = {
  title: 'iOS Development Services | Native iOS App Solutions',
  description: 'Expert iOS development services for creating powerful native applications. Build high-performance iOS apps with our experienced developers and cutting-edge technology.',
  keywords: 'ios development, ios app development, iphone app development, ios developers, mobile app development, ios programming services',
};

export default function IosDevelopmentPage() {
  return (
    <>
      <Hero />
      <WrapperContainer>
        <WhyChooseDigiflex />
        <Industries />
        <TechStack />
        <Faq faqs={IosfaqData} />
      </WrapperContainer>
    </>
  );
} 