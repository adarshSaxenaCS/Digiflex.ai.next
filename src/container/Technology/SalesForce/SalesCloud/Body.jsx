
import Faq from "@/components/Faq";
import SalesIntro from "./SalesIntro";
import SalesFeatures from "./SalesFeatures";
import SalesProcess from "./SalesProcess";
import SalesTools from "./SalesTools";
import Benefits from "./Benefits";
import { SalesCloudFAQData } from "../FAQData";

const Body = () => {
  return (
    <>
      <SalesIntro />
      <SalesFeatures />
      <SalesProcess />
      <SalesTools />
      <Benefits />
      <Faq faqs={SalesCloudFAQData} />
    </>
  );
};

export default Body;