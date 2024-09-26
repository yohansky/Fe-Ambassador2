import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import ProductFrontend from "../pages/ProductsFrontend";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <main>
        <Header />

        <div className="album py-5 bg-light">
          <div className="container">{props.children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
