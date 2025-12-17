import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo1.png";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { cartItems } = useCart();
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // close profile dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest(".profile-menu")) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="lanima-nav">
      <div className="nav-inner">

        {/* Logo */}
         <Link to="/" className="logo">
        <img src={logo} alt="Furniq Logo" />
      </Link>

        {/* Center nav (desktop) */}
        <nav className="center-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>

            <li className="profile-menu">
              <button
                className="profile-btn"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                {user ? `Hi, ${user.name}` : "Profile"}
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  {user ? (
                    <>
                      <Link to="/my-orders">My Orders</Link>
                      <button
                        className="logout-btn"
                        onClick={() => {
                          logout();
                          navigate("/login");
                        }}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">Login</Link>
                      <Link to="/signup">Sign Up</Link>
                    </>
                  )}
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Right actions */}
        <div className="actions">

          {/* Cart (desktop only) */}
          <Link to="/cart" className="icon-btn cart desktop-only">
            🛒
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${open ? "visible" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/shop" onClick={() => setOpen(false)}>Shop</Link></li>
          <li><Link to="/reviews" onClick={() => setOpen(false)}>Reviews</Link></li>
          <li><Link to="/cart" onClick={() => setOpen(false)}>Cart</Link></li>

          {user ? (
            <>
              <li><Link to="/my-orders" onClick={() => setOpen(false)}>My Orders</Link></li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
              <li><Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
