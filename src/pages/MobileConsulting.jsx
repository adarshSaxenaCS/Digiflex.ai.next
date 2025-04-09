import React from 'react'

import Hero from '../container/Services/Consulting/mobile/Hero'
import Body from '../container/Services/Consulting/mobile/Body';
import Head from 'next/head';

function MobileConsulting() {
  return (
    <div>
      <Head>
        <title>App Development & Consulting Services | Web & Mobile Solutions</title>
        <meta name="description" content="Get mobile app development consulting services & web application solutions. Partner with a trusted team to build, scale, and optimize your projects." />
        <meta  name="keywords" content="mobile app development consulting, website application consulting services, app consulting, app development consulting, mobile app development, it consulting services company"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero/>
      <Body/>
    </div>
  )
}

export default MobileConsulting