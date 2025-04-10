// import React from "react";

// const Register = () => {
//   return <div>Register</div>;
// };

// export default Register;

import axios from "axios";
import React, { Component, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Navigate, Redirect } from "react-router-dom";

class Register extends Component {
  firstName = "";
  lastName = "";
  email = "";
  password = "";
  passwordConfirm = "";
  state = {
    redirect: false,
  };

  submit = async (e) => {
    e.preventDefault();

    // await axios.post("http://localhost:8080/api/register", {
    await axios.post("/register", {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm,
    });

    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={"/login"} />;
    }
    return (
      <main className="form-signin">
        <form onSubmit={this.submit}>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <div className="form-floating">
            <input className="form-control" placeholder="First Name" onChange={(e) => (this.firstName = e.target.value)} />
            <label for="floatingInput">First Name</label>
          </div>

          <div className="form-floating">
            <input className="form-control" placeholder="Last Name" onChange={(e) => (this.lastName = e.target.value)} />
            <label for="floatingInput">Last Name</label>
          </div>

          <div className="form-floating">
            <input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => (this.email = e.target.value)} />
            <label for="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password" onChange={(e) => (this.password = e.target.value)} />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password Confirm" onChange={(e) => (this.passwordConfirm = e.target.value)} />
            <label for="floatingPassword">Password Confirm</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>
        <div>
          <p>
            have an account?
            <Link to={"/login"}>
              <a style={{ color: "blue" }}>Login</a>
            </Link>
          </p>
        </div>
      </main>
    );
  }
}

export default Register;
