import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Allservices.css'

const Allservices = (props) => {
    const { price, name, picture, description, id } = props.service;

    let navigate = useNavigate()

    const handleCheckout = () => {
        navigate(`/servicecheckout/${id}`)
    }
    return (
        <Card className='col gy-5 cardclass' >
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>Title: {name}</Card.Title>
                <Card.Title>Price: ${price}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button onClick={() => handleCheckout(id)} variant="primary">Book Your Service</Button>
            </Card.Body>

        </Card>
    );
};

export default Allservices;