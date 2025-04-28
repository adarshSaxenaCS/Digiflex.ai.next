import Hero from "@/container/Products/ReadyMade/RealStateCRM/Hero";
import Body from "@/container/Products/ReadyMade/RealStateCRM/Body";
import React from "react";
import Head from "next/head";
function RealStateCRM() {
  return (
    <div>
      <Head>
        <title>
          Best Real Estate CRM | Streamline Property Management & Sales
        </title>
        <meta
          name="description"
          content="Discover the best real estate CRM software for agents and realtors. Manage leads, properties, and client relationships efficiently with a top-rated CRM system."
        />
        <meta
          name="keywords"
          content="real estate crm, best crm for real estate, free crm for real estate, real estate crm software, best crm for realtors, crm for realtors, crm for real estate agents, property management crm, real estate agent leads, agent crm, crm property management, crm system for real estate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </div>
  );
}

export default RealStateCRM;
