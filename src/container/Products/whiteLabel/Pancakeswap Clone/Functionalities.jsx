import React from "react";
import { CheckCircle } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";

const functionalities = [
  {
    title: "Real-Time Charts",
    description: "View token prices, liquidity pool performance, and historical APY/APR trends with interactive charts.",
  },
  {
    title: "Wallet Integration",
    description: "Connect MetaMask, TrustWallet, and other Web3 wallets to manage assets and transactions.",
  },
  {
    title: "Token Info Pages",
    description: "Detailed pages with contract info, live price, market cap, holder charts, and more.",
  },
  {
    title: "Governance & Voting",
    description: "Enable DAO-style community participation with proposal creation and on-chain voting.",
  },
  {
    title: "Airdrops & Rewards",
    description: "Claim staking bonuses, referral rewards, and community airdrops.",
  },
  {
    title: "Analytics Dashboard",
    description: "Track platform-wide metrics including TVL, top pairs, and daily/weekly volumes.",
  },
  {
    title: "Token Bridge",
    description: "Support cross-chain transfers and bridging between Ethereum, BSC, and other networks.",
  },
  {
    title: "Launchpad (IFO)",
    description: "Participate in Initial Farm Offerings to get early access to promising new tokens.",
  },
  {
    title: "User Leaderboard",
    description: "Showcase top contributors and most active traders, stakers, and LPs.",
  },
];

const PancakeSwapFunctionalities = () => {
  return (
    <WrapperContainer>
      <div className="bg-[#0d0d0d] text-black min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">More Functionalities of Our PancakeSwap Clone</h2>
          <p className="text-gray-300 text-center mb-10">
            Enhance your DeFi platform with these advanced tools and user-friendly features.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {functionalities.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl pointer-events-none" />
                <div className="relative z-10 flex items-start gap-4">
                  <CheckCircle className="text-green-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default PancakeSwapFunctionalities;
