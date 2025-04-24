import Head from "next/head";
import { FaUserPlus, FaExchangeAlt, FaChartLine, FaHistory, FaCreditCard, FaLock, FaGift } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

const steps = [
  {
    icon: <FaUserPlus size={30} />,
    title: "1. Sign Up & Link Bank",
    description: "Create your account and securely link your bank to get started.",
  },
  {
    icon: <FaExchangeAlt size={30} />,
    title: "2. Send & Receive Instantly",
    description: "Transfer money to friends or receive funds in real-time.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "3. Invest in Stocks or Crypto",
    description: "Buy and sell stocks or cryptocurrencies right from the app.",
  },
  {
    icon: <FaHistory size={30} />,
    title: "4. View History & Balance",
    description: "Track your transactions and check your available balance anytime.",
  },
  {
    icon: <FaCreditCard size={30} />,
    title: "5. Use the Cash Card",
    description: "Withdraw cash or make payments with your Cash App debit card.",
  },
  {
    icon: <FaLock size={30} />,
    title: "6. Secure Your Account",
    description: "Enable Face ID, passcode, or 2FA for added security.",
  },
  {
    icon: <FaGift size={30} />,
    title: "7. Earn Cashback & Rewards",
    description: "Get instant discounts and cash rewards on selected merchants.",
  },
];

function StepCard({ step }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1 text-center group">
      <div className="text-green-500 mb-4 group-hover:animate-bounce">{step.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
      <p className="text-gray-600 mt-2">{step.description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works - Cash App Clone</title>
      </Head>

      <WrapperContainer>
        <section className="py-14 px-6 bg-gray-100">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-10">How It Works</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {steps.map((step, idx) => (
              <StepCard key={idx} step={step} />
            ))}
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}
