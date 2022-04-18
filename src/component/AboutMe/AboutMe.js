import React from 'react';
import './AboutMe.css'
import aboutme from '../../image/Aboutme.webp'
const AboutMe = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="card" style={{ width: "40rem" }}>
                <img src={aboutme} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Mujakkir Ahme</h5>
                    <p className="card-text">I want to be good frontend and backend developer. I have learned Htm, Css, have some experience using css frame work like bootstrap. I have a good knowledge of JavaScript and now I am learing React js with programming hero. My next 3/4 mounths goals are learn React js properly, then I will start database learing.Finally for backend I  am interested to learn Node js.</p>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;