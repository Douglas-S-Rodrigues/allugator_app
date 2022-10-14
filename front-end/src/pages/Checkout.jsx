import React from "react";
import CheckoutComp from "../components/CheckoutComp";
import CheckoutForm from "../components/CheckoutForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/components/Generic.css';


export default function Checkout() {
  return (
    <div>
      <Header />
      <div className='body'>
        <CheckoutComp />
        <CheckoutForm />
      </div>
      <Footer />
    </div>
  );
}
