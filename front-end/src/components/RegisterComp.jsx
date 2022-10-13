import React, { useContext, useEffect, useState } from 'react';
import axiosApi from '../services/axiosApi';
import { useNavigate } from 'react-router';
import MyContext from '../context/MyContext';

export default function RegisterComp() {
  const {
    setEmailUser,
    setNameUser,
  } = useContext(MyContext);
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(false);
  const [notValid, setNotValid] = useState(false);
  const [messageError, setMessageError] = useState('');

  let navigate = useNavigate();

  useEffect(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    const validEmail = regexEmail.test(email);
    const passLength = 6;
    const validPassword = password.length >= passLength;
    const nameLength = 12;
    const validName = nome.length >= nameLength;

    setValidate(validEmail && validPassword && validName);
  }, [email, password, nome]);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'nome') setNome(value);
  };

  const createdUser = async () => {
    try {
      const newUser = { name: nome, email, password };
      const request = await axiosApi.post('/register', { ...newUser });
      setEmailUser(request.data.email);
      setNameUser(request.data.name);
      navigate('/login');
    } catch (err) {
      setNotValid(true);
      if (err.response.data.message === 'This username already exists') {
        setMessageError('Nome de usuário já existe');
      }
      if (err.response.data.message === 'This email already exists') {
        setMessageError('Esse email já existe');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate) {
      await createdUser();
    } else {
      setNotValid(true);
    }
  };
  return (
    <section>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="nomeid">
          Login
          <input
            id="nomeid"
            type="nome"
            value={ nome }
            name="nome"
            onChange={ handleChange }
            placeholder="Seu nome"
          />
        </label>
        <br />
        <label htmlFor="loginEmail">
          Email
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
          onClick={ handleSubmit }
          disabled={ !validate }
        >
          Enviar
        </button>
      </form>
      {
        notValid
        && (
          <p>
            { messageError }
          </p>)
      }
    </section>
  );
}

