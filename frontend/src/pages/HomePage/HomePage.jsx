import React, { Fragment, useState, useEffect } from "react";
import { urlServer } from "../../components/config/GeneralFunction";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import "./HomePage.scss";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  const [tareasState, setState] = useState([]);

  const fnToggle = () => {
    setToggle((value) => !value);
  };

  const getNotas = async () => {
    let url = urlServer;
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          let datos = response.json();
          return datos;
        }
      })
      .then((data) => setState(data));
  };

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
      <div className="flex-container-home">
        <div className="nota">
          <div className="opciones">
            <div
              className="add"
              onClick={() => {
                fnToggle();
              }}
            >
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
            <div className="titulo">Tarea de matematicas</div>
            <p className="parrafo">
              Desarrollar la pagina 87 del libro de sadiku
            </p>
          </div>
        </div>

        <div className="nota">
          <div className="opciones">
            <div
              className="add"
              onClick={() => {
                setToggle((value) => !value);
              }}
            >
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
            <div className="titulo">Tarea de Fisica</div>
            <p className="parrafo">
              Desarrollar la pagina 87 del libro de sadiku
            </p>
          </div>
        </div>

        <div className="nota">
          <div className="opciones">
            <div className="add">
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
            <div className="titulo">Compras</div>
            <p className="parrafo">
              Desarrollar la pagina 87 del libro de sadiku
            </p>
          </div>
        </div>

        <div className="nota">
          <div className="opciones">
            <div className="add">
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
            <div className="titulo">Sacar al perro</div>
            <p className="parrafo">En el parque los mandarinos</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
