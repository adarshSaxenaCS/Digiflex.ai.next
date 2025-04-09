import React from 'react'
import Hero from '../container/Services/UI-UX/DesignConsulting/Hero';
import Body from '../container/Services/UI-UX/DesignConsulting/Body';
import Head from 'next/head';


function DesignConsulting() {
  return (
    <div>

<Head>
    <title>Design Consulting & UI/UX Services | Engineering & Web Solutions</title>
    <meta name="description" content="Get design consulting, UI/UX, and engineering services for websites and digital products. Enhance user experience with expert-driven design solutions." />
    <meta name="keywords" content="design consulting services, design engineering services, website design consulting, ui ux consulting services, ux consulting services, ui ux consulting"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>

        <Hero/>
        <Body/>
    </div>
  )
};

export default DesignConsulting;
