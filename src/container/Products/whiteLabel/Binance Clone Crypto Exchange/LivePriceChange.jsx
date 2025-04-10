'use client';

import WrapperContainer from "@/Layout/WrapperContainer";

const StaticMarketPrices = () => {
  const cryptoPrices = {
    BTC: "$67,000",
    ETH: "$3,200",
    SOL: "$140",
    BNB: "$350",
    XRP: "$0.60",
    DOGE: "$0.12",
    ADA: "$0.55",
    MATIC: "$0.85",
  };

  const stockPrices = {
    AAPL: "$185",
    GOOGL: "$140",
    TSLA: "$200",
    AMZN: "$145",
    META: "$280",
    MSFT: "$315",
    NFLX: "$420",
    NVDA: "$880",
  };

  const nftFloorPrices = {
    BAYC: "15 ETH",
    Azuki: "4 ETH",
    MAYC: "8 ETH",
    PudgyPenguins: "5 ETH",
    CloneX: "3 ETH",
    DeGods: "2.5 ETH",
    Doodles: "1.8 ETH",
  };

  const commodityPrices = {
    Gold: "$2,150/oz",
    Silver: "$25/oz",
    CrudeOil: "$80/barrel",
    NaturalGas: "$2.60",
    Platinum: "$950/oz",
    Copper: "$4.50/lb",
  };

  const indexPrices = {
    "S&P 500": "4,550",
    "Dow Jones": "38,000",
    NASDAQ: "14,200",
    Nifty50: "22,000",
    Sensex: "72,000",
    FTSE100: "7,800",
    Nikkei225: "39,000",
  };

  const forexPrices = {
    "USD/INR": "83.10",
    "EUR/USD": "1.09",
    "GBP/USD": "1.27",
    "USD/JPY": "150.25",
    "AUD/USD": "0.66",
    "USD/CHF": "0.88",
  };

  const renderSection = (title, data) => (
    <div className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white/20 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-md p-4 space-y-2 cursor-pointer">
      <h2 className="text-yellow-300 text-lg font-bold mb-2">{title}</h2>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="flex justify-between text-sm border-b border-white/10 py-1">
          <span>{key}</span>
          <span className="text-green-300">{value}</span>
        </div>
      ))}
    </div>
  );

  return (
    <WrapperContainer>
        <div className="min-h-screen bg-gradient-to-br from-gray-700 via-black mb-[20px] to-gray-800 p-6 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {renderSection("📈 Cryptocurrencies", cryptoPrices)}
      {renderSection("🏦 Stock Market", stockPrices)}
      {renderSection("🖼️ NFT Floor Prices", nftFloorPrices)}
      {renderSection("🛢️ Commodities", commodityPrices)}
      {renderSection("📊 Indices", indexPrices)}
      {renderSection("💱 Forex", forexPrices)}
    </div>
    </WrapperContainer>
  );
};

export default StaticMarketPrices;
