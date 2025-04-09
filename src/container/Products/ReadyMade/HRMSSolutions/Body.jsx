import React from 'react'
import PerformanceAnalytics from './PerformanceAnalytics'
import PayrollCompensation from './PayrollCompensation'
import EmployeeManagementSystem from './EmployeeManagementSystem'
import Faq from '@/components/Faq'
import { HrmsFaq } from '../Faqdata'

function Body() {
  return (
    <>
      <EmployeeManagementSystem />
      <PayrollCompensation />
      <PerformanceAnalytics />
      <Faq faqs={HrmsFaq}/>
    </>
  )
}

export default Body
