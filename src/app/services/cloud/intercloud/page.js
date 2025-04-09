import Intercloud_hero from '@/container/Services/Cloud/Intercloud_migratu/Intercloud_hero';
import Intercloud_intro from '@/container/Services/Cloud/Intercloud_migratu/Intercloud_intro';
import Intercloud_type from '@/container/Services/Cloud/Intercloud_migratu/Intercloud_type';
import Intercloudpopular from '@/container/Services/Cloud/Intercloud_migratu/Intercloudpopular';
import Intercloud_need from '@/container/Services/Cloud/Intercloud_migratu/Intercloud_need';
import Intercloud_approaches from '@/container/Services/Cloud/Intercloud_migratu/Intercloud_approaches ';
import Faq from '@/components/Faq';
import { IntercloudMigrationFAQData } from '@/container/Services/Cloud/Faqdata';

export const metadata = {
  title: 'Intercloud Migration Services | Cloud Migration Solutions',
  description: 'Expert intercloud migration services to help you seamlessly transition your applications and data between cloud providers.',
  keywords: 'intercloud migration, cloud migration, multi-cloud, cloud transition, cloud services',
};

export default function IntercloudPage() {
  return (
    <>
      <Intercloud_hero />
      <Intercloud_intro />
      <Intercloud_type />
      <Intercloudpopular />
      <Intercloud_need />
      <Intercloud_approaches />
      <Faq faqs={IntercloudMigrationFAQData} />
    </>
  );
} 