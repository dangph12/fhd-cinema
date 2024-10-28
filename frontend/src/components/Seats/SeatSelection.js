// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import axios from 'axios';
// import SeatLayout from './SeatLayout';
// import './SeatSelection.css';
// import PricingDetails from './PricingDetails';
// import seatMapHeader from '../../assets/seats/seatMapHeader.png';
// import SeatDescription from './SeatDescription';

// const SeatSelection = () => {
//     const location = useLocation();
//     const { showtimeId, movieDetails } = location.state || {};
//     console.log( movieDetails);
//     const navigate = useNavigate();
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatLayout, setSeatLayout] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showtimeDetails, setShowtimeDetails] = useState(null);
//     const [movieTitle] = useState(movieDetails?.movieTitle || 'Unknown Movie Title');
//     const [moviePosterUrl] = useState(movieDetails?.moviePosterUrl || '');


//     useEffect(() => {
//         const fetchSeatsAndShowtimeDetails = async () => {
//             try {
//                 // Lấy chi tiết showtime trước
//                 const showtimeResponse = await axios.get(`http://localhost:8080/showtimes/${showtimeId}`);
//                 const showtimeData = showtimeResponse.data;
//                 if (showtimeData?.data) {
//                     setShowtimeDetails(showtimeData.data);
                    
//                     // Lấy screenId từ showtimeDetails
//                     const screenId = showtimeData.data.screen.screenId;
    
//                     // Sau đó lấy danh sách ghế dựa trên screenId
//                     const seatResponse = await axios.get(`http://localhost:8080/seats?screenId=${screenId}`);
//                     const seatData = seatResponse.data;
//                     if (seatData?.data) {
//                         const allSeats = seatData.data.slice(0, 60);
//                         const seatNormal = allSeats.filter(seat => seat.seatType.seatTypeName === 'Ghế thường');
//                         const seatVIP = allSeats.filter(seat => seat.seatType.seatTypeName === 'VIP');
//                         const seatCouple = allSeats.filter(seat => seat.seatType.seatTypeName === 'Couple');
//                         setSeatLayout([...seatNormal, ...seatVIP, ...seatCouple]);
//                     } else {
//                         setSeatLayout([]);
//                         console.error("No seat data found");
//                     }
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

//     if (loading) {
//         return <div>Loading seat data...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     const goToOrderFood = () => {
//         navigate('/order-snacks', { state: { selectedSeats, showtimeDetails, movieDetails } });
//     };

//     return (
//         <Container fluid>
            
//             <Card.Title className="text-center mt-4" style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>BƯỚC 2: CHỌN GHẾ</Card.Title>
//             {/* <OrderTicket/> */}
//             <Row>
//                 <Col xs={12} lg={8} className="seat-selection-column d-flex flex-column">
//                     <Col xs={12} lg={12} className="mb-3">
//                         <Card.Img src={seatMapHeader} alt="Màn hình" className="img-fluid" />
//                     </Col>
//                     <Col>
//                         <SeatLayout seatLayout={seatLayout} selectedSeats={selectedSeats} onSeatClick={handleSeatClick} />
//                     </Col>
//                     <SeatDescription />
//                 </Col>

//                 <Col xs={12} lg={4} className="pricing-column d-flex flex-column justify-content-between mt-3 mt-lg-0">
//                     <PricingDetails
//                         movieTitle={movieTitle}
//                         showtimeDetails={showtimeDetails}
//                         selectedSeats={selectedSeats}
//                         getTotalPrice={getTotalPrice}
//                         goToOrderFood={goToOrderFood}
//                         moviePosterUrl={moviePosterUrl}
//                     />
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default SeatSelection;





import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import SeatLayout from './SeatLayout';
import './SeatSelection.css';
import PricingDetails from './PricingDetails';
import seatMapHeader from '../../assets/seats/seatMapHeader.png';
import SeatDescription from './SeatDescription';

