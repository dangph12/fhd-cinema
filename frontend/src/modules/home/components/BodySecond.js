import React, { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";
import { fetchAllUser } from "../../../components/services/UserService";
import SendIcon from "@mui/icons-material/Send";

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
  const buttonStyle = {
    border: "2px solid #8bc34a", // green border
    borderRadius: "15px", // rounded corners
    padding: "10px 20px", // padding for the button
    color: "#8bc34a", // green text
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent", // no background
    display: "inline-block", // button behavior
  };

  const tittle = {
    borderRadius: "15px", // rounded corners
    padding: "10px 20px", // padding for the button
    color: "#8bc34a", // green text
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent", // no background
    display: "inline-block", // button behavior
  };

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
            <div className="hot-label">
              <h2 className="">
                <button style={buttonStyle}>COMING SOON</button>
              </h2>
            </div>
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
                        <h4 style={tittle}>{items.movieTitle}</h4>
                      </div>
                      <Nav.Link className="nav-item active">
                        <NavLink
                          className="nav-link"
                          to={`/description/${items.movieId}`}
                        >
                          <Button style={buttonStyle}>
                            THÔNG TIN CHI TIẾT
                            <SendIcon
                              style={{ marginLeft: "10px", color: "#8bc34a" }}
                            />
                          </Button>
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
