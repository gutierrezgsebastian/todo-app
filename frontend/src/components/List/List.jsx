import React from "react";
import ListItem from "../ListItem/ListItem";
import "./List.scss";

const List = ({ tareasState, fnToggle }) => {
  return (
    <div className="flex-container-home">
      {tareasState.map((tarea) => (
        <ListItem key={tarea.id} tarea={tarea} fnToggle={fnToggle} />
      ))}
    </div>
  );
};

export default List;
