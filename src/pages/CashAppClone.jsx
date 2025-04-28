import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Cash App Clone/Body';
import Head from 'next/head';

export default function CashAppClone() {
  return (
    <>
      <Head>
        <title>Build Your Own Cash App Clone | Secure Payment App Development</title>
        <meta name="description" content="Create a secure and feature-rich payment app with a Cash App clone script. Explore open-source Cash App clone solutions on GitHub and build your own money transfer platform." />
        <meta name="keywords" content="cash app clone, cash app clone github, cashapp clone github, cash app clone app, cash app clone script, clone cash app, cashapp clone app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero
        title="Launch Your Own Payment App with a Cash App Clone"
        description="Create a secure and feature-rich payment app with a Cash App clone script. Explore open-source Cash App clone solutions on GitHub and build your own money transfer platform."
      />
      <Body />
    </>
  )
}