import React from "react";
import Benefits from "./Benefits";
import Services from "./Services";
import WhyChoose from "./WhyChoose";
import Industries from "./Industries";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import FAQ from "./FAQ";
import Head from "next/head";

function Body() {
  return (
    <div className="min-h-screen">
        <Head>
    <title>App Development & Consulting Services | Web & Mobile Solutions</title>
    <meta name="description" content="Get mobile app development consulting services & web application solutions. Partner with a trusted team to build, scale, and optimize your projects." />
    <meta  name="keywords" content="mobile app development consulting, website application consulting services, app consulting, app development consulting, mobile app development, it consulting services company"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
      <WrapperContainer>
        <Heading>A game-changing strategy for your app idea</Heading>
        <Paragraph>
          In today's competitive digital landscape, millions of apps flood the
          app stores, but only a few rise to the top, becoming editors'
          favorites or securing billion-dollar deals. The difference lies in
          having the right strategy a well-crafted approach that ensures a
          mobile app not only meets user expectations but also stands out in the
          market.
        </Paragraph>
      </WrapperContainer>

      <Benefits />
      <Services />
      <WhyChoose />
      <Industries />
      <FAQ/>
    </div>
  );
}

export default Body;
