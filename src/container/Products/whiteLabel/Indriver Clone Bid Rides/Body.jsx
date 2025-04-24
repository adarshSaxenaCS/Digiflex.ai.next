import React from "react";
import PopularRoutes from "./PopularRoutes";
import WhyChooseUsIndriver from "./WhyChooseUsIndriver";
import SafetyInfo from "./SafetyInfo";
import HowItWorksIndriver from "./HowItWorksIndriver";
import { IndriverFaqs } from "../FaqData";
import Faq from "@/components/Faq";

export default function Body() {
  return (
    <>
      <PopularRoutes />
      <SafetyInfo />
      <HowItWorksIndriver />
      <WhyChooseUsIndriver />
      <Faq faqs={IndriverFaqs} />
    </>
  );
}