const SeatSelection = () => {
    const location = useLocation();
    const { showtimeId, movieDetails, bookingId } = location.state || {};
    const navigate = useNavigate();

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatLayout, setSeatLayout] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showtimeDetails, setShowtimeDetails] = useState(null);
    const movieTitle = movieDetails?.movieTitle || 'Unknown Movie Title';
    const moviePosterUrl = movieDetails?.moviePosterUrl || '';

    useEffect(() => {
        const fetchSeatsAndShowtimeDetails = async () => {
            try {
                const showtimeResponse = await axios.get(`http://localhost:8080/showtimes/${showtimeId}`);
                const showtimeData = showtimeResponse.data;

                if (showtimeData?.data) {
                    setShowtimeDetails(showtimeData.data);

                    const screenId = showtimeData.data.screen.screenId;
                    const seatResponse = await axios.get(`http://localhost:8080/seats/screen/${screenId}`);
                    const seatData = seatResponse.data;

                    if (seatData?.data) {
                        setSeatLayout(seatData.data);
                    } else {
                        setSeatLayout([]);
                        console.error("No seat data found");
                    }
                } else {
                    setShowtimeDetails(null);
                    console.error("No showtime data found");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Unable to fetch seat or showtime data.");
            } finally {
                setLoading(false);
            }
        };

        fetchSeatsAndShowtimeDetails();
    }, [showtimeId]);

    const handleSeatClick = (seat) => {
        if (seat.booked) {
            alert('This seat has already been sold!');
            return;
        }

        setSelectedSeats((prevSelected) => {
            if (prevSelected.some(selected => selected.seatId === seat.seatId)) {
                return prevSelected.filter(selected => selected.seatId !== seat.seatId);
            } else {
                return [...prevSelected, seat];
            }
        });
    };

    const createTickets = async () => {
        for (const seat of selectedSeats) {
            try {
                const response = await axios.post('http://localhost:8080/tickets', {
                    seatId: seat.seatId,
                    bookingId: bookingId
                });
                
                const ticketId = response.data?.data?.ticketId;
                if (ticketId) {
                    console.log(`Ticket created for seatId ${seat.seatId}: Ticket ID = ${ticketId}`);
                }
            } catch (error) {
                console.error(`Failed to create ticket for seatId ${seat.seatId}`, error);
            }
        }
        
        navigate('/order-snacks', { state: { selectedSeats, showtimeDetails, movieDetails } });
    };

    const getTotalPrice = () => {
        if (!showtimeDetails) return 0;
        const ticketPrice = showtimeDetails.showtimePrice;
        return selectedSeats.reduce((total, selectedSeat) => {
            const seat = seatLayout.find(s => s.seatId === selectedSeat.seatId);
            const seatPrice = seat ? seat.seatType.seatTypePrice : 0;
            return total + (ticketPrice + seatPrice);
        }, 0);
    };

    if (loading) {
        return <div>Loading seat data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container fluid>
            <Card.Title className="text-center mt-4" style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>BƯỚC 2: CHỌN GHẾ</Card.Title>
            <Row>
                <Col xs={12} lg={8} className="seat-selection-column d-flex flex-column">
                    <Col xs={12} lg={12} className="mb-3">
                        <Card.Img src={seatMapHeader} alt="Màn hình" className="img-fluid" />
                    </Col>
                    <Col>
                        <SeatLayout seatLayout={seatLayout} selectedSeats={selectedSeats} onSeatClick={handleSeatClick} />
                    </Col>
                    <SeatDescription />
                </Col>

                <Col xs={12} lg={4} className="pricing-column d-flex flex-column justify-content-between mt-3 mt-lg-0">
                    <PricingDetails
                        movieTitle={movieTitle}
                        showtimeDetails={showtimeDetails}
                        selectedSeats={selectedSeats}
                        getTotalPrice={getTotalPrice}
                        goToOrderFood={createTickets} // Sử dụng `createTickets` để tạo vé và điều hướng
                        moviePosterUrl={moviePosterUrl}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default SeatSelection;

