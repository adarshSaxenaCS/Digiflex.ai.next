import React from 'react';
import AutomationTesting from '../container/Services/UI-UX/DesignTestingsection/Automation';
import Engagementsection from '../container/Services/UI-UX/DesignTestingsection/Engagementmodel';
import Futuresection from '../container/Services/UI-UX/DesignTestingsection/Future';
import ComprehensiveSection from '../container/Services/UI-UX/DesignTestingsection/Comprehensive';
import Hero from '../container/Services/UI-UX/DesignTestingsection/Hero';
import Head from 'next/head';

function DesignTesting() {
    return (
        <>
          <Head>
    <title>Comprehensive UX & Web Design Testing | Usability & Cross-Browser Testing</title>
    <meta name="description" content="Ensure a seamless user experience with our UX design testing services, including responsive design testing, usability testing, cross-browser compatibility, and development testing for flawless performance." />
    <meta name="keywords" content="responsive design testing, usability testing in ux design, cross browser design, regular testing in web design, ux design testing, development testing services "/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
            {/* Section-wise Pages */}
            <section>
                <Hero/>
                <AutomationTesting/>
                <Engagementsection/>
                <Futuresection/>
                <ComprehensiveSection/>
            </section>
           </>
    );
}

export default DesignTesting;
