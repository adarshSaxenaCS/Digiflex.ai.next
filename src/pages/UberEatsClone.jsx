import Hero from "@/container/products/whiteLabel/AllInOneCode/Hero";
import Body from "@/container/Products/whiteLabel/UberEats Clone/Body";
import React from "react";
import Head from "next/head";
export default function UserEatsClone() {
  return (
    <>
      <Head>
        <title>
          Build Your Own UberEats Clone App | Best Food Delivery Solution
        </title>
        <meta
          name="description"
          content="Create a powerful food delivery platform with an UberEats clone app. Get the best Uber Eats clone script, open-source solutions on GitHub, and start your business today!"
        />
        <meta
          name="keywords"
          content="ubereats clone, ubereats clone app, uber eats clone, uber eats clone app, clone uber eats, ubereats like clone app, ubereats clone github, ubereats, uber eats"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero
        title="Build Your Own UberEats Clone App | Best Food Delivery Solution"
        description="Create a powerful food delivery platform with an UberEats clone app. Get the best Uber Eats clone script, open-source solutions on GitHub, and start your business today!"
      />
      <Body />
    </>
  );
}
