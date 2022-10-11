import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { productsList } from '../services/axiosApi';

function AppProvider({ children }) {

  const [emailUser, setEmailUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await productsList();
    setProducts(result)
  };


  const contextValue = useMemo(() => ({
    emailUser,
    nameUser,
    setEmailUser,
    setNameUser,
    getProducts,
    products,
  }), [
    emailUser,
    nameUser,
    products,
  ]);

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;