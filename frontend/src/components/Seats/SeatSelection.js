

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import axios from 'axios';
// import seatNormal from '../../assets/seats/ghe-thuong.png';
// import seatVIP from '../../assets/seats/ghe-vip.png';
// import seatSelected from '../../assets/seats/ghe-da-chon.png';
// import seatCouple from '../../assets/seats/ghe-doi.png';
// import seatSold from '../../assets/seats/ghe-da-ban.png';
// import seatMapHeader from '../../assets/seats/seatMapHeader.png';
// import seatCoupleSelected from '../../assets/seats/ghe-doi-da-chon.png';

// const SeatSelection = () => {
//     const location = useLocation();
//     const { showtimeId, movieDetails, moviePosterUrl } = location.state || {};

//     const navigate = useNavigate();
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatLayout, setSeatLayout] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showtimeDetails, setShowtimeDetails] = useState(null);
//     const [movieTitle] = useState(movieDetails?.movieTitle || "");

//     useEffect(() => {
//         const fetchSeatsAndShowtimeDetails = async () => {
//             try {
//                 const seatResponse = await axios.get(`http://localhost:8080/seats?showtimeId=${showtimeId}`);
//                 const seatData = seatResponse.data;
//                 if (seatData?.data) {
//                     const allSeats = seatData.data.slice(0, 60);
//                     const seatNormal = allSeats.filter(seats => seats.seatType.seatTypeName === 'Ghế thường');
//                     const seatVIP = allSeats.filter(seats => seats.seatType.seatTypeName === 'VIP');
//                     const seatCouple = allSeats.filter(seats => seats.seatType.seatTypeName === 'Couple');

//                     const arrangedSeats = [
//                         ...seatNormal,
//                         ...seatVIP,
//                         ...seatCouple
//                     ];
//                     setSeatLayout(arrangedSeats);
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
//         fetchSeatsAndShowtimeDetails();
//     }, [showtimeId]);





//     const handleSeatClick = (seat) => {
//         if (seat.booked) {
//             alert('This seat has already been sold!');
//             return;
//         }

//         setSelectedSeats((prevSelected) => {
//             if (prevSelected.some(selected => selected.seatId === seat.seatId)) {
//                 return prevSelected.filter(selected => selected.seatId !== seat.seatId);
//             } else {
//                 return [...prevSelected, seat];
//             }
//         });
//     };



//     const getTotalPrice = () => {
//         if (!showtimeDetails) return 0;
//         const ticketPrice = showtimeDetails.showtimePrice;

//         return selectedSeats.reduce((total, selectedSeat) => {
//             const seat = seatLayout.find(s => s.seatId === selectedSeat.seatId);
//             const seatPrice = seat ? seat.seatType.seatTypePrice : 0;
//             return total + (ticketPrice + seatPrice);
//         }, 0);
//     };

//     const getGroupedSeatsByType = () => {
//         return selectedSeats.reduce((acc, seat) => {
//             const type = seat.seatType.seatTypeName;
//             if (!acc[type]) {
//                 acc[type] = [];
//             }
//             acc[type].push(seat);
//             return acc;
//         }, {});
//     };

//     if (loading) {
//         return <div>Loading seat data...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }


//     const goToOrderFood = () => {
//         navigate('/orderFood', { state: { selectedSeats, showtimeDetails, movieTitle, moviePosterUrl } });
//     };

//     return (
//         <Container fluid>
//             <Card.Title className="text-title mt-4">
//                 BƯỚC 2: CHỌN GHẾ
//             </Card.Title>
//             <Row>

//                 <Col xs={12} lg={8} className="seat-selection-column d-flex flex-column">
//                     <Col xs={12} lg={12} className="mb-3">
//                         <Card.Img src={seatMapHeader} alt="Màn hình" className="img-fluid" />
//                     </Col>

//                     <Col>
//                         <div className="fixed-height-container">
//                             {seatLayout.length > 0 ? (
//                                 seatLayout.map((seat, index) => (
//                                     <img
//                                         key={index}
//                                         src={selectedSeats.some(selected => selected.seatId === seat.seatId)
//                                             ? seat.seatType.seatTypeName === 'Couple'
//                                                 ? seatCoupleSelected
//                                                 : seatSelected
//                                             : seat.booked
//                                                 ? seatSold
//                                                 : seat.seatType.seatTypeName === 'Ghế thường'
//                                                     ? seatNormal
//                                                     : seat.seatType.seatTypeName === 'VIP'
//                                                         ? seatVIP
//                                                         : seatCouple
//                                         }
//                                         alt={seat.seatType.seatTypeName}
//                                         className="seat img-fluid"
//                                         onClick={() => handleSeatClick(seat)}
//                                     />
//                                 ))
//                             ) : (
//                                 <div>Không có ghế nào có sẵn.</div>
//                             )}
//                         </div>
//                     </Col>

//                     <div className="seat-box text-center mt-3">
//                         <Row>
//                             <Col xs={4}><img src={seatNormal} alt="Ghế thường" className="img-fluid" /> Ghế thường</Col>
//                             <Col xs={4}><img src={seatVIP} alt="Ghế VIP" className="img-fluid" /> Ghế VIP</Col>
//                             <Col xs={4}><img src={seatSelected} alt="Ghế đã chọn" className="img-fluid" /> Ghế đã chọn</Col>
//                             <Col xs={4}><img src={seatSold} alt="Ghế đã bán" className="img-fluid" /> Ghế đã bán</Col>
//                             <Col xs={4}><img src={seatCouple} alt="Ghế đôi" className="img-fluid" /> Ghế đôi</Col>
//                         </Row>
//                     </div>
//                 </Col>




//                 {/* Pricing Details */}
//                 <Col xs={12} lg={4} className="pricing-column d-flex flex-column justify-content-between mt-3 mt-lg-0">
//                     <div className="pricing-details p-3 shadow-sm ">
//                         {showtimeDetails && (
//                             <div>
//                                 <h4 className="film-title-price">{`${movieTitle}`}</h4>

//                                 <h6 className="cinema-title">
//                                     {showtimeDetails.screen.cinema.cinemaName}
//                                 </h6>
                                
//                                 <p className='time-title-price'>
//                                     <strong className="screen-title">{showtimeDetails.screen.screenName}</strong>
//                                     {' - '}
                                   
//                                     {
//                                     new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
//                                         hour: '2-digit',
//                                         minute: '2-digit',
//                                         day: '2-digit',
//                                         month: '2-digit',
//                                         year: 'numeric'
//                                     })
//                                     }
                                    
//                                 </p>
//                             </div>
//                         )}

//                         <div>
//                             {Object.entries(getGroupedSeatsByType()).map(([seatType, seats]) => (
//                                 <div key={seatType}>
//                                     <p><strong>{seats.length} x {seatType}</strong></p>
//                                     <p>{seats.map(seat => seat.seatName).join(', ')}</p>
//                                 </div>
//                             ))}
//                         </div>

//                         <hr />
//                         <p className='total-price'>Total Price: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(getTotalPrice())}</p>
//                         <Button variant="success" block onClick={goToOrderFood}>
//                             CHỌN ĐỒ ĂN (2/4)
//                         </Button>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default SeatSelection;