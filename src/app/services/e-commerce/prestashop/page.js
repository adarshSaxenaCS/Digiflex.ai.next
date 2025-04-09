import HeroSection from '../../../../container/Services/E-Commerce/PrestashopDevelopment/HeroSection';
import FeatureHighlights from '../../../../container/Services/E-Commerce/PrestashopDevelopment/FeatureHighlights';
import DevelopmentProcess from '../../../../container/Services/E-Commerce/PrestashopDevelopment/DevelopmentProcess';
import PrestaShopFAQ from '../../../../container/Services/E-Commerce/PrestashopDevelopment/PestraFAQ';

export const metadata = {
  title: 'PrestaShop Development Services | E-commerce Solutions',
  description: 'Professional PrestaShop development services for building powerful e-commerce websites. Create feature-rich online stores with expert PrestaShop developers.',
  keywords: 'prestashop development, prestashop developers, e-commerce development, online store development, prestashop services, e-commerce solutions',
};

export default function PrestashopDevelopmentPage() {
  return (
    <div>
      <HeroSection />
      <FeatureHighlights />
      <DevelopmentProcess />
      <PrestaShopFAQ />
    </div>
  );
} 