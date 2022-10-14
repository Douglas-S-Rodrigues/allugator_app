import React, { useContext } from "react";
import MyContext from "../context/MyContext";

export default function RentedProducts() {
  const { productRented } = useContext(MyContext);

  return (
    <div>
      <h3>Produtos contratados</h3>
      {productRented.map((product) => (
        <div key={product.id}>
          <img
            src={product.urlImage}
            alt="imagem do produto"
            height="50px"
            weight="30px"
          />
          <p>Nome: {product.name}</p>
          <p>Tempo de Assinatura {product.subscriptionPeriod}</p>
          <p>
            Endereço: {product.address} {product.number}
          </p>
        </div>
      ))}
    </div>
  );
}
