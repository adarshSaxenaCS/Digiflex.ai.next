import FiverrCloneFeatures from "@/container/products/WhiteLabel/Fiverr clone/FiverrCloneFeatures";
import TechStackList from "@/container/products/WhiteLabel/Fiverr clone/TechStackList";
import WhyWeCanBuild from "@/container/products/WhiteLabel/Fiverr clone/WhyWeCanBuild";
import Faq from "@/components/Faq";
import { FiverrFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <FiverrCloneFeatures />
      <TechStackList />
      <WhyWeCanBuild />
      <Faq faqs={FiverrFaqs} />
    </>
  );
}
