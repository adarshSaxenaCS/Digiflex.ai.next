import Migration_hero from '../../../../container/Services/Cloud/Cloud_migra/Migration_hero';
import Migration_intro from '../../../../container/Services/Cloud/Cloud_migra/Migration_intro';
import Migration_Legacy from '../../../../container/Services/Cloud/Cloud_migra/Migration_Legacy';
import Migration_type from '../../../../container/Services/Cloud/Cloud_migra/Migration_type';
import Migration_Legacy_Systems from '../../../../container/Services/Cloud/Cloud_migra/Migration_Legacy_Systems';
import Migration_service from '../../../../container/Services/Cloud/Cloud_migra/EnterpriseAIService';
import Faq from '../../../../components/Faq';
import { CloudMigrationFAQData } from '../../../../container/Services/Cloud/Faqdata';

export const metadata = {
  title: 'Cloud Migration Services | Enterprise Cloud Solutions',
  description: 'Professional cloud migration services to help businesses seamlessly transition to the cloud. Expert solutions for legacy system migration and cloud optimization.',
  keywords: 'cloud migration, cloud services, legacy system migration, enterprise cloud, cloud solutions, cloud transformation, digital migration',
};

export default function CloudMigrationPage() {
  return (
    <>
      <Migration_hero />
      <Migration_intro />
      <Migration_Legacy />
      <Migration_type />
      <Migration_Legacy_Systems />
      <Migration_service />
      <Faq faqs={CloudMigrationFAQData} />
    </>
  );
} 