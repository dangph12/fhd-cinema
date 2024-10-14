import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
import FilmTime from './components/FilmTime';
import { fetchMovieById, fetchShowTime } from '../../components/services/UserService';

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
    }

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
                            <h3 className="movie-title">
                                {movieDetails.movieTitle}
                            </h3>
                            <p className="movie-description">
                                {movieDetails.movieDescription}
                            </p>
                            <p><strong>Đạo diễn:</strong> <a href="#">{movieDetails.movieDirector}</a></p>
                            <p><strong>Diễn viên:</strong> <a href="#">Blake Lively</a>, <a href="#">Justin Baldoni</a></p>
                            <p><strong>Thể loại:</strong> <a href="#">{movieDetails.movieGenre}</a></p>
                            <p><strong>Khởi chiếu:</strong> {movieDetails.movieReleaseDate} | <strong>Thời lượng:</strong> 130 phút</p>
                            <button className="movie-button" onClick={handleButtonClick}>← CHỌN PHIM KHÁC</button>
                        </div>
                    )}

                </div>

                <div className="container">
                    {/* youtube link */}
                    <div className="cinema video-container">
                        <div className="video-wrapper">
                            <div style={{ position: 'center', paddingBottom: '30%', height: 0, overflow: 'hidden' }}>
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

                <FilmTime movieDetails={movieDetails}
                 moviePosterUrl={movieDetails?.moviePosterUrl}/>
                <div className="white-image">
                    <img src="https://bhdstar.vn/wp-content/uploads/2024/09/Rectangle-27.png" />
                </div>
            </div>
        </div>
    )
}

export default OrderTicket


