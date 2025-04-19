import GloveCloneFeatures from "./GloveCloneFeatures";
import AdvancedFeaturesPage from "./AdvancedFeaturesPage";
import HowItWorks from "../Glovo Clone/HowItWorks";
import Faq from "@/components/Faq";
import { GlovoFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
     <GloveCloneFeatures/> 
     <AdvancedFeaturesPage/> 
     <HowItWorks/>
     <Faq faqs={GlovoFaqs} />
    </>
  )
}


