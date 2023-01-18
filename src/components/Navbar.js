import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* O Link atualiza o component sem fazer o reload da página, o que é esperado de uma SPA*/}
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  );
};

export default Navbar;
