// // FilmTime.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchShowTime } from '../../../components/services/UserService';


// const FilmTime = ({ movieDetails, moviePosterUrl }) => {
//     const navigate = useNavigate();
//     const { showtimeId } = useParams(); // Lấy movieId từ URL
//     const [showTimes, setShowTimes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);


//     // Hàm điều hướng đến trang chọn ghế với showtimeId và showTimeAt
//     const goToSeatSelection = (showtimeId) => {
//         navigate('/seatSelection', { state: { showtimeId, movieDetails, moviePosterUrl } });
//     };
//     useEffect(() => {
//         const getShowTimes = async () => {
//             try {
//                 const res = await fetchShowTime(showtimeId);
//                 if (res.data && res.data.data) {
//                     setShowTimes(res.data.data);
//                 } else {
//                     setShowTimes([]);
//                 }
//             } catch (err) {
//                 console.error('Error fetching showtimes:', err);
//                 setError('Failed to fetch showtimes.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getShowTimes();
//     }, [showtimeId]);

//     if (loading) {
//         return <div className="loading">Loading...</div>;
//     }

//     if (error) {
//         return <div className="error">{error}</div>;
//     }

//     return (
//         <div className="container">
//             {showTimes.length > 0 ? (
//                 showTimes.map((item) => (
//                     <div key={item.showtimeId} className="cinema">
//                         <img 
//                              src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                             alt={`${item.screen.cinema.cinemaName} Logo`} 
//                             className="logo" 
//                         />
//                         <div className="cinema-info">
//                             <h3>{item.screen.cinema.cinemaName}</h3>
//                             <p>{item.screen.cinema.location.locationName}</p>
//                         </div>

//                         <div className="showtimes">
//                             <button 
//                                 className="time-button" 
//                                 // onClick={() => goToSeatSelection()}
//                                 onClick={() => goToSeatSelection(item.showtimeId)}
//                             >
//                                 {new Date(item.showtimeAt).toLocaleString('en-GB', { 
//                                     hour: '2-digit', 
//                                     minute: '2-digit', 
//                                     day: '2-digit', 
//                                     month: '2-digit', 
//                                     year: 'numeric' 
//                                 })} 
//                             </button>

//                             </div>
//                     </div>
//                 ))
//             ) : (
//                 <p className="no-showtimes">Không có suất chiếu nào cho phim này.</p>
//             )}
//         </div>
//     );
// };

// export default FilmTime;
