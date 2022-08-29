import React, { Fragment, useState, useEffect } from "react";
import { urlGetAll } from "../../components/config/generalFunction";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.scss";
import { httpGetTareas } from "../../helpers/httpMethods.js";
import List from "../../components/List/List";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const [tareasState, setTareasState] = useState([]);

  const fnToggle = () => {
    setToggle((value) => !value);
  };

  // HTTP Methods
  const getNotas = async () => {
    httpGetTareas(urlGetAll, setTareasState);
  };

  // useEffect Methods
  useEffect(() => {
    getNotas();
    console.log(tareasState);
  }, []);

  return (
    <Fragment>
      {/* Se le debe pasar al sidebar si se quiere agregar o actualizar */}
      <NavBar />
      <SideBar isOpen={toggle} fnToggle={fnToggle} />
      <h1 className="home">Notas</h1>
      <List tareasState={tareasState} fnToggle={fnToggle} />
    </Fragment>
  );
};

export default HomePage;
