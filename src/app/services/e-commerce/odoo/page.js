import HeroSection from '../../../../container/Services/E-Commerce/Odoo Development/HeroSection';
import OdooServices from '../../../../container/Services/E-Commerce/Odoo Development/OdooServices';
import CaseStudies from '../../../../container/Services/E-Commerce/Odoo Development/CaseStudies';
import OdooFAQ from '../../../../container/Services/E-Commerce/Odoo Development/OdooFAQ';
import Development from '../../../../container/Services/E-Commerce/Odoo Development/Development';

export const metadata = {
  title: 'Odoo Development Services | ERP & E-commerce Solutions',
  description: 'Professional Odoo development services for implementing comprehensive ERP and e-commerce solutions. Streamline your business operations with expert Odoo developers.',
  keywords: 'odoo development, odoo developers, erp development, e-commerce development, odoo services, business solutions',
};

export default function OdooDevelopmentPage() {
  return (
    <div>
      <HeroSection />
      <OdooServices />
      <CaseStudies />
      <Development />
      <OdooFAQ />
    </div>
  );
} 