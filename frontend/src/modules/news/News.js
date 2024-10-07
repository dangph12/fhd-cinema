import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchNews } from "../../components/services/UserService";
import BannerSecond from "../home/components/BannerSecond";
import { NavLink } from "react-router-dom";

function News() {
  const buttonStyle = {
    border: "2px solid #8bc34a", // green border
    borderRadius: "15px", // rounded corners
    padding: "10px 20px", // padding for the button
    color: "#8bc34a", // green text
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent", // no background
    display: "inline-block", // button behavior
    marginBottom: '20px'
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
      <BannerSecond />
      <section className="value-combo">
        <h2 className="">
          <button style={buttonStyle}>FHD NEWS COMBO</button>
        </h2>

        <div className="combo-container">
          {news.map((items) => (
            <div className="combo-item1 shadow" key={items.newsId}>
              <NavLink className="nav-link" to={`/news/${items.newsId}`}>
                <img
                  style={{ width: "100%" }}
                  src={items.newsImageUrl}
                  alt={items.newsTitle}
                />
              </NavLink>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "#3b8d00",
                  marginTop: "30px",
                }}
              >
                {items.newsTitle}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <div className="login-page-container" style={{ marginBottom: "20px" }}>
        <div className="login-page-white-image">
          <img
            src="https://bhdstar.vn/wp-content/uploads/2024/09/Rectangle-27.png"
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default News;
