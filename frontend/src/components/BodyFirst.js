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
            <div class="container">
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
                                                    <img src="img/1.jpg" alt="" />
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
                                            <img src="img/2.jpg" alt="" />
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
                                            <img src="img/3.png" alt="" />
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
                                            <img src="img/4.png" alt="" />
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
                                            <img src="img/5.png" alt="" />
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
                                            <img src="img/6.jpg" alt="" />
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
                                            <img src="img/7.jpg" alt="" />
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
                                            <img src="img/8.jpg" alt="" />
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
                                            <img src="img/9.jpg" alt="" />
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
                                            <img src="img/10.jpg" alt="" />
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
                                            <img src="img/11.jpg" alt="" />
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
                                            <img src="img/15.jpg" alt="" />
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
            </div>
        </div>
    )
}

export default BodyFirst