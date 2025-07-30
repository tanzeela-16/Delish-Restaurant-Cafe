import React from "react";
import Hero from "../sections/Hero";
import Promo from "../sections/Promo";
import Category from "../sections/Category";
import Schedule from "../sections/Schedule";
import MenuSection from "../sections/MenuSection";
import Chef from "../sections/Chefs";
import BlogInsights from "../sections/BlogInsights";


function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <Category />
      <Schedule />
      <MenuSection />
      <Chef />
      <BlogInsights />

    </>
  );
}

export default Home;
