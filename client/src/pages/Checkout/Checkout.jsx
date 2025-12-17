import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import "./Checkout.css";

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

export default function Checkout() {
  const { cartItems, selectedAddress } = useCart();
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!selectedAddress) {
    navigate("/cart");
    return null;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.priceINR * item.quantity,
    0
  );

  const proceedToPayment = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    navigate("/payment", { state: { total } });
  };

  return (
    <section className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-card">
        <h3>Order Details</h3>
        {cartItems.map((item, i) => (
          <div key={i} className="checkout-item">
            <img src={item.img} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>{formatINR(item.priceINR)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-card">
        <h3>Delivery Address</h3>
        <p>
          <strong>{selectedAddress.name}</strong>, {selectedAddress.house},{" "}
          {selectedAddress.area}, {selectedAddress.city} -{" "}
          {selectedAddress.pincode}
          <br />
          {selectedAddress.state} | Phone: {selectedAddress.phone}
        </p>
      </div>

      <div className="checkout-summary-center">
        <p>
          Total Amount: <strong>{formatINR(total)}</strong>
        </p>

        <button className="place-order-btn" onClick={proceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </section>
  );
}
