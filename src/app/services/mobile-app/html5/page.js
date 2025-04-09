import Hero from '../../../../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/Hero';
import WhyChooseHTML5 from '../../../../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/WhyChooseHTML5';
import HTML5Services from '../../../../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/HTML5Services';
import TechnologiesSection from '../../../../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/TechnologiesSection';
import DevelopmentProcess from '../../../../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/DevelopmentProcess';
import Html5DevelopmentSection from '../../../../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/Html5DevelopmentSection';
import { HtmlAppDevlopmentfaqs } from "../../../../container/Services/Cloud/Faqdata";
import Faq from '../../../../components/Faq';

export const metadata = {
  title: 'HTML5 App Development Services | Cross-Platform Solutions',
  description: 'Professional HTML5 app development services for creating responsive and interactive web applications. Build modern, cross-platform solutions with expert HTML5 developers.',
  keywords: 'html5 development, web app development, cross-platform development, html5 services, mobile web development, responsive web design',
};

export default function Html5AppDevelopmentPage() {
  return (
    <div>
      <Hero />
      <WhyChooseHTML5 />
      <HTML5Services />
      <TechnologiesSection />
      <Html5DevelopmentSection />
      <DevelopmentProcess />
      <Faq faqs={HtmlAppDevlopmentfaqs} />
    </div>
  );
} 