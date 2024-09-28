import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ProductsFrontend from "./pages/ProductsFrontend";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import Rangkings from "./pages/Rangkings";
import ProductsBackend from "./pages/ProductsBackend";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact Component={ProductsFrontend} />
        <Route path={"/backend"} Component={ProductsBackend} />
        <Route path={"/login"} Component={Login} />
        <Route path={"/register"} Component={Register} />
        <Route path={"/profile"} Component={Profile} />
        <Route path={"/stats"} Component={Stats} />
        <Route path={"/rangkings"} Component={Rangkings} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
