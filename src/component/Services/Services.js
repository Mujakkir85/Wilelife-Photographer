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
        < div className='container'>
            <h1 className='text-center mt-4'>Services</h1>
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