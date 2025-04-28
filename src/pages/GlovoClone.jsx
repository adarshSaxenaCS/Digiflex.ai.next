import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Glovo Clone/Body';
import Head from 'next/head';

export default function GloveClone() {
    return (
        <>
            <Head>
                <title>Build a Glovo Clone | On-Demand Delivery App Development</title>
                <meta name="description" content="Create your own on-demand delivery platform with a Glovo clone. Explore Glovo app features, delivery solutions, and how to launch a successful Glovo-style business." />
                <meta name="keywords" content="glovo, glovo clone, glovo delivery, glovo app, glovo uk, glovo mc, glovo store, glovo online" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Launch Your Own On-Demand Delivery Platform Like Glovo"
                description="Create your own on-demand delivery platform with a Glovo clone. Explore Glovo app features, delivery solutions, and how to launch a successful Glovo-style business."
            />
            <Body />
        </>

    )
}
