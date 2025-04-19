import React from 'react'
import Cicd_intro from './Cicd_intro'
import Cicd_services from './Cicd_services'
import Cicd_technologies from './Cicd_technologies'
import Cicd_advantage from './Cicd_advantage'
import Faq from '../../../../components/Faq'
import { DevOps_CI_CDfaq } from '../Faq'

function Cicd_body() {
  return (
    <>
    <Cicd_intro/>
    <Cicd_services/>
    <Cicd_technologies/>
    <Cicd_advantage/>
    <Faq faqs={DevOps_CI_CDfaq}/>
    </>
  )
}

export default Cicd_body