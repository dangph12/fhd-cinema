import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import FilmTime from "./components/FilmTime";
import {
  fetchMovieById,
  fetchShowTime,
} from "../../components/services/UserService";
import VisaBanner from "../home/components/VisaBanner";
import Youtube from "./Youtube";

// import YouTube from 'react-youtube';

const OrderTicket = (props) => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/");
  }

  // movie id part
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
    <div>
      <div className="film-intro">
        <img
          src="https://www.bhdstar.vn/wp-content/uploads/2024/09/bannerTop.jpg"
          alt="Film Banner"
          className="banner-img"
        />

        <div className="movie-card">
          <img
            src={movieDetails?.moviePosterUrl}
            alt="Movie Poster"
            className="movie-poster"
          />

          {movieDetails && (
            <div className="movie-details">
              <h3 className="movie-title">{movieDetails.movieTitle}</h3>
              <p className="movie-description">
                {movieDetails.movieDescription}
              </p>
              <p>
                <strong>Đạo diễn:</strong>{" "}
                <a href="#">{movieDetails.movieDirector}</a>
              </p>
              <p>
                <strong>Diễn viên:</strong> <a href="#">Blake Lively</a>,{" "}
                <a href="#">Justin Baldoni</a>
              </p>
              <p>
                <strong>Thể loại:</strong>{" "}
                <a href="#">{movieDetails.movieGenre}</a>
              </p>
              <p>
                <strong>Khởi chiếu:</strong> {movieDetails.movieReleaseDate} |{" "}
                <strong>Thời lượng:</strong> 130 phút
              </p>
              <p>
                <strong>Định Dạng:</strong> {movieDetails.movieFormat}{" "}
              </p>
              <button className="movie-button" onClick={handleButtonClick}>
                ← CHỌN PHIM KHÁC
              </button>
            </div>
          )}
        </div>

        <Youtube />

        <FilmTime movieDetails={movieDetails}
         moviePosterUrl={movieDetails?.moviePosterUrl}/>

        <VisaBanner />
      </div>
    </div>
  );
};

export default OrderTicket;
