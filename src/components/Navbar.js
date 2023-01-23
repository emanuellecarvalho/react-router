import React from "react";
import "./Navbar.css";

// 2- links com react router
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* O Link atualiza o component sem fazer o reload da página, o que é esperado de uma SPA
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
