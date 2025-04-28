import Hero from "@/container/Products/ReadyMade/HRMSSolutions/Hero";
import Body from "@/container/Products/ReadyMade/HRMSSolutions/Body";
import React from "react";
import Head from "next/head";
function HRMSSolutions() {
  return (
    <div>
      <Head>
        <title>
          Best HRMS Software | Streamline HR Management for Businesses
        </title>
        <meta
          name="description"
          content="Discover the best HRMS software for small businesses and enterprises. Manage payroll, employee records, and HR operations with top HR management systems."
        />
        <meta
          name="keywords"
          content="hrms software, sage hrms, best hr software, hr software small business, hr systems for small businesses, hr software companies, free hr software, hr management software, hr management systems, best hr systems, hrms solution"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </div>
  );
}

export default HRMSSolutions;
