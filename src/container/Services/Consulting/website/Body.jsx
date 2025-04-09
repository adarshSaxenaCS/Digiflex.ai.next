import React from "react";
import MethodologySection from "./MethodologySection";
import TypesAndExampleSection from "./TypesAndExampleSection";
import TechnologiesSection from "./TechnologiesSection";
import IndustriesSection from "./IndustriesSection";
import { BenefitsSection } from "./BenefitsSection";
import FAQ from "./FAQ";
import Head from "next/head";

function Body() {
  return (
    <>
       <Head>
        <title>Web Design & Development Consulting Services | Streamlined & Niche-Focused</title>
        <meta name="description" content="Get web design & development consulting services tailored to your niche. Streamline projects, meet deadlines, and build websites, eCommerce, and full-stack solutions." />
        <meta name="keywords" content="website development consulting, web development consulting, web design consulting, web development company, web development consulting services, web app development companies, ecommerce website consulting services, fullstack web development, website consultation"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Benefits Section */}
      <BenefitsSection />

      {/* Methodology Section */}
      <MethodologySection />

      {/* Types and Example Section */}
      <TypesAndExampleSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Industries Section */}
      <IndustriesSection />

      <FAQ />
    </>
  );
}

export default Body;
