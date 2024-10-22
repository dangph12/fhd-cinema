// import React, { useEffect, useState } from "react";
// import { Button, Nav } from "react-bootstrap";
// import { useLocation, NavLink } from "react-router-dom";
// import { fetchAllUser } from "../../../components/services/UserService";
// import SendIcon from "@mui/icons-material/Send";

// const BodySecond = (props) => {
//   const buttonStyle = {
//     border: "2px solid #8bc34a", // green border
//     borderRadius: "15px", // rounded corners
//     padding: "10px 20px", // padding for the button
//     color: "#8bc34a", // green text
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent", // no background
//     display: "inline-block", // button behavior
//     marginBottom: "30px",
//   };

//   const tittle = {
//     borderRadius: "15px", // rounded corners
//     padding: "10px 20px", // padding for the button
//     color: "#8bc34a", // green text
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent", // no background
//     display: "inline-block", // button behavior
//   };

//   const [listMovies, setListMovies] = useState([]);

//   useEffect(() => {
//     // call api
//     getMovies();
//   }, []);

//   const getMovies = async () => {
//     let res = await fetchAllUser();

//     if (res && res.data) {
//       setListMovies(res.data.data);
//     }
//   };
//   // check data
//   console.log(listMovies);

//   return (
//     <div>
//       <div className="container">
//         <div className="movie-gallery">
//           <div className="hot-label">
//             <div className="hot-label">
//               <h2 className="">
//                 <button style={buttonStyle}>COMING SOON</button>
//               </h2>
//             </div>
//           </div>
//           <div className="grid__row">
//             {listMovies &&
//               listMovies.length > 0 &&
//               listMovies.map((items, index) => {
//                 return (
//                   <div className="col-3-4" key={`movies-${index}`}>
//                     <div className="movie-item">
//                       <Nav.Link className="nav-item active">
//                         <NavLink
//                           className="nav-link"
//                           to={`/description/${items.movieId}`}
//                         >
//                           <div className="img-wrapper">
//                             <img
//                               src={items.moviePosterUrl}
//                               alt="Movie 2"
//                               className="movie-image"
//                             />
//                           </div>
//                         </NavLink>
//                       </Nav.Link>
//                       <div className="movie-name">
//                         <h4 style={tittle}>{items.movieTitle}</h4>
//                       </div>
//                       <Nav.Link className="nav-item active">
//                         <NavLink
//                           className="nav-link"
//                           to={`/description/${items.movieId}`}
//                         >
//                           <Button style={buttonStyle}>
//                             THÔNG TIN CHI TIẾT
//                             <SendIcon
//                               style={{ marginLeft: "10px", color: "#8bc34a" }}
//                             />
//                           </Button>
//                         </NavLink>
//                       </Nav.Link>
//                     </div>
//                   </div>
//                 );
//               })}

//             <div className="col-3-4">
//               <div className="movie-item">
//                 <div className="img-wrapper">
//                   <img
//                     src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg"
//                     alt="Movie 3"
//                     className="movie-image"
//                   />
//                 </div>
//                 <div className="movie-name">
//                   <h2>Movie Title 3</h2>
//                 </div>
//                 <button
//                   type="button"
//                   className="btn btn-outline-success btn-floating"
//                   data-mdb-ripple-init
//                 >
//                   <i className="fas fa-star"></i> Thông Tin Phim
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BodySecond;

import React, { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import SendIcon from "@mui/icons-material/Send";
import { fetchAllMovies } from "../../../components/services/UserService";

const BodySecond = () => {
  const buttonStyle = {
    border: "2px solid #8bc34a", // green border
    borderRadius: "15px", // rounded corners
    padding: "10px 20px", // padding for the button
    color: "#8bc34a", // green text
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent", // no background
    display: "inline-block", // button behavior
    marginBottom: "30px",
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      let res = await fetchAllMovies();
      if (res && res.data) {
        const comingSoonMovies = res.data.data.filter(
          (movie) => movie.movieStatus === "Coming Soon"
        );
        setListMovies(comingSoonMovies); 
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu phim:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="movie-gallery">
          <div className="hot-label">
            <h2>
              <button style={buttonStyle}>COMING SOON</button>
            </h2>
          </div>
          <div className="grid__row">
            {listMovies && listMovies.length > 0 ? (
              listMovies.map((items, index) => (
                <div className="col-3-4" key={`movies-${index}`}>
                  <div className="movie-item">
                    <NavLink className="nav-link" to={`/description/${items.movieId}`}>
                      <div className="img-wrapper">
                        <img
                          src={items.moviePosterUrl}
                          alt={items.movieTitle}
                          className="movie-image"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </NavLink>
                    <div className="movie-name">
                      <h4 style={tittle}>{items.movieTitle}</h4>
                    </div>
                    <NavLink className="nav-link" to={`/description/${items.movieId}`}>
                      <Button style={buttonStyle}>
                        THÔNG TIN CHI TIẾT
                        <SendIcon style={{ marginLeft: "10px", color: "#8bc34a" }} />
                      </Button>
                    </NavLink>
                  </div>
                </div>
              ))
            ) : (
              <div>Không có phim sắp chiếu nào.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySecond;
