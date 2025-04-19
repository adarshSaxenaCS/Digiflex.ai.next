import React from 'react'
import Amazon_intro from './Amazon_intro'
import Amazon_aws_devops from './Amazon_aws_devops'
import AWSFeatures from './AWSFeatures'
import Awazon_advantages from './Awazon_advantages'
import DevOpsTools from './DevOpsTools'
import Faq from '../../../../components/Faq'
import { AWSfaq } from '../Faq'

function Amazon_body() {
  return (
    <>
      <Amazon_intro/>
      <Amazon_aws_devops/>
      <AWSFeatures/>
      <Awazon_advantages/>
      <DevOpsTools/>
      <Faq faqs={AWSfaq}/>
    </>
  )
}

export default Amazon_body