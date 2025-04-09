import Google_hero from '../../../../container/Services/Cloud/google_components/Google_hero';
import Google_info from '../../../../container/Services/Cloud/google_components/Google_info';
import Google_Services from '../../../../container/Services/Cloud/google_components/Google_Services';
import Google_Hosting from '../../../../container/Services/Cloud/google_components/Google_Hosting';
import Google_Advantage from '../../../../container/Services/Cloud/google_components/Google_Advantage';
import Faq from '../../../../components/Faq';
import { GoogleCloudServicesFAQData } from '../../../../container/Services/Cloud/Faqdata';

export const metadata = {
  title: 'Google Cloud Services | Cloud Computing Solutions',
  description: 'Expert Google Cloud services for scalable cloud computing solutions. Leverage Google Cloud Platform for enhanced performance, security, and innovation.',
  keywords: 'google cloud services, cloud computing, google cloud platform, cloud hosting, cloud solutions, google cloud development',
};

export default function GoogleCloudPage() {
  return (
    <>
      <Google_hero />
      <Google_info />
      <Google_Services />
      <Google_Hosting />
      <Google_Advantage />
      <Faq faqs={GoogleCloudServicesFAQData} />
    </>
  );
} 