// // import React, { useEffect, useState } from 'react'
// // // import { Nav } from 'react-bootstrap';
// // // import { Navigate } from "react-router-dom";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { fetchMovieById, fetchShowTime } from '../../../components/services/UserService';


// // const FilmTime = (props) => {
// //     const navigate = useNavigate(); // Khởi tạo hook để điều hướng

// //     // Hàm điều hướng đến trang chọn ghế
// //     const goToSeatSelection = () => {
// //         navigate('/seatselection');
// //     };



// //     // show time part
// //     const { showtimeId } = useParams(); // Lấy movieId từ URL
// //     const [showTime, setShowTime] = useState(null); // mảng movies description rỗng 

// //     useEffect(() => {
// //         getShowTimes(showtimeId);
// //     }, [showtimeId]);

// //     const getShowTimes = async (showtimeId) => {
// //         let res = await fetchShowTime(showtimeId);
// //         if (res && res.data) {
// //             setShowTime(res.data.data);
// //         }
// //     }

// //     console.log(showTime);

// //     return (
// //         <div>
// //             <div className="container">
// //                 <div className="cinema">
// //                     <img src="img/logo-100x100.png" alt="BHD Logo" className="logo" />
// //                     <div className="cinema-info">
// //                         <h3>BHD Cinema</h3>
// //                         <p>Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội</p>
// //                     </div>
// //                     {showTime && showTime.length > 0 &&
// //                             showTime.map((items, index) => {
// //                                 return (
// //                                     <button className="time-button" onClick={goToSeatSelection}>
// //                                         {items.showtimeAt}
// //                                     </button>
// //                                 )
// //                             })
// //                         }
// //                     <div className="showtimes">
// //                         <button className="time-button" onClick={goToSeatSelection}>
// //                             14:50
// //                             {/* <span className="label">
// //                                     <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
// //                                     <img src="link-to-2d-logo" alt="2D" className="small-logo" />
// //                                 </span> */}
// //                         </button>
// //                         <button className="time-button" onClick={goToSeatSelection}>
// //                             20:35
// //                             {/* <span className="label">
// //                                     <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
// //                                     <img src="link-to-2d-logo" alt="2D" className="small-logo" />
// //                                 </span> */}
// //                         </button>
// //                     </div>
// //                 </div>

// //                 <div className="cinema">
// //                     <img src="img/logo-100x100.png" alt="BHD Logo" className="logo" />
// //                     <div className="cinema-info">
// //                         <h3>BHD Cinema</h3>
// //                         <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy, Hà Nội</p>
// //                     </div>
// //                     <div className="showtimes">
// //                         <button className="time-button" onClick={goToSeatSelection}>
// //                             10:40
// //                             {/* <span className="label">
// //                                     <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
// //                                     <img src="link-to-2d-logo" alt="2D" className="small-logo" />
// //                                 </span> */}
// //                         </button>
// //                         <button className="time-button" onClick={goToSeatSelection}>
// //                             13:50
// //                             {/* <span className="label">
// //                                     <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
// //                                     <img src="link-to-2d-logo" alt="2D" className="small-logo" />
// //                                 </span> */}
// //                         </button>
// //                         <button className="time-button" onClick={goToSeatSelection}>
// //                             20:15
// //                             {/* <span className="label">
// //                                     <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
// //                                     <img src="link-to-2d-logo" alt="2D" className="small-logo" />
// //                                 </span> */}
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }


// // export default FilmTime


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
//                     <img src="img/logo-100x100.png" alt="BHD Logo" className="logo" />
//                     <div className="cinema-info">
//                         <h3>BHD Cinema</h3>
//                         <p>Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội</p>
//                     </div>

//                     {/* Hiển thị danh sách showtimes */}
//                     <div className="showtimes">
//                         {showTime && showTime.length > 0 ? (
//                             showTime.map((items, index) => (
//                                 <button key={index} className="time-button" onClick={goToSeatSelection}>
//                                     {items.showtimeAt} {/* Hiển thị thời gian chiếu */}
//                                 </button>
//                             ))
//                         ) : (
//                             <p>Không có suất chiếu nào cho phim này.</p>
//                         )}
//                     </div>
//                 </div>

//                 {/* Thêm các rạp khác nếu cần */}
//                 <div className="cinema">
//                     <img src="img/logo-100x100.png" alt="BHD Logo" className="logo" />
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

//     // Hàm lấy showtimes dựa trên showtimeId
//     const getShowTimes = async () => {
//         let res = await fetchShowTime();
//         if (res && res.data) {
//             setShowTime(res.data.data); // Giả sử res.data.data là mảng showtimes
//         }
//     };

