import React, { useEffect, useState } from "react";
import { fetchMovieById } from "../../../src/components/services/UserService";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function Youtube() {
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
  return (
    <div>
      <div className="container">
        {/* youtube link */}
        <div className="cinema video-container">
          <div className="video-wrapper">
            <div
              style={{
                position: "center",
                paddingBottom: "30%",
                height: 0,
                overflow: "hidden",
              }}
            >
              {/* <ReactPlayer url='https://www.youtube.com/watch?v=wI2Wd2yA8YE' /> */}
              {/* <iframe src={movieDetails.movieTrailerUrl}></iframe> */}
              {movieDetails?.movieTrailerUrl ? (
                <ReactPlayer url={movieDetails.movieTrailerUrl} />
              ) : (
                <p>Trailer not available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
