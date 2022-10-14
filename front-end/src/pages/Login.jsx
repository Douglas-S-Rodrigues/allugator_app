import React from "react";
import LoginComp from "../components/LoginComp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/components/Generic.css';

export default function Login() {
  return (
    <div>
      <Header />
      <div className="body">
        <LoginComp />
      </div>
      <Footer />
    </div>
  );
}
