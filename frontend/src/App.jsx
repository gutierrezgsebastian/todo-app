import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Informacion from "./pages/Informacion/Informacion";
import ListPage from "./pages/List/ListPage";
import "./styles/App.scss";

function App() {
  return (
    <Fragment>
      <NavBar />
      
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
