import React from 'react'

import Hero from '../container/Services/Consulting/salesforce/Hero'
import Body from '../container/Services/Consulting/salesforce/Body';
import Head from 'next/head';

function SalesforceConsulting() {
  return (
    <div>
       <Head>
        <title>Salesforce Consulting & Professional Services | CRM Solutions</title>
        <meta name="description" content="Get Salesforce consulting, CRM software services, and lead management solutions. Optimize Salesforce platforms with expert guidance for business growth." />
        <meta name="keywords" content="salesforce consulting company, salesforce professional services, salesforce services, crm software services, salesforce service cloud, lead management system consult, salesforce service, salesforce platforms consultant"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

        <Hero/>
        <Body/>
    </div>
  )
}

export default SalesforceConsulting