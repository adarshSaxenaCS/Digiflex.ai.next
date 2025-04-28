import React from "react";
import Hero from "../container/Technology/SalesForce/LightningExperience/Hero";
import Body from "../container/Technology/SalesForce/LightningExperience/Body";
import Head from "next/head";
const LightningExperience = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce Lightning Experience: Cost, Features & Design System
          Explained
        </title>
        <meta
          name="description"
          content="Explore Salesforce Lightning Experience, its cost, and the powerful Lightning Design System. Learn how Lightning Out enhances performance and usability in the Salesforce ecosystem."
        />
        <meta
          name="keywords"
          content="lightning, salesforce lightning, lightning experience, salesforce lightning, design system, salesforce lightning experience, salesforce lightning out, sfdc lightning experience, salesforce lightning cost, salesforce lightning design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default LightningExperience;
