import React from 'react';
import ServiceIntro from './ServiceIntro';
import ServiceFeatures from './ServiceFeatures';
import ServiceProcess from './ServiceProcess';
import ServiceTools from './ServiceTools';
import Benefits from './Benefits';
import { ServiceCloudFAQData } from '../FAQData';
import WrapperContainer from '@/Layout/WrapperContainer'; 
import Faq from '@/components/Faq'; 

const Body = () => {
  return (
    <>
    <WrapperContainer>
        <ServiceIntro />
        <ServiceFeatures />
        <ServiceProcess />
        <ServiceTools />
        <Benefits />
      </WrapperContainer>
      <Faq faqs={ServiceCloudFAQData} />
    </>
  );
};

export default Body;