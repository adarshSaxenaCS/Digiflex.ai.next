import React from 'react'

import Hero from '../container/Services/Consulting/testing/Hero'
import Body from '../container/Services/Consulting/testing/Body';
import Head from 'next/head';

function TestingConsulting() {
  return (
    <div>
      
      <Head>
        <title>Software Testing & Automation Consulting Services | System Integration</title>
        <meta name="description" content="Get expert software testing consulting, automation services, and system integration solutions. Ensure quality, efficiency, and seamless performance for your software." />
        <meta name="keywords" content="Software testing consulting services, System Testing Consulting, Software Automation Consulting Services, Integration & System Consulting Services"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    <Hero/>
    <Body/>
    </div>
  )
}

export default TestingConsulting