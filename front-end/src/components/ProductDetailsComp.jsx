import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { useNavigate } from 'react-router';
import { addToCart } from '../services/localStorage';

export default function ProductDetailsComp() {

  const {
   cart,
   setCart,
   productDetails,
   getProductById,
  } = useContext(MyContext);

  let navigate = useNavigate();

  const { id } = useParams();


  useEffect(() => {
    getProductById(id)
    localStorage.setItem('cart', JSON.stringify(cart));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]); 

  const goToCheckout = async () => {
    setCart([...cart, productDetails]);
    await addToCart(cart);
    navigate('/checkout');
  };

  return (
    <div>
      <h4>Informações do produto</h4>
      <img
      alt="imagem do produto"
      src={ productDetails.urlImage }
      height="206px"
      width="153px"
      />
      <p>{ productDetails.name }</p>
      <p>Formas de pagamento: Cartão de Crédito e PIX</p>
      <p>80% de proteção contra furto qualificado e roubo</p>
      <p>Frete grátis</p>
      <label htmlFor="capacity-input">
        Escolha a capacidade
        <select id="capacity-input">
          <option>64GB</option>
          <option>128GB</option>
          <option>256GB</option>
        </select>
      </label>
      <p>Valor: { productDetails.price } </p>
      <p>Período de assinatura: { productDetails.subscriptionPeriod}</p>
      <p>Prazo de entrega: { productDetails.deliveryTime }</p>
      <button
      type="button"
      onClick={ goToCheckout }
      >ASSINAR</button>
    </div>
  )
}