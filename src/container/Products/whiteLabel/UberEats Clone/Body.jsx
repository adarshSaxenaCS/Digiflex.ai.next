import React from "react";
import UberLateNightCravings from "./UberLateNightCravings";
import UberTopRated from "./UberTopRated";
import UberDealsAndOffers from "./UberDealsAndOffers";
import { UberEatsFaqs } from "../FaqData";
import Faq from "@/components/Faq";

export default function Body() {
  return (
    <>
      <UberLateNightCravings />
      <UberTopRated />
      <UberDealsAndOffers />
      <Faq faqs={UberEatsFaqs} />
    </>
  );
}
