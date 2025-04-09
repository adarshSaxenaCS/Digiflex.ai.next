import React from 'react'


import Hero from '../container/Services/Consulting/website/Hero';
import Body from '../container/Services/Consulting/website/Body';
import Head from 'next/head';


function WebConsulting() {
  return (
    <div>
      <Head>
        <title>Web Design & Development Consulting Services | Streamlined & Niche-Focused</title>
        <meta name="description" content="Get web design & development consulting services tailored to your niche. Streamline projects, meet deadlines, and build websites, eCommerce, and full-stack solutions." />
        <meta name="keywords" content="website development consulting, web development consulting, web design consulting, web development company, web development consulting services, web app development companies, ecommerce website consulting services, fullstack web development, website consultation"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
			<Hero/>
			<Body/>
    </div>
  )
}

export default WebConsulting