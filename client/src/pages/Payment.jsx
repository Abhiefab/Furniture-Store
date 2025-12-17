import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./Payment.css";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { token } = useContext(AuthContext);
  const { cartItems, clearCart, selectedAddress } = useCart();

  const address =
    selectedAddress || JSON.parse(localStorage.getItem("address"));

  useEffect(() => {
    if (!state?.total || cartItems.length === 0 || !address) {
      navigate("/checkout");
      return;
    }

    const timer = setTimeout(async () => {
      try {
        await axios.post(
          "http://localhost:5000/api/orders/place-order",
          {
            items: cartItems,
            totalAmount: state.total,
            address,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        clearCart();
        localStorage.removeItem("address");
        navigate("/order-success");
      } catch (error) {
        console.error("Payment error:", error);
        alert("Payment failed. Please try again.");
        navigate("/checkout");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="payment-page">
      <div className="payment-card">
        <h2>Complete Payment</h2>
        <p>Scan QR using any UPI app</p>
        <img src="/upi-qr.JPG" alt="UPI QR" className="payment-qr" />
        <p>Processing payment…</p>
        <strong>Amount: ₹{state?.total}</strong>
      </div>
    </section>
  );
}
