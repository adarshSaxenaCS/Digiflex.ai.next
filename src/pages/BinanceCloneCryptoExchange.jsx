import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero'
import Body from '@/container/products/WhiteLabel/Binance Clone Crypto Exchange/Body';
import Head from 'next/head';

export default function BinanceCloneCryptoExchange() {
  return (
    <>
      <Head>
        <title>Build Your Own Binance Clone | Best Crypto Exchange & Trading Platform</title>
        <meta name="description" content="Create a powerful crypto exchange with a Binance clone. Explore top crypto trading platforms, Binance exchange features, and the best places to buy crypto securely." />
        <meta name="keywords" content="binance clone, crypto exchange, crypto trading platform, best crypto trading platform, binance trading, binance exchange, best place to buy crypto" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero
        title="Launch Your Own Crypto Exchange with a Binance Clone"
        description="Create a powerful crypto exchange with a Binance clone. Explore top crypto trading platforms, Binance exchange features, and the best places to buy crypto securely."
      />
      <Body />
    </>
  )
}