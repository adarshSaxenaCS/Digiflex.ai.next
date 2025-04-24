import Head from "next/head";
import WrapperContainer from "@/Layout/WrapperContainer";

const mvpFeatures = [
  {
    title: "User Authentication",
    description: "Enable users to sign up, log in, and manage their accounts securely.",
  },
  {
    title: "Send & Receive Money",
    description: "Allow peer-to-peer money transfers with real-time balance updates.",
  },
  {
    title: "Bank Linking",
    description: "Connect user bank accounts or cards for adding or withdrawing funds.",
  },
  {
    title: "Transaction History",
    description: "Display recent transactions in a clear, easy-to-read format.",
  },
  {
    title: "Basic Security Features",
    description: "Implement encryption and secure login to protect user data.",
  },
  {
    title: "Minimal User Interface",
    description: "Simple, intuitive design focusing on the core use-case of money transfer.",
  },
];

export default function MVPPage() {
  return (
    <>
      <Head>
        <title>MVP for Cash App Clone</title>
      </Head>

      <WrapperContainer>
        <section className="py-14 px-6 bg-gray-100">
          <h1 className="text-4xl font-extrabold text-center text-green-600 mb-10">
            MVP – Minimum Viable Product
          </h1>
          <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700 text-lg">
            <strong>MVP</strong> stands for <strong>Minimum Viable Product</strong>. It is the simplest version of your product that includes only the core, most essential features required to meet the needs of early adopters. The goal is to release this version quickly to gather feedback, validate the product concept, and make iterative improvements before adding advanced features.
          </p>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Core Features of an MVP for a Cash App Clone
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700 text-lg">
            Building an MVP helps you test your core assumptions with real users before investing too much time or money. Here's what your Cash App clone MVP should include to deliver value to your users while being quick to market:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mvpFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
