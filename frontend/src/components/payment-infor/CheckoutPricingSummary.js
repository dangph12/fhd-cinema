import React from 'react';
import { Card } from 'react-bootstrap';

const CheckoutPricingSummary = ({ movieTitle, showtimeDetails, selectedSeats, snacks, totalPrice, discount, finalPrice, moviePosterUrl }) => {
  return (
    <Card className="p-3 shadow-sm">
      <Card.Img src={moviePosterUrl} alt="Movie Poster" className="movie-poster" />
      <Card.Title className="film-title-price">{movieTitle}</Card.Title>
      <h6 className="cinema-title">{showtimeDetails.screen.cinema.cinemaName}</h6>
      <p className="time-title-price">
        <strong>{showtimeDetails.screen.screenName}</strong> -{' '}
        {new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })}
      </p>
      <p className="time-title-price">{selectedSeats.map(seat => seat.seatName).join(', ')}</p>

      <div>
        {snacks.map(snack => (
          <p key={snack.snackId} className="time-title-price">
            {snack.quantity} x {snack.snackName}: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(snack.quantity * snack.snackPrice)}
          </p>
        ))}
      </div>

      <hr />
      <h5>Tổng tiền gốc: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)} VND</h5>
      <h5>Giảm giá: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)} VND</h5>
      <h5>Tổng tiền thanh toán: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(finalPrice)} VND</h5>
    </Card>
  );
};

export default CheckoutPricingSummary;
