import { useState,useEffect } from 'react';
import Layout from '../Components/Layout';
import axios from 'axios';
import Router from 'next/router';
import styles from "../styles/Register.module.css";


const Register = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Register'
    });
    const { name, email, password,buttonText } = state;
    const handleChange = name => e => {
        setState({ ...state, [name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setState({ ...state, buttonText: 'Registering' });
        try {
            const response = await axios.post(`${API}/register`, {
                name,
                email,
                password
            });
            console.log(response);
            setState({
                ...state,
                name: '',
                email: '',
                password: '',
                buttonText: 'Submitted',
            });
            setTimeout(() => {
                Router.push("/login");
            }, 1200);
        } catch (error) {
            console.log(error);
            setState({ ...state, buttonText: 'Register' });
        }
    };

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='text-light'>Name</label>
                <input
                    value={name}
                    onChange={handleChange('name')}
                    type="text"
                    className="form-control"
                    placeholder="Type your name..."
                    required
                />
            </div>
            <div className="form-group">
                <label className='text-light'>Email</label>
                <input
                    value={email}
                    onChange={handleChange('email')}
                    type="email"
                    className="form-control"
                    placeholder="Type your email..."
                    required
                />
            </div>
            <div className="form-group">
            <label className='text-light'>Password</label>
                <input
                    value={password}
                    onChange={handleChange('password')}
                    type="password"
                    className="form-control"
                    placeholder="Type your password..."
                    required
                />
            </div>
            <div className="form-group text-center">
                <button className="btn btn-info btn-lg">{buttonText}</button>
            </div>
        </form>
    );

    return (
    <>
        <Layout>
            <div className="container pt-5 pb-5 bg-col">
            <div className="col-md-6 offset-md-3">
                <h1 className='text-center text-uppercase title-text '><span className='text-span'>Register</span> Here</h1>
                {registerForm()}
            </div>
            </div>
        </Layout>
        </>
    );
};

export default Register;