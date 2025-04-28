import Body from "@/container/Products/ReadyMade/HospitalCRM/Body";
import Hero from "@/container/Products/ReadyMade/HospitalCRM/Hero";
import React from "react";
import Head from "next/head";
function HospitalCRM() {
  return (
    <div>
      <Head>
        <title>
          Best Hospital CRM Software | Streamline Patient & Clinic Management
        </title>
        <meta
          name="description"
          content="Enhance patient care and hospital management with the best hospital CRM software. Discover CRM solutions for clinics, dental practices, and medical institutions."
        />
        <meta
          name="keywords"
          content="hospital crm, clinic crm, crm for medical clinic, crm for dental practice, clinical crm, hospital crm software, crm for hospital management, hospital crm systems"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </div>
  );
}

export default HospitalCRM;
