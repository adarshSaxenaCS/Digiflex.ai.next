'use client';

import React, { Suspense } from 'react';
import Amp2 from '@/container/Services/Custom App/Mobile App Devlopment/Amp2';
import Amp3 from '@/container/Services/Custom App/Mobile App Devlopment/Amp3';
import Amp5 from '@/container/Services/Custom App/Mobile App Devlopment/Amp5';
import WrapperContainer from '@/Layout/WrapperContainer';
import { Mobilefaqs } from '@/container/Services/Cloud/Faqdata';
import Faq from '@/components/Faq';

const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

export default function MobileAppClient() {
  return (
    <div>
      <WrapperContainer>
        <Suspense fallback={<LoadingFallback />}>
          <Amp2 />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Amp3 />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Amp5 />
        </Suspense>
      </WrapperContainer>
      <Suspense fallback={<LoadingFallback />}>
        <Faq faqs={Mobilefaqs} />
      </Suspense>
    </div>
  );
} 