// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { fetchAllUser } from '../components/services/UserService'
// import { Nav } from 'react-bootstrap';
// import { useLocation, NavLink } from "react-router-dom";

// const BodyFirst = (props) => {

//     const [listMovies, setListMovies] = useState([])

//     useEffect(() => {
//         // call api

//         // axios.get("http://localhost:8080/movies").then(data => {
//         //     console.log(">>>check", data);

//         // })

//         getMovies();

//     }, []);

//     const getMovies = async () => {
//         let res = await fetchAllUser();

//         if (res && res.data) {
//             setListMovies(res.data)
//         }
//     }
//     // check data
//     console.log(listMovies);

//     return (
//         <div>
//             <div className="container">
//                 <div className="movie-gallery">
//                     <div className="hot-label">
//                         <h2 className="title-heading">
//                             <span className="pd-l">Phim Đang Chiếu</span>
//                         </h2>
//                     </div>
//                     <div className="grid__row">
//                         {listMovies && listMovies.length > 0 &&
//                             listMovies.map((items, index) => {
//                                 return (
//                                     <div className="col-3-4" key={`movies-${index}`}>
//                                         <div className="movie-item">
//                                             <div className="img-wrapper">
//                                                 <Nav.Link className="nav-item active">
//                                                     <NavLink className="nav-link" to="/description">
//                                                         <img id={items.movieId} src={items.moviePosterUrl} alt="Movie 1" className="movie-image" />
//                                                     </NavLink>
//                                                 </Nav.Link>
//                                             </div>
//                                             <div className="movie-name">
//                                                 <Nav.Link className="nav-item active">
//                                                     <NavLink className="nav-link" to="/description">{items.movieTitle}</NavLink>
//                                                 </Nav.Link>
//                                             </div>
//                                             <div className="vietsub">
//                                                 <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>
//                                                     <Nav.Link className="nav-item active">
//                                                         <NavLink id={items.movieId} className="nav-link" to="/orderTicket" >Đặt Vé</NavLink>
//                                                     </Nav.Link>
//                                                 </button>
//                                                 <span>
//                                                     <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
//                                                         <i className="fas fa-star"></i>
//                                                     </button>
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         }

//                         {/* Repeat 3 more movie items below */}
//                         <div className="col-3-4">
//                             <div className="movie-item">
//                                 <div className="img-wrapper">
//                                     <img src="https://bhdstar.vn/wp-content/uploads/2024/07/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-95.jpg" alt="Movie 4" className="movie-image" />
//                                 </div>
//                                 <div className="movie-name">
//                                     <h2>Movie Title 4</h2>
//                                 </div>
//                                 <div className="vietsub">
//                                     <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init>Đặt Vé</button>
//                                     <span>
//                                         <button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-init data-mdb-ripple-color="dark">
//                                             <i className="fas fa-star"></i>
//                                         </button>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BodyFirst

// import React, { useEffect, useState } from "react";
// import { fetchAllUser } from "../components/services/UserService";
// import { NavLink } from "react-router-dom";
// import { Button } from "@mui/material";
// import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

// const buttonStyle = {
//   border: "2px solid #8bc34a", // green border
//   borderRadius: "15px", // rounded corners
//   padding: "10px 20px", // padding for the button
//   color: "#8bc34a", // green text
//   fontWeight: "bold",
//   fontFamily: "Arial, sans-serif",
//   backgroundColor: "transparent", // no background
//   display: "inline-block", // button behavior
//   marginBottom: "30px",
// };

// const tittle = {
//   borderRadius: "15px", // rounded corners
//   padding: "10px 20px", // padding for the button
//   color: "#8bc34a", // green text
//   fontWeight: "bold",
//   fontFamily: "Arial, sans-serif",
//   backgroundColor: "transparent", // no background
//   display: "inline-block", // button behavior
// };

