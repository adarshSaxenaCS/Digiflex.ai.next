import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Gojek Clone/Body';
import Head from 'next/head';

export default function GojekClone() {
    return (

        <>
            <Head>
                <title>Build Your Own Gojek Clone App | All-in-One On-Demand Service Platform</title>
                <meta name="description" content="Create a multi-service on-demand platform with a Gojek clone app. Get the best Gojek clone script for taxi booking, food delivery, and other services in one app." />
                <meta name="keywords" content="gojek clone app, gojek clone app on demand multi service app, gojek clone app development, gojek clone script, clone gojek, gojek, gojek application, gojek clone" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Launch Your Own On-Demand Multi-Service App with a Gojek Clone"
                description="Create a multi-service on-demand platform with a Gojek clone app. Get the best Gojek clone script for taxi booking, food delivery, and other services in one app."
            />
            <Body />
        </>

    )
}
