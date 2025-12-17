import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import "./Cart.css";

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    setSelectedAddress,
    selectedAddress,
  } = useCart();

  const { user } = useContext(AuthContext);

  const [address, setAddress] = useState(null);
  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    house: "",
    area: "",
    landmark: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("address");
    if (saved) {
      const parsed = JSON.parse(saved);
      setAddress(parsed);
      setSelectedAddress(parsed);
    }
  }, [setSelectedAddress]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const saveAddress = () => {
    setAddress(form);
    setSelectedAddress(form); // ✅ critical
    localStorage.setItem("address", JSON.stringify(form));
    setEditing(false);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.priceINR * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="cart-page empty-cart">
        <div className="empty-cart-box">
          <h1>Your Cart is Empty</h1>
          <Link to="/shop" className="empty-cart-btn">
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>

      {!user && (
        <div className="login-warning">
          Please <Link to="/login">login</Link> to continue
        </div>
      )}

      {/* ADDRESS */}
      <div className="address-box">
        <div className="address-header">
          <h3>Delivery Address</h3>
          {address && !editing && (
            <button onClick={() => setEditing(true)}>Change</button>
          )}
        </div>

        {!address && !editing && (
          <button
            className="add-address-btn"
            onClick={() => setEditing(true)}
            disabled={!user}
          >
            + Add Address
          </button>
        )}

        {editing && user && (
          <div className="address-form-grid">
            {Object.keys(form).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={key.toUpperCase()}
                onChange={handleChange}
              />
            ))}

            <div className="address-actions">
              <button onClick={saveAddress}>Save</button>
              <button className="cancel" onClick={() => setEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {address && !editing && (
          <p className="saved-address">
            <strong>{address.name}</strong>, {address.house},{" "}
            {address.area}, {address.city} - {address.pincode}
            <br />
            {address.state} | Phone: {address.phone}
          </p>
        )}
      </div>

      {/* ITEMS */}
      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{formatINR(item.priceINR)}</p>
              <p>Qty: {item.quantity}</p>
              <button
                className="cart-remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="cart-summary">
        <div className="cart-total">Total: {formatINR(total)}</div>

        {user && selectedAddress ? (
          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        ) : (
          <button className="checkout-btn disabled">
            Add address to continue
          </button>
        )}
      </div>
    </section>
  );
}
