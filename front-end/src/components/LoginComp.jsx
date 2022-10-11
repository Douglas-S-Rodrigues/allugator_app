import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axiosApi from '../services/axiosApi';
import { addUser, addId } from '../services/localStorage';

export default function LoginComp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notFoundNumber = 404;
    const ok = 200;
    try {
      const request = await axiosApi.post('/login', { email, password });
      if (request.status === ok) {
        addUser(
          request.data.name,
          request.data.email,
        );
        addId(
          request.data.id,
        );
        setNotFound(false);
      }
    } catch (err) {
      if (err.response.status === notFoundNumber) {
        setNotFound(true);
      }
    }
  };

  const createAccount = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <section>
      <h1>Allugator</h1>
      <form method="post">
        <label htmlFor="loginEmail">
          Login
          <input
            id="loginEmail"
            type="email"
            value={ email }
            name="email"
            onChange={ handleChange }
            placeholder="email"
          />
        </label>
        <br />
        <label htmlFor="passwordIn">
          Senha
          <input
            type="password"
            value={ password }
            name="password"
            onChange={ handleChange }
            placeholder="***********"
          />
        </label>
        <br />
        <button
          type="submit"
          disabled={ !validate }
          onClick={ (e) => handleSubmit(e) }
        >
          Login
        </button>
      </form>
      <button
        type="button"
        onClick={ createAccount }
      >
        Cadastrar
      </button>
      {
        notFound
        && <div>E-mail inválido!</div>
      }
    </section>
  );
}

