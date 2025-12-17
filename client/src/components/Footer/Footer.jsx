import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP ROW: Logo + Social Icons */}
        <div className="footer-top">
          <h2 className="footer-logo">FURNIQ</h2>

          <div className="footer-social">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="footer-grid">

          {/* Brand + Newsletter */}
          <div className="footer-brand">
            <h4 className="footer-title">Sign up for Exclusive News</h4>
            <p className="footer-text">
              Stay connected with us and never miss a beat.
            </p>

            <form className="newsletter">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Email address"
              />
              <button type="submit">
                Subscribe <span>↗</span>
              </button>
            </form>

            <p className="footer-terms">
              By submitting the form you agree with our{" "}
              <a href="#">Terms & Conditions</a>
            </p>
          </div>

          {/* Store */}
          <div className="footer-column">
            <h4>Store</h4>
            <p>7050240563</p>
            <p>avinashsingh353569@gmail.com</p>
            <p>
              Law gate Road LPU.<br />
              Tea point, Phagwara Punjab
            </p>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Shop</a>
            <a href="#">Blog</a>
            <a href="#">Reviews</a>
            <a href="#">Contact us</a>
          </div>

          {/* Service */}
          <div className="footer-column">
            <h4>Service</h4>
            <a href="#">Help & FAQ’s</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Return Policy</a>
            <a href="#">Coming Soon</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
