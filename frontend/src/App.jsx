import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import Informacion from "./pages/Informacion/Informacion";
import LogInPage from "./pages/LogInPage/LogInPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VisionPage from "./pages/VisionPage/VisionPage";
import "./styles/App.scss";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/info" element={<Informacion />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/vision" element={<VisionPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
