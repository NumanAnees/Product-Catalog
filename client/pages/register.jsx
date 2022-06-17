import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import axios from "axios";
import { API, APP_NAME } from "../config";
import Router from "next/router";

const register = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register",
  });
  const { firstName, lastName, email, password, error, success, buttonText } =
    state;
  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Register",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Registering" });
    try {
      console.log("my api" + API);
      const response = await axios.post(`${API}/register`, {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response);
      setState({
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        buttonText: "Submitted",
        success: "Registered Successfully",
      });
      setTimeout(() => {
        Router.push("/login");
      }, 1200);
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: "Register",
        error: error,
      });
    }
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="title-text">First Name:</label>
        <input
          value={firstName}
          onChange={handleChange("firstName")}
          type="text"
          className="form-control"
          placeholder="Type your first name..."
          required
        />
      </div>
      <div className="form-group">
        <label className="title-text">Last Name:</label>
        <input
          value={lastName}
          onChange={handleChange("lastName")}
          type="text"
          className="form-control"
          placeholder="Type your last name..."
          required
        />
      </div>
      <div className="form-group">
        <label className="title-text">Email:</label>
        <input
          value={email}
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          placeholder="Type your email..."
          required
        />
      </div>
      <div className="form-group">
        <label className="title-text">Password:</label>
        <input
          value={password}
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          placeholder="Type your password..."
          required
        />
      </div>
      <div className="form-group text-center">
        <button className="btn btn-info">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <>
      <Layout>
        <div className="container pt-5 pb-5 bg-col">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center title-text text-uppercase ">
              <span className="text-span">Register</span> Here
            </h1>
            {registerForm()}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default register;
