import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let emailRef = useRef('');
    let passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let errormsg;

    let from = location.state?.from?.pathname || "/";  //find location where user was before login

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, senderror] = useSendPasswordResetEmail(auth);

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

    if (error) {
        errormsg = <p className='text-center text-warning mt-3'>{error.message}Error: Email or Password is incorrect!</p>
    }

    // use async wait from reset password
    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Find your reset password in your email')
        }
        else {
            toast('Enter your email')
        }
    }

    return (
        <div>
            {errormsg}
            <form onSubmit={loginHandle}>
                <div className="form-container">
                    <h1 className='text-center'>LOGIN</h1>
                    <hr />
                    <input ref={emailRef} type="text" placeholder="Enter Email" name="email" id="email" required />
                    <input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    <hr />
                    <button type="submit" className="registerbtn">Login</button>
                </div>
            </form>
            <div className="form-container signin">
                <p>Create a new account?<Link to="/register" style={{ color: '#04AA6D', fontWeight: 'bold' }}> Register </Link></p>
                <p>Forget your password?<button onClick={resetPassword} style={{ marginRight: 10, color: '#04AA6D', fontWeight: 'bold' }} className='btn btn-link text-decoration-none'>Reset Your Password</button></p>
            </div>
            <div className="form-container">
                <button onClick={handleGoogleSignIn} type="submit" className="registerbtn">Google Login</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;