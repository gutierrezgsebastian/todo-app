import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/HomePage";
import Informacion from "./pages/Informacion/Informacion"
import ListPage from "./pages/List/ListPage";
import "./styles/App.scss";

function App() {
  return (
    <Fragment>
      
      <Header />
      <NavBar />
      <SideBar />
      
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/infor" element={<Informacion />} />
        <Route path="/lista" element={<ListPage />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