//     console.log(showTime); // Kiểm tra dữ liệu showtimes trong console

//     // Chia danh sách showtimes thành hai phần
//     const half = Math.ceil(showTime.length / 2);
//     const firstHalf = showTime.slice(0, half);
//     const secondHalf = showTime.slice(half);

//     return (
//         <div>
//             <div className="container">
//                 {/* Phần hiển thị rạp chiếu và thời gian chiếu */}
//                 <div className="cinema">
//                     <img src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="BHD Logo" className="logo" />
//                     <div className="cinema-info">
//                         <h3>BHD Cinema</h3>
//                         <p>Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội</p>
//                     </div>

//                     {/* Hiển thị danh sách showtimes của rạp đầu tiên */}
//                     <div className="showtimes">
//                         {firstHalf.length > 0 ? (
//                             firstHalf.map((items, index) => (
//                                 <button key={index} className="time-button" onClick={goToSeatSelection}>
//                                     {items.showtimeAt} {/* Hiển thị thời gian chiếu */}
//                                 </button>
//                             ))
//                         ) : (
//                             <p>Không có suất chiếu nào cho phim này.</p>
//                         )}
//                     </div>
//                 </div>

//                 {/* Phần hiển thị cho rạp thứ hai */}
//                 <div className="cinema">
//                     <img src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="BHD Logo" className="logo" />
//                     <div className="cinema-info">
//                         <h3>BHD Cinema</h3>
//                         <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy, Hà Nội</p>
//                     </div>

//                     {/* Hiển thị danh sách showtimes của rạp thứ hai */}
//                     <div className="showtimes">
//                         {secondHalf.length > 0 ? (
//                             secondHalf.map((items, index) => (
//                                 <button key={index} className="time-button" onClick={goToSeatSelection}>
//                                     {items.showtimeAt} {/* Hiển thị thời gian chiếu */}
//                                 </button>
//                             ))
//                         ) : (
//                             <p>Không có suất chiếu nào cho phim này.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FilmTime;


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

//     // Hàm lấy showtimes dựa trên showtimeId
//     const getShowTimes = async () => {
//         let res = await fetchShowTime();
//         if (res && res.data) {
//             setShowTime(res.data.data); // Giả sử res.data.data là mảng showtimes
//         }
//     };

//     console.log(showTime); // Kiểm tra dữ liệu showtimes trong console

//     // Chia danh sách showtimes thành hai phần
//     const half = Math.ceil(showTime.length / 2);
//     const firstHalf = showTime.slice(0, half);
//     const secondHalf = showTime.slice(half);

//     // Helper function to group showtimes in chunks of 3
//     const groupShowtimes = (showtimes) => {
//         const result = [];
//         for (let i = 0; i < showtimes.length; i += 3) {
//             result.push(showtimes.slice(i, i + 3));
//         }
//         return result;
//     };

//     return (
//         <div>
//             <div className="container">
//                 {/* Phần hiển thị rạp chiếu và thời gian chiếu */}
//                 <div className="cinema">
//                     <img src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="BHD Logo" className="logo" />
//                     <div className="cinema-info">
//                         <h3>BHD Cinema</h3>
//                         <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy, Hà Nội</p>
//                         {/* <p>Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội</p> */}
//                     </div>

//                     {/* Hiển thị danh sách showtimes của rạp đầu tiên */}
//                     <div className="showtimes">
//                         {firstHalf.length > 0 ? (
//                             groupShowtimes(firstHalf).map((row, rowIndex) => (
//                                 <div key={rowIndex} className="showtime-row">
//                                     {row.map((items, index) => (
//                                         <button key={index} className="time-button" onClick={goToSeatSelection}>
//                                             {items.showtimeAt} {/* Hiển thị thời gian chiếu */}
//                                         </button>
//                                     ))}
//                                 </div>
//                             ))
//                         ) : (
//                             <p>Không có suất chiếu nào cho phim này.</p>
//                         )}
//                     </div>
//                 </div>

//                 {/* Phần hiển thị cho rạp thứ hai */}
//                 <div className="cinema">
//                     <img src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="BHD Logo" className="logo" />
//                     <div className="cinema-info">
//                         <h3>BHD Cinema</h3>
//                         <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy, Hà Nội</p>
//                     </div>

