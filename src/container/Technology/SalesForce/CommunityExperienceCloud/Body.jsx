import  Faq  from "@/components/Faq";
import CommunityIntro from "./CommunityIntro";
import CommunityFeatures from "./CommunityFeatures.jsx";
import CommunityProcess from "./CommunityProcess.jsx";
import CommunityTools from "./CommunityTools.jsx";
import Benefits from "./Benefits.jsx";
import { CommunityExperienceCloudFAQData } from "../FAQData";




const Body = () => {
  return (
    <> 
      <CommunityIntro />
      <CommunityFeatures />
      <CommunityProcess />
      <CommunityTools />
      <Benefits />
      <Faq faqs={CommunityExperienceCloudFAQData} />
      </>
    
  );
};

export default Body;