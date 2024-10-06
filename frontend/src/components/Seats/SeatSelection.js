import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './SeatSelection.css';
import seatNormal from '../../assets/seats/ghe-thuong.png';
import seatVIP from '../../assets/seats/ghe-vip.png';
import seatSelected from '../../assets/seats/ghe-da-chon.png';
import seatCouple from '../../assets/seats/ghe-doi.png';
import seatSold from '../../assets/seats/ghe-da-ban.png';
import seatMapHeader from '../../assets/seats/seatMapHeader.png';
import seatCoupleSelected from '../../assets/seats/ghe-doi-da-chon.png';

const SeatSelection = () => {
    const { showtimeId } = useParams();
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatLayout, setSeatLayout] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showtimeDetails, setShowtimeDetails] = useState(null);

    // Fetch seat layout and showtime details based on showtimeId
    useEffect(() => {
        const fetchSeatsAndShowtimeDetails = async () => {
            try {
                // Fetch seat data
                const seatResponse = await fetch(`http://localhost:8080/seats?showtimeId=${showtimeId}`);
                const seatData = await seatResponse.json();
                if (seatData && seatData.data) {

                    const allSeats = (seatData.data.slice(0, 60));



                    const seatNormal = allSeats.filter(seats => seats.seatType.seatTypeName === 'Ghế thường');
                    const seatVIP = allSeats.filter(seats => seats.seatType.seatTypeName === 'VIP');
                    const seatCouple = allSeats.filter(seats => seats.seatType.seatTypeName === 'Couple');

                    const arrangedSeats = [
                        ...seatNormal,
                        ...seatVIP.slice(Math.floor(seatVIP.length / 2)),
                        // ...seatNormal.slice(Math.floor(seatNormal.length / 2)),
                        ...seatCouple
                    ];




                    setSeatLayout(arrangedSeats);



                } else {
                    setSeatLayout([]);
                    console.error("No seat data found");
                }

                // Fetch showtime details
                const showtimeResponse = await fetch(`http://localhost:8080/showtimes/${showtimeId}`);
                const showtimeData = await showtimeResponse.json();
                if (showtimeData && showtimeData.data) {
                    setShowtimeDetails(showtimeData.data); // Showtime details fetched successfully
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

    // Handle seat selection and deselection
    const handleSeatClick = (seat) => {
        if (seat.booked) {
            alert('This seat has already been sold!');
            return; // Prevent selecting a booked seat
        }    // If it's a couple seat, select/deselect both seats together
        // if (seat.seatType.seatTypeName === 'Couple') {
        //     const seatIndex = seatLayout.findIndex(s => s.seatId === seat.seatId);

        //     // Ensure the seat has a valid next seat for a couple pair
        //     const nextSeat = seatLayout[seatIndex + 1];
        //     if (nextSeat && nextSeat.seatType.seatTypeName === 'Couple') {
        //         setSelectedSeats((prevSelected) => {
        //             const isSelected = prevSelected.some(selected => selected.seatId === seat.seatId);
        //             if (isSelected) {
        //                 // Deselect both seats
        //                 return prevSelected.filter(selected => selected.seatId !== seat.seatId && selected.seatId !== nextSeat.seatId);
        //             } else {
        //                 // Select both seats
        //                 return [...prevSelected, seat, nextSeat];
        //             }
        //         });
        //         return; // Skip further processing as both seats are handled
        //     }
        // }



        setSelectedSeats((prevSelected) => {
            if (prevSelected.some(selected => selected.seatId === seat.seatId)) {
                // If the seat is already selected, deselect it
                return prevSelected.filter(selected => selected.seatId !== seat.seatId);
            } else {
                // If the seat is not selected, add it to the selection
                return [...prevSelected, seat];
            }
        });
    };

    // Navigate to the next step: order food
    const goToOrderFood = () => {
        navigate('/orderfood', { state: { selectedSeats, showtimeDetails } }); // Pass selected seats and showtimeDetails to the next page
    };

    // Calculate total price based on ticket price and selected seats' seatTypePrice
    const getTotalPrice = () => {
        if (!showtimeDetails) return 0; // Ensure showtimeDetails are loaded
        const ticketPrice = showtimeDetails.showtimePrice; // The base ticket price for the showtime

        return selectedSeats.reduce((total, selectedSeat) => {
            const seat = seatLayout.find(s => s.seatId === selectedSeat.seatId);
            const seatPrice = seat ? seat.seatType.seatTypePrice : 0; // Get the seat type price
            return total + (ticketPrice + seatPrice); // Add the ticketPrice and seatPrice for each seat
        }, 0);
    };

    const getGroupedSeatsByType = () => {
        // Create an object where the key is the seat type and the value is an array of seats of that type
        return selectedSeats.reduce((acc, seat) => {
            const type = seat.seatType.seatTypeName; // e.g., 'Ghế thường', 'VIP', 'Couple'
            if (!acc[type]) {
                acc[type] = []; // Initialize an empty array for this seat type if not already present
            }
            acc[type].push(seat); // Add the seat to the appropriate type group
            return acc;
        }, {});
    };




    // Display loading or error messages
    if (loading) {
        return <div>Loading seat data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container fluid>
            <Card.Title className="mx-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                BƯỚC 2: CHỌN GHẾ
            </Card.Title>
            <Row className="justify-content-center align-items-stretch">
                {/* Showtime Details Section */}
                {/* {showtimeDetails && (
                    <Col xs={12} lg={4} className="pricing-column d-flex flex-column justify-content-between">
                        <div className="pricing-details p-3 rounded shadow-sm bg-white">
                            <Card.Title>{showtimeDetails.movieTitle}</Card.Title>
                            <h6 className="text-muted" style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left' }}>
                                {showtimeDetails.screen.cinema.cinemaName}
                            </h6>
                            <p style={{ fontSize: '1rem', textAlign: 'left' }}>
                                <strong style={{ color: '#5DBB63', fontSize: '1.1rem' }}>{showtimeDetails.screen.screenName}</strong>
                                {' - '}
                                {new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}
                            </p>
                            <strong>Price per ticket:</strong> {showtimeDetails.showtimePrice} VND
                        </div>
                    </Col>
                )} */}

                {/* Seat Selection Map */}
                <Col xs={12} lg={8} className="seat-selection-column d-flex flex-column">
                    <Col xs={12} lg={12} className="mb-3">
                        <Card.Img src={seatMapHeader} alt="Màn hình" style={{ width: '100%' }} />
                    </Col>

                    <Col>
                        <div className="seat-map flex-grow-1" style={{ overflowY: 'auto', padding: '10px' }}>
                            {seatLayout.length > 0 ? (
                                seatLayout.map((seat, index) => (
                                    <img
                                        key={index}
                                        // Kiểm tra trạng thái của ghế và hiển thị hình ảnh phù hợp
                                        src={selectedSeats.some(selected => selected.seatId === seat.seatId)
                                            ? seat.seatType.seatTypeName === 'Couple'
                                                ? seatCoupleSelected // Hình ảnh cho ghế đôi đã chọn
                                                : seatSelected // Hình ảnh cho ghế thường hoặc VIP đã chọn
                                            : seat.booked
                                                ? seatSold // Hình ảnh cho ghế đã bán
                                                : seat.seatType.seatTypeName === 'Ghế thường'
                                                    ? seatNormal // Hình ảnh cho ghế thường
                                                    : seat.seatType.seatTypeName === 'VIP'
                                                        ? seatVIP // Hình ảnh cho ghế VIP
                                                        : seatCouple // Hình ảnh cho ghế đôi
          
                                        }
                                        alt={seat.seatType.seatTypeName}
                                        className={`seat ${seat.seatType.seatTypeName}`}
                                        onClick={() => handleSeatClick(seat)} // Xử lý chọn ghế
                                    />
                                ))
                            ) : (
                                <div>Không có ghế nào có sẵn.</div>
                            )}
                        </div>
                    </Col>


                    {/* Seat legend */}
                    <div className="seat-legend text-center mt-3">
                        <Row>
                            <Col xs={4}><img src={seatNormal} alt="Ghế thường" /> Ghế thường</Col>
                            <Col xs={4}><img src={seatVIP} alt="Ghế VIP" /> Ghế VIP</Col>
                            <Col xs={4}><img src={seatSelected} alt="Ghế đã chọn" /> Ghế đã chọn</Col>
                            <Col xs={4}><img src={seatSold} alt="Ghế đã bán" /> Ghế đã bán</Col>
                            <Col xs={4}><img src={seatCouple} alt="Ghế đôi" /> Ghế đôi</Col>
                        </Row>
                    </div>
                </Col>

                {/* Pricing Details */}
                <Col xs={12} lg={4} className="pricing-column d-flex flex-column justify-content-between">


                    <div className="pricing-details p-3 rounded shadow-sm bg-white">

                        {showtimeDetails && (

                            <div className="pricing-details">
                                <Card.Title>{showtimeDetails.movieTitle}</Card.Title>
                                <h6 className="text-muted" style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left' }}>
                                    {showtimeDetails.screen.cinema.cinemaName}
                                </h6>
                                <p style={{ fontSize: '1rem', textAlign: 'left' }}>
                                    <strong style={{ color: '#5DBB63', fontSize: '1.1rem' }}>{showtimeDetails.screen.screenName}</strong>
                                    {' - '}
                                    {new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })}
                                </p>
                                {/* <strong style={{ textAlign: 'left' }}>Ticket Price</strong> {showtimeDetails.showtimePrice} VND */}
                            </div>

                        )}

                        {/* <h6 className="text-muted">FHD Cinema</h6> */}
                        <div style={{ textAlign: 'left' }}>
                            {Object.entries(getGroupedSeatsByType()).map(([seatType, seats]) => (
                                <div key={seatType}>
                                    <p><strong>{seats.length} x {seatType}</strong></p>
                                    <p>{seats.map(seat => seat.seatName).join(', ')}</p>
                                </div>
                            ))}
                        </div>

                        <hr />
                        <p style={{ textAlign: 'left' }}>Total Price: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(getTotalPrice())}</p>
                        <Button variant="success" block onClick={goToOrderFood}>
                            CHỌN ĐỒ ĂN (2/4)
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};



export default SeatSelection;
