import SelfOpenFeatureList from "@/container/Products/whiteLabel/AllInOneCode/SelfOpenFeatureList";
import WrapperContainer from "@/Layout/WrapperContainer";

const UniswapFeatures = [
  {
    title: "Decentralized Token Swapping",
    icon: "Repeat",
    description: "Swap any ERC-20 token directly from your wallet without relying on centralized exchanges.",
    detailContent: "Uniswap allows users to swap any ERC-20 tokens instantly using liquidity pools, enabling permissionless and decentralized trading.",
    image: "https://img.freepik.com/free-vector/data-network-businessman_24908-57856.jpg?t=st=1744115949~exp=1744119549~hmac=42e21e89e213960d13c86912f1c69a8976fd4cf81d3b42cecbf08fe88c2fcddf&w=740",
  },
  {
    title: "Liquidity Pools & Yield Earning",
    icon: "Layers",
    description: "Provide token pairs to liquidity pools and earn a share of transaction fees.",
    detailContent: "Users can become liquidity providers by depositing token pairs into pools and earn passive income through trading fees.",
    image: "https://img.freepik.com/free-vector/downshifting-escaping-office-people-working-with-notebook-sitting-relaxed-floating-swim-ring-isometric-illustration_98292-8173.jpg?t=st=1744116014~exp=1744119614~hmac=680da3b2fb66282d30d71d44f205b638acde87e90c9be3b5b8f30aae763a830d&w=740",
  },
  {
    title: "Permissionless Token Listing",
    icon: "Unlock",
    description: "Any user can list a new token pair without needing approval.",
    detailContent: "Uniswap’s decentralized design allows anyone to create a new market pair, ensuring a censorship-resistant platform.",
    image: "https://img.freepik.com/free-vector/economic-data-analysis-market-value-calculation-cryptocurrency-trading-desk-bitcoin-futures-platform-official-crypto-exchange-services-concept_335657-69.jpg?t=st=1744116066~exp=1744119666~hmac=cca73f9234a5a050fba1b87704e0321e6dc013e7c85aaa741fe668758cc3de2f&w=996",
  },
  {
    title: "Non-Custodial Trading",
    icon: "ShieldCheck",
    description: "You keep full control of your funds while trading.",
    detailContent: "All transactions happen directly from your wallet, reducing risk from centralized hacks or platform failures.",
    image: "https://img.freepik.com/free-vector/gradient-cost-living-infographic_52683-142564.jpg?t=st=1744116121~exp=1744119721~hmac=f3505dccec806589b35eb94bb8bab0e7ee1d72305bd3bb53a3e760d321bc31b6&w=996",
  },
  {
    title: "Analytics Dashboard",
    icon: "BarChart2",
    description: "Track liquidity, volume, and token performance in real time.",
    detailContent: "Uniswap provides detailed analytics for each token pair, helping users make informed trading and liquidity decisions.",
    image: "https://img.freepik.com/free-vector/admin-dashboard-template-with-flat-design_23-2147869112.jpg?t=st=1744116168~exp=1744119768~hmac=0babb8e5d07662af593200d2dae8168b365eae4a0c179cd227c379f8ee8e76f5&w=740",
  },
  {
    title: "Slippage Control & Transaction Settings",
    icon: "Settings",
    description: "Customize slippage tolerance and transaction deadlines to avoid failed trades.",
    detailContent: "Users can control how much price movement they’ll tolerate during a trade, preventing large price swings on low liquidity tokens.",
    image: "https://img.freepik.com/free-vector/toggle-concept-illustration_114360-8900.jpg?t=st=1744116098~exp=1744119698~hmac=b0f91263a1453104a9d602a51bd91ddbb1d6521480e2040c917750ccdc2ed7df&w=740",
  },
  {
    title: "Wallet Integration",
    icon: "Wallet",
    description: "Connect seamlessly with MetaMask and other Web3 wallets.",
    detailContent: "Users can securely connect to the Uniswap protocol via MetaMask, WalletConnect, and more.",
    image: "https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_52683-77383.jpg?t=st=1744116260~exp=1744119860~hmac=b72a89c6b85920c3d3961ab8420dc54b774a9135ea101434fd1795694479e35d&w=740",
  },
  {
    title: "Gas Fee Optimization",
    icon: "Zap",
    description: "Estimate and control gas costs before submitting a transaction.",
    detailContent: "Uniswap enables users to view estimated gas fees, select fee tiers, and optimize for speed or cost.",
    image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-benchmark-illustration_23-2149331621.jpg?t=st=1744116290~exp=1744119890~hmac=a3119fc14e80b0f217005b93c6fcad3422683abf488df3d17d27923d6b146336&w=740",
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
