import React from "react";
import Hero from "../container/Technology/SalesForce/FieldServiceLightning/Hero";
import Body from "../container/Technology/SalesForce/FieldServiceLightning/Body";

import Head from "next/head";

const FieldServiceLightning = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce Field Service Lightning: The Future of Field Service
          Management
        </title>
        <meta
          name="description"
          content="Discover how Salesforce Field Service Lightning (FSL) transforms field service management. Compare with SAP, Microsoft, and ServiceNow solutions to streamline operations and enhance customer experiences."
        />
        <meta
          name="keywords"
          content="field service lightning, field service, field service management, salesforce field service, intuit field service management, salesforce field service lightning, field service crm, servicenow field service management, sap field service management, microsoft field service, salesforce fsl, salesforce field service management, field service app salesforce, field management"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default FieldServiceLightning;
