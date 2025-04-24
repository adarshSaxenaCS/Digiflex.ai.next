import UpworkFeatures from "@/container/Products/whiteLabel/Upwork Clone/UpworkFeatures";
import ShowcaseImages from "@/container/products/WhiteLabel/Upwork Clone/ShowcaseImages";
import GrowthMetric from "@/container/products/WhiteLabel/Upwork Clone/GrowthMetrics";
import Faq from "@/components/Faq";
import { UpworkFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <UpworkFeatures />
      <ShowcaseImages />
      <GrowthMetric />
      <Faq faqs={UpworkFaqs} />
    </>
  );
}
