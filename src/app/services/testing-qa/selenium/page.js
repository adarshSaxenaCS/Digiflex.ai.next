import BusinessAIHeader from "../../../../container/Services/Testing and QA/Selenium Automation Testing/BusinessAIHeader";
import SeleniumAutomationHeroSection from '../../../../container/Services/Testing and QA/Selenium Automation Testing/SeleniumAutomationHeroSection';
import OutcomesSection from '../../../../container/Services/Testing and QA/Selenium Automation Testing/OutcomesSection';
import SeleniumServices from '../../../../container/Services/Testing and QA/Selenium Automation Testing/SeleniumServices';
import SpeedBenefits from '../../../../container/Services/Testing and QA/Selenium Automation Testing/SpeedBenefits';
import ProductShowcase from '../../../../container/Services/Testing and QA/Selenium Automation Testing/ProductShowcase';
import IntegrationShowcase from '../../../../container/Services/Testing and QA/Selenium Automation Testing/IntegrationShowcase';
import RealAutomation from '../../../../container/Services/Testing and QA/Selenium Automation Testing/RealAutomation';

export const metadata = {
  title: 'Selenium Automation Testing Services | QA Testing Solutions',
  description: 'Expert Selenium automation testing services for web applications. Comprehensive QA testing solutions with automated testing frameworks and tools.',
  keywords: 'selenium automation testing, automated testing services, QA testing, web testing automation, selenium testing framework, automated QA testing',
};

export default function SeleniumAutomationTestingPage() {
  return (
    <div>
      <SeleniumAutomationHeroSection />
      <BusinessAIHeader />
      <RealAutomation />
      <OutcomesSection />
      <SeleniumServices />
      <SpeedBenefits />
      <ProductShowcase />
      <IntegrationShowcase />
    </div>
  );
} 