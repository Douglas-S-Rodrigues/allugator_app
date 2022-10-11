import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { productsList, productById } from '../services/axiosApi';

function AppProvider({ children }) {

  const [emailUser, setEmailUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState('');

  const getProducts = async () => {
    const result = await productsList();
    setProducts(result)
  };

  const getProductById = async (id) => {
    const result = await productById(id);
    console.log('oi', result);
    setProductDetails(result);
  };


  const contextValue = useMemo(() => ({
    emailUser,
    nameUser,
    setEmailUser,
    setNameUser,
    getProducts,
    products,
    productDetails,
    getProductById,
  }), [
    emailUser,
    nameUser,
    products,
    productDetails,
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