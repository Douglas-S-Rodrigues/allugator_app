import React, { useEffect, useContext, useState } from 'react'
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import ProductComp from '../components/ProductsComp';
import { Link } from 'react-router-dom';


export default function Products() {
  const { products, setProducts, getProducts } = useContext(MyContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortByName = () => {
      const newList = [...products];
    newList.sort((a, b) =>(a.name > b.name)?1:(b.name > a.name)?-1:0);
    setProducts(newList);
  }

  const sortByPrice = () => {
    const newList = [...products];
    newList.sort((a, b) =>(a.price > b.price)?1:(b.price > a.price)?-1:0);
    setProducts(newList);
  }

  const productFilter = products
  .filter((product) => product.name.toLowerCase().includes(search));

  return (
    <div>
      <Header />
      <input
      type="text"
      value={ search }
      onChange={ (e) => setSearch(e.target.value) }
      />
      <button
      type="button"
      onClick={ sortByName }
      >
        Ordem alfabética
      </button>

      <button
      type="button"
      onClick={ sortByPrice }
      >
        Ordenar por preço
      </button>
      <main>
        {productFilter.map((product, index) => (
          <div>
            <ProductComp
              key={ index }
              id={ product.id }
              index={ index }
              nameP={ product.name }
              urlImage={ product.urlImage }
              priceProd={ product.price.replace(('.', ',')) }
            />
          <Link to={`/product_details/${product.id}`}>
            <h3>VER PRODUTO</h3>
          </Link>
          </div>
        ))}
      </main>
    </div>
  )
}