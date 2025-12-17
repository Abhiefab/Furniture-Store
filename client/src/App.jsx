import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";


import ProductDetails from "./pages/Product/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import MyOrders from "./pages/MyOrders/MyOrders";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />


        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Shop */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />

        {/* Product */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Protected Checkout */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* Protected My Orders */}
        <Route
          path="/my-orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />

        {/* Order */}
        <Route path="/order-success" element={<OrderSuccess />} />

        {/* Static pages */}
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
