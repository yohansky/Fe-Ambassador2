import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import ProductFrontend from "../pages/ProductsFrontend";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../redux/actions/setUserActions";

const Layout = (props) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/user");

        props.setUser(data);
        console.log(props);
      } catch (e) {
        setRedirect(true);
      }
    })();
  }, []);

  if (redirect) {
    return <Navigate to={"/login"} />;
  }
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

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
