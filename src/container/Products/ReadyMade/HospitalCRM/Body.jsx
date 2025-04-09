import React from 'react'
import PatientManagementFeature from './PatientManagementFeature'
import BillingAndInvoicingFeature from './BillingAndInvoicingFeature'
import DoctorManagementFeature from './DoctorManagementFeature'
import Faq from '@/components/Faq'
import { HospitalCrmFaq } from '../Faqdata'

function Body() {
  return (
    <>
      <PatientManagementFeature/>
      <DoctorManagementFeature/>
      <BillingAndInvoicingFeature/>
      <Faq faqs={HospitalCrmFaq}/>
    </>
  )
}

export default Body
