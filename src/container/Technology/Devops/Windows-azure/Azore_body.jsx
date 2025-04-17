import React from 'react'
import Azore_devops_intro from './Azore_devops_intro'
import Azure_why_azure from './Azure_why_azure'
import Azore_code_quality from './Azore_code_quality'
import Azore_services from './Azore_services'
import Faq from '../../../../components/Faq'
import { Windows_Azure_DevOpsfaq } from '../Faq'

function Azore_body() {
  return (
    <>
    <Azore_devops_intro/>
    <Azure_why_azure/>
    <Azore_code_quality/>
    <Azore_services/>
    <Faq faqs={Windows_Azure_DevOpsfaq}/>
    </>
  )
}

export default Azore_body