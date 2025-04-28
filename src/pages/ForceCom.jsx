import React from "react";
import Hero from "../container/Technology/SalesForce/ForceCom/Hero";
import Body from "../container/Technology/SalesForce/ForceCom/Body";
import Head from "next/head";
const ForceCom = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce Development & Force.com: Build Powerful Business Solutions
        </title>
        <meta
          name="description"
          content="Discover Salesforce development on Force.com, from custom applications to enterprise solutions. Learn about development orgs, FinancialForce, and MarketForce to maximize your CRM potential."
        />
        <meta
          name="keywords"
          content="sales force development, force com, force com development, salesforce force com, salesforce development org, marketforce com, forc com, financial force com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default ForceCom;
