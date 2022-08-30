import React from "react";
import ListItem from "../ListItem/ListItem";
import Button from "../Button/Button";
import "./List.scss";

const List = ({ tareasState, fnToggle, deleteTareas }) => {
  return (
    <div className="flex-container-home">
      <Button deleteTareas={deleteTareas}>Eliminar todo</Button>
      {tareasState.map((tarea) => (
        <ListItem key={tarea.id} tarea={tarea} fnToggle={fnToggle} />
      ))}
    </div>
  );
};

export default List;
