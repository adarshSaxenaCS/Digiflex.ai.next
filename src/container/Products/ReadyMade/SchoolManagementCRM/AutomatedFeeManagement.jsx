import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import {
  Wallet,
  ShieldCheck,
  LineChart,
  Smartphone,
  BellRing,
  FileText,
  BarChart2,
  UserCheck,
  Database,
} from "lucide-react";

const AutomatedFeeManagement = () => {
  return (
    <WrapperContainer>
      <div className="rounded-lg">
        <Heading className="text-center text-blue-700 text-3xl font-bold">
          Automated Fee Management
        </Heading>
        <Paragraph className="text-center text-gray-700 mt-4 max-w-xl mx-auto">
          Streamline fee collection, automate invoices, and send instant
          notifications to parents with a seamless digital system.
        </Paragraph>

        {/* Key Features */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Wallet className="text-blue-600 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600">
              100% Automation
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              No manual paperwork required.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <ShieldCheck className="text-green-600 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-green-600">
              Secure Payments
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              Integrated with all major gateways.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <LineChart className="text-purple-600 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-purple-600">
              Real-time Tracking
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              Live insights on pending and received fees.
            </p>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center">
            <Smartphone className="text-blue-700 w-10 h-10 mb-3" />
            <h3 className="text-lg font-semibold text-blue-700">
              Mobile Payments
            </h3>
            <p className="text-gray-600 text-center">
              Pay anytime, anywhere using mobile apps.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md flex flex-col items-center">
            <BellRing className="text-green-700 w-10 h-10 mb-3" />
            <h3 className="text-lg font-semibold text-green-700">
              Instant Notifications
            </h3>
            <p className="text-gray-600 text-center">
              Automatic alerts for pending and overdue fees.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-md flex flex-col items-center">
            <FileText className="text-purple-700 w-10 h-10 mb-3" />
            <h3 className="text-lg font-semibold text-purple-700">
              Custom Invoices
            </h3>
            <p className="text-gray-600 text-center">
              Generate invoices tailored to student requirements.
            </p>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  <div className="bg-blue-900 p-6 rounded-lg shadow-md flex flex-col items-center">
    <BarChart2 className="text-white w-10 h-10 mb-3" />
    <h3 className="text-lg font-semibold text-white">
      Advanced Analytics
    </h3>
    <p className="text-white text-center">
      Get insights on fee collection trends and overdue payments.
    </p>
  </div>
  <div className="bg-blue-900 p-6 rounded-lg shadow-md flex flex-col items-center">
    <UserCheck className="text-white w-10 h-10 mb-3" />
    <h3 className="text-lg font-semibold text-white">
      Role-Based Access
    </h3>
    <p className="text-white text-center">
      Admins, accountants, and parents get customized access.
    </p>
  </div>
  <div className="bg-blue-900 p-6 rounded-lg shadow-md flex flex-col items-center">
    <Database className="text-white w-10 h-10 mb-3" />
    <h3 className="text-lg font-semibold text-white">
      Accounting Integration
    </h3>
    <p className="text-white text-center">
      Sync with QuickBooks, Tally & other accounting platforms.
    </p>
  </div>
</div>



      </div>
    </WrapperContainer>
  );
};

export default AutomatedFeeManagement;
