import Hero from '../../../../container/Services/E-Commerce/Shopify Development/Hero';
import WhyChooseUs from '../../../../container/Services/E-Commerce/Shopify Development/WhyChooseUs';
import ShopifyServices from '../../../../container/Services/E-Commerce/Shopify Development/ShopifyServices';
import FeaturedShopifyProjects from '../../../../container/Services/E-Commerce/Shopify Development/FeaturedShopifyProjects';
import ShopifyGlobalReach from '../../../../container/Services/E-Commerce/Shopify Development/ShopifyGlobalReach';
import ShopifyFAQ from '../../../../container/Services/E-Commerce/Shopify Development/ShopifyFAQ';

export const metadata = {
  title: 'Shopify Development Services | Custom E-commerce Solutions',
  description: 'Expert Shopify development services for creating custom e-commerce solutions. Build scalable online stores with advanced features and seamless user experience.',
  keywords: 'shopify development, e-commerce development, shopify store development, custom shopify solutions, shopify expert developers',
};

export default function ShopifyDevelopmentPage() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <ShopifyServices />
      <FeaturedShopifyProjects />
      <ShopifyGlobalReach />
      <ShopifyFAQ />
    </div>
  );
} 