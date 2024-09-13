import React from 'react'

function NavBar() {
    return (
        <div>
            <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="img/logo-100x100.png" />
                        <span></span></a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsFurni">
                        <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li><a class="nav-link" href="shop.html">Lịch Chiếu</a></li>
                            <li><a class="nav-link" href="about.html">Cửa Hàng</a></li>
                            <li><a class="nav-link" href="services.html">Khuyến Mãi</a></li>
                            <li><a class="nav-link" href="blog.html">About Us</a></li>
                            <li><a class="nav-link" href="contact.html">Contact us</a></li>
                        </ul>

                        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><a class="nav-link" href="#"><img src="img/user.svg" /></a></li>
                            <li><a class="nav-link" href="cart.html"><img src="img/cart.svg" /></a></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
