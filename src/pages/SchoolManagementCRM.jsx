import Hero from "@/container/Products/ReadyMade/SchoolManagementCRM/Hero";
import Body from "@/container/Products/ReadyMade/SchoolManagementCRM/Body";
import React from "react";
import Head from "next/head";
function SchoolManagementCRM() {
  return (
    <div>
      <Head>
        <title>
          Best CRM for Schools | Streamline Admissions & Student Management
        </title>
        <meta
          name="description"
          content="Discover the best CRM for private schools and online education. Enhance student engagement, streamline admissions, and manage school operations efficiently."
        />
        <meta
          name="keywords"
          content="best crm for schools, best crm for private schools, crm for private schools, online education crm, crm, crm s, crm, crm system"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </div>
  );
}

export default SchoolManagementCRM;
