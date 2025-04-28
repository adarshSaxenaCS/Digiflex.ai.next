import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Amazon Clone/Body';
import Head from 'next/head';

export default function AmazonClone() {
  return (
    <>
      <Head>
        <title>Build Your Own Amazon-Style Ecommerce Business | Best Amazon Clone Solutions</title>
        <meta name="description" content="Launch your ecommerce business with an Amazon clone platform. Explore Amazon-style ecommerce websites, platforms, and business opportunities for sale." />
        <meta name="keywords" content="amazon clone, amazon ecommerce business, amazon commerce, ecommerce amazon business, amazon ecommerce business for sale, amazon e commerce platform, clone a willy amazon, amazon ecommerce website, amazon ecom" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero
        title="Start Your Own Amazon-Style Ecommerce Business Today"
        description="Launch your ecommerce business with an Amazon clone platform. Explore Amazon-style ecommerce websites, platforms, and business opportunities for sale."
      />
      <Body />
    </>
  )
}