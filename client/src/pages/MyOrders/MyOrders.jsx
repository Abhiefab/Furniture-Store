import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./MyOrders.css";

export default function MyOrders() {
  const { token } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removingId, setRemovingId] = useState(null);

  
  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/orders/my-orders",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setOrders(res.data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

 
  const cancelOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    setRemovingId(orderId);

    try {
      await axios.delete(
        `http://localhost:5000/api/orders/${orderId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

     
      setTimeout(() => {
        setOrders((prev) =>
          prev.filter((order) => order._id !== orderId)
        );
        setRemovingId(null);
      }, 2000);
    } catch (error) {
      setRemovingId(null);
      alert(error.response?.data?.message || "Failed to cancel order");
    }
  };

  
  if (loading) return <p className="orders-loading">Loading orders...</p>;

  if (orders.length === 0) {
    return (
      <div className="no-orders">
        <h2>No orders yet</h2>
        <p>You haven’t placed any orders.</p>
      </div>
    );
  }

 
  return (
    <section className="my-orders">
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div className="order-card" key={order._id}>
          <p>
            <strong>Order ID:</strong> {order._id}
          </p>

          <p>
            <strong>Total:</strong> ₹{order.totalAmount}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.createdAt).toDateString()}
          </p>

          <div className="order-items">
            {order.items.map((item, i) => (
              <div key={i} className="order-item">
                <img src={item.img} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>₹{item.priceINR}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="cancel-btn"
            disabled={removingId === order._id}
            onClick={() => cancelOrder(order._id)}
          >
            {removingId === order._id
              ? "Cancelling..."
              : "Cancel Order"}
          </button>
        </div>
      ))}
    </section>
  );
}
