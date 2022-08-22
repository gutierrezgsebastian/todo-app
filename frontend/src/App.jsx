import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import HomePage from "./pages/Home/HomePage";
import ListPage from "./pages/List/ListPage";
import "./styles/App.scss";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/lista" element={<ListPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
