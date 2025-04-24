import FeaturesPage from "./FeaturesPage";
import HowItWorks from "./HowItWorks";
import BenefitsPage from "./BenefitsPage";
import Faq from "@/components/Faq";
import { NetflixFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <FeaturesPage />
      <HowItWorks />
      <BenefitsPage />
      <Faq faqs={NetflixFaqs} />
    </>
  );
}
