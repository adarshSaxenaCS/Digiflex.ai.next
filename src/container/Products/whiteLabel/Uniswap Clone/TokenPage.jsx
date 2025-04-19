import React from "react";
import { Rocket, PieChart, TrendingUp } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import Image from "next/image";

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
      <div className="space-y-24">

        <Heading className="text-4xl font-bold text-center text-black">
          Token Page Overview
        </Heading>

        {/* Tokenomics Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left - Why & Benefits */}
          <div className="md:w-1/2 space-y-4">
            <Heading className="text-2xl font-semibold text-black">Why Tokenomics?</Heading>
            <Paragraph>
              Tokenomics helps define how tokens are distributed across the project. It ensures fairness, growth,
              and transparency for users and investors.
            </Paragraph>
            <Subheading className="font-semibold">Benefits:</Subheading>
            <ul className="list-disc list-inside text-black">
              <li>Encourages investor trust</li>
              <li>Clarifies financial planning</li>
              <li>Ensures long-term sustainability</li>
            </ul>

            <Image
              src="https://i.pinimg.com/736x/32/91/11/329111c122a1273ae7f7401000396f1c.jpg"
              alt="token image"
              width={400}
              height={200}
              className="rounded h-[210px]"
            />
          </div>

          {/* Right - Items */}
          <div className="md:w-1/2 space-y-4">
            <Heading className="text-3xl font-bold text-center text-black">Tokenomics</Heading>
            {tokenomicsData.map((item, idx) => (
              <div key={idx} className="bg-white text-black p-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition">
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
        </div>

        {/* Roadmap Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left - Why & Benefits */}
          <div className="md:w-1/2 space-y-4">
            <Heading className="text-2xl font-semibold text-black">Why Roadmap?</Heading>
            <Paragraph>
              The roadmap defines the future direction of the project and sets expectations for both the team and
              the community.
            </Paragraph>
            <Subheading className="font-semibold">Benefits:</Subheading>
            <ul className="list-disc list-inside text-black">
              <li>Shows commitment and planning</li>
              <li>Builds transparency and trust</li>
              <li>Helps align team and investor goals</li>
            </ul>

            <Image
              src="https://i.pinimg.com/736x/2d/f9/f4/2df9f422ab82f933295251d48f2e9ce0.jpg"
              alt="roadmap image"
              width={400}
              height={200}
              className="rounded h-[220px]"
            />
            <Image
              src="https://i.pinimg.com/originals/19/c1/ee/19c1ee66f3ea32e06c77a324cda5d650.gif"
              alt="roadmap image"
              width={400}
              height={200}
              className="rounded h-[225px]"
            />
          </div>

          {/* Right - Items */}
          <div className="md:w-1/2 space-y-4">
            <Heading className="text-3xl font-bold text-center text-black">Roadmap</Heading>
            <div className="space-y-4">
              {roadmapData.map((milestone, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black rounded-xl p-6 shadow-md hover:bg-green-600 hover:text-white transition"
                >
                  <Subheading className="text-xl font-semibold mb-2">{milestone.title}</Subheading>
                  <Paragraph>{milestone.description}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-[50px]">
          {/* Left - Why & Benefits */}
          <div className="md:w-1/2 space-y-4">
            <Heading className="text-2xl font-semibold text-black">Why Stats?</Heading>
            <Paragraph>
              Stats give users a real-time snapshot of the token’s adoption and staking, building community
              confidence and interest.
            </Paragraph>
            <Subheading className="font-semibold">Benefits:</Subheading>
            <ul className="list-disc list-inside text-black">
              <li>Shows real-time project health</li>
              <li>Encourages staking and participation</li>
              <li>Attracts new users and holders</li>
            </ul>

            <Image
              src="https://i.pinimg.com/originals/2e/e6/99/2ee6998e34c3e2eff7b894c66cfc5267.jpg"
              alt="roadmap image"
              width={400}
              height={200}
              className="rounded h-[210px]"
            />
          </div>

          {/* Right - Items */}
          <div className="md:w-1/2 space-y-4">
            <Heading className="text-3xl font-bold text-center text-black">Stats</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black rounded-xl p-6 shadow-md flex flex-col items-center hover:bg-purple-700 hover:text-white transition"
                >
                  <div className="mb-2">{stat.icon}</div>
                  <Subheading className="text-lg font-semibold">{stat.title}</Subheading>
                  <Paragraph className="text-sm">{stat.value}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </WrapperContainer>
  );
};

export default TokenPage;
