import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Twitter Clone MicroBlogging/Body';
import Head from 'next/head';

export default function TwitterClone() {
    return (

        <>
            <Head>
                <title>Best Microblogging Platforms & Twitter Clone Solutions | Build Your Own Site</title>
                <meta name="description" content="Discover the best microblogging platforms or create your own Twitter clone with a powerful script or app. Explore top microblogging sites for real-time content sharing." />
                <meta name="keywords" content="microblogging, microblogging platforms, microblogging site, micro blogging platform, best microblogging platform, twitter clone, twitter clone script, twitter clone app, best microblogging site, best microblogging" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Explore the Best Microblogging Platforms or Build a Twitter Clone"
                description="Discover the best microblogging platforms or create your own Twitter clone with a powerful script or app. Explore top microblogging sites for real-time content sharing."
            />
            <Body />
        </>

    )
}
