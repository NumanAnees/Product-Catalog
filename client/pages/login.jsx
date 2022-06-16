import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";

const login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    buttonText: "Login",
  });

  const { email, password, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, [name]: e.target.value, buttonText: "Login" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Registering" });
    try {
      const response = await axios.post(`${API}/register`, {
        name,
        email,
        password,
      });
      console.log(response);
      setState({
        ...state,
        name: "",
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
        error: error.response.data.error,
      });
    }
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-light">Email</label>
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
        <label className="text-light">Password</label>
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
    <Layout>
      <div className="container pt-5 pb-5 bg-col">
        <div className="col-md-6 offset-md-3">
          <h1 className="title-text text-center m-nav2 text-uppercase text-span">
            Login <span className="text-span">Here</span>
          </h1>
          {loginForm()}
        </div>
      </div>
    </Layout>
  );
};

export default login;
