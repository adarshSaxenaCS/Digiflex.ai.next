import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Taskrabbit Clone/Body';
import Head from 'next/head';

export default function TaskRabbitClone() {
    return (

        <>
            <Head>
                <title>Build a TaskRabbit Clone | On-Demand Service Marketplace Solution</title>
                <meta name="description" content="Create your own on-demand service platform with a TaskRabbit clone. Explore TaskRabbit alternatives, cleaning services, junk removal, and personal concierge solutions." />
                <meta name="keywords" content="taskrabbit clone, taskrabbit, task rabbit, taskrabbit cleaning, personal concierge services, taskrabbit app, task rabbit junk removal, taskrabbit alternative" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Hero
                title="Launch Your Own TaskRabbit-Style On-Demand Service Marketplace"
                description="Create your own on-demand service platform with a TaskRabbit clone. Explore TaskRabbit alternatives, cleaning services, junk removal, and personal concierge solutions."
            />
            <Body />
        </>

    )
}
