import React from "react";
import Hero from "../container/Technology/SalesForce/SalesCloud/Hero";
import Body from "../container/Technology/SalesForce/SalesCloud/Body";
import Head from "next/head";
const SalesCloud = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce Sales Cloud: The Ultimate CRM Solution for Sales &
          Marketing
        </title>
        <meta
          name="description"
          content="Unlock the power of Salesforce Sales Cloud to boost sales, streamline CRM, and enhance marketing. Discover cloud-based sales solutions that drive revenue and improve customer relationships."
        />
        <meta
          name="keywords"
          content="sales cloud, sales cloud services, crm salesforce, salesforce sales cloud, salesforce cloud, on cloud sales, salesforce marketing, cloud computing sales force, sales cloud crm"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default SalesCloud;
