import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Uber Clone/Body';
import Head from 'next/head';

export default function UberClone() {
    return (

        <>
            <Head>
                <title>Build Your Own Uber Clone | Best Taxi & Food Delivery App Solution</title>
                <meta name="description" content="Create a feature-rich Uber clone app for ride-hailing and food delivery. Get the best Uber clone script, source code, and UberEats clone app for your business." />
                <meta name="keywords" content="uber clone, uber clone app, ubereats clone, uber clone script, script clone uber, ubereats clone app, uber clon, best uber clone app, uber clone app source code, buy uber clone app, uber" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Launch Your Own Ride-Hailing & Delivery Business with an Uber Clone"
                description="Create a feature-rich Uber clone app for ride-hailing and food delivery. Get the best Uber clone script, source code, and UberEats clone app for your business."
            />
            <Body />
        </>

    )
}
