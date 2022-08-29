import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Informacion from "./pages/Informacion/Informacion";
import ListPage from "./pages/List/ListPage";
import "./styles/App.scss";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<Informacion />} />
          <Route path="/lista" element={<ListPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
