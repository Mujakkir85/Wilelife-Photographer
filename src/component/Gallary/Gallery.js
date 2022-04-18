import React from 'react';
import './Gallery.css'
import image1 from '../../image/image1.webp'
import image2 from '../../image/image2.jpg'
import image3 from '../../image/image3.jpg'
import image4 from '../../image/image4.jpg'

const Gallery = () => {
    return (
        <div className='container mx-auto my-5'>
            <h2 style={{ color: '#04AA6D' }} className='text-center pb-2'>My Best Colletion</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={image1} className="card-img-top " alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={image2} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={image3} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={image4} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;