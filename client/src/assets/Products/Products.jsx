import "./Products.css";
import PRODUCTS from "../../data/products";
import React from "react";
import { Link } from "react-router-dom";

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

export default function Products({ items = PRODUCTS }) {
  return (
    <section className="products-section" id="shop">
      <div className="container">

        <div className="section-header">
          <span className="kicker">RECENTLY RELEASED</span>
          <h2 className="section-title">Latest Collection</h2>
        </div>

        <div className="products-grid">
          {items.slice(0, 8).map((p) => (
            <article key={p.id} className="product-card">
              <Link to={`/product/${p.id}`} className="product-link">

                <div className="image-wrap">
                  {/* ✅ class restored */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="product-image"
                  />
                </div>

                <div className="product-meta">
                  <div className="product-name">{p.name}</div>

                  <div className="product-price">
                    {/* ✅ price-current restored */}
                    <span className="price-current">
                      {formatINR(p.priceINR)}
                    </span>
                  </div>
                </div>

              </Link>
            </article>
          ))}
        </div>

       
        <div className="products-footer">
         <Link to="/shop" className="view-all-btn">
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}
