import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <footer className="mt-5 pt-5 pb-2 footer ">
            <div className="container mx-auto">
                <div className="row mx-auto">
                    <div className="col-md-4 col-xs-12">
                        <h2>Abut my pession</h2>
                        <p className="pr-2 text-white-100"> Documentary photographers aim to capture authentic images to document a particular event, environmental issue, or location. For example, documentary wildlife photographers may focus on the impact of commercial hunting or poaching on endangered animal populations.</p>
                    </div>
                    <div className="col-lg-3 col-xs-12">
                        <h4 className="mt-lg-0 mt-2">I Am Interested On</h4>
                        <ul className="m-0 p-0">
                            <li>Documentary Photography</li>
                            <li>Commercial Photography</li>
                            <li>Behavior Photography</li>
                            <li>Underwater Photography</li>
                            <li>Conservation Photography</li>
                            <li>Macro Photography</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-xs-12 ">
                        <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                        <p>27, Kagisi, Winterfall, Wasterious</p>
                        <p className="mb-0">(231) 654-7540</p>
                        <p>Marktlre@gmail.com</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col copyright">
                        <p className="text-center"><small className="text-white-100">© 2022. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;