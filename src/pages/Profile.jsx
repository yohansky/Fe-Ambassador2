import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
// import { Button, TextField } from "@mui/material";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../redux/actions/setUserActions";

const Profile = (props) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    setFirstName(props.user.first_name);
    setLastName(props.user.last_name);
    setEmail(props.user.email);
  }, [props]);

  const infoSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.put("/users/info", {
      first_name,
      last_name,
      email,
    });
    props.setUser(data);
  };

  const passwordSubmit = async (e) => {
    e.preventDefault();

    await axios.put("/users/password", {
      password,
      password_confirm,
    });
  };

  return (
    <Layout>
      <h3>Account Information</h3>
      <form onSubmit={infoSubmit}>
        <div className="mb-3">
          <label>First Name</label>
          <input className="form-control" defaultValue={first_name} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input className="form-control" defaultValue={last_name} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="btn btn-outline-secondary" type="submit">
          Submit
        </button>
      </form>

      <h3 className="mt-4">Change Password</h3>
      <form onSubmit={passwordSubmit}>
        <div className="mb-3">
          <label>Passowrd</label>
          <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input className="form-control" type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
        </div>
        <button className="btn btn-outline-secondary" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default connect(
  (state) => ({
    user: state.user,
  }),
  (dispatch) => ({
    setUser: (user) => dispatch(setUser(user)),
  })
)(Profile);
