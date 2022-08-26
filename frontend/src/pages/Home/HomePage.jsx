import React, { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import ListPage from "../List/ListPage";

const Home = () => {
  const [tareasState, setState] = useState([]);
  const url = "/v1/get_tareas/";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          let datos = response.json();
          return datos;
        }
      })
      .then((data) => setState(data));
  }, []);

  return (
    <Fragment>
      
      
      <h1>Home page</h1>
      
    </Fragment>
  );
};

export default Home;
