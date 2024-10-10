import React, { useEffect, useState } from "react";
import NavBar from "../cores/NavBar";
import Footer from "../cores/Footer";
import BannerSecond from "../home/components/BannerSecond";
import { SocialIcon } from "react-social-icons";
import { useParams } from "react-router-dom";
import { fetchNewsById } from "../../components/services/UserService";
import VisaBanner from "../home/components/VisaBanner";

function NewsDeatils() {
  const { newsId } = useParams(); // Lấy movieId từ URL
  const [newsDetails, setNewsDetails] = useState(null); // mảng movies description rỗng

  useEffect(() => {
    getNewsDetails(newsId);
  }, [newsId]);

  const getNewsDetails = async (newsId) => {
    let res = await fetchNewsById(newsId);
    if (res && res.data) {
      setNewsDetails(res.data.data);
    }
  };

  return (
    <div>
      <BannerSecond />

      <div className="container" style={{marginTop: '50px'}}>
        <div className="row shadow-lg p-4 mb-5 bg-white rounded">
          {/* Phần hình ảnh phim */}
          <div className="col-md-5">
            <img
              src={newsDetails?.newsImageUrl}
              alt="Film Thumbnail"
              className="img-thumbnail film-thumbnail"
            />
          </div>

          {/* Phần thông tin phim */}
          {newsDetails && (
            <div className="film-description col-md-7" key={newsDetails.newsId}>
              <h1 className="film-title">{newsDetails.newsTitle}</h1>
              <p className="film-synopsis">
                <strong>{newsDetails.newsDescription}</strong>
              </p>
              <br />
              <p className="film-synopsis">
                <strong>Ngày Đăng Tin Khuyến Mãi: </strong>
                {newsDetails.newsCreateAt}
              </p>
              {/* Social Links */}
              <p className="film-synopsis">
                <SocialIcon href="www.github.com" />
                <SocialIcon url="https://twitter.com" />
                <SocialIcon url="https://facebook.com" />
                <SocialIcon url="https://pinterest.com" />
              </p>
            </div>
          )}
        </div>
      </div>

     <VisaBanner/>
    </div>
  );
}

export default NewsDeatils;
