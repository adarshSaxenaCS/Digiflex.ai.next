import SelfOpenFeatureList from "@/container/products/WhiteLabel/AllInOneCode/SelfOpenFeatureList";
import WrapperContainer from "@/Layout/WrapperContainer";

const OpenSeaFeatures = [
  {
    title: "NFT Minting",
    icon: "PenTool",
    description: "Mint your NFTs with metadata and IPFS storage integration.Create unique digital assets directly on our platform with rich metadata support. Utilize decentralized IPFS storage to ensure your NFT files are tamper-proof and accessible globally. Whether you're a digital artist, musician, or content creator, our minting tools make the process seamless and secure.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/OpenseaNftMinting-jpg.jpg",
  },
  {
    title: "Wallet Integration",
    icon: "Wallet",
    description: "Connect wallets like MetaMask and Coinbase seamlessly. Enable seamless and secure Web3 wallet connections using MetaMask, WalletConnect, or Coinbase Wallet. Users can interact with the platform effortlessly, approve transactions, and manage their NFTs without ever compromising on security or convenience. Multi-wallet support ensures accessibility for all users.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/OpenseaWalletIntegration-jpg.jpg",
  },
  {
    title: "NFT Marketplace",
    icon: "ShoppingCart",
    description: "Buy, sell, and trade NFTs across categories like art, music, and collectibles. Explore an extensive marketplace where users can list, purchase, and trade NFTs from a wide array of categories including digital art, music, gaming assets, and collectibles. Enjoy a user-friendly interface, intuitive browsing experience, and secure transaction flows backed by blockchain technology.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/OpenseaNftMarketplace-jpg.jpg",
  },
  {
    title: "Royalties for Creators",
    icon: "DollarSign",
    description: "Earn royalties every time your NFT is resold. Empower creators with built-in royalty systems that allow them to earn a percentage of every secondary sale of their NFTs. Set your own royalty rate during minting and ensure lifelong income from your digital creations. Transparent, automated royalty payments are processed via smart contracts.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/OpenseaRoyalties-jpg.jpg",
  },
  {
    title: "Profile & Collection Pages",
    icon: "User",
    description: "Custom pages for users and collections with stats and follower counts. Each user has access to a customizable profile page showcasing their owned, created, and listed NFTs. Organize works into collections, view transaction history, and track performance with follower metrics, likes, and collection stats. Personalize your presence and gain recognition in the NFT space.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/OpenseaProfilePage-jpg.jpg",
  },
  {
    title: "Auction & Fixed Price Sales",
    icon: "Clock",
    description: "Sell NFTs using timed auctions or fixed price listings. Choose from multiple sales formats including fixed-price listings, timed auctions, Dutch auctions, and English auctions. Maximize your earnings by setting custom start times, reserve prices, and bidding durations. Buyers can participate easily with real-time bidding updates and notifications.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/OpenseaAuction-jpg.jpg",
  },
  {
    title: "Search & Filters",
    icon: "Search",
    description: "Find NFTs using category, price, and rarity filters. Use advanced search and filtering options to quickly discover NFTs that align with your preferences. Sort by category, price range, creator, rarity, popularity, and more. Our intuitive system helps both casual browsers and serious collectors find exactly what they need with ease.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/OpenseaSearchFilter-jpg.jpg",
  },
  {
    title: "Analytics Dashboard",
    icon: "BarChart2",
    description: "Track NFT volume, floor prices, trending collections, and more. Gain valuable insights into the NFT ecosystem with a powerful analytics dashboard. Monitor key metrics like trading volume, floor price trends, top-performing collections, individual asset performance, and wallet activity. Tailored for collectors, investors, and creators looking to stay ahead in the market.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/OpenseaAnalyticalDashboard-jpg.jpg",
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
