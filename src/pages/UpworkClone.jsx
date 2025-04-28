import Hero from '@/container/products/WhiteLabel/AllInOneCode/Hero';
import Body from '@/container/products/WhiteLabel/Upwork Clone/Body';
import Head from 'next/head';

export default function UpworkClone() {
  return (
    <>
      <Head>
        <title>Upwork & Its Alternatives: Find Freelancers or Build Your Own Platform</title>
        <meta name="description" content="Explore Upwork for hiring top freelancers or discover Upwork alternatives. Learn about Upwork clone scripts, virtual assistants, and how to find skilled freelancers." />
        <meta name="keywords" content="upwork, upwork clone, up work, upwork virtual assistant, upwork alternative, upwork freelancer, upwork find freelancers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero
        title="Hire Top Freelancers or Create Your Own Upwork-Style Platform"
        description="Explore Upwork for hiring top freelancers or discover Upwork alternatives. Learn about Upwork clone scripts, virtual assistants, and how to find skilled freelancers."
      />
      <Body />
    </>
  )
}