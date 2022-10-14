import React from "react";
import RegisterComp from "../components/RegisterComp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/components/Generic.css';

export default function Register() {
  return (
    <div>
      <Header />
      <div className="body">
        <RegisterComp />
      </div>
      <Footer />
    </div>
  );
}
