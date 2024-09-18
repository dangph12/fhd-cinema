import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = (props) => {
    const images = [
        "https://bhdstar.vn/wp-content/uploads/2024/08/d01da503e99955ab7e8.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight1069ldapp-13.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/07/z5613171744207_7d4285303094c19fd80de02beea34e0b.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/07/z5613171762164_5c6451cbc2e353eed46a4b819ab386b8.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/07/z5639242205108_12db8cc10b81f6c9deba248ca68bdecf.jpg",
        "https://bhdstar.vn/wp-content/uploads/2024/07/z5613022018407_76fddb90fa1896ff5317324ca73f97b8.jpg",
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            slideToSlide: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            {/* slide show  */}
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    </div>
                </div>
            </Slide>
            {/* slide bar  */}
            <div>
                <div class="grid">
                    <div class="hot-series">
                        <div class="hot-label">
                            <h2 class="title-heading">
                                <h3 class="hot-series">Hot Series</h3>
                            </h2>
                        </div>
                        <Carousel responsive={responsive}>
                            <div className="card">
                                <img className="product--image" src="img/10.jpg" />
                                {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                            </div>
                            <div className="card">
                                <img className="product--image" src="img/9.jpg" />
                                {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                            </div>
                            <div className="card">
                                <img className="product--image" src="img/8.jpg" />
                                {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                            </div>
                            <div className="card">
                                <img className="product--image" src="img/11.jpg" />
                                {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                            </div>
                            <div className="card">
                                <img className="product--image" src="img/12.jpg" />
                                {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                            </div>
                            <div className="card">
                                <img className="product--image" src="img/2.jpg" />
                                {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                            </div>
                            <div className="card">
                                <img className="product--image" src="img/15.jpg" />
                                {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                            </div>
                        </Carousel>;
                    </div>
                </div>
            </div>
            {/* banner  */}
            <a href="#" className="banner">
                <img style={{ marginLeft: '0px' }} src="https://pops-shop-vn.akamaized.net/2023/02/One-Piece_web-1.jpg" alt="" />
            </a>

            {/* body BodyFirst */}
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
                                            <img src="img/1.jpg" alt="" />
                                        </div>
                                        <div className="name">
                                            <h2>Boruto: Naruto Next Generations</h2>
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

            {/* banner second   */}
            <a href="#" className="banner">
                <img style={{ marginLeft: '0px' }} src="https://www.bhdstar.vn/wp-content/uploads/2024/09/bannerTop.jpg" alt="" />
            </a>
            {/* bodysecond  */}
            <div class="container">
                <div class="grid">
                    <div class="list-film">
                        <div class="hot-label">
                            <h2 class="title-heading">
                                <span class="pd-l">Comming Soon</span>
                            </h2>
                        </div>
                        <div class="film-product">
                            <div class="grid__row">
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/1.jpg" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Tuyệt Đỉnh</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/10.jpg" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Mys City</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/11.jpg" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Chị Đây Đại Thần Fandom</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/12.jpg" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Trường Này Chỉ Có Tôi Là Người</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/2.jpg" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Sếp Tôi</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/3.png" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Kiếp Văn Phòng</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/4.png" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Zookiz - Truyện ngắn đặc sắc</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/5.png" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Câu Lạc Bộ Anti Nhân Vật Chínhn</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/6.jpg" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Tác Giả, Em Muốn Nghỉ Việc!</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/7.jpg" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Hãy Mang Anh Trai Tôi Đi</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/8.jpg" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Khi Khách Hàng Là Bồ Cũ</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-2-6">
                                    <a href="#" class="itemfilm">
                                        <div class="img-item">
                                            <img src="img/9.jpg" alt="" />
                                        </div>
                                        <div class="name">
                                            <h2>Nhật ký nữ phụ huấn luyện em trai</h2>
                                        </div>
                                        <span>
                                            <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                                <i class="fas fa-star"></i>Thông Tin Phim
                                            </button>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* star member  */}

            <div class="container">
                <div class="grid">
                    <div class="film-product">
                        <div class="grid__row">
                            <div class="col-4-6">
                                <a href="#" class="itemfilm">
                                    <div class="img-item">
                                        <img src="img/bhdstarmember.png" alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="grid">
                    <div class="film-product">
                        <div class="grid__row">
                            <div className="col-md-4">
                                <a href="#" className="itemfilm">
                                    <div className="img-item">
                                        <img src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21.png" alt="" />
                                    </div>
                                    <div className="name">
                                        <h2>Quét Mã QR - Thẳng Tiến Vào Rạp</h2>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4">
                                <a href="#" className="itemfilm">
                                    <div className="img-item">
                                        <img src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-20.png" alt="" />
                                    </div>
                                    <div className="name">
                                        <h2>Happy day Thứ 2 Giá Rẻ - Chỉ Từ 60k/vé</h2>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4">
                                <a href="#" className="itemfilm">
                                    <div className="img-item">
                                        <img src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-19.png" alt="" />
                                    </div>
                                    <div className="name">
                                        <h2>Giá Vé 55k - Dành Cho Fan Cứng U22</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Home