import React from "react";
import "./Product.css";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const Product = () => {
  // 4 - rota dinâmica
  // trazer o id que o usuário acessa a página
  // desestruturando
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  // 5- carregamento de dado individual
  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <p>ID do Produto: {id} </p>
      {error && <p>Ocorreu um erro. Tente novamente</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$: {product.price}</p>
          {/* 6 - nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
