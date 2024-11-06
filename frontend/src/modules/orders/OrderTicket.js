// import React, { useEffect, useState } from "react";
// import { Navigate, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import ReactPlayer from "react-player/youtube";
// import FilmTime from "./components/FilmTime";
// import {
//   fetchMovieById,
//   fetchShowTime,
// } from "../../../src/components/services/UserService";
// import VisaBanner from "../home/components/VisaBanner";
// import Youtube from "./Youtube";

// // import YouTube from 'react-youtube';

// const OrderTicket = () => {
//   const navigate = useNavigate();

//   function handleButtonClick() {
//     navigate("/");
//   }

//   // movie id part
//   const { movieId } = useParams(); // Lấy movieId từ URL
//   const [movieDetails, setMovieDetails] = useState(null); // mảng movies description rỗng

//   useEffect(() => {

//     let session = sessionStorage.getItem("account");
//     let local = localStorage.getItem("account");

//     if (session && local) {
//       const accountData = JSON.parse(session);
//       const account = JSON.parse(local);
//     } else {
//       navigate("/login")
//     }
//     getMovieDetails(movieId);
//   }, [movieId]);

//   const getMovieDetails = async (movieId) => {
//     let res = await fetchMovieById(movieId);
//     if (res && res.data) {
//       setMovieDetails(res.data.data);
//     }
//   };

//   // console.log(movieDetails);

//   return (
//     <div>
//       <div className="film-intro">
//         <img
//           src="https://www.bhdstar.vn/wp-content/uploads/2024/09/bannerTop.jpg"
//           alt="Film Banner"
//           className="banner-img"
//         />

//         <div className="movie-card">
//           <img
//             src={movieDetails?.moviePosterUrl}
//             alt="Movie Poster"
//             className="movie-poster"
//           />

//           {movieDetails && (
//             <div className="movie-details">
//               <h3 className="movie-title">{movieDetails.movieTitle}</h3>
//               <p className="movie-description">
//                 {movieDetails.movieDescription}
//               </p>
//               <p>
//                 <strong>Đạo diễn:</strong>{" "}
//                 <a href="#">{movieDetails.movieDirector}</a>
//               </p>
//               <p>
//                 <strong>Diễn viên:</strong> <a href="#">Blake Lively</a>,{" "}
//                 <a href="#">Justin Baldoni</a>
//               </p>
//               <p>
//                 <strong>Thể loại:</strong>{" "}
//                 <a href="#">{movieDetails.movieGenre}</a>
//               </p>
//               <p>
//                 <strong>Khởi chiếu:</strong> {movieDetails.movieReleaseDate} |{" "}
//                 <strong>Thời lượng:</strong> 130 phút
//               </p>
//               <p>
//                 <strong>Định Dạng:</strong> {movieDetails.movieFormat}{" "}
//               </p>
//               <button className="movie-button" onClick={handleButtonClick}>
//                 ← CHỌN PHIM KHÁC
//               </button>
//             </div>
//           )}
//         </div>

//         <Youtube />

//         <FilmTime movieDetails={movieDetails} />

//         <VisaBanner />
//       </div>
//     </div>
//   );
// };

// export default OrderTicket;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import FilmTime from "./components/FilmTime";
import { fetchMovieById } from "../../../src/components/services/UserService";
import VisaBanner from "../home/components/VisaBanner";
import Youtube from "./Youtube";

const OrderTicket = () => {
  window.scrollTo(0, 0);


  sessionStorage.removeItem("billId");

  const navigate = useNavigate();
  const { movieId } = useParams(); // Get movieId from URL
  const [movieDetails, setMovieDetails] = useState(null); // State to store movie details

  useEffect(() => {
    const sessionAccount = sessionStorage.getItem("account");
    const localAccount = localStorage.getItem("account");

    if (!sessionAccount && !localAccount) {
      navigate("/login");
      return;
    }

    // Fetch movie details if account exists
    getMovieDetails(movieId);
  }, [movieId, navigate]);

  const getMovieDetails = async (movieId) => {
    const res = await fetchMovieById(movieId);
    if (res && res.data) {
      setMovieDetails(res.data.data);
    }
  };

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
              <p
                className="movie-description"
                dangerouslySetInnerHTML={{
                  __html: movieDetails.movieDescription,
                }}
              ></p>
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
                <strong>Định Dạng:</strong> {movieDetails.movieFormat}
              </p>
              <button className="movie-button" onClick={() => navigate("/")}>
                ← CHỌN PHIM KHÁC
              </button>
            </div>
          )}
        </div>

        <Youtube />
        <FilmTime movieDetails={movieDetails} />
        <VisaBanner />
      </div>
    </div>
  );
};

export default OrderTicket;
