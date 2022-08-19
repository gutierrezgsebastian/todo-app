import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages/Home/HomePage";
import "./styles/App.scss";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/lista" element={<Home />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
