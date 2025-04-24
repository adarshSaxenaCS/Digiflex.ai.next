import HowItWorks from "@/container/products/WhiteLabel/Facebook Clone/HowItWorks";
import FacebookCloneFeatures from "./FacebookCloneFeatures";
import WhyUseFacebook from "./WhyUseFacebook";
import Faq from "@/components/Faq";
import { FacebookFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <FacebookCloneFeatures />
      <HowItWorks />
      <WhyUseFacebook />
      <Faq faqs={FacebookFaqs} />
    </>
  );
}
