import React, { useEffect, useState } from 'react';
import Allservices from '../Allservices/Allservices';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        < div id='services' className='container'>
            <h2 style={{ color: '#04AA6D' }} className='text-center mt-4'>SERVICES</h2>
            <div className='row row-cols-1 row-cols-md-2 d-flex justify-content-center'>
                {services.map(service => <Allservices
                    key={service.id}
                    service={service}>
                </Allservices>)}
            </div>
        </div>

    );
};

export default Services;