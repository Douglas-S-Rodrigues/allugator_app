import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import {
  productsList,
  productById,
  userById,
  rentedById,
} from '../services/axiosApi';

function AppProvider({ children }) {

  const [emailUser, setEmailUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [productRented, setProductRented] = useState([]);

  const getProducts = async () => {
    const result = await productsList();
    setProducts(result)
  };

  const getProductById = async (id) => {
    const result = await productById(id);
    setProductDetails(result);
  };

  const getUserById = async (id) => {
    const result = await userById(id);
    const pRented = await rentedById(result.id)
    console.log(pRented);
    setProductRented(pRented);
    setUserInfo(result);
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
    getUserById,
    userInfo,
    productRented,    
  }), [
    emailUser,
    nameUser,
    products,
    productDetails,
    userInfo,
    productRented,
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