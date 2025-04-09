import Azure_Hero from '../../../../container/Services/Cloud/AZURE/Azure_Hero';
import Azure_info from '../../../../container/Services/Cloud/AZURE/Azure_info';
import Azure_feature from '../../../../container/Services/Cloud/AZURE/Azure_feature';
import Azure_services from '../../../../container/Services/Cloud/AZURE/Azure_services';
import Azure_Card from '../../../../container/Services/Cloud/AZURE/Azure_Card';
import Faq from '../../../../components/Faq';
import { AzureCloudServicesFAQData } from '../../../../container/Services/Cloud/Faqdata';

export const metadata = {
  title: 'Azure Cloud Services | Microsoft Azure Solutions & Consulting',
  description: 'Expert Microsoft Azure cloud services and consulting. Leverage Azure cloud solutions for scalable, secure, and efficient cloud infrastructure.',
  keywords: 'azure cloud services, microsoft azure, azure solutions, azure consulting, cloud services, azure cloud, azure development',
};

export default function AzureCloudPage() {
  return (
    <>
      <Azure_Hero />
      <Azure_info />
      <Azure_feature />
      <Azure_services />
      <Azure_Card />
      <Faq faqs={AzureCloudServicesFAQData} />
    </>
  );
} 