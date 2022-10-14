import React from "react";
import { Link } from "react-router-dom";
import { cleanLocalStorage, getUser } from "../services/localStorage";
import logotype from "../images/logotype.png";
import "../styles/components/Header.css";

export default function Header() {
  const { name } = getUser();

  const leave = () => {
    cleanLocalStorage();
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to={"/home"}>
          <img className="logo-img" src={logotype} alt="logotype" />
        </Link>
        <Link to={"/products"} className="procuts-btn">
          Ver produtos
        </Link>
        {name && (
          <Link to={"/profile"} className="name">
            {name}
          </Link>
        )}
        <Link to={"/login"} onClick={leave} className="login-btn">
          Login | Sair
        </Link>
      </nav>
    </header>
  );
}
