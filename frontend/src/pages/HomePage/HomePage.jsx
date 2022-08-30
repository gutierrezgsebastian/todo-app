import React, { Fragment, useState, useEffect } from "react";
import {
  urlGetAll,
  urlDeleteAll,
} from "../../components/config/generalFunction";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.scss";
import { httpGetTareas, httpDeleteTareas } from "../../helpers/httpMethods.js";
import List from "../../components/List/List";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const [tareasState, setTareasState] = useState([]);

  const fnToggle = () => {
    setToggle((value) => !value);
  };

  // HTTP Methods
  const getTareas = async () => {
    httpGetTareas(urlGetAll, setTareasState);
  };

  const deleteTareas = async () => {
    httpDeleteTareas(urlDeleteAll, setTareasState);
    getTareas();
  };

  // useEffect Methods
  useEffect(() => {
    getTareas();
  }, []);

  return (
    <Fragment>
      {/* Se le debe pasar al sidebar si se quiere agregar o actualizar */}
      <NavBar />
      <SideBar isOpen={toggle} fnToggle={fnToggle} />
      <h1 className="home">Notas</h1>
      <List
        tareasState={tareasState}
        deleteTareas={deleteTareas}
        fnToggle={fnToggle}
      />
    </Fragment>
  );
};

export default HomePage;
