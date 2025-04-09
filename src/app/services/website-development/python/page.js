import Hero from '../../../../container/Technology/WebsiteDevlopment/Python/Hero';
import PythonServices from '../../../../container/Technology/WebsiteDevlopment/Python/PythonServices';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import TechnologiesSection from '../../../../container/Technology/WebsiteDevlopment/Python/TechnologiesSection';
import DevelopmentProcess from '../../../../container/Technology/WebsiteDevlopment/Python/DevelopmentProcess';
import WhyChooseUsSection from '../../../../container/Technology/WebsiteDevlopment/Python/WhyChooseUsSection';
import { Pythonfaqs } from "../../../../container/Services/Cloud/Faqdata";
import Faq from '../../../../components/Faq';

export const metadata = {
  title: 'Python Development Services | Web & Application Solutions',
  description: 'Expert Python development services for building scalable web applications and software solutions. Leverage Python\'s versatility with our experienced developers.',
  keywords: 'python development, python web development, python application development, python developers, python programming services',
};

export default function PythonDevelopmentPage() {
  return (
    <div>
      <Hero />
      <PythonServices />
      <WrapperContainer>
        <TechnologiesSection />
        <DevelopmentProcess />
        <WhyChooseUsSection />
        <Faq faqs={Pythonfaqs} />
      </WrapperContainer>
    </div>
  );
} 