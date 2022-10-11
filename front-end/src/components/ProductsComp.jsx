import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
// import { addFavorite } from '../services/localStorage';

export default function ProductComp({
  id,
  nameP,
  urlImage,
  priceProd,
 }) {

  const {
    cart,
    // setCart,
  } = useContext(MyContext);

  

  // const addToCart = () => {


  //   addFavorite(cart);
  // };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (
    <div>
      <img
        key={ id }
        height="206"
        width="153px"
        src={ urlImage }
        alt="product"
      />
      <p>{ nameP }</p>
      <p>a partir de</p>
      <p>
        { `R$ ${priceProd.replace('.', ',')} por ano` }
      </p>
    </div>
  );
}

ProductComp.propTypes = {
  nameP: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
  priceProd: PropTypes.string.isRequired,
};