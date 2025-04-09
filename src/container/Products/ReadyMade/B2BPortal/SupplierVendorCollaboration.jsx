import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const SupplierVendorCollaboration = () => {
  return (
    <WrapperContainer>
      <div className="rounded-lg">
        <Heading className="text-indigo-900 text-3xl font-bold text-center">
          Supplier & Vendor Collaboration
        </Heading>
        <Paragraph className="text-indigo-700 text-center mt-4 max-w-2xl mx-auto">
          Streamline supply chain operations with **real-time collaboration, secure transactions,**
          and **automated workflows** to ensure business continuity.
        </Paragraph>

        {/* Collaboration Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-indigo-600">🔹 Live Messaging</h3>
            <p className="text-gray-600 mt-2">Chat with suppliers & negotiate deals instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-indigo-600">🔹 Contract Management</h3>
            <p className="text-gray-600 mt-2">Track, review, and sign agreements online.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-indigo-600">🔹 Inventory Synchronization</h3>
            <p className="text-gray-600 mt-2">Keep stock levels updated with real-time sync.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-indigo-600">🔹 Automated Order Processing</h3>
            <p className="text-gray-600 mt-2">Reduce manual errors with AI-driven order fulfillment.</p>
          </div>
        </div>

        {/* Why It Matters Section */}
        <div className="mt-12 bg-indigo-100 p-6 rounded-lg shadow-md">
          <Heading className="text-2xl font-bold text-center text-indigo-800">
            Why It Matters?
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-indigo-200 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-indigo-700">📈 Increased Efficiency</h3>
              <p className="text-gray-700 mt-1">Automated workflows save time & reduce costs.</p>
            </div>
            <div className="p-4 bg-indigo-300 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-indigo-700">🔒 Secure Transactions</h3>
              <p className="text-gray-700 mt-1">Ensure safe payments & protect sensitive data.</p>
            </div>
            <div className="p-4 bg-indigo-400 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-indigo-700">⚡ Faster Deliveries</h3>
              <p className="text-gray-700 mt-1">Optimize logistics for on-time shipments.</p>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default SupplierVendorCollaboration;
