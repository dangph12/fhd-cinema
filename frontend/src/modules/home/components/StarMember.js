import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { fetchNews } from "../../../../src/components/services/UserService";
import { NavLink } from "react-router-dom";
import BannerThird from "./BannerThird";

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

  const buttonStyle = {
    border: "2px solid #8bc34a", // green border
    borderRadius: "15px", // rounded corners
    padding: "10px 20px", // padding for the button
    color: "#8bc34a", // green text
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent", // no background
    display: "inline-block", // button behavior\
    marginBottom: "20px",
  };

  const tittle = {
    borderRadius: "15px", // rounded corners
    color: "#8bc34a", // green text
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent", // no background
    display: "inline-block", // button behavior
    marginTop: "20px",
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
      <BannerThird />
      <section className="value-combo">
        <h2 className="">
          <button style={buttonStyle}>VALUE COMBO</button>
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
                  <h4 style={tittle}> {items.newsTitle}</h4>
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
