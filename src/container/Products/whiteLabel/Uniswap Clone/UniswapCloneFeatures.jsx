import SelfOpenFeatureList from "@/container/products/WhiteLabel/AllInOneCode/SelfOpenFeatureList";
import WrapperContainer from "@/Layout/WrapperContainer";

const UniswapFeatures = [
  {
    title: "Decentralized Token Swapping",
    icon: "Repeat",
    description: "Swap any ERC-20 token directly from your wallet without relying on centralized exchanges.Uniswap allows users to swap any ERC-20 tokens instantly using liquidity pools, enabling permissionless and decentralized trading.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UniswapDecentralised.avif",
  },
  {
    title: "Liquidity Pools & Yield Earning",
    icon: "Layers",
    description: "Provide token pairs to liquidity pools and earn a share of transaction fees.Users can become liquidity providers by depositing token pairs into pools and earn passive income through trading fees.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UniswapLiqudityPool-jpg.avif",
  },
  {
    title: "Permissionless Token Listing",
    icon: "Unlock",
    description: "Any user can list a new token pair without needing approval.Uniswap’s decentralized design allows anyone to create a new market pair, ensuring a censorship-resistant platform.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UniswapPermissionlessToken-jpg.avif",
  },
  {
    title: "Non-Custodial Trading",
    icon: "ShieldCheck",
    description: "You keep full control of your funds while trading.All transactions happen directly from your wallet, reducing risk from centralized hacks or platform failures.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UniswapNoncustodial-jpg.avif",
  },
  {
    title: "Analytics Dashboard",
    icon: "BarChart2",
    description: "Track liquidity, volume, and token performance in real time.Uniswap provides detailed analytics for each token pair, helping users make informed trading and liquidity decisions.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UniswapAnalyticDashboard-jpg.avif",
  },
  {
    title: "Slippage Control & Transaction Settings",
    icon: "Settings",
    description: "Customize slippage tolerance and transaction deadlines to avoid failed trades.Users can control how much price movement they’ll tolerate during a trade, preventing large price swings on low liquidity tokens.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UniswapSlippage-jpg.avif",
  },
  {
    title: "Wallet Integration",
    icon: "Wallet",
    description: "Connect seamlessly with MetaMask and other Web3 wallets.Users can securely connect to the Uniswap protocol via MetaMask, WalletConnect, and more.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UniswapWalletIntergration-jpg.avif",
  },
  {
    title: "Gas Fee Optimization",
    icon: "Zap",
    description: "Estimate and control gas costs before submitting a transaction.Uniswap enables users to view estimated gas fees, select fee tiers, and optimize for speed or cost.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/UniswapGasFee-jpg.avif",
  },
];

const UniswapCloneFeatures = () => {
  return (
    <WrapperContainer>
      <SelfOpenFeatureList
        title="Key Features of Our Uniswap Clone"
        description="A decentralized exchange platform offering token swaps, liquidity provision, real-time analytics, and non-custodial trading – all powered by smart contracts."
        services={UniswapFeatures}
      />
    </WrapperContainer>
  );
};

export default UniswapCloneFeatures;
