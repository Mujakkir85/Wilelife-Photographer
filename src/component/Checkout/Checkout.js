import React from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>from Checkout page: {id}</h1>
        </div>
    );
};

export default Checkout;