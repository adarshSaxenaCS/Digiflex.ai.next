import TwitterCloneFeatures from "./TwitterCloneFeatures";
import AdditionalFeaturesWeProvide from "./AdditionalFeaturesWeProvide";
import SourceOfInformation from "./SourceOfInformation";
import Faq from "@/components/Faq";
import { TwitterFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <TwitterCloneFeatures />
      <AdditionalFeaturesWeProvide />
      <SourceOfInformation />
      <Faq faqs={TwitterFaqs} />
    </>
  );
}
