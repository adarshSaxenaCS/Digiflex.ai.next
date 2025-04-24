import FeaturesPage from "./FeaturesPage";
import HowItWorks from "./HowItWorks";
import BenefitsPage from "./BenefitsPage";
import MVPPage from "./MVPPage";
import Faq from "@/components/Faq";
import { CashAppFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <FeaturesPage />
      <HowItWorks />
      <BenefitsPage />
      <MVPPage />
      <Faq faqs={CashAppFaqs} />
    </>
  );
}
