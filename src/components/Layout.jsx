import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import ProductFrontend from "../pages/ProductsFrontend";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../redux/actions/setUserActions";

const Layout = (props) => {
  const location = useLocation();

  // const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/user");

        props.setUser(data);
        console.log(props.user);
      } catch (e) {
        // setRedirect(true);
        console.log(e);
      }
    })();
  }, []);

  let header;

  if (location.pathname === "/" || location.pathname === "/backend") {
    header = <Header />;
  }

  // if (redirect) {
  //   return <Navigate to={"/login"} />;
  // }
  return (
    <div>
      <Nav />
      <main>
        {header}

        <div className="album py-5 bg-light">
          <div className="container">{props.children}</div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
