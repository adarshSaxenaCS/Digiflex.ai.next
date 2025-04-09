import React from 'react'
import Hero from '../container/Services/UI-UX/ProductDesign/Hero';
import Body from '../container/Services/UI-UX/ProductDesign/Body';
import Head from 'next/head';


function ProductDesign() {
  return (
    <div>
      <Head>
    <title>Product Design & Packaging Services | Top Design Consultancy</title>
    <meta name="description" content="Get expert product design, packaging, and branding services. Work with leading design companies and agencies to create innovative and market-ready products." />
    <meta name="keywords" content="product design services, designer companies, product design companies, product designer,product packaging design, product design agency, product design consultancy"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
        <Hero/>
        <Body/>
        
    </div>
  )
}

export default ProductDesign
