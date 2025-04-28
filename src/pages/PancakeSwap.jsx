import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Pancakeswap Clone/Body';
import Head from 'next/head';

export default function PancakeSwap() {
    return (

        <>
            <Head>
                <title>Create Your Own PancakeSwap Clone | DeFi & Currency Exchange Solutions</title>
                <meta name="description" content="Launch a decentralized finance (DeFi) platform with a PancakeSwap clone. Explore foreign exchange, currency trading, and money exchange solutions for seamless transactions." />
                <meta name="keywords" content="pancakeswap, pancakeswap clone, defi platform, foreign exchange, currency trading, currency exchange near me, currency exchange, money exchange" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Build Your Own DeFi & Currency Exchange Platform Like PancakeSwap"
                description="Launch a decentralized finance (DeFi) platform with a PancakeSwap clone. Explore foreign exchange, currency trading, and money exchange solutions for seamless transactions."
            />
            <Body />
        </>

    )
}
