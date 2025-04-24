import ThreadFeatures from "./ThreadFeatures";
import HowItWorks from "./HowItWorks";
import ThreadTechStack from "./ThreadTechStack";
import Faq from "@/components/Faq";
import { ThreadsFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <ThreadFeatures />
      <HowItWorks />
      <ThreadTechStack />
      <Faq faqs={ThreadsFaqs} />
    </>
  );
}
