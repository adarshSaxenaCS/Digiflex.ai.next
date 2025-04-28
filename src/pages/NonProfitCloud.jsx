import React from "react";
import Hero from "../container/Technology/SalesForce/NonProfitCloud/Hero";
import Body from "../container/Technology/SalesForce/NonProfitCloud/Body";
import Head from "next/head";
const NonProfitCloud = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce Nonprofit Cloud: Empowering Nonprofits with Grants & CRM
          Solutions
        </title>
        <meta
          name="description"
          content="Discover how Salesforce Nonprofit Cloud and the Nonprofit Success Pack (NPSP) help organizations grow. Learn about grants for nonprofits, donor management, and digital tools for nonprofit success."
        />
        <meta
          name="keywords"
          content="non profit cloud, non profit, salesforce for nonprofits, non profit organizations near me, non profit organization, grants for nonprofits, constant contact for nonprofits, salesforce nonprofit success pack, nonprofits near me, grants for non profits, grants for nonprofit organizations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default NonProfitCloud;
