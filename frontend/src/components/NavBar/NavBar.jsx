import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <nav className="flex-container">
        <ul className="flex-container datos">
          <li className="element">
            <NavLink className="link" to="/">
              Inicio
            </NavLink>
          </li>
          <li className="element">
            <NavLink className="link" to="/info">
              Información
            </NavLink>
          </li>
          <li className="element">
            <NavLink className="link" to="/vision">
              Vision
            </NavLink>
          </li>
          <li className="element">
            <NavLink className="link" to="/contact">
              Contacto
            </NavLink>
          </li>
        </ul>

        <ul className="flex-container registro">
          <li className="element">
            <NavLink className="link" to="/login">
              Ingresar
            </NavLink>
          </li>
          <li className="element">
            <NavLink className="link" to="/register">
              Registrarse
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
