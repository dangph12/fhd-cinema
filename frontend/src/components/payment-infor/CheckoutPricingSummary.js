import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CheckoutPricingSummary = ({ movieTitle, showtimeDetails, selectedSeats, snacks, totalPrice, discount, finalPrice, moviePosterUrl }) => {
  return (
    <Card className="p-3 shadow-sm">
      <Row>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
          <Card.Img 
            src={moviePosterUrl} 
            alt="Movie Poster" 
            className="movie-poster img-fluid" 
            style={{ maxHeight: '300px', objectFit: 'cover' }} 
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body>
            <Card.Title className="film-title-price h4">{movieTitle}</Card.Title>
            {showtimeDetails && showtimeDetails.screen && showtimeDetails.screen.cinema && (
              <>
                <h6 className="cinema-title">{showtimeDetails.screen.cinema.cinemaName}</h6>
                <p className="time-title-price">
                  <strong>{showtimeDetails.screen.screenName}</strong> -{' '}
                  {new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </p>
              </>
            )}
            
            {selectedSeats && selectedSeats.length > 0 ? (
              <p className="time-title-price">
                Ghế ngồi: {selectedSeats.map((seat) => seat.seatName).join(', ')}
              </p>
            ) : (
              <p className="time-title-price">Không có ghế ngồi nào được chọn</p>
            )}

            <div>
              {snacks && snacks.length > 0 ? (
                snacks.map((snack) => (
                  <p key={snack.snackId} className="time-title-price">
                    {snack.quantity} x {snack.snackName}:{' '}
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(snack.quantity * snack.snackPrice)}
                  </p>
                ))
              ) : (
                <p className="time-title-price">Không có đồ ăn nào được chọn</p>
              )}
            </div>

            <hr />
            <h5>
              Tổng tiền gốc: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)} VND
            </h5>
            <h5>
              Giảm giá: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)} VND
            </h5>
            <h5>
              Tổng tiền thanh toán: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(finalPrice)} VND
            </h5>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CheckoutPricingSummary;
