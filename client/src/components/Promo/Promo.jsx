import React from "react";
import "./Promo.css";

// update this path to the image you want to use (example uses an existing product image)
import promoImg from "../../assets/Products/p9.png";

export default function Promo() {
  return (
    <section className="promo" aria-label="Promo - Create your dream space">
      <div className="promo-inner container">
        <div className="promo-left">
          <h2 className="promo-title">Create Your Dream Space</h2>
          <p className="promo-copy">
            Transform your living space into a personalized oasis with our wide
            selection of furniture and decor.
          </p>

          <a className="promo-cta" href="/products" aria-label="View collection">
            View Collection
          </a>
        </div>

        <div className="promo-right" aria-hidden="true">
          <div className="promo-image-wrap">
            <img src={promoImg} alt="" className="promo-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
