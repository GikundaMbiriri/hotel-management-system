import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Service from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Please have a look at what we offer"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
    </>
  );
}
