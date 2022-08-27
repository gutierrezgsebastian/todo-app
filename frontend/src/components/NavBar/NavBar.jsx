import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <nav className="flex-container">
        <ul className="flex-container datos">
          <li className="element">Inicio</li>
          <li className="element">Informacion</li>
          <li className="element">Vision</li>
          <li className="element">Contacto</li>
        </ul>

        <ul className="flex-container registro">
          <li className="element">Ingresar</li>
          <li className="element">Registrarse</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
