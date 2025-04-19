import React from "react";
import { Search, CreditCard, ShoppingCart, MessageSquare, Truck, BarChart2 } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const Features = [
  {
    title: "Advanced Product Discovery",
    icon: <Search className="text-blue-600 w-8 h-8" />,
    description: "Precision filtering to find exactly what you need.",
    detailContent:
      "Our smart search engine supports advanced filters like product category, price range, availability, brand, and customer ratings. Features like keyword suggestions, real-time filtering, and sorting by relevance, popularity, or delivery time ensure users can instantly find the right product among thousands of listings.",
  },
  {
    title: "Secure & Flexible Payment System",
    icon: <CreditCard className="text-green-600 w-8 h-8" />,
    description: "Escrow protection and multiple payment modes.",
    detailContent:
      "We provide fully secure transactions through payment gateways like Razorpay, Stripe, and PayPal. Our escrow-based model ensures that payments are held safely and released only after order delivery. Buyers can pay using UPI, credit/debit cards, net banking, or digital wallets with full encryption and fraud protection.",
  },
  {
    title: "Bulk Ordering & Tiered Pricing",
    icon: <ShoppingCart className="text-purple-600 w-8 h-8" />,
    description: "Smooth wholesale purchasing with dynamic deals.",
    detailContent:
      "Designed for B2B, our platform allows businesses to place high-quantity orders with supplier-specific pricing slabs, minimum order quantity settings, and request-based quote options. This feature streamlines procurement for retailers, distributors, and enterprise buyers.",
  },
  {
    title: "Real-Time Buyer-Seller Messaging",
    icon: <MessageSquare className="text-orange-600 w-8 h-8" />,
    description: "Negotiate deals or clarify doubts instantly.",
    detailContent:
      "With our integrated live chat system, buyers and sellers can communicate without leaving the platform. Share files, ask product-specific questions, or confirm timelines—everything stays secure and centralized. Notifications ensure no message goes unnoticed.",
  },
  {
    title: "Order Tracking & Logistics Integration",
    icon: <Truck className="text-cyan-600 w-8 h-8" />,
    description: "Transparent delivery status at every step.",
    detailContent:
      "Users get real-time tracking updates with integration to logistics partners and courier APIs. From dispatch to doorstep, users can view expected delivery dates, shipping progress, and status changes. Notifications keep both parties informed and reduce customer queries.",
  },
  {
    title: "Seller Dashboard & Insights",
    icon: <BarChart2 className="text-emerald-600 w-8 h-8" />,
    description: "Analytics-driven dashboard for vendors.",
    detailContent:
      "Sellers can access a dedicated dashboard to manage listings, monitor orders, track earnings, and view customer behavior insights. This helps them optimize pricing, stock, and marketing strategies. Custom alerts and sales reports assist in better decision-making.",
  },
];

const AmazonCloneFeatures = () => {
  return (
    <WrapperContainer>
      <section className="">
        <Heading className="text-center">🚀 Key Features of Our Amazon Clone Platform</Heading>
        <Paragraph className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
          A powerful B2B marketplace solution with tools tailored to global-scale commerce, secure payments, and real-time business communication.
        </Paragraph>

        <div className="mt-12 overflow-x-auto">
          <div className="flex space-x-8">
            {Features.map((feature, index) => (
              <div
                key={index}
                className="flex-none w-[300px] h-[380px] p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 mb-[20px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-700 font-medium">{feature.description}</p>
                <p className="text-gray-600 mt-2 text-sm">{feature.detailContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default AmazonCloneFeatures;
