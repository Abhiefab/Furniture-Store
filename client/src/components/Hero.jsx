import React from "react";
import "./Hero.css";
import bgImage from "../assets/BedRoom.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const handleShopClick = (e) => {
    e.preventDefault();
    // smooth scroll to #shop section (create an element with id="shop" later)
    const el = document.querySelector("#shop");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  

  return (
    <section
      className="hero"
      aria-label="Hero — Furnish your home"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-inner container">
        <div className="hero-left">
          <p className="eyebrow">FEEL GOOD IN YOUR HOME</p>

          <h1 className="hero-title">
            Furnish Your Home <br />
            with Furniq
          </h1>

          <p className="hero-sub">
            Curated furniture crafted for comfort and timeless living.
          </p>

          <div className="hero-cta-row">
            <button
              type="button"
              className="cta"
              onClick={handleShopClick}
              aria-label="Shop Now"
            >
              Shop Now
            </button>
            <a href="#shop" className="cta-ghost" onClick={(e)=>{e.preventDefault(); handleShopClick(e);}}>
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
