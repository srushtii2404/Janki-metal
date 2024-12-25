// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="text-dark py-4 container">
            <div className="footer px-4 rounded">
                <div className="row d-flex justify-content-around">
                    {/* Footer Links */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <h3 className='main-text'>Janki Metal</h3>

                        <p className='secondary-text mt-4'>
                            <span><IoLocationSharp size={18} /></span>   Address here...
                        </p>

                        <p className='secondary-text mt-4'>
                            <span><MdPhone size={18} /></span>   contact here...
                        </p>

                        <p className='secondary-text mt-4'>
                            <span><MdEmail size={18} /></span>   Email here...
                        </p>
                    </div>

                    {/* Footer Information */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <h5>Bars</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 mt-4 gap-3">
                            <Link to='/' className='list-item'>Round Bars</Link>
                            <Link to='/' className='list-item'>Square Bars</Link>
                            <Link to='/' className='list-item'>Hex Bars</Link>
                            <Link to='/' className='list-item'>Flat Bars</Link>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <h5>Company</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 mt-4 gap-3">
                            <Link to='/aboutus' className='list-item'>AboutUs</Link>
                            <Link to='/infrastructure' className='list-item'>Infrastructure</Link>
                            <Link to='/applications' className='list-item'>Application</Link>
                            <Link to='/contactus' className='list-item'>ContactUS</Link>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5>Strength in steel, contact us today!</h5>
                        <p className='btn btn-outline-light small-btn'>Contact us</p>
                        <p className='btn btn-outline-light small-btn'>Download Catalogue</p>


                        <div className="connect mt-4">
                            <h6>Stay connect with us</h6>

                            <div className="icons d-flex gap-3">
                                <Link to="/" className='text-white'><FaFacebook size={18} /></Link>
                                <Link to="/" className='text-white'><FaInstagram size={18} /></Link>
                                <Link to="/" className='text-white'><FaLinkedin size={18} /></Link>
                                <Link to="/" className='text-white'><FaTwitter size={18} /></Link>

                            </div>

                        </div>

                    </div>



                    {/* Footer Copyright */}
                </div><hr />
                    <div className="col-md-3 mb-3 text-center text-md-end flex-nowrap">
                        <p>&copy; 2024 Janki Metal. All rights reserved.</p>
                    </div>
            </div>
        </footer>

    );
};

export default Footer;
