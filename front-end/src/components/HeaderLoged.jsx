import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { cleanLocalStorage, getUser } from '../services/localStorage';

export default function HeaderLoged() {

  const history = useHistory();

  const { name } = getUser();

  const goProducts = (e) => {
    e.preventDefault();
    history.push('/products');
  };

  const goProfile = (e) => {
    e.preventDefault();
    history.push('/profile');
  };

  const leave = (e) => {
    e.preventDefault();
    cleanLocalStorage();
    history.push('/login');
  };

  return (
    <nav>
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
        SAIR
      </button>
    </nav>
  );
}
