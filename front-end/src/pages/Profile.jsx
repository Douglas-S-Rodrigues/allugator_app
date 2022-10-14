import React from "react";
import Header from "../components/Header";
import ProfileComp from "../components/ProfileComp";
import RentedProducts from "../components/RentedProducts";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <div>
      <Header />
      <ProfileComp />
      <RentedProducts />
      <Footer />
    </div>
  );
}
