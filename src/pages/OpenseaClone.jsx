import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Opensea Clone/Body';
import Head from 'next/head';

export default function OpenseaClone() {
    return (

        <>
            <Head>
                <title>OpenSea: The Largest NFT Marketplace for Buying & Selling Digital Assets</title>
                <meta name="description" content="Explore OpenSea, the biggest NFT marketplace for buying, selling, and trading digital collectibles. Discover rare NFTs and start your journey on OpenSea.io today." />
                <meta name="keywords" content="opensea+, opensea nft, opensea, opensea io, biggest nft marketplace, nft opensea" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Discover, Buy & Sell NFTs on OpenSea – The Largest NFT Marketplace"
                description="Explore OpenSea, the biggest NFT marketplace for buying, selling, and trading digital collectibles. Discover rare NFTs and start your journey on OpenSea.io today."
            />
            <Body />
        </>

    )
}
