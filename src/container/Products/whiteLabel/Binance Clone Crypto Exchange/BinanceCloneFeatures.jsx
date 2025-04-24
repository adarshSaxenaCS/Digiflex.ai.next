import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const binanceFeatures = [
  {
    title: "Spot Trading",
    icon: "TrendingUp",
    description: "Buy and sell crypto instantly.",
    detailContent:
      "Trade cryptocurrencies like BTC, ETH at market or limit prices with real-time data and deep liquidity. Execute fast transactions and take advantage of low trading fees to maximize profits.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BinanceFeaturesImg1-gif.gif",
    alt:'BinanceFeaturesImg1-gif'
  },
  {
    title: "Futures Trading",
    icon: "Activity",
    description: "Trade with leverage.",
    detailContent:
      "Go long or short with leverage up to 125x and manage risk using advanced tools like stop-loss, take-profit, and margin calculators. Ideal for experienced traders seeking higher potential returns.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BinanceFutureTrading.gif",
    alt:'BinanceFeaturesImg2-gif'
  },
  {
    title: "Staking & Savings",
    icon: "DollarSign",
    description: "Earn passive income.",
    detailContent:
      "Lock your crypto assets in flexible or fixed savings plans to earn regular rewards. Support blockchain networks through staking and enjoy predictable returns while maintaining custody of your funds.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BinanceStacking-gif.gif",
    alt:'BinanceFeaturesImg3-gif'
  },
  {
    title: "Secure Wallet",
    icon: "Shield",
    description: "Top-notch security.",
    detailContent:
      "Your digital assets are stored using industry-leading security protocols including cold wallet storage, two-factor authentication, and AI-based fraud detection systems.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BinanceSecureWallet-gif.gif",
    alt:'BinanceFeaturesImg4-gif'
  },
  {
    title: "P2P Trading",
    icon: "Users",
    description: "Trade directly with other users.",
    detailContent:
      "Enjoy localized crypto trading by connecting directly with buyers and sellers. Use various payment methods securely, with escrow protection ensuring safe transactions for all parties.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BinanceP2pTrading-gif.gif",
    alt:'BinanceFeaturesImg5-gif'
  },
  {
    title: "Launchpad",
    icon: "Rocket",
    description: "Invest in new crypto projects.",
    detailContent:
      "Access exclusive token launches and support early-stage blockchain projects. Participate in vetted, high-potential investments with transparency and guaranteed allocations.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BinanceLaunchpad-gif.gif",
    alt:'BinanceFeaturesImg6-gif'
  },
  {
    title: "NFT Marketplace",
    icon: "Image",
    description: "Buy and sell NFTs.",
    detailContent:
      "Explore a wide range of digital art, collectibles, and virtual goods. Mint, list, and trade NFTs with low fees and seamless wallet integration within the Binance ecosystem.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BinanceNftMarketPlace-gif.gif",
    alt:'BinanceFeaturesImg7-gif'
  },
  {
    title: "API Integration",
    icon: "Code",
    description: "Automate your trading.",
    detailContent:
      "Utilize Binance’s powerful API to build custom bots, automate trading strategies, and integrate with third-party platforms. Get real-time data feeds and execute trades with precision.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BinanceApiIntegration-jpg.jpg",
    alt:'BinanceFeaturesImg8-jpg'
  },
];

const BinanceCloneFeatures = () => {
  return (
    <WrapperContainer>
      <section className="p-4 bg-gray-100">
        <Heading className="text-3xl font-bold text-center mb-4">Key Features of Our Binance Clone</Heading>
        <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
          Build your own crypto exchange platform inspired by Binance's power and flexibility.
        </p>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 px-2 pb-4 h-[450px]">
            {binanceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow w-[380px] flex-shrink-0"
              >
                <div className="overflow-hidden rounded">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded transform transition duration-500 hover:rotate-3 hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <p className="mt-2 text-sm text-gray-500">{feature.detailContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default BinanceCloneFeatures;
