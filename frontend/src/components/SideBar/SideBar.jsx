import React, { useEffect, useState } from "react";
import { Switch } from "../Switch/Switch";
import "./SideBar.scss";

const SideBar = ({ isOpen, fnToggle }) => {
  return (
    <>
      <aside className={isOpen ? "sidebar" : "sidebar desactivate"}>
        <h1 className="titulo">Agregar nota</h1>
        
        {/* Se le debe quitar la accion por defecto con un prevent default
        o algo asi xd */}
        <form action="" >
          <div className="informacion">
            <div className="input_field">
              <label>Tarea</label>
              <input type="text"/>
            </div>
            <div className="input_field">
              <label>Descripcion</label>
              <textarea type="text-area" />
            </div>
            <div className="input_field">
              {/* Aca se debe hacer el toogle */}
            </div>

            <div className="">
              <label className="estado">Estado</label>
              <Switch rounded={true}/>
            </div>

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
