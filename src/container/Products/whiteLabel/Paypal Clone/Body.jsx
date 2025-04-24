import PaypalCloneFeatures from "./PaypalCloneFeatures";
import PaypalWorkflow from "./PaypalWorkflow";
import WhyChooseUs from "./WhyChooseUs";
import Faq from "@/components/Faq";
import { PaypalFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <PaypalCloneFeatures />
      <PaypalWorkflow />
      <WhyChooseUs />
      <Faq faqs={PaypalFaqs} />
    </>
  );
}
