import React from "react";
import Hero from "../container/Technology/SalesForce/ServiceCloud/Hero";
import Body from "../container/Technology/SalesForce/ServiceCloud/Body";

import Head from "next/head";

const ServiceCloud = () => {
  return (
    <>
      <Head>
        <title>
          Google Cloud Platform: Services, Hosting, Storage & Free Cloud
          Solutions
        </title>
        <meta
          name="description"
          content="Discover Google Cloud Platform services, including web hosting, SQL, storage, and backup solutions. Compare free cloud storage, cloud computing, and AWS alternatives for businesses and individuals."
        />
        <meta
          name="keywords"
          content="google cloud platform, google cloud services, google cloud server, free cloud server, online backup services, google cloud web hosting, google cloud sql, cloud storage, cloud, icloud, cloud computing, free cloud storage, cloud backup, adobe cloud, aws cloud"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default ServiceCloud;
