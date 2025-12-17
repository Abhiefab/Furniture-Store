import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import PRODUCTS from "../../data/products";
import "./ProductDetails.css";

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return <p style={{ textAlign: "center" }}>Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(product, qty);
  };

  return (
    <section className="product-page">

      <div className="product-hero">
        <h1>{product.name}</h1>
      </div>

      <div className="product-container">

        <div className="product-image">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>

          <p className="product-desc">{product.description}</p>

          <h3 className="product-price">
            {formatINR(product.priceINR)}
          </h3>

          <div className="product-actions">
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />

            <button onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className="product-meta">
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
