import SelfOpenFeatureList from "@/container/products/WhiteLabel/AllInOneCode/SelfOpenFeatureList";
import WrapperContainer from "@/Layout/WrapperContainer";

const OpenSeaFeatures = [
  {
    title: "NFT Minting",
    icon: "PenTool",
    description: "Mint your NFTs with metadata and IPFS storage integration.",
    detailContent: "Create unique digital assets using our platform with metadata and decentralized IPFS file storage.",
    image: "https://img.freepik.com/free-vector/minting-nft-concept-illustration_114360-9483.jpg",
  },
  {
    title: "Wallet Integration",
    icon: "Wallet",
    description: "Connect wallets like MetaMask and Coinbase seamlessly.",
    detailContent: "Enable secure Web3 wallet connections using MetaMask, WalletConnect, or Coinbase Wallet.",
    image: "https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_52683-77383.jpg",
  },
  {
    title: "NFT Marketplace",
    icon: "ShoppingCart",
    description: "Buy, sell, and trade NFTs across categories like art, music, and collectibles.",
    detailContent: "Users can explore, list, and purchase NFTs in a user-friendly and categorized marketplace.",
    image: "https://i.pinimg.com/736x/96/7c/f8/967cf89eb0ea54b1d9a7a75dac07d2b1.jpg",
  },
  {
    title: "Royalties for Creators",
    icon: "DollarSign",
    description: "Earn royalties every time your NFT is resold.",
    detailContent: "Creators can set royalty percentages and earn automatically from secondary market sales.",
    image: "https://img.freepik.com/free-vector/digital-royalty-concept_23-2148508681.jpg",
  },
  {
    title: "Profile & Collection Pages",
    icon: "User",
    description: "Custom pages for users and collections with stats and follower counts.",
    detailContent: "Users can manage profiles, view owned and listed NFTs, and organize collections.",
    image: "https://img.freepik.com/free-vector/user-profile-interface_23-2148533691.jpg",
  },
  {
    title: "Auction & Fixed Price Sales",
    icon: "Clock",
    description: "Sell NFTs using timed auctions or fixed price listings.",
    detailContent: "Supports multiple sales types like Dutch auctions, English auctions, and direct sales.",
    image: "https://img.freepik.com/free-vector/auction-concept-illustration_114360-5152.jpg",
  },
  {
    title: "Search & Filters",
    icon: "Search",
    description: "Find NFTs using category, price, and rarity filters.",
    detailContent: "Advanced search capabilities make it easy for users to discover NFTs that match their interests.",
    image: "https://img.freepik.com/free-vector/search-concept-landing-page_52683-18932.jpg",
  },
  {
    title: "Analytics Dashboard",
    icon: "BarChart2",
    description: "Track NFT volume, floor prices, trending collections, and more.",
    detailContent: "Real-time marketplace analytics for users, creators, and investors to monitor activity.",
    image: "https://img.freepik.com/free-vector/analytics-dashboard-concept-illustration_114360-9047.jpg",
  },
];

const OpenSeaCloneFeatures = () => {
  return (
    <WrapperContainer>
      <SelfOpenFeatureList
        title="Key Features of Our OpenSea Clone"
        description="A fully-featured NFT marketplace with minting, wallet support, creator royalties, real-time analytics, and more."
        services={OpenSeaFeatures}
      />
    </WrapperContainer>
  );
};

export default OpenSeaCloneFeatures;
