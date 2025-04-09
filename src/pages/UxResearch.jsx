import React from 'react'
import Hero from '../container/Services/UI-UX/UXResearch/Hero'
import Body from '../container/Services/UI-UX/UXResearch/Body'
import Head from 'next/head'


function UxResearch() {
  return (  
    <div>
     
     <Head>
    <title>Best UX Research Agency | User Experience & Usability Research Services</title>
    <meta name="description" content="Looking for a reliable UX research agency? We offer expert user experience and usability research services to enhance customer satisfaction, optimize digital products, and boost conversions." />
    <meta name="keywords" content="user experience agency, ux research agency, ux research companies, ux research services"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
        <Hero/>
        <Body/>

    </div>
  )
}

export default UxResearch
