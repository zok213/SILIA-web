import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="page-footer font-small unique-color-dark mt-5">


            <div className='container-fluid text-white pt-3' style={{backgroundColor:'rgba(33,37,41,1)'}}>
                <div className="container text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">SILIA-web</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:'60px'}}/>
                            <p className='footer-text'>Inspired by the emotional story in the animated film "Koe no katachi" we aim to create an intelligent virtual interpreter application that helps the hearing impaired communicate and interact naturally.</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Services</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:'60px'}} />
                            <p><Link to='/convert' className='footer-link'>Convert</Link></p>
                            <p><Link to='/learn-sign' className='footer-link'>Learn Sign</Link></p>
                            <p><Link to='/all-videos' className='footer-link'>Videos</Link></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:'60px'}} />
                            <p><Link to='/home' className='footer-link'>Home</Link></p>
                            <p><Link to='/feedback' className='footer-link'>Feedback</Link></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:'60px'}}/>
                            <p><i className="fa fa-lg fa-home me-3 ms-0"></i><span className='footer-text'> https://shorturl.at/9Fv3S</span></p>
                            <p><i className="fa fa-envelope me-3 ms-0"></i><span className='footer-text'> SILIA-web.danghinhthanham@gmail.com </span> </p>
                            <p><i className="fa fa-phone me-3 ms-0"></i><span className='footer-text'> + 84 896233053 </span> </p>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
    )
}

export default Footer