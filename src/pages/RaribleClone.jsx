import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Rarible Clone/Body';
import Head from 'next/head';

export default function RaribleClone() {
    return (
        <>
            <Head>
                <title>Build Your Own Rarible Clone | NFT Marketplace Development</title>
                <meta name="description" content="Create a decentralized NFT marketplace with a Rarible clone script. Explore Rarible, its NFT marketplace, and how to launch your own platform for buying and selling NFTs." />
                <meta name="keywords" content="rarible, rarible clone script, raribler, rarible nft marketplace, nft rarible, rarible marketplace" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Launch Your Own NFT Marketplace with a Rarible Clone"
                description="Create a decentralized NFT marketplace with a Rarible clone script. Explore Rarible, its NFT marketplace, and how to launch your own platform for buying and selling NFTs."
            />
            <Body />
        </>

    )
}
