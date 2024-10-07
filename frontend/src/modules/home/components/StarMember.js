import React from "react";
import Carousel from "react-multi-carousel";

const StarMember = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slideToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 500 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 500, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    // <div>
    //     <div class="container">
    //         <div class="grid">
    //             <div class="film-product">
    //                 <div class="grid__row">
    //                     <div class="col-4-6">
    //                         <a href="#" class="itemfilm">
    //                             <div class="img-item">
    //                                 <img src="img/bhdstarmember.png" alt="" />
    //                             </div>
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="container">
    //         <div class="grid">
    //             <div class="film-product">
    //                 <div class="grid__row">
    //                     <div className="col-md-4">
    //                         <a href="#" className="itemfilm">
    //                             <div className="img-item">
    //                                 <img src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21.png" alt="" />
    //                             </div>
    //                             <div className="name">
    //                                 <h2>Quét Mã QR - Thẳng Tiến Vào Rạp</h2>
    //                             </div>
    //                         </a>
    //                     </div>

    //                     <div className="col-md-4">
    //                         <a href="#" className="itemfilm">
    //                             <div className="img-item">
    //                                 <img src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-20.png" alt="" />
    //                             </div>
    //                             <div className="name">
    //                                 <h2>Happy day Thứ 2 Giá Rẻ - Chỉ Từ 60k/vé</h2>
    //                             </div>
    //                         </a>
    //                     </div>

    //                     <div className="col-md-4">
    //                         <a href="#" className="itemfilm">
    //                             <div className="img-item">
    //                                 <img src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-19.png" alt="" />
    //                             </div>
    //                             <div className="name">
    //                                 <h2>Giá Vé 55k - Dành Cho Fan Cứng U22</h2>
    //                             </div>
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div>
      <section class="value-combo">
        <h2>VALUE COMBO</h2>
        <Carousel responsive={responsive}>
          {/* <div class="combo-container">
            <div class="combo-item shadow">
              <img
                src="https://bhdstar.vn/wp-content/uploads/2024/09/Trung-Thu-LVV.jpg"
                alt="Combo Trung Thu Sum Vầy"
              />
              <h3>COMBO "TRUNG THU SUM VẦY"</h3>
              <p>Thưởng thức ngay combo bánh Trung Thu hảo hạng của BHD Star</p>
            </div>

            <div class="combo-item shadow">
              <img
                src="https://bhdstar.vn/wp-content/uploads/2024/09/Black-Pink.jpg"
                alt="Combo Conan Thám Tử Lừng Danh"
              />
              <h3>COMBO "CONAN - THÁM TỬ LỪNG DANH"</h3>
              <p>Mua combo bắp nước kèm 1 sản phẩm Conan với giá cực hời</p>
            </div>

            <div class="combo-item shadow">
              <img
                src="https://bhdstar.vn/wp-content/uploads/2024/09/tui-tote-1x1-1.png"
                alt="Combo Ngon Dịu"
              />
              <h3>COMBO "NGON DỊU"</h3>
              <p>
                Mua combo "Ngon Dịu" tặng kèm vòng tay Blackpink siêu độc lạ
              </p>
            </div>
          </div> */}

          <div className="card border" >
            <img
              className="product--image"
              src="https://bhdstar.vn/wp-content/uploads/2024/09/Trung-Thu-LVV.jpg"
            />
              <h3>COMBO "CONAN - THÁM TỬ LỪNG DANH"</h3>
              <p>Mua combo bắp nước kèm 1 sản phẩm Conan với giá cực hời</p>
          </div>
          <div className="card">
            <img
              className="product--image"
              src="https://bhdstar.vn/wp-content/uploads/2024/09/Black-Pink.jpg"
            />
          </div>
          <div className="card">
            <img
              className="product--image"
              src="https://bhdstar.vn/wp-content/uploads/2024/09/tui-tote-1x1-1.png"
            />
          </div>
          <div className="card">
            <img
              className="product--image"
              src="https://bhdstar.vn/wp-content/uploads/2024/09/tui-tote-1x1-1.png"
            />
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default StarMember;
