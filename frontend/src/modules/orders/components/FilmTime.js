
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchShowTime } from '../../../components/services/UserService';

// const FilmTime = () => {
//     const navigate = useNavigate(); // Hook để điều hướng

//     // Hàm điều hướng đến trang chọn ghế
//     const goToSeatSelection = () => {
//         navigate('/seatselection');
//     };

//     const { showtimeId } = useParams(); // Lấy showtimeId từ URL
//     const [showTime, setShowTime] = useState([]); // Khởi tạo mảng showtimes trống 

//     // Gọi API lấy showtimes khi component được render
//     useEffect(() => {
//         getShowTimes();
//     }, []);

//     const getShowTimesById = (movieId) => {
//         const showTimes = showTimes.find(showTime => showTime.id == movieId);
//         return showTimes ? showTime.name : 'Unknown Project';
//     };

//     // Hàm lấy showtimes dựa trên showtimeId
//     const getShowTimes = async () => {
//         let res = await fetchShowTime();
//         if (res && res.data) {
//             setShowTime(res.data.data); // Giả sử res.data.data là mảng showtimes
//         }
//     };

//     console.log(showTime); // Kiểm tra dữ liệu showtimes trong console

//     return (
//         <div>
//             <div className="container">
//                 {/* Phần hiển thị rạp chiếu và thời gian chiếu */}
//                 <div className="cinema">
//                     <img src="https://bhdstar.vn/wp-content/uploads/2024/09/logo2024.png" alt="BHD Logo" className="logo" />
//                     <div className="cinema-info">
//                         <h3>BHD Cinema</h3>
//                         <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy, Hà Nội</p>
//                     </div>
//                     <div className="showtimes">
//                         <button className="time-button" onClick={goToSeatSelection}>
//                             10:40
//                         </button>
//                         <button className="time-button" onClick={goToSeatSelection}>
//                             13:50
//                         </button>
//                         <button className="time-button" onClick={goToSeatSelection}>
//                             20:15
//                         </button>
//                     </div>
//                 </div>

//                 {/* Thêm các rạp khác nếu cần */}
//                 <div className="cinema">
//                     <img src="https://bhdstar.vn/wp-content/uploads/2024/09/logo2024.png" alt="BHD Logo" className="logo" />
//                     <div className="cinema-info">
//                         <h3>BHD Cinema</h3>
//                         <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy, Hà Nội</p>
//                     </div>
//                     <div className="showtimes">
//                         <button className="time-button" onClick={goToSeatSelection}>
//                             10:40
//                         </button>
//                         <button className="time-button" onClick={goToSeatSelection}>
//                             13:50
//                         </button>
//                         <button className="time-button" onClick={goToSeatSelection}>
//                             20:15
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FilmTime;





// FilmTime.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchShowTime } from '../../../components/services/UserService';

// const FilmTime = () => {
//     const navigate = useNavigate();
//     const { movieId } = useParams();
//     const [showTimes, setShowTimes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Hàm điều hướng đến trang chọn ghế với showtimeId
//     // const goToSeatSelection = () => {
//         // navigate("/seatselection");
//         // navigate(`/orderTicket/${showtimeId}`);
//     // };

//     useEffect(() => {
//         const getShowTimes = async () => {
//             try {
//                 const res = await fetchShowTime(movieId);
//                 if (res && res.data && res.data.data) {
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
//     }, [movieId]);

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
//                             src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
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
//                                 // lay ra seat theo id
//                                 // onClick={goToSeatSelection()}
//                                 // onClick={() => goToSeatSelection(item.showtimeId)}
//                             >
//                                 {new Date(item.showtimeAt).toLocaleString('en-GB', { 
//                                     hour: '2-digit', 
//                                     minute: '2-digit', 
//                                     day: '2-digit', 
//                                     month: '2-digit', 
//                                     year: 'numeric' 
//                                 })}
//                             </button>
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <p className="no-showtimes">Không có suất chiếu nào cho phim này.</p>
//             )}
//         </div>
//     );
// };

// export default FilmTime;





// FilmTime.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { fetchShowTime } from '../../../components/services/UserService';


const FilmTime = () => {
    const navigate = useNavigate();
    const { showtimeId } = useParams(); // Lấy movieId từ URL
    const [showTimes, setShowTimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Hàm điều hướng đến trang chọn ghế với showtimeId và showTimeAt
    const goToSeatSelection = (showtimeId) => {
        navigate(`/seatselection/${showtimeId}`); // Navigate to SeatSelection with showtimeId
    };

    useEffect(() => {
        const getShowTimes = async () => {
            try {
                const res = await fetchShowTime(showtimeId);
                if (res.data && res.data.data) {
                    setShowTimes(res.data.data);
                } else {
                    setShowTimes([]);
                }
            } catch (err) {
                console.error('Error fetching showtimes:', err);
                setError('Failed to fetch showtimes.');
            } finally {
                setLoading(false);
            }
        };

        getShowTimes();
    }, [showtimeId]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="container">
            {showTimes.length > 0 ? (
                showTimes.map((item) => (
                    <div key={item.showtimeId} className="cinema">
                        <img 
                             src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
                            alt={`${item.screen.cinema.cinemaName} Logo`} 
                            className="logo" 
                        />
                        <div className="cinema-info">
                            <h3>{item.screen.cinema.cinemaName}</h3>
                            <p>{item.screen.cinema.location.locationName}</p>
                        </div>

                        <div className="showtimes">
                            <button 
                                className="time-button" 
                                // onClick={() => goToSeatSelection()}
                                onClick={() => goToSeatSelection(item.showtimeId, item.showtimeAt)}
                            >
                                {new Date(item.showtimeAt).toLocaleString('en-GB', { 
                                    hour: '2-digit', 
                                    minute: '2-digit', 
                                    day: '2-digit', 
                                    month: '2-digit', 
                                    year: 'numeric' 
                                })}
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-showtimes">Không có suất chiếu nào cho phim này.</p>
            )}
        </div>
    );
};

export default FilmTime;

// FilmTime.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchShowTime } from '../../../components/services/UserService';

// const FilmTime = () => {
//     const navigate = useNavigate();
//     const { movieId } = useParams(); // Lấy movieId từ URL
//     const [showTimes, setShowTimes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Hàm điều hướng đến trang chọn ghế với showtimeId và showTimeAt
//     const goToSeatSelection = (showtimeId, showTimeAt) => {
//         navigate(`/seatselection/${showtimeId}`, { state: { showTimeAt } });
//     };

//     useEffect(() => {
//         const getShowTimes = async () => {
//             try {
//                 const res = await fetchShowTime(movieId);
//                 console.log('Fetched showtimes:', res.data.data); // Thêm log để kiểm tra
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
//     }, [movieId]); // Thay showtimeId bằng movieId

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
//                             src="https://bhdstar.vn/wp-content/uploads/2024/09/logo2024.png" 
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
//                                 onClick={() => goToSeatSelection(item.showtimeId, item.showtimeAt)}
//                             >
//                                 {new Date(item.showtimeAt).toLocaleString('en-GB', { 
//                                     hour: '2-digit', 
//                                     minute: '2-digit', 
//                                     day: '2-digit', 
//                                     month: '2-digit', 
//                                     year: 'numeric' 
//                                 })}
//                             </button>
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <p className="no-showtimes">Không có suất chiếu nào cho phim này.</p>
//             )}
//         </div>
//     );
// };

// export default FilmTime;




