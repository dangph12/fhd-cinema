import axios from 'axios';
import React, { useEffect } from 'react'
import { fetchAllUser } from '../components/services/UserService'
import { Nav } from 'react-bootstrap';
import { useLocation, NavLink } from "react-router-dom";

const BodyFirst = (props) => {

    useEffect(() => {
        // call api
        // getMovies();

        axios.get("http://localhost:8080/movies").then(data => {
            console.log(">>>check", data);

        })


    }, []);

    const getMovies = async () => {
        let respone = await fetchAllUser();
        console.log(">>>>> chec", respone);

    }

    return (
        <div>
            {/* <div class="container">
                <div class="grid">
                    <div className="list-film">
                        <div className="hot-label">
                            <h2 className="title-heading">
                                <span className="pd-l">Phim Đang Chiếu</span>
                            </h2>
                        </div>
                        <div className="film-product">
                            <div className="grid__row">
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <Nav.Link className="nav-item active">
                                                <NavLink className="nav-link" to="/description">
                                                    <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-9.jpg" alt="" />
                                                </NavLink>
                                            </Nav.Link>
                                        </div>
                                        <div className="name">
                                            <Nav.Link className="nav-item active">
                                                <NavLink className="nav-link" to="/description">Boruto: Naruto Next Generations</NavLink>
                                            </Nav.Link>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>
                                                <Nav.Link className="nav-item active">
                                                    <NavLink className="nav-link" to="/orderTicket">Đặt Vé</NavLink>
                                                </Nav.Link>
                                            </button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-21.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Doraemon</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Detective Conan - Thám Tử Lừng Danh Conan</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-12.jpg"
                                             alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>One Piece - Đảo Hải Tặc</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-3.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Dragon Quest: Chuyến Phiêu Lưu Của Dai</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-2.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Inazma Deliverys</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-14.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Doraemon Movie 2023: Nobita và vùng đất lý tưởng trên bầu trời</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-8.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>ODDTAXI - Chuyến Taxi Bất Ổn</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-10.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Mashimaro - Chú Thỏ Tinh Nghịch</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-15.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Ninja Hattori</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-3.png" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Naruto Shippuden</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2-6">
                                    <a href="#" className="itemfilm">
                                        <div className="img-item">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/07/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-95.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Naruto Shippuden</h2>
                                        </div>
                                        <div className="vietsub">
                                            <button type="button" class="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                            <span>
                                                <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                    <i class="fas fa-star"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="container">
                <div className="movie-gallery">
                <div className="hot-label">
                            <h2 className="title-heading">
                                <span className="pd-l">Phim Đang Chiếu</span>
                            </h2>
                        </div>
                    <div className="grid__row">
                        <div className="col-3-4">
                            <div className="movie-item">
                                <div className="img-wrapper">
                                    <Nav.Link className="nav-item active">
                                        <NavLink className="nav-link" to="/description">
                                            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-9.jpg" alt="Movie 1" className="movie-image" />
                                        </NavLink>
                                    </Nav.Link>
                                </div>
                                <div className="movie-name">
                                    <Nav.Link className="nav-item active">
                                        <NavLink className="nav-link" to="/description">Movie Title 1</NavLink>
                                    </Nav.Link>
                                </div>
                                <div className="vietsub">
                                    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>
                                        <Nav.Link className="nav-item active">
                                            <NavLink className="nav-link" to="/orderTicket">Đặt Vé</NavLink>
                                        </Nav.Link>
                                    </button>
                                    <span>
                                        <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                            <i className="fas fa-star"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Repeat 3 more movie items below */}
                        <div className="col-3-4">
                            <div className="movie-item">
                                <div className="img-wrapper">
                                    <img src="https://bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-18.jpg" alt="Movie 2" className="movie-image" />
                                </div>
                                <div className="movie-name">
                                    <h2>Movie Title 2</h2>
                                </div>
                                <div className="vietsub">
                                    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                    <span>
                                        <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                            <i className="fas fa-star"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-3-4">
                            <div className="movie-item">
                                <div className="img-wrapper">
                                    <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg" alt="Movie 3" className="movie-image" />
                                </div>
                                <div className="movie-name">
                                    <h2>Movie Title 3</h2>
                                </div>
                                <div className="vietsub">
                                    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                    <span>
                                        <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                            <i className="fas fa-star"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-3-4">
                            <div className="movie-item">
                                <div className="img-wrapper">
                                    <img src="https://bhdstar.vn/wp-content/uploads/2024/07/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-95.jpg" alt="Movie 4" className="movie-image" />
                                </div>
                                <div className="movie-name">
                                    <h2>Movie Title 4</h2>
                                </div>
                                <div className="vietsub">
                                    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                    <span>
                                        <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                            <i className="fas fa-star"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-3-4">
                            <div className="movie-item">
                                <div className="img-wrapper">
                                    <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg" alt="Movie 3" className="movie-image" />
                                </div>
                                <div className="movie-name">
                                    <h2>Movie Title 3</h2>
                                </div>
                                <div className="vietsub">
                                    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                    <span>
                                        <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                            <i className="fas fa-star"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="col-3-4">
                            <div className="movie-item">
                                <div className="img-wrapper">
                                    <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg" alt="Movie 3" className="movie-image" />
                                </div>
                                <div className="movie-name">
                                    <h2>Movie Title 3</h2>
                                </div>
                                <div className="vietsub">
                                    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                    <span>
                                        <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                            <i className="fas fa-star"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-3-4">
                            <div className="movie-item">
                                <div className="img-wrapper">
                                    <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg" alt="Movie 3" className="movie-image" />
                                </div>
                                <div className="movie-name">
                                    <h2>Movie Title 3</h2>
                                </div>
                                <div className="vietsub">
                                    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                    <span>
                                        <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                            <i className="fas fa-star"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-3-4">
                            <div className="movie-item">
                                <div className="img-wrapper">
                                    <img src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg" alt="Movie 3" className="movie-image" />
                                </div>
                                <div className="movie-name">
                                    <h2>Movie Title 3</h2>
                                </div>
                                <div className="vietsub">
                                    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
                                    <span>
                                        <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                            <i className="fas fa-star"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyFirst