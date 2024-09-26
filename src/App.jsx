import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ProductsFrontend from "./pages/ProductsFrontend";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact Component={ProductsFrontend} />
        <Route path={"/login"} Component={Login} />
        <Route path={"/register"} Component={Register} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
