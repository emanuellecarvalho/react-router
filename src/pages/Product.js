import React from "react";
import "./Product.css";

import { useParams } from "react-router-dom";

const Product = () => {
  // 4 - rota dinâmica
  // trazer o id que o usuário acessa a página
  // desestruturando
  const { id } = useParams();

  return (
    <>
      <p>ID do Produto: {id} </p>
    </>
  );
};

export default Product;
