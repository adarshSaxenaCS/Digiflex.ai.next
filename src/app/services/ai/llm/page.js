import Llm_hero from '../../../../container/Services/AI/Llm developement/Llm_hero';
import Llm_intro from '../../../../container/Services/AI/Llm developement/Llm_intro';
import Llm_work from '../../../../container/Services/AI/Llm developement/Llm_work';
import Llm_services from '../../../../container/Services/AI/Llm developement/Llm_services';
import Llm_future from '../../../../container/Services/AI/Llm developement/Llm_future';
import Llm_digiflex from '../../../../container/Services/AI/Llm developement/Llm_digiflex';
import Faq from '../../../../components/Faq';
import { LargeLanguageModelFAQData } from '../../../../container/Services/AI/Faqdata';

export const metadata = {
  title: 'Large Language Model (LLM) Development Services | AI Solutions',
  description: 'Expert LLM development services for building advanced language models and AI solutions. Create powerful natural language processing applications with cutting-edge technology.',
  keywords: 'llm development, large language models, ai development, natural language processing, machine learning, ai solutions, language model development',
};

export default function LlmDevelopmentPage() {
  return (
    <>
      <Llm_hero />
      <Llm_intro />
      <Llm_work />
      <Llm_services />
      <Llm_future />
      <Llm_digiflex />
      <Faq faqs={LargeLanguageModelFAQData} />
    </>
  );
} 