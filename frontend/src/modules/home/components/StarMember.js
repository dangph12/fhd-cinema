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
    <div>
      <section className="value-combo">
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "#3b8d00",
            margin: "20px",
          }}
        >
          VALUE COMBO
        </h2>
        <Carousel responsive={responsive}>
          <div style={{ marginRight: "20px" }}>
            <div className="combo-item shadow">
              <img
                src="https://bhdstar.vn/wp-content/uploads/2024/09/Trung-Thu-LVV.jpg"
                alt="Combo Trung Thu Sum Vầy"
              />
              <h3>COMBO "TRUNG THU SUM VẦY"</h3>
              <p>Thưởng thức ngay combo bánh Trung Thu hảo hạng của BHD Star</p>
            </div>
          </div>

          <div style={{ marginRight: "20px" }}>
            <div className="combo-item shadow">
              <img
                src="https://bhdstar.vn/wp-content/uploads/2024/09/Trung-Thu-LVV.jpg"
                alt="Combo Trung Thu Sum Vầy"
              />
              <h3>COMBO "TRUNG THU SUM VẦY"</h3>
              <p>Thưởng thức ngay combo bánh Trung Thu hảo hạng của BHD Star</p>
            </div>
          </div>

          <div style={{ marginRight: "20px" }}>
            <div className="combo-item shadow">
              <img
                src="https://bhdstar.vn/wp-content/uploads/2024/09/Trung-Thu-LVV.jpg"
                alt="Combo Trung Thu Sum Vầy"
              />
              <h3>COMBO "TRUNG THU SUM VẦY"</h3>
              <p>Thưởng thức ngay combo bánh Trung Thu hảo hạng của BHD Star</p>
            </div>
          </div>

          <div style={{ marginRight: "20px" }}>
            <div className="combo-item shadow">
              <img
                src="https://bhdstar.vn/wp-content/uploads/2024/09/Trung-Thu-LVV.jpg"
                alt="Combo Trung Thu Sum Vầy"
              />
              <h3>COMBO "TRUNG THU SUM VẦY"</h3>
              <p>Thưởng thức ngay combo bánh Trung Thu hảo hạng của BHD Star</p>
            </div>
          </div>

          {/* Add more items here if needed */}
        </Carousel>
      </section>
    </div>
  );
};

export default StarMember;
