import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axiosApi from "../services/axiosApi";
import { addUser, addId } from "../services/localStorage";
import '../styles/components/LoginComp.css';


export default function LoginComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const [notFound, setNotFound] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    const validEmail = regexEmail.test(email);
    const passLength = 6;
    const validPassword = password.length >= passLength;
    setValidate(validEmail && validPassword);
  }, [email, password]);

  const handleChange = ({ target: { name, value } }) => {
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notFoundNumber = 404;
    const ok = 200;
    try {
      const request = await axiosApi.post("/login", { email, password });
      if (request.status === ok) {
        addUser(request.data.id, request.data.name, request.data.email);
        addId(request.data.id);
        setNotFound(false);
        navigate("/home");
      }
    } catch (err) {
      if (err.response.status === notFoundNumber) {
        setNotFound(true);
      }
    }
  };

  const createAccount = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <section className="body-login">
      <div className="card">
          <div>
          <h1 className="title">Login</h1>
        </div>
        <div className='form'>
          <label htmlFor="loginEmail" className="text-form">
            Email
            <input
              id="loginEmail"
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="email@email.com"
            />
          </label>
        </div>
        <div className='form'>
          <label htmlFor="passwordIn" className="text-form">
            Senha
            <input
              id="passwordIn"
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="***********"
            />
          </label>
        </div>
        <div>
          <button
            id="btn-login"
            type="submit"
            disabled={!validate}
            onClick={(e) => handleSubmit(e)}
          >
            Entrar
          </button>
        </div>
        <div className="create">
          <label htmlFor="register-btm"  /> Não tem uma conta?
          <button
           id="register-btn"
           className='register-btn'
           type="button"
           onClick={createAccount}
          >
            Cadastrar
          </button>
          {notFound && <div>E-mail inválido!</div>}
        </div>
      </div>
      
     
    </section>
  );
}
