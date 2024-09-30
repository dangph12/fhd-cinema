import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Dùng để lấy movieId từ URL
import { fetchMovieById } from "../../components/services/UserService"; // Hàm lấy chi tiết phim
import { SocialIcon } from "react-social-icons";

function FilmDetails() {
  const { movieId } = useParams(); // Lấy movieId từ URL
  const [movieDetails, setMovieDetails] = useState(null); // mảng movies description rỗng

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  const getMovieDetails = async (movieId) => {
    let res = await fetchMovieById(movieId);
    if (res && res.data) {
      setMovieDetails(res.data.data);
    }
  };

  console.log(movieDetails);

  return (
    <>
      <div className="film-intro">
        <img
          src="https://www.bhdstar.vn/wp-content/uploads/2024/09/bannerTop.jpg"
          alt="Film Banner"
          className="banner-img"
        />
        <div className="container">
          <div className="row shadow-lg p-4 mb-5 bg-white rounded">
            {/* Phần hình ảnh phim */}
            <div className="col-md-4">
              <img
                src={movieDetails?.moviePosterUrl}
                alt="Film Thumbnail"
                className="img-thumbnail film-thumbnail"
              />
            </div>

            {/* Phần thông tin phim */}
            {movieDetails && (
              <div
                className="film-description col-md-5"
                key={movieDetails.movieId}
              >
                <h1 className="film-title">{movieDetails.movieTitle}</h1>
                <p className="film-synopsis">{movieDetails.movieDescription}</p>
                <br />
                <p className="film-synopsis">
                  Phân loại: {movieDetails.movieGenre}
                </p>
                <br />
                <p className="film-synopsis">
                  Định dạng: {movieDetails.movieFormat}
                </p>
                <br />
                <p className="film-synopsis">
                  Đạo diễn: {movieDetails.movieDirector}
                </p>
                <br />
                <p className="film-synopsis">
                  Ngôn ngữ: {movieDetails.movieLanguage}
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
            

            {/* Phần thông tin thêm */}
            <div className="col-md-3 additional-info">
              <img
                src="https://www.bhdstar.vn/wp-content/uploads/2024/09/singlebanner2.jpg"
                alt="Additional Banner"
                className="additional-banner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="white-image">
        <img
          src="https://bhdstar.vn/wp-content/uploads/2024/09/Rectangle-27.png"
          alt="White Rectangle"
        />
      </div>
    </>
  );
}

export default FilmDetails;
