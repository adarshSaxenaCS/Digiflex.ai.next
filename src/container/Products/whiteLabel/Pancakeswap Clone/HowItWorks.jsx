import React from "react";
import { CheckCircle, Wallet, Repeat, Settings2, Zap } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Wallet className="w-6 h-6 text-white" />,
      title: "Connect Wallet",
      description: "Use MetaMask or any supported wallet to connect securely to the platform.",
    },
    {
      icon: <Settings2 className="w-6 h-6 text-white" />,
      title: "Select Token Pair",
      description: "Choose the tokens you want to swap or add to the liquidity pool.",
    },
    {
      icon: <Repeat className="w-6 h-6 text-white" />,
      title: "Swap or Add Liquidity",
      description: "Easily swap tokens or provide liquidity and earn rewards.",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Confirm Transaction",
      description: "Approve the transaction directly from your wallet.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Done!",
      description: "Transaction completed. You can now view it on BSCScan or your wallet.",
    },
  ];

  const hoverColors = [
    "hover:bg-indigo-200",
    "hover:bg-blue-200",
    "hover:bg-purple-200",
    "hover:bg-rose-200",
    "hover:bg-green-200",
  ];
  

  return (
    <WrapperContainer>
      <section className="py-16 px-4 sm:px-6 lg:px-12 mb-[50px]">
        <div className="max-w-6xl mx-auto text-center">
          <Heading className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How PancakeSwap Clone Works
          </Heading>
          <Paragraph className="text-gray-600 mb-10 text-base sm:text-lg">
            Follow these simple steps to interact with the DEX.
          </Paragraph>

          <div className="flex flex-wrap justify-center gap-8">
            {steps.map((step, index) => (
              <div
              key={index}
              className={`hexagon-clip w-[260px] h-[240px] bg-white text-gray-800 shadow-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:text-gray ${hoverColors[index]}`}
            >
              <div className="mb-3">{step.icon}</div>
              <Subheading className="text-base font-semibold mb-1">{step.title}</Subheading>
              <Paragraph className="text-sm">{step.description}</Paragraph>
            </div>
            
            
            
            ))}
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
}
