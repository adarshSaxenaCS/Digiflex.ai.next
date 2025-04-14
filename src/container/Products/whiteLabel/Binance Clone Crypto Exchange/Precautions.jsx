import WrapperContainer from "@/Layout/WrapperContainer";
import Head from "next/head";
import { FaChartLine, FaLock, FaWallet, FaArrowRight } from "react-icons/fa";

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
    <div
      className={`p-6 rounded-xl ${
        transparent ? "bg-transparent" : `bg-gradient-to-br ${step.color}`
      } ${height} shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer flex flex-col gap-4`}
    >
      <div className="bg-white text-black w-14 h-14 flex items-center justify-center rounded-full transition duration-300">
        {step.icon}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2 group-hover:underline">{step.title}</h2>
        <p className="text-sm opacity-90 group-hover:opacity-100">{step.desc}</p>
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

        <main className=" text-white px-6 py-12">
          <h1 className="text-5xl font-extrabold text-center mb-10 text-yellow-400 drop-shadow-lg">
            How to Start Trading
          </h1>

          {/* Custom Grid Layout: 2x2 */}
          <div className="grid grid-cols-3 grid-rows-2 gap-6 max-w-7xl mx-auto">
  {/* Box 1 - Left column full height (doubled height) */}
  <div
  className="row-span-2 bg-cover bg-center text-black rounded-xl border-2 overflow-hidden"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1744352287~exp=1744355887~hmac=baa9435b5782a8bec6afc56e9bb9dbac6be45104b6886df32678bb858f6512fc&w=740')",
      backgroundPosition: "top 50%",
 }}
>
  <StepCard step={steps[0]} height="h-[480px]" transparent />
</div>



  {/* Box 2 */}
  <div className="col-span-1">
    <StepCard step={steps[1]} height="h-[230px]" />
  </div>

  {/* Box 3 */}
  <div className="col-span-1">
    <StepCard step={steps[2]}  height="h-[230px]" />
  </div>

  {/* Box 4 - Spans full bottom of right side */}
  <div className="col-span-2">
    <StepCard step={steps[3]}  height="h-[230px]" />
  </div>
</div>


        </main>
      </>
    </WrapperContainer>
  );
}
