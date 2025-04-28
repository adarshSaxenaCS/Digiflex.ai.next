import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Zillo_clone_real_estate/Body';
import Head from 'next/head';

export default function Zillo_clone_real_estate() {
    return (

        <>
            <Head>
                <title>Zillow Homes for Sale & Real Estate Listings | Buy, Sell & Rent</title>
                <meta name="description" content="Find Zillow homes for sale, real estate listings, home values, and Zestimate estimates. Buy, sell, or rent your house with Zillow. Explore the Zillow app today!" />
                <meta name="keywords" content="zillow homes for sale, zillow real estate, zillow home values, sell house to zillow, zillow homes for rent, zillow buy my house, zillow zestimate, zillow homes for sale near me, zillow houses for sale, zillow app, zillow homes, zillow for sale by owner" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Find Your Dream Home with Zillow – Buy, Sell & Rent Real Estate"
                description="Find Zillow homes for sale, real estate listings, home values, and Zestimate estimates. Buy, sell, or rent your house with Zillow. Explore the Zillow app today!"
            />
            <Body />

        </>

    )
}
