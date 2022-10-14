import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeComp from "../components/HomeComp";
import "../styles/pages/Home.css";
import '../styles/components/Generic.css';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className='body'>
        <HomeComp />
      </div>
      <Footer />
    </div>
  );
}
