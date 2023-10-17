import React from 'react'
import logo from "../img/logo_ass.png";
import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-colour text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <img src={logo} alt="..." className='logo_footer' />
                                <p className='col-data'>
                                    India's first platform dedicated to simplifying partner search
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-1 mx-auto mb-4 col-data" >

                                <h6 className="text-uppercase fw-bold mb-4">
                                    COMPANY
                                </h6>
                                <p>
                                    <a href="#" style={{ textDecoration: 'none' }} className="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Price</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Careers</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Laravel</a>
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-1 mx-auto mb-4 col-data">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    SOLUTIONS
                                </h6>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Search</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Connect</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Research</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Academy</a>
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-1 mx-auto mb-4 col-data">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Resource
                                </h6>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Blogs</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Froms</a>
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-1 mx-auto mb-4 col-data">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    SUPPORT
                                </h6>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Help</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Contact Us</a>
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-1 mx-auto mb-4 col-data">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    LEGAL
                                </h6>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Privacy</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Terms</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }} >Accessibility</a>
                                </p>
                            </div>
                            <hr className='line' />
                        </div>

                    </div>
                </section>

                <section className="d-flex  border-bottom col-data">
                    <p className='container d-flex'>
                        Sambhaji Nagar, No2, St.Antony Road, Chembur, Mumbai-400071, Maharashtra
                        <div className='logo-social-media'>
                            <a href="" className="me-4 link-light">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="me-4 link-light">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="me-4 link-light">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="link-light">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </p>

                </section>
            <footer className="bg-dark   text-center text-lg-start">
                 <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)',color:'white' }}> 
                    Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved:
                </div>

            </footer>
            </footer>


        </>
    )
}

export default Footer
