import Hero from "@/container/products/WhiteLabel/AllInOneCode/Hero";
import Body from "@/container/products/WhiteLabel/Foodpanda Clone/Body";
import Head from "next/head";
export default function FoodPanda() {
  return (
    <>
      <Head>
        <title>
          Build Your Own FoodPanda Clone | Best Food Delivery App Solution
        </title>
        <meta
          name="description"
          content="Launch a feature-rich FoodPanda clone app with the best script for food delivery. Create your own on-demand food ordering and delivery platform today!"
        />
        <meta
          name="keywords"
          content="foodpanda clone, food panda clone, foodpanda clone app, foodpanda clone script, foodpanda, food panda, foodpanda delivery, foodpanda food delivery"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero
        title="Build Your Own FoodPanda Clone | Best Food Delivery App Solution"
        description="Launch a feature-rich FoodPanda clone app with the best script for food delivery. Create your own on-demand food ordering and delivery platform today!"
      />
      <Body />
    </>
  );
}
