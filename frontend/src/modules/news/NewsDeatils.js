import React, { useEffect, useState } from "react";
import NavBar from "../cores/NavBar";
import Footer from "../cores/Footer";
import BannerSecond from "../home/components/BannerSecond";
import { SocialIcon } from "react-social-icons";
import { useParams } from "react-router-dom";
import { fetchNewsById } from "../../components/services/UserService";

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

      <div className="container">
        <div className="row shadow-lg p-4 mb-5 bg-white rounded">
          {/* Phần hình ảnh phim */}
          <div className="col-md-4">
            <img
              src={newsDetails?.newsImageUrl}
              alt="Film Thumbnail"
              className="img-thumbnail film-thumbnail"
            />
          </div>

          {/* Phần thông tin phim */}
          {newsDetails && (
            <div
              className="film-description col-md-5"
              key={newsDetails.newsId}
            >
              <h1 className="film-title">{newsDetails.movieTitle}</h1>
              <p className="film-synopsis">{newsDetails.movieDescription}</p>
              <br />
              <p className="film-synopsis">
                <strong>Phân loại: </strong>
                {newsDetails.movieGenre}
              </p>
              <br />
              <p className="film-synopsis">
                <strong>Định dạng: </strong>
                {newsDetails.movieFormat}
              </p>
              <br />
              <p className="film-synopsis">
                <strong>Đạo diễn: </strong>
                {newsDetails.movieDirector}
              </p>
              <br />
              <p className="film-synopsis">
                <strong>Diễn Viên: </strong>
                {newsDetails.movieCast}
              </p>
              <br />
              <p className="film-synopsis">
                <strong>Ngôn ngữ: </strong>
                {newsDetails.movieLanguage}
              </p>
              <br />
              <p className="film-synopsis">
                <strong>Thời Gian: </strong>
                {newsDetails.movieDurationMinute}
              </p>
              <br />
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

export default NewsDeatils;