// const orderButton = {
//   border: "none", // No border
//   borderRadius: "30px", // Rounded corners
//   padding: "10px 30px", // Padding for the button
//   color: "white", // White text
//   fontWeight: "bold",
//   fontFamily: "Arial, sans-serif",
//   background: "linear-gradient(90deg, #00c853, #aeea00)", // Gradient background
//   display: "flex", // Flexbox to align text and icon
//   alignItems: "center", // Vertically center
//   justifyContent: "center", // Horizontally center
//   cursor: "pointer",
//   fontSize: "20px",
// };
// const BodyFirst = () => {
//   const [listMovies, setListMovies] = useState([]);

//   useEffect(() => {
//     getMovies();
//   }, []);

//   const getMovies = async () => {
//     let res = await fetchAllUser();
//     if (res && res.data) {
//       setListMovies(res.data.data);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="movie-gallery">
//         <div className="hot-label">
//           <div className="hot-label">
//             <h2 className="">
//               <button style={buttonStyle}>PHIM ĐANG CHIẾU</button>
//             </h2>
//           </div>
//         </div>
//         <div className="grid__row">
//           {listMovies &&
//             listMovies.length > 0 &&
//             listMovies.map((items, index) => {
//               return (
//                 <div className="col-3-4" key={`movies-${index}`}>
//                   <div className="movie-item">
//                     <div className="img-wrapper">
//                       {/* Dùng NavLink và truyền movieId qua URL */}
//                       <NavLink
//                         className="nav-link"
//                         to={`/description/${items.movieId}`}
//                       >
//                         <img
//                           id={items.movieId}
//                           src={items.moviePosterUrl}
//                           alt={items.movieTitle}
//                           className="movie-image"
//                         />
//                       </NavLink>
//                     </div>
//                     <div className="movie-name">
//                       <NavLink
//                         className="nav-link"
//                         to={`/description/${items.movieId}`}
//                       >
//                         <h4 style={tittle}>{items.movieTitle}</h4>
//                       </NavLink>
//                     </div>
//                     <div className="vietsub">
//                       <NavLink
//                         id={items.movieId}
//                         className="nav-link"
//                         to={`/orderTicket/${items.movieId}`}
//                       >
//                         <Button style={orderButton}>
//                           MUA VÉ NGAY
//                           <ConfirmationNumberIcon
//                             style={{ marginLeft: "10px", color: "white" }}
//                           />
//                         </Button>
//                       </NavLink>
//                       {/* <NavLink id={items.movieId} className="nav-link" to={`/orderTicket`}>Đặt Vé</NavLink> */}
//                       <span>
//                         <button
//                           type="button"
//                           className="btn btn-outline-success btn-floating"
//                         >
//                           <i className="fas fa-star"></i>
//                         </button>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BodyFirst;

import React, { useEffect, useState } from "react";
import { fetchAllUser } from "./services/UserService";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const buttonStyle = {
  border: "2px solid #8bc34a",
  borderRadius: "15px",
  padding: "10px 20px",
  color: "#8bc34a",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "transparent",
  display: "inline-block",
  marginBottom: "30px",
};

const tittle = {
  borderRadius: "15px",
  padding: "10px 20px",
  color: "#8bc34a",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "transparent",
  display: "inline-block",
};

const orderButton = {
  border: "none",
  borderRadius: "30px",
  padding: "10px 30px",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif",
  background: "linear-gradient(90deg, #00c853, #aeea00)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "20px",
};

