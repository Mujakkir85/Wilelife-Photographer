import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    return (
        <div>
            <form >
                <div className="form-container">
                    <h1>Login</h1>
                    <hr />
                    <input ref={emailRef} type="text" placeholder="Enter Email" name="email" id="email" required />
                    <input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    <hr />
                    <button type="submit" className="registerbtn">Login</button>
                </div>

                <div className="form-container signin">
                    <p>Create a new account?<Link to="/register"> Register </Link></p>
                </div>

            </form>
            <div className="form-container">
                <button type="submit" className="registerbtn">Google Login</button>
            </div>
        </div>
    );
};

export default Login;