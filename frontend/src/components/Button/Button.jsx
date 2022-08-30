import React from "react";
import "./Button.scss";

const Button = ({ children, deleteTareas }) => {
  return <button onClick={deleteTareas}>{children}</button>;
};

export default Button;
