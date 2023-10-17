import React from 'react'
import logo from "../img/logo_ass.png";
import "./Navbar.css"

const Navbar = () => {

    return (
        <>
            {/* Nav Bar  */}
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <img src={logo} className="logo me-4" alt="Not Found" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item dropdown me-4">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>Solutions</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Sol 1</a></li>
                                    <li><a className="dropdown-item" href="/">Sol 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown me-4">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>Features</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Cloud Computing</a></li>
                                    <li><a className="dropdown-item" href="/">Web 3 Technology</a></li>
                                </ul>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="/"><b>Blogs</b></a>
                            </li>
                            <li className="nav-item dropdown me-4">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>About</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Jobs</a></li>
                                    <li><a className="dropdown-item" href="/">Upcoming Project</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex me-5" role="search">
                            <button className="btn btn-outline-primary me-3">Login</button>
                            <button className="btn btn-primary me-4">Register</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
