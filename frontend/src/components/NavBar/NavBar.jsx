import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "./NavBar.scss";

const NavBar = () => {
  return(
      <>
        <nav className="navbar">
            <AiOutlinePlusSquare className="news"/>
            <h1 className="titulo">Agregar nota</h1>
            
            <h2>Tarea</h2>
            <input type="text" />
            <h2>Descripcion</h2>
            <input type="text-area" />
            <h2></h2>

        </nav>
      </>
  ) 
};

export default NavBar;
