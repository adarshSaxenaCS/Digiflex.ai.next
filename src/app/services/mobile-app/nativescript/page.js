import Hero from '../../../../container/Technology/MobileAppDev/NativeScript/Hero';
import NativeScriptBenefits from '../../../../container/Technology/MobileAppDev/NativeScript/NativeScriptBenefits';
import NativeScriptServices from '../../../../container/Technology/MobileAppDev/NativeScript/NativeScriptServices';
import NativeScriptProcess from '../../../../container/Technology/MobileAppDev/NativeScript/NativeScriptProcess';
import IndustriesSection from '../../../../container/Technology/MobileAppDev/NativeScript/IndustriesSection';
import { NativefaqData } from "../../../../container/Services/Cloud/Faqdata";
import Faq from '../../../../components/Faq';

export const metadata = {
  title: 'NativeScript Development Services | Cross-Platform Mobile Apps',
  description: 'Expert NativeScript development services for building native mobile applications. Create high-performance cross-platform apps with NativeScript framework.',
  keywords: 'nativescript development, mobile app development, cross-platform development, native mobile apps, nativescript services, mobile development',
};

export default function NativeScriptPage() {
  return (
    <>
      <Hero />
      <NativeScriptBenefits />
      <NativeScriptServices />
      <NativeScriptProcess />
      <IndustriesSection />
      <Faq faqs={NativefaqData} />
    </>
  );
} 