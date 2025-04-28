import React from "react";
import Hero from "../container/Technology/SalesForce/EducationCloud/Hero";
import Body from "../container/Technology/SalesForce/EducationCloud/Body";
import Head from "next/head";
const EducationCloud = () => {
  return (
    <>
      <Head>
        <title>
          Salesforce Education Cloud: Transforming Learning with Cloud
          Technology
        </title>
        <meta
          name="description"
          content="Discover how Salesforce Education Cloud, Google Cloud for Education, and AWS Educate empower institutions and students. Explore cloud-based solutions for smarter learning and administration."
        />
        <meta
          name="keywords"
          content="education cloud, adobe creative cloud student, salesforce education cloud, google cloud education, education cloud salesforce, google cloud for students, salesforce for education, aws educate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </>
  );
};

export default EducationCloud;
