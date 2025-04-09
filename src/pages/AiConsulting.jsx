import React from "react";
import Hero from "../container/Services/Consulting/ai/Hero";
import Body from "../container/Services/Consulting/ai/Body";
import Head from "next/head";


function AiConsulting() {
  return (
    <div>

     <Head>
        <title>AI Consulting & Development Services | AI Bot & Retail Solutions</title>
        <meta name="description" content="Get AI consulting services for chatbots, retail, and automation. Enhance business efficiency with AI development, strategy, and intelligent solutions." />
        <meta name="keywords" content="Ai Consulting Services, Ai Bot consulting Services, Artificial Intelligence Solutions, AI chat bot consulting, Ai Consulting Services in Retail, Ai Development Consulting Services"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </div>
  );
}

export default AiConsulting;
