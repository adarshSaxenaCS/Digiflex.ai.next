import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Tinder Clone/Body';
import Head from 'next/head';

export default function TinderClone() {
    return (

        <>
            <Head>
                <title>Find Love & Connections on Tinder | The Best Dating App</title>
                <meta name="description" content="Explore Tinder, the world’s most popular dating app. Meet new people, find matches, and start chatting. Join the best Tinder dating site and app today!" />
                <meta name="keywords" content="tinder, tinder app, tinder application, tinder dating, tinder dating site, tinder uk, tinder dating app, tinder dating websites, tinder website, free tinder app" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Meet & Connect with Singles on Tinder – The Leading Dating App"
                description="Explore Tinder, the world’s most popular dating app. Meet new people, find matches, and start chatting. Join the best Tinder dating site and app today!"
            />
            <Body />
        </>

    )
}
