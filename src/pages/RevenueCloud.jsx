import React from "react";
import Hero from "../container/Technology/SalesForce/RevenueCloud/Hero";
import Body from "../container/Technology/SalesForce/RevenueCloud/Body";
import Head from "next/head";
const RevenueCloud = () => {
  return (
    <>
      <Head>
        <title>
          Revenue Cloud & Cloud Storage Services: Maximizing Business Growth &
          Data Security
        </title>
        <meta
          name="description"
          content="Discover Salesforce Revenue Cloud for optimized revenue management. Explore top cloud storage services, data security solutions, and the future of cloud computing for businesses."
        />
        <meta
          name="keywords"
          content="revenue cloud, icloud, cloud, cloud services, cloud storage services, cloud data storage"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default RevenueCloud;
