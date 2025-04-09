import Hero from '../../../../container/Services/SALESFORCE/Consulting&Assesment/Hero';
import Body from '../../../../container/Services/SALESFORCE/Consulting&Assesment/Body';

export const metadata = {
  title: 'Technology Consulting & Assessment Services | Expert Solutions',
  description: 'Professional technology consulting and assessment services to evaluate and optimize your business systems. Get expert insights and strategic recommendations.',
  keywords: 'consulting assessment, technology consulting, business assessment, digital assessment, it consulting, technology evaluation, system assessment',
};

export default function ConsultingAssessmentPage() {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
} 