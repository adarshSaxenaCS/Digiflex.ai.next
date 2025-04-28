import React from "react";
import Hero from "../container/Technology/SalesForce/CommunityExperienceCloud/Hero";
import Body from "../container/Technology/SalesForce/CommunityExperienceCloud/Body";
import Head from "next/head";
const CommunityExperienceCloud = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce Experience Cloud: Pricing, Features & Customer Journey
          Solutions
        </title>
        <meta
          name="description"
          content="Explore Salesforce Experience Cloud pricing, features, and real-world examples. Learn how it enhances customer journeys, digital experiences, and community engagement. Compare with Adobe Experience Cloud."
        />
        <meta
          name="keywords"
          content="salesforce experience cloud, experience cloud salesforce, adobe experience cloud, salesforce experience cloud pricing, salesforce customer journey, salesforce experience cloud licenses, salesforce experience cloud examples, salesforce customer experience cloud, digital experience cloud, sales force experience cloud, salesforce cloud experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default CommunityExperienceCloud;
