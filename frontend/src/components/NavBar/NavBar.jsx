import React, {useEffect, useState} from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "./NavBar.scss";
import axios from "axios";

import { urlServer } from "../config/GeneralFunction";

const NavBar = () => {
  
  // const [tareasState, setState] = useState([]);
  // // Metodo para traer las notas


  // const getNotas = async() =>{
  //   // console.log(urlServer)
  //   // let url = urlServer
  //   //     fetch(url)
  //   //   .then((response) => {
  //   //     if (response.status === 200) {
  //   //       let datos = response.json();
  //   //       console.log(datos)
  //   //       return datos;
  //   //     }
  //   //   })
  //   //   .then((data) => setState(data));
    
  // }

  // const fnAgregar = async () =>{
  //   // let url = urlServer + "/1"
    
  //   // const notas = {
  //   //   id: 1,
  //   //   tarea: "Comprar pan",
  //   //   estado: true
  //   // }

  //   // const response = await axios.post(url, notas);
  // }

  // useEffect(() => {
  //    getNotas()
  //    console.log(tareasState)
  // }, []);

  return(
      <>
        <nav className="navbar desactivate">
            <AiOutlinePlusSquare className="news"/>
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

        </nav>
      </>
  ) 
};

export default NavBar;
