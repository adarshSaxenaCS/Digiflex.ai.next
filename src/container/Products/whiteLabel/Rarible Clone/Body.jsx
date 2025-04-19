import RaribleFeaturesPage from "./RaribleFeaturesPage"
import RealWorldUseCasesPage from "./RealWorldUseCasesPage"
import TechStackPage from "./RaribleTechStack"
import Faq from "@/components/Faq"
import { RaribleFaqs } from "../FaqData"

export default function Body() {
  return (
    <>
      <RaribleFeaturesPage/>
      <RealWorldUseCasesPage/>
      <TechStackPage/>
      <Faq faqs={RaribleFaqs}/>
    </>
  )
}
