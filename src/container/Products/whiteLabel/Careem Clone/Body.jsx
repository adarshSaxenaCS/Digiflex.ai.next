import React from "react";
import CareemTopRides from "./CareemTopRides";
import CareemCityCoverage from "./CareemCityCoverage";
import CareemFeatures from "./CareemFeatures";
import { CareemFaqs } from "../FaqData";
import Faq from "@/components/Faq";

export default function Body() {
  return (
    <>
      <CareemTopRides />
      <CareemCityCoverage />
      <CareemFeatures />
      <Faq faqs={CareemFaqs} />
    </>
  );
}
