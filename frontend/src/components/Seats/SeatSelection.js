
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
    const { showtimeId, movieDetails } = location.state || {};
    const navigate = useNavigate();
    const [customerId, setCustomerId] = useState(null); 
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatLayout, setSeatLayout] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showtimeDetails, setShowtimeDetails] = useState(null);
    const movieTitle = movieDetails?.movieTitle || 'Unknown Movie Title';
    const moviePosterUrl = movieDetails?.moviePosterUrl || '';

    window.scrollTo(0, 0);


    useEffect(() => {
        // Retrieve customerId from sessionStorage if not passed in location.state
        if (!customerId) {
            const storedAccount = localStorage.getItem("account");
            if (storedAccount) {
                const account = JSON.parse(storedAccount); // Parse the account object
                const storedCustomerId = account.customer?.customerId; // Access customerId from account object
                setCustomerId(storedCustomerId || "Unknown Customer ID");
                console.log("Retrieved customerId from sessionStorage:", storedCustomerId);
            }
        } else {
            console.log("Using passed customerId:", customerId);
        }
    }, []);

    useEffect(() => {
        // Log customerId whenever it changes
        console.log("Current customerId:", customerId);
    }, []);

    useEffect(() => {
        const fetchSeatsAndShowtimeDetails = async () => {
            try {
                const showtimeResponse = await axios.get(`http://localhost:8080/showtimes/${showtimeId}`);
                const showtimeData = showtimeResponse.data;

                if (showtimeData?.data) {
                    sessionStorage.removeItem('selectedSeats');
                    setSelectedSeats([]);
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

    // const goToOrderFood = () => {
    //     navigate('/order-snacks', { state: { selectedSeats, showtimeDetails, movieDetails, customerId,getTotalPrice } });
    // };

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

    const goToOrderFood = () => {
        if (selectedSeats.length === 0) {
            alert('Bạn phải chọn ít nhất một ghế trước khi tiếp tục.');
            return; 
        }
        navigate('/order-snacks', { state: { selectedSeats, showtimeDetails, movieDetails, customerId } });
    };

    return (
        <Container fluid>
 
            <Card.Title className="text-center mt-4" style={{ fontSize: '1.9rem', fontWeight: 'bold',color: '#3b8d00'  }}>BƯỚC 2: CHỌN GHẾ</Card.Title>
            <div className="movie-card">
          <img
            src={movieDetails?.moviePosterUrl}
            alt="Movie Poster"
            className="movie-poster"
          />

          {movieDetails && (
            <div className="movie-details">
              <h3 className="movie-title">{movieDetails.movieTitle}</h3>
              <p className="movie-description">{movieDetails.movieDescription}</p>
              <p>
                <strong>Đạo diễn:</strong>{" "}
                <a href="#">{movieDetails.movieDirector}</a>
              </p>
              <p>
                <strong>Diễn viên:</strong> <a href="#">Blake Lively</a>,{" "}
                <a href="#">Justin Baldoni</a>
              </p>
              <p>
                <strong>Thể loại:</strong> <a href="#">{movieDetails.movieGenre}</a>
              </p>
              <p>
                <strong>Khởi chiếu:</strong> {movieDetails.movieReleaseDate} |{" "}
                <strong>Thời lượng:</strong> 130 phút
              </p>
              <p>
                <strong>Định Dạng:</strong> {movieDetails.movieFormat}
              </p>
              <button className="movie-button" onClick={() => navigate("/")}>
                ← CHỌN PHIM KHÁC
              </button>
            </div>
          )}
        </div>
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
                        goToOrderFood={goToOrderFood} // Điều hướng trực tiếp mà không tạo ticket
                        moviePosterUrl={moviePosterUrl}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default SeatSelection;
