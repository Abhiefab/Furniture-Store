import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../assets/Products/Products";
import Promo from "../components/Promo/Promo";
import AboutSection from "../components/AboutSection/AboutSection";
import AboutSection2 from "../components/AboutSection/AboutSection2";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Promo />
      <AboutSection />
      <AboutSection2 />
    </>
  );
}
