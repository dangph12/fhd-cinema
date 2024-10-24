// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useFetchSeatsAndShowtime = (showtimeId) => {
//     const [seatLayout, setSeatLayout] = useState([]);
//     const [showtimeDetails, setShowtimeDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchSeatsAndShowtimeDetails = async () => {
//             setLoading(true);
//             try {
//                 const seatResponse = await axios.get(`http://localhost:8080/seats`);
//                 const seatData = seatResponse.data;
//                 if (seatData?.data) {
//                     const allSeats = seatData.data.slice(0, 60);
//                     const seatNormal = allSeats.filter(seat => seat.seatType.seatTypeName === 'Ghế thường');
//                     const seatVIP = allSeats.filter(seat => seat.seatType.seatTypeName === 'VIP');
//                     const seatCouple = allSeats.filter(seat => seat.seatType.seatTypeName === 'Couple');
//                     setSeatLayout([...seatNormal, ...seatVIP, ...seatCouple]);
//                 } else {
//                     setSeatLayout([]);
//                     console.error("No seat data found");
//                 }

//                 const showtimeResponse = await axios.get(`http://localhost:8080/showtimes/${showtimeId}`);
//                 const showtimeData = showtimeResponse.data;
//                 if (showtimeData?.data) {
//                     setShowtimeDetails(showtimeData.data);
//                 } else {
//                     setShowtimeDetails(null);
//                     console.error("No showtime data found");
//                 }
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 setError("Unable to fetch seat or showtime data.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (showtimeId) {
//             fetchSeatsAndShowtimeDetails();
//         }
//     }, [showtimeId]);

//     return { seatLayout, showtimeDetails, loading, error };
// };

// export default useFetchSeatsAndShowtime;
