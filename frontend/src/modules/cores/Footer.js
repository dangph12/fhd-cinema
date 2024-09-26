import React from 'react'


const Footer = (props) => {
    return (
        <div>
            <footer className="footer-section" >
                <div className="container relative">
                    {/* <div className="row">
                        <div className="col-lg-">
                            <div className="subscription-form">
                                <h3 className="d-flex align-items-center"><span className="me-1"><img src="img/logo-100x100.png"
                                    alt="Image" className="img-fluid" /></span><span></span></h3>
                                <form action="#" className="row g-3">
                                    <div className="col-auto">
                                        <input type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div className="col-auto">
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary">
                                            <span className="fa fa-paper-plane"></span>
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div> */}

                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <p className="mb-4"><img src="https://www.bhdstar.vn/wp-content/uploads/2024/09/logo2024.png"
                                alt="Image" className="img-fluid" /></p>

                            <ul className="list-unstyled custom-social">
                                <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-8">
                            <div className="row links-wrap">
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Knowledge base</a></li>
                                        <li><a href="#">Live chat</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">Our team</a></li>
                                        <li><a href="#">Leadership</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Nordic Chair</a></li>
                                        <li><a href="#">Kruzo Aero</a></li>
                                        <li><a href="#">Ergonomic Chair</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="border-top copyright">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <p className="mb-2 text-center text-lg-start">Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash;
                                    <a href="https://untree.co"></a><a hreff="https://themewagon.com"></a>
                                </p>
                            </div>

                            <div className="col-lg-6 text-center text-lg-end">
                                <ul className="list-unstyled d-inline-flex ms-auto">
                                    <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer