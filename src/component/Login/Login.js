import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    let emailRef = useRef('');
    let passwordRef = useRef('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const loginHandle = (event) => {
        event.preventDefault();
        emailRef = emailRef.current.value;
        passwordRef = passwordRef.current.value;
        signInWithEmailAndPassword(emailRef, passwordRef)
    }

    if (user) {
        console.log(user)
        navigate('/home')
    }


    return (
        <div>
            <form onSubmit={loginHandle}>
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