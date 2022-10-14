import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <section>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product_details/:id" element={<ProductDetails />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
