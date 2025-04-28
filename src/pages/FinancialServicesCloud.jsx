import React from "react";
import Hero from "../container/Technology/SalesForce/FinancialServicesCloud/Hero";
import Body from "../container/Technology/SalesForce/FinancialServicesCloud/Body";

import Head from "next/head";

const FinancialServicesCloud = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce Financial Services Cloud: The Future of Finance & Wealth
          Management
        </title>
        <meta
          name="description"
          content="Explore Salesforce Financial Services Cloud (FSC) for banking, insurance, and wealth management. Learn about pricing, features, and how financial advisors leverage FSC to enhance client relationships."
        />
        <meta
          name="keywords"
          content="financial services cloud, salesforce financial services cloud, salesforce fsc, salesforce financial cloud, salesforce financial services, salesforce financial services cloud pricing, salesforce for financial advisors, financial cloud, salesforce for finance, cloud financial services, sales force financial services cloud"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default FinancialServicesCloud;
