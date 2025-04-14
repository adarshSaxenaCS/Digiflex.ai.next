// pages/security-measures.js

import React from "react";
import Head from "next/head";
import WrapperContainer from "@/Layout/WrapperContainer";
import { ShieldCheck, Lock, CheckCircle, Key } from "lucide-react";

const Security = () => {
  return (
    <>
      <Head>
        <title>Security Measures - LocalCryptos Clone</title>
        <meta name="description" content="Our platform's top security features." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <WrapperContainer>
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Robust Security Measures
            </h2>
            <p className="text-gray-600 mb-10 text-base sm:text-lg">
              Your safety and privacy are our top priorities. Here's how we keep
              your transactions secure.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left">
                <div className="mb-4">
                  <ShieldCheck className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Escrow Smart Contracts</h3>
                <p className="text-sm text-gray-600">
                  Smart contracts automatically hold funds in escrow until both
                  parties fulfill their obligations, ensuring a safe and fair trade.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left">
                <div className="mb-4">
                  <Lock className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Encrypted Messaging</h3>
                <p className="text-sm text-gray-600">
                  All communication between users is encrypted end-to-end for
                  privacy and security.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left">
                <div className="mb-4">
                  <CheckCircle className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">KYC Verification</h3>
                <p className="text-sm text-gray-600">
                  Users can undergo KYC verification to ensure trust and reduce
                  fraudulent activities on the platform.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left">
                <div className="mb-4">
                  <Key className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Two-Factor Authentication (2FA)</h3>
                <p className="text-sm text-gray-600">
                  Two-factor authentication (2FA) ensures an extra layer of
                  protection for your account and transactions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </WrapperContainer>
    </>
  );
};

export async function getServerSideProps() {
  // Here you can fetch any server-side data if needed
  return {
    props: {}, // No data fetching needed here as of now
  };
}

export default Security;
