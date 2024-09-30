import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";
import { fetchAllUser } from "../../../components/services/UserService";

//     movieCast
// :
// "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page"
// movieDescription
// :
// "Một tên trộm bước vào giấc mơ để đánh cắp bí mật và phải gieo ý tưởng vào tiềm thức của một người."
// movieDirector
// :
// "Christopher Nolan"
// movieDurationMinute
// :
// 148
// movieFormat
// :
// "IMAX"
// movieGenre
// :
// "Khoa học viễn tưởng, Ly kỳ"
// movieId
// :
// "4b428701-ee72-43a9-ac28-900e23d56122"
// movieLanguage
// :
// "Phụ đề"
// moviePosterUrl
// :
// "https://fhd-cinema.s3.ap-southeast-1.amazonaws.com/sample-data/inception.jpg"
// movieReleaseDate
// :
// "2010-07-16T00:00:00.000+00:00"
// movieStatus
// :
// "Đã phát hành"
// movieTitle
// :
// "Kẻ Đánh Cắp Giấc Mơ - create"
// movieTrailerUrl
// :
// "https://www.youtube.com/watch?v=YoHD9XEInc0"
// ratingId
// :
// "3cdbc369-73e0-11ef-ab6e-0242ac110002"

//     movieCast
// :
// "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page"
// movieDescription
// :
// "Một tên trộm bước vào giấc mơ để đánh cắp bí mật và phải gieo ý tưởng vào tiềm thức của một người."
// movieDirector
// :
// "Christopher Nolan"
// movieDurationMinute
// :
// 148
// movieFormat
// :
// "IMAX"
// movieGenre
// :
// "Khoa học viễn tưởng, Ly kỳ"
// movieId
// :
// "4b428701-ee72-43a9-ac28-900e23d56122"
// movieLanguage
// :
// "Phụ đề"
// moviePosterUrl
// :
// "https://fhd-cinema.s3.ap-southeast-1.amazonaws.com/sample-data/inception.jpg"
// movieReleaseDate
// :
// "2010-07-16T00:00:00.000+00:00"
// movieStatus
// :
// "Đã phát hành"
// movieTitle
// :
// "Kẻ Đánh Cắp Giấc Mơ - create"
// movieTrailerUrl
// :
// "https://www.youtube.com/watch?v=YoHD9XEInc0"
// ratingId
// :
// "3cdbc369-73e0-11ef-ab6e-0242ac110002"

const BodySecond = (props) => {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    // call api
    getMovies();
  }, []);

  const getMovies = async () => {
    let res = await fetchAllUser();

    if (res && res.data) {
      setListMovies(res.data.data);
    }
  };
  // check data
  console.log(listMovies);

  return (
    <div>
      <div className="container">
        <div className="movie-gallery">
          <div className="hot-label">
            <h2 className="title-heading">
              <span className="pd-l">Comming Soon</span>
            </h2>
          </div>
          <div className="grid__row">
            {listMovies &&
              listMovies.length > 0 &&
              listMovies.map((items, index) => {
                return (
                  <div className="col-3-4" key={`movies-${index}`}>
                    <div className="movie-item">
                      <Nav.Link className="nav-item active">
                        <NavLink
                          className="nav-link"
                          to={`/description/${items.movieId}`}
                        >
                          <div className="img-wrapper">
                            <img
                              src={items.moviePosterUrl}
                              alt="Movie 2"
                              className="movie-image"
                            />
                          </div>
                        </NavLink>
                      </Nav.Link>
                      <div className="movie-name">
                        <h2>{items.movieTitle}</h2>
                      </div>
                      <Nav.Link className="nav-item active">
                        <NavLink
                          className="nav-link"
                          to={`/description/${items.movieId}`}
                        >
                          <button
                            type="button"
                            className="btn btn-outline-success btn-floating"
                            data-mdb-ripple-init
                          >
                            <i className="fas fa-star"></i> Thông Tin Phim
                          </button>
                        </NavLink>
                      </Nav.Link>
                    </div>
                  </div>
                );
              })}

            <div className="col-3-4">
              <div className="movie-item">
                <div className="img-wrapper">
                  <img
                    src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg"
                    alt="Movie 3"
                    className="movie-image"
                  />
                </div>
                <div className="movie-name">
                  <h2>Movie Title 3</h2>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-success btn-floating"
                  data-mdb-ripple-init
                >
                  <i className="fas fa-star"></i> Thông Tin Phim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySecond;
