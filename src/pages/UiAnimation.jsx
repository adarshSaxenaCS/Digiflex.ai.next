import React from 'react'
import Hero from '../container/Services/UI-UX/UIAnimation/Hero';
import Body from '../container/Services/UI-UX/UIAnimation/Body';
import Head from 'next/head';

function UiAnimation() {
  return (
    <div>
      <Head>
    <title>Top UI Design & Animation Services | Motion Graphics & Logo Animation</title>
    <meta name="description" content="Get expert UI design and animation services, motion graphics animation, and logo motion design. Our motion design agency creates stunning animated logos and engaging visuals for your brand." />
    <meta name="keywords" content="UI design and animaiton services, motion graphics animation, motion graphics design, logo motion design, motion design agencies,animated logo creation"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
        <Hero/>
        <Body/>
        
    </div>
  )
}

export default UiAnimation
