import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import Head from "next/head";
import { FaChartLine, FaLock, FaWallet, FaArrowRight } from "react-icons/fa";
import Heading from "@/Layout/Heading";

const steps = [
  {
    icon: <FaWallet size={30} />,
    title: "1. Create Your Wallet",
    desc: "Sign up and secure your crypto wallet to begin your trading journey.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: <FaLock size={30} />,
    title: "2. Secure Your Account",
    desc: "Enable 2FA and set a strong password to protect your assets.",
    color: "from-red-400 to-red-600",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "3. Analyze the Market",
    desc: "Use built-in charts and tools to study price movements and trends.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <FaArrowRight size={30} />,
    title: "4. Start Trading",
    desc: "Buy, sell, and exchange cryptocurrencies in real-time.",
    color: "from-green-400 to-green-600",
  },
];

function StepCard({ step, height = "h-auto", transparent = false }) {
  return (
    <div className="w-full">
      <div
        className={`p-6 rounded-xl ${transparent ? "bg-transparent" : `bg-gradient-to-br ${step.color}`
          } ${height} shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer flex flex-col gap-4`}
      >
        <div className="bg-white text-black w-14 h-14 flex items-center justify-center rounded-full transition duration-300">
          {step.icon}
        </div>
        <div>
          <Heading className="text-xl font-bold mb-2 group-hover:underline">{step.title}</Heading>
          <Paragraph className="text-sm opacity-90 group-hover:opacity-100">{step.desc}</Paragraph>
        </div>
      </div>
    </div>
  );
}

export default function StartTrading() {
  return (
    <WrapperContainer>
      <>
        <Head>
          <title>How to Start Trading | Binance Clone</title>
        </Head>

        <main className="text-white">
          <Heading className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-yellow-400 drop-shadow-lg">
            How to Start Trading
          </Heading>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Box 1 */}
            <div
              className="sm:col-span-2 lg:col-span-1 row-span-2 bg-cover bg-center rounded-xl border-2 overflow-hidden text-black"
              style={{
                backgroundImage: "url('https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BinanceCreateWallet-gif.gif')",
                backgroundPosition: "top 60%",
              }}
            >
              <StepCard step={steps[0]} height="h-full" transparent />
            </div>


            {/* Box 2 */}
            <StepCard step={steps[1]} />

            {/* Box 3 */}
            <StepCard step={steps[2]} />

            {/* Box 4 */}
            <div className="sm:col-span-2">
              <StepCard step={steps[3]} />
            </div>
          </div>
        </main>
      </>
    </WrapperContainer>
  );
}
