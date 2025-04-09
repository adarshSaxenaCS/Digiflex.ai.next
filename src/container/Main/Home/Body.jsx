'use client';

import React from 'react';
import Intro from './Intro';
import WhyUs from './WhyUs';
import Technologies from './Technologies';
import Industries from './Industries';
import Timeline from './Timeline';
import CaseStudy from './CaseStudy';
import WhatWeOffer from './WhatWeOffer';
import OurWork from './OurWork';
import Awards from './Awards';
import OurTeam from './OurTeam';
import { motion } from 'framer-motion';

// Server component for static sections
const StaticSections = () => (
  <>
    <Intro />
    <WhyUs />
    <Technologies />
    <Industries />
    <Timeline />
    <CaseStudy />
    <WhatWeOffer />
    <OurWork />
    <Awards />
    <OurTeam />
  </>
);

// Client component wrapper for interactive sections
const InteractiveSections = () => {
  return (
    <div className="relative z-10 bg-white">
      <StaticSections />
    </div>
  );
};

export default InteractiveSections;
