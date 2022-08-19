import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <SideBar />
      <Footer />
    </Fragment>
  );
};

export default Home;
