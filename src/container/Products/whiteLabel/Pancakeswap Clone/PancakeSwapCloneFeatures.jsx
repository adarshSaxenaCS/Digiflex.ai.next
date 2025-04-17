import ColChangeFeatureList from "@/container/Products/WhiteLabel/AllInOneCode/ColChangeFeatureList";

const pancakeSwapServices = [
  {
    title: "Token Swapping",
    icon: "RefreshCw",
    description: "Swap BEP-20 tokens instantly.",
    detailContent: "Supports fast token exchanges with slippage control and real-time price updates.",
    image: "https://img.freepik.com/free-vector/people-exchanging-bitcoin-dollars_53876-43042.jpg?t=st=1744108889~exp=1744112489~hmac=d7e56ed61816b2b0c87057200d1f270db59763fb29432d9f02a70ffd82b6df9b&w=826",
  },
  {
    title: "Liquidity Pools",
    icon: "Layers",
    description: "Provide liquidity and earn fees.",
    detailContent: "Add or remove liquidity and earn a share of trading fees with LP tokens.",
    image: "https://img.freepik.com/free-vector/save-rescue-from-finance-dept-disaster-flat-isometric-concept-young-man-saving-drowning-sinking-friend-from-seething-financial-problems-ocean-dollar-raft-float_126523-2084.jpg?t=st=1744108956~exp=1744112556~hmac=e91a662bda6ca22b4e60aadd453b0428cd688f5dbdd26a26c50f845088ad46af&w=740",
  },
  {
    title: "Yield Farming",
    icon: "TrendingUp",
    description: "Stake LP tokens for rewards.",
    detailContent: "Stake your LP tokens to earn CAKE and other tokens, with high APR/APY.",
    image: "https://img.freepik.com/free-vector/crowdfunding-illustration_1284-25888.jpg?t=st=1744109065~exp=1744112665~hmac=7ce2d272a814ddcb6cee4abb5fcb3afebdfbd6ffe39ddb172a82c010bb32aa02&w=740",
  },
  {
    title: "Syrup Pools",
    icon: "Droplet",
    description: "Stake CAKE to earn more tokens.",
    detailContent: "Single-asset staking where users earn rewards by locking CAKE.",
    image: "https://th.bing.com/th/id/OIP.aMok6BZp3ekUMRCnW0h43wAAAA?rs=1&pid=ImgDetMain",
  },
  {
    title: "NFT Marketplace",
    icon: "Image",
    description: "Buy, sell, and collect NFTs.",
    detailContent: "Explore and trade unique NFTs directly on PancakeSwap.",
    image: "https://i.pinimg.com/736x/12/70/1a/12701a55aa606851722ff23e9cd7dda8.jpg",
  },
];

const PancakeSwapCloneFeatures = () => {
  return (
    <ColChangeFeatureList
      title="Key Features of Our PancakeSwap Clone"
      description="Decentralized trading, farming, staking, and NFTs all in one DeFi platform."
      services={pancakeSwapServices}
    />
  );
};

export default PancakeSwapCloneFeatures;
