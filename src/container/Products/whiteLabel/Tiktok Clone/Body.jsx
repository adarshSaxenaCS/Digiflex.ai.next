import TiktokFeatures from "./TiktokFeatures";
// import ProjectDetails from "./ProjectDetails";
import TikTokCountryStats from "./TiktokCountryStat";
import Faq from "@/components/Faq";
import { TikTokFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
    <TiktokFeatures/>
    {/* <ProjectDetails/> */}
    <TikTokCountryStats/>
    <Faq faqs={TikTokFaqs}/>
    </>
  )
}
