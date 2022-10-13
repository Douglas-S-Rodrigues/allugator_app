import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function CheckoutComp() {
  const { cart, setCart } = useContext(MyContext);
 

  const removeProduct = (product) => {
    const removeProd = cart.filter((p) => p.id !== product.id);
    setCart(removeProd);
    localStorage.setItem('cart', JSON.stringify(removeProd));
  };

  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Valor Unitário</th>
            <th>Tempo de assinatura</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((product, index) => (
              <tr key={ index } >
                <td> { index + 1 } </td>
                <td> { product.name } </td>
                <td> { product.price.replace(/\./, ',') } </td>
                <td> {product.subscriptionPeriod } </td>
                <td>
                  <button
                    type="button"
                    onClick={ () => removeProduct(product) }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}