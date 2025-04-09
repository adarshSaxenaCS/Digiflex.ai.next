import HeroSection from '../../../../container/Services/E-Commerce/Opencart Development/HeroSection';
import Features from '../../../../container/Services/E-Commerce/Opencart Development/Features';
import OpenCartCaseStudies from '../../../../container/Services/E-Commerce/Opencart Development/caseStudy';
import OpenCartFAQ from '../../../../container/Services/E-Commerce/Opencart Development/OpencartFAQ';

export const metadata = {
  title: 'OpenCart Development Services | E-commerce Solutions',
  description: 'Professional OpenCart development services for building powerful online stores. Create feature-rich e-commerce websites with expert OpenCart developers.',
  keywords: 'opencart development, opencart developers, e-commerce development, online store development, opencart services, e-commerce solutions',
};

export default function OpencartDevelopmentPage() {
  return (
    <div>
      <HeroSection />
      <Features />
      <OpenCartCaseStudies />
      <OpenCartFAQ />
    </div>
  );
} 