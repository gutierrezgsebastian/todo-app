import React, { useEffect, useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "./SideBar.scss";
import axios from "axios";

import { urlServer } from "../config/GeneralFunction";

const SideBar = () => {
  
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <aside className={toggle? "sidebar":"sidebar desactivate"}>
        <AiOutlinePlusSquare className="news" onClick={() => {setToggle((value) => !value)} }/>
        <h1 className="titulo">Agregar nota</h1>

        <form action="">
          <h2>Tarea</h2>
          <input type="text" />
          <h2>Descripcion</h2>
          <input type="text-area" />
          <div className="botones">
            {/* <button onClick={()=>{fnAgregar()}}>Agregar</button> */}
            <button>Borrar</button>
          </div>
        </form>
      </aside>
    </>
  );
};

export default SideBar;
