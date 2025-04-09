import Hero from '../../../../container/Technology/MobileAppDev/React Native/Hero';
import WhyChooseReactNative from '../../../../container/Technology/MobileAppDev/React Native/WhyChooseReactNative';
import OurServices from '../../../../container/Technology/MobileAppDev/React Native/OurServices';
import OurTechStack from '../../../../container/Technology/MobileAppDev/React Native/OurTechStack';
import SmartFeatures from '../../../../container/Technology/MobileAppDev/React Native/SmartFeatures';
import IndustriesWeServe from '../../../../container/Technology/MobileAppDev/React Native/IndustriesWeServe';
import { ReactfaqData } from "../../../../container/Services/Cloud/Faqdata";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Faq from '../../../../components/Faq';

export const metadata = {
  title: 'React Native App Development Services | Cross-Platform Mobile Solutions',
  description: 'Expert React Native app development services for building high-performance cross-platform mobile applications. Create seamless mobile experiences for iOS and Android.',
  keywords: 'react native development, cross platform app development, mobile app development, react native services, ios app development, android app development',
};

export default function ReactNativePage() {
  return (
    <div>
      <Hero />
      <WrapperContainer>
        <WhyChooseReactNative />
        <OurTechStack />
        <OurServices />
        <IndustriesWeServe />
        <SmartFeatures />
        <Faq faqs={ReactfaqData} />
      </WrapperContainer>
    </div>
  );
} 