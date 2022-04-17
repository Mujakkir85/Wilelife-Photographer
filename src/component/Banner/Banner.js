import React from 'react';
import bannerimg from '../../image/banner2.png';

const Banner = () => {
    return (
        <div className=''>
            <img style={{ height: '600px' }} className='img-fluid w-100' src={bannerimg} alt="" />
        </div>
    );
};

export default Banner;