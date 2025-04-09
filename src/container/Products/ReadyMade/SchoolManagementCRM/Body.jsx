import React from 'react'
import AutomatedFeeManagement from './AutomatedFeeManagement'
import StudentPerformanceTracking from './StudentPerformanceTracking'
import TeacherCollaborationHub from './TeacherCollaborationHub'
import Faq from '@/components/Faq'
import { SchoolCrmFaq } from '../Faqdata'

function Body() {
  return (
    <>
      <AutomatedFeeManagement/>
      <StudentPerformanceTracking/>
      <TeacherCollaborationHub/>
      <Faq faqs={SchoolCrmFaq}/>
    </>
  )
}

export default Body
