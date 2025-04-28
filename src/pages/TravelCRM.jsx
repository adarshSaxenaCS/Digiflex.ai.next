import React from "react";
import Hero from "../container/Products/ReadyMade/TravelCRM/Hero";
import Body from "../container/Products/ReadyMade/TravelCRM/Body";
import Head from "next/head";

const TravelCRM = () => {
  return (
    <div>
      <Head>
        <title>
          Best Travel Agency CRM | Optimize Your Tour & Vacation Business
        </title>
        <meta
          name="description"
          content="Discover the best CRM for travel agencies and tour operators. Manage bookings, customers, and operations efficiently with a top-rated travel CRM system."
        />
        <meta
          name="keywords"
          content="travel agency crm, vacation crm, vacationcrm, crm for travel companies, crm system for travel agency, travel crm, crm for travel industry, tour operator crm, my travel crm, best crm for travel agency, best free crm for travel agency, best travel crm, travel crm free"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </div>
  );
};

export default TravelCRM;
