import React from 'react'
import { Nav } from 'react-bootstrap';
import { useLocation, NavLink } from "react-router-dom";
import cart from '../cores/icon/cart.svg'
import user from '../cores/icon/user.svg'



const NavBar = (props) => {
    const location = useLocation();

    return (
        <div>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        {/* <img src="img/logo-100x100.png" /> */}
                        <Nav.Link className="nav-item active">
                            <NavLink className="nav-link" to="/">
                                <img src="https://www.bhdstar.vn/wp-content/uploads/2024/09/logo2024.png" alt="logo" />
                            </NavLink>
                        </Nav.Link>
                        <span></span></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0" activeKey={location.pathname}>
                            <Nav.Link className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </Nav.Link>
                            {/* <Nav.Link className="nav-item active">
                                <NavLink className="nav-link" to="/">Lịch Chiếu</NavLink>
                            </Nav.Link> */}
                            <Nav.Link className="nav-item active">
                                <NavLink className="nav-link" to="/stores">Cửa Hàng</NavLink>
                            </Nav.Link>
                            <Nav.Link className="nav-item active">
                                <NavLink className="nav-link" to="/news">News</NavLink>
                            </Nav.Link>
                            <Nav.Link className="nav-item active">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </Nav.Link>
                            {/* <Nav.Link className="nav-item active">
                                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                            </Nav.Link> */}
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <Nav.Link className="nav-item active">
                                <NavLink className="nav-link" to="/users">
                                    <img src={user} />
                                </NavLink>
                            </Nav.Link>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
