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
            <NavLink className="link" to="/">
              Vision
            </NavLink>
          </li>
          <li className="element">
            <NavLink className="link" to="/">
              Contacto
            </NavLink>
          </li>
        </ul>

        <ul className="flex-container registro">
          <li className="element">
            <NavLink className="link" to="#">
              Ingresar
            </NavLink>
          </li>
          <li className="element">
            <NavLink className="link" to="#">
              Registrarse
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
