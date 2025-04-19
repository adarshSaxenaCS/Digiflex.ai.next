import React from "react";
import { CheckCircle } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const functionalities = [
  {
    title: "Real-Time Charts",
    description:
      "View token prices, liquidity pool performance, and historical APY/APR trends with interactive charts.",
  },
  {
    title: "Wallet Integration",
    description:
      "Connect MetaMask, TrustWallet, and other Web3 wallets to manage assets and transactions.",
  },
  {
    title: "Token Info Pages",
    description:
      "Detailed pages with contract info, live price, market cap, holder charts, and more.",
  },
  {
    title: "Governance & Voting",
    description:
      "Enable DAO-style community participation with proposal creation and on-chain voting.",
  },
  {
    title: "Airdrops & Rewards",
    description:
      "Claim staking bonuses, referral rewards, and community airdrops.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track platform-wide metrics including TVL, top pairs, and daily/weekly volumes.",
  },
  {
    title: "Token Bridge",
    description:
      "Support cross-chain transfers and bridging between Ethereum, BSC, and other networks.",
  },
  {
    title: "Launchpad (IFO)",
    description:
      "Participate in Initial Farm Offerings to get early access to promising new tokens.",
  },
  {
    title: "User Leaderboard",
    description:
      "Showcase top contributors and most active traders, stakers, and LPs.",
  },
];

const hoverColors = [
  "hover:bg-red-200",
  "hover:bg-blue-200",
  "hover:bg-green-200",
  "hover:bg-yellow-200",
  "hover:bg-purple-200",
  "hover:bg-pink-200",
  "hover:bg-lime-200",
  "hover:bg-orange-200",
  "hover:bg-emerald-200",
];

const PancakeSwapFunctionalities = () => {
  return (
    <WrapperContainer>
      <div>
        <Heading className="text-3xl font-bold mb-4 text-center text-black">
          More Functionalities of Our PancakeSwap Clone
        </Heading>
        <Paragraph className="text-gray-600 text-center mb-10">
          Enhance your DeFi platform with these advanced tools and user-friendly features.
        </Paragraph>

        <div className="grid md:grid-cols-2 gap-6">
          {functionalities.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 p-6 rounded-2xl shadow-md text-black transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${hoverColors[index % hoverColors.length]}`}
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 mt-1" />
                <div>
                  <Subheading className="text-xl font-semibold mb-1">{item.title}</Subheading>
                  <Paragraph className="text-gray-600 text-[15px]">{item.description}</Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default PancakeSwapFunctionalities;
