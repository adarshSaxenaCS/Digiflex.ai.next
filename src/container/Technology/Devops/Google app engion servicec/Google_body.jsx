import React from 'react'
import Google_intro from './Google_intro'
import Google_choose from './Google_choose'
import Google_solution from './Google_solution'
import Google_why_choose from './Google_why_choose'
import Faq from '../../../../components/Faq'
import { Google_App_Enginefaq } from '../Faq'

function Google_body() {
  return (
    <>
     <Google_intro/>
     <Google_choose/>
     <Google_solution/>
     <Google_why_choose/>
     <Faq faqs={Google_App_Enginefaq}/>
    </>
  )
}

export default Google_body
