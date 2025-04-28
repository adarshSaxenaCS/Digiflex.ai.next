import React from "react";
import Hero from "../container/Technology/SalesForce/AppexChangeApps/Hero";
import Body from "../container/Technology/SalesForce/AppexChangeApps/Body";
import Head from "next/head";
const AppexChangeCloud = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce AppExchange: Discover Top Apps, Partners & Integrations
        </title>
        <meta
          name="description"
          content="Explore Salesforce AppExchange, the ultimate marketplace for business apps. Find top AppExchange apps, Salesforce Labs solutions, and integrations like DocuSign to enhance your CRM."
        />
        <meta
          name="keywords"
          content="salesforce appexchange, appexchange apps, appexchange, salesforce appexchange partners, appexchange salesforce labs, salesforce appstore, salesforce appexchange docusign"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default AppexChangeCloud;
