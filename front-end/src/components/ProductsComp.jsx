import React from 'react';
import PropTypes from 'prop-types';

export default function ProductComp({
  id,
  nameP,
  urlImage,
  priceProd,
 }) {



  return (
    <div key={ id }>
      <img
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