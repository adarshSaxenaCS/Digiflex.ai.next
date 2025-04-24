import TaskRabbitFeatures from "./TaskRabbitFeatures";
import ProjectsPage from "./ProjectsPage";
import ServicesPage from "./ServicesPage";
import Faq from "@/components/Faq";
import { TaskRabbitFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
    <TaskRabbitFeatures/>
    <ServicesPage/>
    <ProjectsPage/>
    <Faq faqs={TaskRabbitFaqs}/>
    </>
  )
}
