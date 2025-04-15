import React from "react";
import { Rocket, PieChart, TrendingUp, HeartIcon } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const tokenomicsData = [
  { name: "Team", value: 20 },
  { name: "Marketing", value: 15 },
  { name: "Development", value: 25 },
  { name: "Community", value: 20 },
  { name: "Liquidity", value: 20 },
];

const roadmapData = [
  { title: "Q1 2025", description: "Token launch, website live, smart contract audit" },
  { title: "Q2 2025", description: "DEX listing, liquidity farming, community events" },
  { title: "Q3 2025", description: "CEX partnerships, staking platform launch" },
  { title: "Q4 2025", description: "DAO governance, multi-chain expansion" },
];

const statsData = [
  { icon: <TrendingUp size={32} />, title: "Total Supply", value: "1,000,000,000" },
  { icon: <PieChart size={32} />, title: "Holders", value: "15,342" },
  { icon: <Rocket size={32} />, title: "Staked Tokens", value: "420,000,000" },
];

const TokenPage = () => {
  return (
    <WrapperContainer>
      <div>

{/* Tokenomics */}
<section>
  <Heading className="text-3xl font-bold text-center mb-6 text-black">Tokenomics</Heading>
  <div className="space-y-4">
    {tokenomicsData.map((item, idx) => (
      <div key={idx} className="bg-white text-black p-4 rounded-lg shadow-md transition hover:bg-blue-600 hover:text-white">
        <div className="flex justify-between mb-1 font-semibold">
          <span>{item.name}</span>
          <span>{item.value}%</span>
        </div>
        <div className="w-full bg-gray-300 h-2 rounded">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{ width: `${item.value}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Roadmap */}
<section className="mt-[100px]">
  <Heading className="text-3xl font-bold text-center mb-6 text-black">Roadmap</Heading>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {roadmapData.map((milestone, idx) => (
      <div
        key={idx}
        className="bg-white text-black rounded-xl p-6 shadow-md transition duration-300 hover:bg-green-600 hover:text-white"
      >
        <Subheading className="text-xl font-semibold mb-2">{milestone.title}</Subheading>
        <Paragraph>{milestone.description}</Paragraph>
      </div>
    ))}
  </div>
</section>

{/* Stats */}
<section className="mt-[100px] mb-[50px]">
  <Heading className="text-3xl font-bold text-center mb-6 text-black">Stats</Heading>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    {statsData.map((stat, idx) => (
      <div
        key={idx}
        className="bg-white text-black rounded-xl p-6 shadow-md flex flex-col items-center transition hover:bg-purple-700 hover:text-white"
      >
        <div className="mb-2">{stat.icon}</div>
        <Subheading className="text-lg font-semibold">{stat.title}</Subheading>
        <Paragraph className="text-sm">{stat.value}</Paragraph>
      </div>
    ))}
  </div>
</section>
</div>
    </WrapperContainer>
  );
};

export default TokenPage;
