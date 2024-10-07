import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { fetchNews } from "../../../components/services/UserService";
import { NavLink } from "react-router-dom";

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

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    let res = await fetchNews();
    if (res && res.data) {
      setNews(res.data.data);
    }
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
          {news.map((items) => (
            <div className="combo-container">
              <div style={{ marginRight: "20px" }}>
                <div className="combo-item shadow">
                  <NavLink className="nav-link" to={`/news/${items.newsId}`}>
                    <img
                      src={items.newsImageUrl}
                      alt="Combo Trung Thu Sum Vầy"
                    />
                  </NavLink>
                  <h3
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                      color: "#3b8d00",
                    }}
                  >
                    {items.newsTitle}
                  </h3>
                  <p>
                    Thưởng thức ngay combo bánh Trung Thu hảo hạng của BHD Star
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default StarMember;