//                     {/* Hiển thị danh sách showtimes của rạp thứ hai */}
//                     <div className="showtimes">
//                         {secondHalf.length > 0 ? (
//                             groupShowtimes(secondHalf).map((row, rowIndex) => (
//                                 <div key={rowIndex} className="showtime-row">
//                                     {row.map((items, index) => (
//                                         <button key={index} className="time-button" onClick={goToSeatSelection}>
//                                             {items.showtimeAt} {/* Hiển thị thời gian chiếu */}
//                                         </button>
//                                     ))}
//                                 </div>
//                             ))
//                         ) : (
//                             <p>Không có suất chiếu nào cho phim này.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FilmTime;


//  in ra hết 
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchShowTime } from '../../../components/services/UserService';

// const FilmTime = () => {
//     const navigate = useNavigate();

//     const goToSeatSelection = () => {
//         navigate('/seatselection');
//     };

//     const { showtimeId } = useParams();
//     const [showTime, setShowTime] = useState([]);

//     useEffect(() => {
//         getShowTimes();
//     }, []);

//     const getShowTimes = async () => {
//         let res = await fetchShowTime();
//         if (res && res.data) {
//             setShowTime(res.data.data);
//         }
//     };

//     console.log(showTime);

//     const half = Math.ceil(showTime.length / 2);
//     const firstHalf = showTime.slice(0, half);
//     const secondHalf = showTime.slice(half);

//     return (
//         <div className="film-time-container">
//             <div className="cinema">
//                 <img src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="BHD Logo" className="logo" />
//                 <div className="cinema-info">
//                     <h3>BHD Cinema</h3>
//                     <p>Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội</p>
//                 </div>
//                 <div className="showtimes">
//                     {firstHalf.length > 0 ? (
//                         firstHalf.map((items, index) => (
//                             <button key={index} className="time-button" onClick={goToSeatSelection}>
//                                 {items.showtimeAt}
//                             </button>
//                         ))
//                     ) : (
//                         <p>Không có suất chiếu nào cho phim này.</p>
//                     )}
//                 </div>
//             </div>

//             <div className="cinema">
//                 <img src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="BHD Logo" className="logo" />
//                 <div className="cinema-info">
//                     <h3>BHD Cinema</h3>
//                     <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy, Hà Nội</p>
//                 </div>
//                 <div className="showtimes">
//                     {secondHalf.length > 0 ? (
//                         secondHalf.map((items, index) => (
//                             <button key={index} className="time-button" onClick={goToSeatSelection}>
//                                 {items.showtimeAt}
//                             </button>
//                         ))
//                     ) : (
//                         <p>Không có suất chiếu nào cho phim này.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FilmTime;


import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { fetchShowTime } from '../../../components/services/UserService';

const FilmTime = () => {
    const navigate = useNavigate();
    const { movieId } = useParams();  // Lấy movieId từ URL

    const goToSeatSelection = () => {
        navigate('/seatselection');
    };

    const [showTime, setShowTime] = useState([]);

    useEffect(() => {
        getShowTimes(movieId);  // Truyền movieId khi gọi API
    }, [movieId]);

    const getShowTimes = async (movieId) => {
        let res = await fetchShowTime(movieId);  // Truyền movieId vào API
        if (res && res.data) {
            setShowTime(res.data.data);  // Cập nhật danh sách suất chiếu từ API
        }
    };

    console.log(showTime);

    const half = Math.ceil(showTime.length / 2);
    const firstHalf = showTime.slice(0, half);
    const secondHalf = showTime.slice(half);

    return (
        <div className="film-time-container">
            <div className="cinema">
                <img src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="BHD Logo" className="logo" />
                <div className="cinema-info">
                    <h3>BHD Cinema</h3>
                    <p>Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội</p>
                </div>
                <div className="showtimes">
                    {firstHalf.length > 0 ? (
                        firstHalf.map((items, index) => (
                            <button key={index} className="time-button" onClick={goToSeatSelection}>
                                {items.showtimeAt}
                            </button>
                        ))
                    ) : (
                        <p>Không có suất chiếu nào cho phim này.</p>
                    )}
                </div>
            </div>

            <div className="cinema">
                <img src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="BHD Logo" className="logo" />
                <div className="cinema-info">
                    <h3>BHD Cinema</h3>
                    <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy, Hà Nội</p>
                </div>
                <div className="showtimes">
                    {secondHalf.length > 0 ? (
                        secondHalf.map((items, index) => (
                            <button key={index} className="time-button" onClick={goToSeatSelection}>
                                {items.showtimeAt}
                            </button>
                        ))
                    ) : (
                        <p>Không có suất chiếu nào cho phim này.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilmTime;

