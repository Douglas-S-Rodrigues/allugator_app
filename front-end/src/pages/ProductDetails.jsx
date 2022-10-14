import React from "react";
import Header from "../components/Header";
import ProductDetailsComp from "../components/ProductDetailsComp";
import Footer from "../components/Footer";
import '../styles/components/Generic.css';

export default function ProductDetails() {
  return (
    <div>
      <Header />
      <div className="body">
        <ProductDetailsComp />
      </div>
      <Footer />
    </div>
  );
}
