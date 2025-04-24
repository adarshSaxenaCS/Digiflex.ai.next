import React from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";
import MidnightCravings from "./MidnightCravings";
import QuickEatsNearYou from "./QuickEatsNearYou";
import { DoordashFaqs } from "../FaqData";
import Faq from "@/components/Faq";

export default function Body() {
  return (
    <div>
      <TopRatedRestaurants />
      <MidnightCravings />
      <QuickEatsNearYou />
      <Faq faq={DoordashFaqs} />
    </div>
  );
}
