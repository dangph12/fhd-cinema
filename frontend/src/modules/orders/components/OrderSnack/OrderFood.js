import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import SnackList from './SnackList';
import PricingSummary from './PricingSummary';
import { useCheckout } from '../../../../components/payment-infor/CheckoutContext';

import './OrderFood.css'; 

import smallPopcorns from '../../../../assets/snacks/baprangbo-nho.png';
import bigPopcorns from '../../../../assets/snacks/baprangbo-lon.png';
import smallDrink from '../../../../assets/snacks/nuoc-ngot-nho.png';
import bigDrink from '../../../../assets/snacks/nuoc-ngot-lon.png';

const snackImages = {
  'Bắp rang bơ (nhỏ)': smallPopcorns,
  'Bắp rang bơ (lớn)': bigPopcorns,
  'Nước ngọt (nhỏ)': smallDrink,
  'Nước ngọt (lớn)': bigDrink,
};

const OrderFood = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { selectedSeats, showtimeDetails, movieDetails,customerId, getTotalPrice} = state || {};
  const [movieTitle] = useState(movieDetails?.movieTitle || 'Unknown Movie Title');
  const [moviePosterUrl] = useState(movieDetails?.moviePosterUrl || '');
  const [snacks, setSnacks] = useState([]);
  const [quantity, setQuantity] = useState({});
  const { setCheckoutData } = useCheckout();
  window.scrollTo(0, 0);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/snacks');
        const snackData = response.data;
        if (snackData && snackData.data) {
          const snacksWithImages = snackData.data.slice(0, 4).map(snack => ({
            ...snack,
            image: snackImages[snack.snackName] || smallPopcorns,
          }));
          setSnacks(snacksWithImages);
        }
      } catch (error) {
        console.error('Error fetching snacks:', error);
      }
    };

    fetchSnacks();
  }, []);

  const handleQuantityChange = (snackId, change) => {
    setQuantity((prev) => ({
      ...prev,
      [snackId]: (prev[snackId] || 0) + change > 0 ? (prev[snackId] || 0) + change : 0,
    }));
  };

  const totalTicketPrice = selectedSeats?.reduce((total, seat) => {
    const seatPrice = seat.seatType.seatTypePrice || 0;
    return total + (showtimeDetails.showtimePrice + seatPrice);
  }, 0) || 0;

  const totalSnackPrice = Object.keys(quantity).reduce((total, snackId) => {
    const snack = snacks.find(s => s.snackId === snackId);
    return total + (snack ? snack.snackPrice * quantity[snackId] : 0);
  }, 0);

  const totalPrice = totalTicketPrice + totalSnackPrice;

  const goToCheckout = () => {
    const selectedSnacks = snacks.map(snack => ({
      ...snack,
      quantity: quantity[snack.snackId] || 0,
    })).filter(snack => snack.quantity > 0);

    setCheckoutData({
      selectedSeats,
      showtimeDetails,
      movieTitle,
      totalPrice,
      snacks: selectedSnacks,
      moviePosterUrl,
      customerId,
      getTotalPrice,
      totalTicketPrice
      
    });
    
    navigate('/checkout');
  };

  return (
    <Container fluid>
      
      <h2 className="text-center mt-4" style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>
        BƯỚC 3: CHỌN ĐỒ ĂN
      </h2>
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
        <Col md={8}>
          <SnackList snacks={snacks} quantity={quantity} onQuantityChange={handleQuantityChange} />
        </Col>
        <Col xs={12} lg={4} className="pricing-column d-flex flex-column justify-content-between mt-3 mt-lg-0">
          <PricingSummary
            moviePosterUrl={moviePosterUrl}
            movieTitle={movieTitle}
            showtimeDetails={showtimeDetails}
            selectedSeats={selectedSeats}
            quantity={quantity}
            snacks={snacks}
            totalPrice={totalPrice}
            goToCheckout={goToCheckout} // Chuyển hướng đến Checkout khi nhấn Thanh Toán
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OrderFood;
