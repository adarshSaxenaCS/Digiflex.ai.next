import React from 'react'
import OnlyFansHero from './OnlyFansHero'
import UserProfile from './UserProfile'
import OnlyFansContent from './OnlyFansContent'
import { OnlyFansFaqs } from '../FaqData'
import Faq from '@/components/Faq'
export default function Body() {
  return (
    <>
        <OnlyFansHero/>
        <UserProfile/>
        <OnlyFansContent/>
        <Faq faqs={OnlyFansFaqs} />
    </>
  )
}
