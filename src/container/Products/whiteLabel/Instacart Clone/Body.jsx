import InstaCartFeatures from "./InstaCartFeatures";
import WhatWeProvide from "./WhatWeProvide";
import TechStackWeUse from "./TechStackWeUse";
import Faq from "@/components/Faq";
import { InstacartFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <InstaCartFeatures />
      <WhatWeProvide />
      <TechStackWeUse />
      <Faq faqs={InstacartFaqs} />
    </>
  );
}
