import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { DollarSign, LineChart, CreditCard, ShieldCheck, TrendingUp } from "lucide-react";

const FinancialInsights = () => {
  return (
    <WrapperContainer>
      <div className="bg-gradient-to-br from-blue-100 to-white p-12 rounded-lg shadow-2xl">
        <Heading>
          Financial & Transaction Insights
        </Heading>
        <Paragraph className="text-gray-700 mt-4 text-center max-w-2xl mx-auto">
          Gain a deep understanding of your financial data with real-time analytics and reporting.
        </Paragraph>

        {/* Financial Features Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Revenue Tracking */}
          <div className="relative group bg-white/60 backdrop-blur-lg p-8 rounded-xl shadow-xl flex flex-col items-center border border-gray-200 transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-20 h-20 flex items-center justify-center bg-yellow-500/20 text-yellow-700 rounded-xl shadow-lg transition-all duration-300 ease-in-out group-hover:bg-yellow-500 group-hover:text-white">
              <DollarSign className="text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-700 mt-5">Revenue Tracking</h3>
            <p className="text-gray-600 text-center mt-3">
              Get real-time insights on revenue streams and earnings.
            </p>
          </div>

          {/* Secure Transactions */}
          <div className="relative group bg-gray-900/90 text-white p-8 rounded-xl shadow-xl flex flex-col items-center border border-gray-700 transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-20 h-20 flex items-center justify-center bg-green-500/20 text-green-400 rounded-xl shadow-lg transition-all duration-300 ease-in-out group-hover:bg-green-500 group-hover:text-white">
              <CreditCard className="text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-green-400 mt-5">Secure Transactions</h3>
            <p className="text-gray-300 text-center mt-3">
              Keep your payments secure with encrypted transactions.
            </p>
          </div>

          {/* Analytics & Reports */}
          <div className="relative group bg-white/60 backdrop-blur-lg p-8 rounded-xl shadow-xl flex flex-col items-center border border-gray-200 transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-20 h-20 flex items-center justify-center bg-purple-500/20 text-purple-700 rounded-xl shadow-lg transition-all duration-300 ease-in-out group-hover:bg-purple-500 group-hover:text-white">
              <LineChart className="text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-purple-700 mt-5">Analytics & Reports</h3>
            <p className="text-gray-600 text-center mt-3">
              Generate financial reports and optimize revenue strategy.
            </p>
          </div>
        </div>

        {/* Additional Financial Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fraud Protection */}
          <div className="relative group bg-white/60 backdrop-blur-lg p-8 rounded-xl shadow-xl flex flex-col items-center border border-gray-200 transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-20 h-20 flex items-center justify-center bg-blue-500/20 text-blue-700 rounded-xl shadow-lg transition-all duration-300 ease-in-out group-hover:bg-blue-500 group-hover:text-white">
              <ShieldCheck className="text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mt-5">Fraud Protection</h3>
            <p className="text-gray-600 text-center mt-3">
              Ensure transaction security with AI-driven fraud detection.
            </p>
          </div>

          {/* Financial Forecasting */}
          <div className="relative group bg-gray-900/90 text-white p-8 rounded-xl shadow-xl flex flex-col items-center border border-gray-700 transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-20 h-20 flex items-center justify-center bg-orange-500/20 text-orange-400 rounded-xl shadow-lg transition-all duration-300 ease-in-out group-hover:bg-orange-500 group-hover:text-white">
              <TrendingUp className="text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-orange-400 mt-5">Financial Forecasting</h3>
            <p className="text-gray-300 text-center mt-3">
              Predict future financial trends with smart analytics.
            </p>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default FinancialInsights;
