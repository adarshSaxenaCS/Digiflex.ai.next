import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Instacart Clone/Body';
import Head from 'next/head';

export default function InstaCartClone() {
    return (

        <>
            <Head>
                <title>Instacart & Top Grocery Delivery Apps | Fast & Affordable Online Shopping</title>
                <meta name="description" content="Get groceries delivered fast with Instacart and top grocery delivery apps. Find the best grocery stores near you, compare prices, and enjoy the cheapest online grocery shopping." />
                <meta name="keywords" content="instacart, instacarting, instacart shopper, grocery delivery app, instacart delivery, instacart app, instacart application, instacart near me, insta delivery app, top grocery delivery apps, best grocery delivery app, cheapest online grocery shopping, best grocery store near me, cheapest grocery online" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Shop Smart with Instacart & The Best Grocery Delivery Apps"
                description="Get groceries delivered fast with Instacart and top grocery delivery apps. Find the best grocery stores near you, compare prices, and enjoy the cheapest online grocery shopping."
            />
            <Body />
        </>

    )
}
