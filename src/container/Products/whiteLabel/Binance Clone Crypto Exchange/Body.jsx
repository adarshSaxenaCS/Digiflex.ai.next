import BinanceCloneFeatures from "@/container/products/WhiteLabel/Binance Clone Crypto Exchange/BinanceCloneFeatures";
import StartTrading from "@/container/products/WhiteLabel/Binance Clone Crypto Exchange/StartTrading";
import StaticMarketPrices from "@/container/products/WhiteLabel/Binance Clone Crypto Exchange/StaticMarketPrices";
import Faq from "@/components/Faq";
import { BinanceFaqs } from "../FaqData";

export default function Body() {
  return (
    <>
      <BinanceCloneFeatures />
      <StartTrading />
      <StaticMarketPrices />
      <Faq faqs={BinanceFaqs} />
    </>
  );
}
