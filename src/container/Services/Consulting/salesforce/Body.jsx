import React from 'react';
import Solutions from './Solutions';
import Impact from './Impact';
import Features from './Features';
import ProcessSection from './ProcessSection';
import Industry from './Industry';
import FAQ from './FAQ';
import Head from 'next/head';

function Body() {
  return (
     <>
         <Head>
        <title>Salesforce Consulting & Professional Services | CRM Solutions</title>
        <meta name="description" content="Get Salesforce consulting, CRM software services, and lead management solutions. Optimize Salesforce platforms with expert guidance for business growth." />
        <meta name="keywords" content="salesforce consulting company, salesforce professional services, salesforce services, crm software services, salesforce service cloud, lead management system consult, salesforce service, salesforce platforms consultant"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Solutions />
      <Impact />
      <Features />
      <ProcessSection />
      <Industry />
      <FAQ/>
     </>
  );
}

export default Body;