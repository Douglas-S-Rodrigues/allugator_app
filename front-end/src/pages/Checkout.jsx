import React from 'react';
import CheckoutComp from '../components/CheckoutComp';
import CheckoutForm from '../components/CheckoutForm';
import Header from '../components/Header'
import Footer from '../components/Footer';


export default function Checkout() {

  return (
    <div>
      <Header />
      <CheckoutComp />
      <CheckoutForm />
      <Footer />
    </div>
  )
}