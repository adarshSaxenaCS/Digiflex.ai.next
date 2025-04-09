import Hero from '../../../../container/Technology/WebsiteDevlopment/JAVA/Hero';
import JavaDevelopmentServices from '../../../../container/Technology/WebsiteDevlopment/JAVA/JavaDevelopmentServices';
import Technologies from '../../../../container/Technology/WebsiteDevlopment/JAVA/Technologies';
import DevelopmentProcess from '../../../../container/Technology/WebsiteDevlopment/JAVA/DevelopmentProcess';
import WhyChooseUs from '../../../../container/Technology/WebsiteDevlopment/JAVA/WhyChooseUs';
import CaseStudies from '../../../../container/Technology/WebsiteDevlopment/JAVA/CaseStudiesPortfolio';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Faq from '../../../../components/Faq';
import { Javafaqs } from "../../../../container/Services/Cloud/Faqdata";

export const metadata = {
  title: 'Java Development Services | Enterprise Web Solutions',
  description: 'Professional Java development services for building scalable enterprise applications. Create robust web solutions with expert Java developers and modern frameworks.',
  keywords: 'java development, java web development, enterprise development, java developers, web application development, java programming services',
};

export default function JavaDevelopmentPage() {
  return (
    <>
      <Hero />
      <WrapperContainer>
        <JavaDevelopmentServices />
        <Technologies />
        <DevelopmentProcess />
        <WhyChooseUs />
        <CaseStudies />
        <Faq faqs={Javafaqs} />
      </WrapperContainer>
    </>
  );
} 