const BodyFirst = () => {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    let res = await fetchAllUser();
    if (res && res.data) {
      const nowShowingMovies = res.data.data.filter(
        (movie) => movie.movieStatus === "Now Showing"
      );
      setListMovies(nowShowingMovies);
    }
  };

  return (
    <div className="container">
      <div className="movie-gallery">
        <div className="hot-label">
          <div className="hot-label">
            <h2 className="">
              <button style={buttonStyle}>PHIM ĐANG CHIẾU</button>
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
                    <div className="img-wrapper">
                      <NavLink
                        className="nav-link"
                        to={`/description/${items.movieId}`}
                      >
                        <img
                          id={items.movieId}
                          src={items.moviePosterUrl}
                          alt={items.movieTitle}
                          className="movie-image"
                        />
                      </NavLink>
                    </div>
                    <div className="movie-name">
                      <NavLink
                        className="nav-link"
                        to={`/description/${items.movieId}`}
                      >
                        <h4 style={tittle}>{items.movieTitle}</h4>
                      </NavLink>
                    </div>
                    <div className="vietsub">
                      <NavLink
                        id={items.movieId}
                        className="nav-link"
                        to={`/orderTicket/${items.movieId}`}
                      >
                        <Button style={orderButton}>
                          MUA VÉ NGAY
                          <ConfirmationNumberIcon
                            style={{ marginLeft: "10px", color: "white" }}
                          />
                        </Button>
                      </NavLink>
                      <span>
                        <button
                          type="button"
                          className="btn btn-outline-success btn-floating"
                        >
                          <i className="fas fa-star"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BodyFirst;


// import React, { useEffect, useState } from "react";
// import { fetchAllUser } from "../components/services/UserService";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
// import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

// const buttonStyle = {
//   border: "2px solid #8bc34a",
//   borderRadius: "15px",
//   padding: "10px 20px",
//   color: "#8bc34a",
//   fontWeight: "bold",
//   fontFamily: "Arial, sans-serif",
//   backgroundColor: "transparent",
//   display: "inline-block",
//   marginBottom: "30px",
// };

// const tittle = {
//   borderRadius: "15px",
//   padding: "10px 20px",
//   color: "#8bc34a",
//   fontWeight: "bold",
//   fontFamily: "Arial, sans-serif",
//   backgroundColor: "transparent",
//   display: "inline-block",
// };

// const orderButton = {
//   border: "none",
//   borderRadius: "30px",
//   padding: "10px 30px",
//   color: "white",
//   fontWeight: "bold",
//   fontFamily: "Arial, sans-serif",
//   background: "linear-gradient(90deg, #00c853, #aeea00)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
//   fontSize: "20px",
// };

// const BodyFirst = () => {
//   const [listMovies, setListMovies] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getMovies();
//   }, []);

//   const getMovies = async () => {
//     let res = await fetchAllUser();
//     if (res && res.data) {
//       const nowShowingMovies = res.data.data.filter(
//         (movie) => movie.movieStatus === "Now Showing"
//       );
//       setListMovies(nowShowingMovies);
//     }
//   };

//   // Điều hướng người dùng đến trang suất chiếu (showtime) khi nhấn "MUA VÉ NGAY"
//   const goToShowtimes = (movieId) => {
//     navigate(`/showtimes/${movieId}`); // Điều hướng đến trang showtimes với movieId
//   };

//   return (
//     <div className="container">
//       <div className="movie-gallery">
//         <div className="hot-label">
//           <div className="hot-label">
//             <h2 className="">
//               <button style={buttonStyle}>PHIM ĐANG CHIẾU</button>
//             </h2>
//           </div>
//         </div>
//         <div className="grid__row">
//           {listMovies &&
//             listMovies.length > 0 &&
//             listMovies.map((items, index) => {
//               return (
//                 <div className="col-3-4" key={`movies-${index}`}>
//                   <div className="movie-item">
//                     <div className="img-wrapper">
//                       <NavLink
//                         className="nav-link"
//                         to={`/description/${items.movieId}`}
//                       >
//                         <img
//                           id={items.movieId}
//                           src={items.moviePosterUrl}
//                           alt={items.movieTitle}
//                           className="movie-image"
//                         />
//                       </NavLink>
//                     </div>
//                     <div className="movie-name">
//                       <NavLink
//                         className="nav-link"
//                         to={`/description/${items.movieId}`}
//                       >
//                         <h4 style={tittle}>{items.movieTitle}</h4>
//                       </NavLink>
//                     </div>
//                     <div className="vietsub">
//                       <Button
//                         style={orderButton}
//                         onClick={() => goToShowtimes(items.movieId)} // Điều hướng đến trang suất chiếu của phim
//                       >
//                         MUA VÉ NGAY
//                         <ConfirmationNumberIcon
//                           style={{ marginLeft: "10px", color: "white" }}
//                         />
//                       </Button>
//                       <span>
//                         <button
//                           type="button"
//                           className="btn btn-outline-success btn-floating"
//                         >
//                           <i className="fas fa-star"></i>
//                         </button>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BodyFirst;
