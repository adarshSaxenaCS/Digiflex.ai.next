import AlternateGridFeatures from "@/container/Products/whiteLabel/AllInOneCode/AlternateGridFeatures";

const binanceFeatures = [
  {
    title: "Spot Trading",
    icon: "TrendingUp",
    description: "Buy and sell crypto instantly.",
    detailContent: "Trade cryptocurrencies like BTC, ETH at market or limit prices.",
    image: "https://i.pinimg.com/736x/75/20/52/752052aeedfaa78c2f27f442f197d310.jpg",
  },
  {
    title: "Futures Trading",
    icon: "Activity",
    description: "Trade with leverage.",
    detailContent: "Go long or short with leverage to maximize gains.",
    image: "https://i.pinimg.com/736x/3d/9c/29/3d9c297e87452a9edc6d8ee0ca58594d.jpg",
  },
  {
    title: "Staking & Savings",
    icon: "DollarSign",
    description: "Earn passive income.",
    detailContent: "Lock crypto in flexible or fixed terms to earn rewards.",
    image: "https://i.pinimg.com/736x/4e/e3/5d/4ee35d9f8642c6d7bdaf5d2e10ea3e72.jpg",
  },
  {
    title: "Secure Wallet",
    icon: "Shield",
    description: "Top-notch security.",
    detailContent: "Assets are secured with multi-layer protection and cold storage.",
    image: "https://i.pinimg.com/736x/66/61/27/666127427877528b3b454fd8d24e905c.jpg",
  },
  {
    title: "P2P Trading",
    icon: "Users",
    description: "Trade directly with other users.",
    detailContent: "Buy and sell crypto with local currency using peer-to-peer trades.",
    image: "https://img.freepik.com/free-vector/illustrated-stock-exchange-data_23-2148584366.jpg?t=st=1744106314~exp=1744109914~hmac=68777eea9c07f61117d5e356994ad4e566719b3b3844987dae6afa2231af26ad&w=996",
  },
  {
    title: "Launchpad",
    icon: "Rocket",
    description: "Invest in new crypto projects.",
    detailContent: "Participate in token sales of emerging crypto startups.",
    image: "https://img.freepik.com/free-vector/trading-graph-rising-high-with-rocket-gradient-background-with-sparkling-stars-flat-vector-illustration_1284-80325.jpg?t=st=1744106385~exp=1744109985~hmac=a0c6012c8501f54511340f238482475dd06704154a716b3eef933ea779a38e2d&w=826",
  },
  {
    title: "NFT Marketplace",
    icon: "Image",
    description: "Buy and sell NFTs.",
    detailContent: "Explore digital collectibles and NFTs from global creators.",
    image: "https://img.freepik.com/free-vector/gradient-nft-concept_23-2148964595.jpg?t=st=1744106432~exp=1744110032~hmac=769f9e56424e31d3cd95ac10a22e3fcbdc1c40631c1e6d9308ef59f00dd0e24a&w=996",
  },
  {
    title: "API Integration",
    icon: "Code",
    description: "Automate your trading.",
    detailContent: "Use Binance API for trading bots and integrations.",
    image: "https://img.freepik.com/free-photo/application-programming-interface-hologram_23-2149092255.jpg?t=st=1744106488~exp=1744110088~hmac=0cb2c237362dcef6ce85799f2637be3a32bc305cc8c7118691a1b8d172942b65&w=996",
  },
];

const BinanceCloneFeatures = () => {
  return (
    <AlternateGridFeatures
      title="Key Features of Our Binance Clone"
      description="Build your own crypto exchange platform inspired by Binance's power and flexibility."
      services={binanceFeatures}
    />
  );
};

export default BinanceCloneFeatures;
