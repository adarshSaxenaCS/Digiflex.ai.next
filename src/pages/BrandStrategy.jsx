import React from 'react';
import Hero from '@/container/Services/UI-UX/BrandStrategy/Hero';
import Body from '@/container/Services/UI-UX/BrandStrategy/Body'
import Head from 'next/head';

function BrandStrategy() {
  return (
    <div>


<Head>
    <title>Brand Strategy & Marketing Services | Creative & Strategic Solutions</title>
    <meta name="description" content="Get branding and marketing strategy services to enhance your business. Build a strong brand presence with strategic consulting and creative agency solutions." />
    <meta name="keywords" content="brand strategy services, branding services, marketing strategy services, branding agency, strategic consulting services, creative agency services, marketing strategy agency, brand strategy agency"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>

      <Hero />
      <Body />
    </div>
  );
}

export default BrandStrategy;