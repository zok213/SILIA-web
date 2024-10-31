import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to='/SILIA-web/home' className="navbar-brand mb-0 h1">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top me-3" alt="Logo" />
                    SILIA
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><Link to='/SILIA-web/home' className="nav-link active">Home</Link></li>
                        <li className="nav-item"><Link to='/SILIA-web/convert' className="nav-link">Convert</Link></li>
                        <li className="nav-item"><Link to='/SILIA-web/learn-sign' className="nav-link">Learn Sign</Link></li>
                        <li className="nav-item"><Link to='/SILIA-web/all-videos' className="nav-link">Videos</Link></li>
                        <li className="nav-item"><Link to='/SILIA-web/feedback' className="nav-link">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar