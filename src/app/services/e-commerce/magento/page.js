import HeroSection from '../../../../container/Services/E-Commerce/MagentoDevelopment/HeroSection';
import MagentoFeatures from '../../../../container/Services/E-Commerce/MagentoDevelopment/MagentoFeatures';
import MagentoTips from '../../../../container/Services/E-Commerce/MagentoDevelopment/MagentoTips';
import MagentoAIAutomation from '../../../../container/Services/E-Commerce/MagentoDevelopment/MagentoAIAutomation';
import MagentoFAQ from '../../../../container/Services/E-Commerce/MagentoDevelopment/MagentoFAQ';

export const metadata = {
  title: 'Magento Development Services | E-commerce Solutions',
  description: 'Professional Magento development services for building powerful e-commerce websites. Create scalable online stores with expert Magento developers and advanced features.',
  keywords: 'magento development, magento developers, e-commerce development, online store development, magento services, e-commerce solutions',
};

export default function MagentoDevelopmentPage() {
  return (
    <div>
      <HeroSection />
      <MagentoFeatures />
      <MagentoTips />
      <MagentoAIAutomation />
      <MagentoFAQ />
    </div>
  );
} 