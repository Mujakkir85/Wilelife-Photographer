import React from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css'


const Checkout = () => {
    const { id } = useParams()

    const handleChackout = () => {

    }

    return (
        <div>
            <form onSubmit={handleChackout} >
                <div className="form-container">
                    <h1 className='text-center'>Checkout From</h1>
                    <hr />
                    <input type="text" placeholder="Name" name="name" id="name" required />
                    <input type="text" placeholder="Address" name="address" id="name" required />
                    <input type="text" placeholder="Moblie" name="number" id="name" required />
                    <input type="email" placeholder="Enter Your Email" name="email" id="email" required />
                    <hr />
                    <button type="submit" className="registerbtn">Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;