import React, { useEffect, useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "./SideBar.scss";
import axios from "axios";

import { urlServer } from "../config/GeneralFunction";

const SideBar = ({ isOpen, fnToggle }) => {
  return (
    <>
      <aside className={isOpen ? "sidebar" : "sidebar desactivate"}>
        <AiOutlinePlusSquare className="news" />
        <h1 className="titulo">Agregar nota</h1>
        
        {/* Se le debe quitar la accion por defecto con un prevent default
        o algo asi xd */}
        <form action="">
          <div className="informacion">
            <h2 className="datos-informacion">Tarea</h2>
            <input type="text"/>
            <h2 className="datos-informacion">Descripcion</h2>
            <textarea type="text-area" />
            <div className="botones">
              <button onClick={fnToggle}>Agregar</button>
              <button type="reset">Borrar</button>
            </div>
          </div>
        </form>
      </aside>
    </>
  );
};

export default SideBar;
