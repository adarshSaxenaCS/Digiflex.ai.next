import TinderFeatures from "./TinderFeatures";
import SafetyPage from "./SafetyPage";
import TinderUsage from "./TinderUsage";
import Faq from "@/components/Faq";
import { TinderFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
    <TinderFeatures/>
    <TinderUsage/>
    <SafetyPage/>
    <Faq faqs={TinderFaqs}/>
    </>
  )
}
