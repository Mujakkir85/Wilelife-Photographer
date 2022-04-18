import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Register = () => {

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        //console.log(name, email, password)
    }

    if (user) {
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <div className="form-container">
                    <h1 className='text-center'>REGISTER</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <input type="text" placeholder="Name" name="name" id="name" required />
                    <input type="email" placeholder="Enter Your Email" name="email" id="email" required />
                    <input type="password" placeholder="Enter Password" name="password" id="psw" required />
                    <hr />
                    <button type="submit" className="registerbtn">Register</button>
                </div>
                <div className="container signin">
                    <p>Already have an account? <Link to="/login" style={{ color: '#04AA6D', fontWeight: 'bold' }}> Login </Link></p>
                </div>
            </form>

            <div className="form-container">
                <button type="submit" className="registerbtn">Google Login</button>
            </div>

        </div>
    );
};

export default Register;