import Head from "next/head";
import WrapperContainer from "@/Layout/WrapperContainer";

const features = [
  ["User Authentication", "Signup, login, logout, and Two-Factor Authentication (2FA) support."],
  ["Wallet Management", "Create wallets, add funds, and withdraw to linked bank accounts."],
  ["Send & Receive Money", "Transfer funds instantly between users with unique IDs or emails."],
  ["Transaction History", "Detailed list of past transactions with date, amount, and status."],
  ["Bank Linking", "Securely connect bank accounts and verify via micro-deposits."],
  ["KYC Integration", "Optional KYC process to verify users and comply with regulations."],
  ["Email Notifications", "Automated alerts for transactions, security changes, and updates."],
  ["Mobile Responsiveness", "Optimized for mobile, tablet, and desktop viewports."],
  ["Role-Based Dashboard", "Separate UI for admin, user, and support teams."],
  ["Dispute Resolution", "Admin support panel to handle transaction disputes and refunds."],
  ["Payment Gateway Integration", "Supports third-party gateway APIs like Razorpay, Stripe."],
  ["Security Measures", "Data encryption, HTTPS, JWT Auth, and bcrypt for password safety."],
  ["Analytics Dashboard", "Track user activity, total payments, and engagement metrics."],
  ["Dark Mode Support", "Switchable light/dark mode for better user experience."],
];

export default function PaypalCloneFeatures() {
  return (
    <>
      <Head>
        <title>PayPal Clone Features</title>
      </Head>

      <WrapperContainer>
        <section className="py-12 px-4 bg-gray-100 min-h-screen">
          <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
            Features of Our PayPal Clone
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white text-left">
                  <th className="px-6 py-3 text-lg">Feature</th>
                  <th className="px-6 py-3 text-lg">Description</th>
                </tr>
              </thead>
              <tbody>
                {features.map(([title, desc], index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 transition duration-300 hover:bg-gray-100 hover:shadow-sm"
                  >
                    <td className="px-6 py-4 font-semibold">{title}</td>
                    <td className="px-6 py-4 text-gray-700">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
