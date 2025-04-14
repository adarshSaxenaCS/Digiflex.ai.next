import React from 'react'
import Features from '@/container/products/whiteLabel/Binance Clone Crypto Exchange/binanceFeatures';
import Precautions from '@/container/products/whiteLabel/Binance Clone Crypto Exchange/Precautions';
import LivePriceChange from '@/container/products/whiteLabel/Binance Clone Crypto Exchange/StaticMarketPrices';

export default function Body() {
  return (
    <div>
      <Features/>
      <Precautions/>
      <LivePriceChange/>
    </div>
  )
}


