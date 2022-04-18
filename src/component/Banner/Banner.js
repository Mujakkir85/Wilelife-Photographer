import React from 'react';
import bannerimg from '../../image/banner5.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img style={{ height: '500px' }} className='img-fluid w-100' src={bannerimg} alt="" />
            <div className='hading'>
                <h1>Wildlife is something which man cannot construct. Once it is gone, it is gone forever.</h1>
            </div>
        </div>
    );
};

export default Banner;