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

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
              {/* Feature 1 */}
              <div className="bg-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform">
                <div className="mb-5">
                  <ShieldCheck className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Escrow Smart Contracts</h3>
                <p className="text-sm text-gray-600">
                  Smart contracts automatically hold funds in escrow until both parties fulfill their obligations, ensuring a safe and fair trade.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-yellow-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform">
                <div className="mb-5">
                  <Lock className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Encrypted Messaging</h3>
                <p className="text-sm text-gray-600">
                  All communication between users is encrypted end-to-end for privacy and security.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-green-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform">
                <div className="mb-5">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">KYC Verification</h3>
                <p className="text-sm text-gray-600">
                  Users can undergo KYC verification to ensure trust and reduce fraudulent activities on the platform.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-pink-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform">
                <div className="mb-5">
                  <Key className="w-10 h-10 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Two-Factor Authentication (2FA)</h3>
                <p className="text-sm text-gray-600">
                  Two-factor authentication (2FA) ensures an extra layer of protection for your account and transactions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </WrapperContainer>
    </>
  );
};


export default Security;
