import React from "react";
import Hero from "../container/Technology/SalesForce/CommerceCloud/Hero";
import Body from "../container/Technology/SalesForce/CommerceCloud/Body";
import Head from "next/head";
const CommerceCloud = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce Commerce Cloud: The Ultimate E-Commerce Platform for Growth
        </title>
        <meta
          name="description"
          content="Explore Salesforce Commerce Cloud and its powerful e-commerce solutions. Compare with SAP Commerce Cloud and discover how cloud commerce transforms online sales and customer experiences."
        />
        <meta
          name="keywords"
          content="salesforce commerce cloud, sap commerce cloud, sales force commerce, cloud, commerce cloud, salesforce ecommerce, salesforce commerce, cloud commerce, sfdc commerce cloud, sales force cloud commerce, salesforce ecommerce platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default CommerceCloud;
