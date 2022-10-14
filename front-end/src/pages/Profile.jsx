import React from "react";
import Header from "../components/Header";
import ProfileComp from "../components/ProfileComp";
import RentedProducts from "../components/RentedProducts";
import Footer from "../components/Footer";
import '../styles/components/Generic.css';

export default function Profile() {
  return (
    <div>
      <Header />
      <div className="body">
        <ProfileComp />
        <RentedProducts />
      </div>
      <Footer />
    </div>
  );
}
