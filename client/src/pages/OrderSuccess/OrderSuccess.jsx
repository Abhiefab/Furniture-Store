import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <section style={{ padding: "80px", textAlign: "center" }}>
      <h1>🎉 Order Placed Successfully</h1>
      <p>Your payment has been received.</p>

      <Link to="/" style={{ marginTop: 20, display: "inline-block" }}>
        Continue Shopping
      </Link>
    </section>
  );
}
