import WrapperContainer from "@/Layout/WrapperContainer";
import { RefreshCw, Layers, TrendingUp, Droplet, Image } from "lucide-react";

const pancakeSwapServices = [
  {
    title: "Token Swapping",
    icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
    description: "Swap BEP-20 tokens instantly.",
    detailContent:
      "Experience lightning-fast token swaps between BEP-20 assets with built-in slippage tolerance control. Our system ensures real-time pricing using smart contract integration, while maintaining maximum efficiency and security through automated market maker (AMM) mechanisms.",
  },
  {
    title: "Liquidity Pools",
    icon: <Layers className="h-8 w-8 text-green-600" />,
    description: "Provide liquidity and earn fees.",
    detailContent:
      "Join liquidity pools by depositing token pairs and receive LP tokens in return. These tokens entitle you to a share of trading fees proportional to your contribution, with real-time stats and one-click add/remove functionality.",
  },
  {
    title: "Yield Farming",
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    description: "Stake LP tokens for rewards.",
    detailContent:
      "Maximize your earnings by staking LP tokens in high-yield farming pools. Track your rewards in real-time and enjoy flexible staking options, attractive APRs, and boosted incentives through exclusive partner programs.",
  },
  {
    title: "Syrup Pools",
    icon: <Droplet className="h-8 w-8 text-pink-600" />,
    description: "Stake CAKE to earn more tokens.",
    detailContent:
      "Unlock effortless passive income with Syrup Pools. Stake your CAKE tokens to earn various partner tokens or more CAKE without providing liquidity. Great for users who prefer low-risk, single-token staking.",
  },
  {
    title: "NFT Marketplace",
    icon: <Image className="h-8 w-8 text-yellow-600" />,
    description: "Buy, sell, and collect NFTs.",
    detailContent:
      "Dive into our built-in NFT marketplace to explore, mint, trade, and collect unique digital assets. From art and collectibles to gamified NFTs, users can enjoy secure on-chain transactions, royalties, and creator-friendly tools.",
  },
];

const PancakeSwapCloneFeatures = () => {
  return (
    <WrapperContainer>
      <div className="py-10 px-4 md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4">
        Key Features of Our PancakeSwap Clone
      </h2>
      <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Decentralized trading, farming, staking, and NFTs all in one DeFi platform.
      </p>

      <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2">
        {pancakeSwapServices.map((service, idx) => (
          <div
            key={idx}
            className="flex gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
          >
            <div className="mt-1">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{service.description}</p>
              <p className="text-gray-700">{service.detailContent}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>
  );
};

export default PancakeSwapCloneFeatures;
