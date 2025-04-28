import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Netflix Clone OTT/Body';
import Head from 'next/head';

export default function NetflixClone() {
    return (

        <>
            <Head>
                <title>Build a Netflix Clone | Best On-Demand Streaming App Solutions</title>
                <meta name="description" content="Create your own video streaming platform with a Netflix clone app. Explore the best Netflix clone scripts, apps, and website solutions for on-demand entertainment." />
                <meta name="keywords" content="netflix, netflix streaming, netflix clone, clone series netflix, netflix clone script, netflix clone app, best netflix clone app, clone app of netflix" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Launch Your Own Streaming Platform with a Netflix Clone"
                description="Create your own video streaming platform with a Netflix clone app. Explore the best Netflix clone scripts, apps, and website solutions for on-demand entertainment."
            />
            <Body />
        </>

    )
}
