import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import "./ListItem.scss";

const ListItem = ({ tarea, fnToggle }) => {
  console.log(tarea);
  return (
    <div className="nota">
      <div className="opciones">
        <div onClick={fnToggle} className="add">
          <GrAddCircle />
        </div>
        <div className="opciones-two">
          <div className="edit">
            <AiFillEdit />
          </div>
          <div className="delete">
            <AiFillDelete />
          </div>
        </div>
      </div>
      <div className="contenido">
        <div className="titulo">{tarea.tarea}</div>
        <p className="parrafo">{tarea.descripcion}</p>
      </div>
    </div>
  );
};

export default ListItem;
