import React from 'react'

const NavBar = (props) => {
    return (
        <div>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        {/* <img src="img/logo-100x100.png" /> */}
                        <img src="https://www.bhdstar.vn/wp-content/uploads/2024/09/logo2024.png" alt="logo" />
                        <span></span></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li><a className="nav-link" href="shop.html">Lịch Chiếu</a></li>
                            <li><a className="nav-link" href="about.html">Cửa Hàng</a></li>
                            <li><a className="nav-link" href="services.html">Khuyến Mãi</a></li>
                            <li><a className="nav-link" href="blog.html">About Us</a></li>
                            <li><a className="nav-link" href="contact.html">Contact us</a></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><a className="nav-link" href="#"><img src="img/user.svg" /></a></li>
                            <li><a className="nav-link" href="cart.html"><img src="img/cart.svg" /></a></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
