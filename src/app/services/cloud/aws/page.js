import Aws_hero from '../../../../container/Services/Cloud/AWS/Aws_hero';
import Aws_intro from '../../../../container/Services/Cloud/AWS/Aws_intro';
import Aws_busines from '../../../../container/Services/Cloud/AWS/Aws_busines';
import AWS_services from '../../../../container/Services/Cloud/AWS/AWS_services';
import Aws_deploy from '../../../../container/Services/Cloud/AWS/Aws_deploy';
import Faq from '../../../../components/Faq';
import { AWSCloudServicesFAQData } from '../../../../container/Services/Cloud/Faqdata';

export const metadata = {
  title: 'AWS Cloud Services | Amazon Web Services Solutions',
  description: 'Expert AWS cloud services and consulting. Leverage Amazon Web Services for scalable, secure, and cost-effective cloud infrastructure solutions.',
  keywords: 'aws cloud services, amazon web services, aws solutions, aws consulting, cloud services, aws cloud, aws development',
};

export default function AWSCloudPage() {
  return (
    <>
      <Aws_hero />
      <Aws_intro />
      <Aws_busines />
      <AWS_services />
      <Aws_deploy />
      <Faq faqs={AWSCloudServicesFAQData} />
    </>
  );
} 