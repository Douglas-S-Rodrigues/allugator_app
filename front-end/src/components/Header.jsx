import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { cleanLocalStorage, getUser } from '../services/localStorage';
import logotype from '../images/logotype.png';

export default function Header() {

  let navigate = useNavigate();

  const { name } = getUser();

  const goProducts = (e) => {
    e.preventDefault();
    navigate('/products');
  };

  const goProfile = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  const leave = (e) => {
    e.preventDefault();
    cleanLocalStorage();
    navigate('/login');
  };

  return (
    <nav>
      <Link to={'/home'}>
      <img
      src={ logotype }
      alt="logotype"
      height="45px"
      width="130px"
      />
      </Link>
      <button
        type="button"
        onClick={ goProducts }
      >
        Ver produtos
      </button>
      <button
        type="button"
        onClick={ goProfile }
      >
        { name }
      </button>
      <button
        type="button"
        onClick={ leave }
      >
        Login/Sair
      </button>
    </nav>
  );
}
