import React from 'react'

import Hero from '../container/Services/Consulting/devops/Hero'
import Body from '../container/Services/Consulting/devops/Body';
import Head from 'next/head';

function DevopsConsulting() {
  return (
    <div>

          <Head>
        <title>DevOps Consulting Services | Azure & AWS DevOps Solutions</title>
        <meta name="description" content="Get expert DevOps consulting services for AWS & Azure. Streamline development with CI/CD pipelines, automation, and cloud optimization for faster delivery." />
        <meta name="keywords" content="devops consulting, devops service providers, devops solutions, devops services, azure devops, devops on aws, azure devops pipelines, azure devops api, devops consulting,devops consulting companies"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    <Hero/>
    <Body/>
    </div>
  )
}

export default DevopsConsulting