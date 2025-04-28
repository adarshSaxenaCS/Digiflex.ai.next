import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Tiktok Clone/Body';
import Head from 'next/head';

export default function TikTokClone() {
    return (

        <>
            <Head>
                <title>Build a TikTok Clone | Best Short Video App Development Solution</title>
                <meta name="description" content="Create your own short video platform with a TikTok clone app. Explore the best TikTok clone scripts, website solutions, and app development features." />
                <meta name="keywords" content="tiktok clone, tiktok clone app, build a tiktok clone, tiktok clone app development, clone tiktok, tiktok clone website, tiktok app clone, best tiktok clone, build tiktok clone" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Launch Your Own Short Video Platform with a TikTok Clone"
                description="Create your own short video platform with a TikTok clone app. Explore the best TikTok clone scripts, website solutions, and app development features."
            />
            <Body />
        </>

    )
}
