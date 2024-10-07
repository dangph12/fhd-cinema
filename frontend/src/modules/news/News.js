import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchNews } from "../../components/services/UserService";
import BannerSecond from "../home/components/BannerSecond";
import { NavLink } from "react-router-dom";

function News() {
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

  // checck api news
  // useEffect(() => {
  //     axios.get("http://localhost:8080/movies").then(data => {
  //         console.log(">>>check", data);

  //     })
  // }, []);

  return (
    <div>
      <div class="fluid-container">
        <BannerSecond />
      </div>

      <section class="value-combo">
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "#3b8d00",
            margin: "20px 20px 20px 20px",
          }}
        >
          FHD NEWS COMBO
        </h1>
        <div class="combo-container">
          {news.map((items, index) => {
            return (
              <div class="combo-item shadow" key={index}>
                <a className="nav-link" href="#"></a>
                <NavLink
                  className="nav-link"
                  to={`/news/${items.newsId}`}
                >
                  <img src={items.newsImageUrl} alt="Combo Trung Thu Sum Vầy" />
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
                {/* <p>{items.newsDescription}</p> */}
              </div>
            );
          })}
        </div>
      </section>

      <div className="login-page-container">
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
