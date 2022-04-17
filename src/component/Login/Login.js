import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    let emailRef = useRef('');
    let passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/home";

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    const loginHandle = (event) => {
        event.preventDefault();
        emailRef = emailRef.current.value;
        passwordRef = passwordRef.current.value;
        signInWithEmailAndPassword(emailRef, passwordRef)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if (user || googleuser) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <form onSubmit={loginHandle}>
                <div className="form-container">
                    <h1 className='text-center'>LOGIN</h1>
                    <hr />
                    <input ref={emailRef} type="text" placeholder="Enter Email" name="email" id="email" required />
                    <input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    <hr />
                    <button type="submit" className="registerbtn">Login</button>
                </div>

                <div className="form-container signin">
                    <p>Create a new account?<Link to="/register" style={{ color: '#04AA6D', fontWeight: 'bold' }}> Register </Link></p>
                </div>

            </form>
            <div className="form-container">
                <button onClick={handleGoogleSignIn} type="submit" className="registerbtn">Google Login</button>
            </div>
        </div>
    );
};

export default Login;