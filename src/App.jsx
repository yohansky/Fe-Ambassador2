import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ProductsFrontend from "./pages/ProductsFrontend";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} Component={ProductsFrontend} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
