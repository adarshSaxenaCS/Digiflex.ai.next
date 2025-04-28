import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Noon Clone/Body';
import Head from 'next/head';

export default function NoonClone() {
    return (

        <>
            <Head>
                <title>Noon Online Shopping | Shop the Best Deals on Fashion, Electronics & More</title>
                <meta name="description" content="Shop at Noon for the latest fashion, shoes, electronics, and more. Discover great deals on the Noon online shopping website and enjoy a seamless shopping experience." />
                <meta name="keywords" content="noon shopping, noon online shopping, noon shoes, noon shopping online, noon store, noon shop, noon online shopping website, noon online store, shop noon" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Hero
                title="Shop the Best Deals at Noon – Your Online Shopping Destination"
                description="Shop at Noon for the latest fashion, shoes, electronics, and more. Discover great deals on the Noon online shopping website and enjoy a seamless shopping experience."
            />
            <Body />
        </>

    )
}
