import Hero from "@/container/Products/ReadyMade/B2BPortal/Hero";
import Body from "@/container/Products/ReadyMade/B2BPortal/Body";
import React from "react";
import Head from "next/head";
function B2BPortal() {
  return (
    <div>
      <Head>
        <title>
          Best B2B Portal & Marketplace Platform | Build Your B2B Ecommerce Site
        </title>
        <meta
          name="description"
          content="Create a powerful B2B marketplace platform with the best B2B portal solutions. Launch your B2B ecommerce website with advanced features and seamless transactions."
        />
        <meta
          name="keywords"
          content="b2b portel, b2b marketplace platform, b2b marketplace software, b2b portal solutions, b2b ecommerce website, b2b ecommerce site, b2b commerce website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </div>
  );
}

export default B2BPortal;
