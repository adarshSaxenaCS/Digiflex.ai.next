import Hero from "@/container/Products/ReadyMade/BookingEngine/Hero";
import Body from "@/container/Products/ReadyMade/BookingEngine/Body";
import React from "react";
import Head from "next/head";
function BookingEngine() {
  return (
    <div>
      <Head>
        <title>
          Best Booking Engine for Hotels | Online Hotel Reservation System
        </title>
        <meta
          name="description"
          content="Discover the best booking engine for hotels to streamline reservations. Get an online hotel booking system with advanced features for seamless hotel management."
        />
        <meta
          name="keywords"
          content="booking engine for hotels, booking engine software, best booking engine for hotels, online hotel booking system, hotel reservation and booking system, hotel booking system free, hotel reservation booking system, internet booking engine for hotels, hotels booking system, innroad booking engine"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Body />
    </div>
  );
}

export default BookingEngine;
