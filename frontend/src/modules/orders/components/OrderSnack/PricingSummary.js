import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PricingSummary = ({ 
  movieTitle, 
  showtimeDetails, 
  selectedSeats, 
  quantity, 
  snacks, 
  totalPrice, 
  goToCheckout, 
  moviePosterUrl

  // discount, // Phần giảm giá
  // selectedVoucher // Voucher đã chọn
}) => (
  <Card className="pricing-column p-3 shadow-sm ">
    <Card.Title className="film-title-price">{movieTitle}</Card.Title>
    <h6 className="cinema-title">{showtimeDetails.screen.cinema.cinemaName}</h6>
    <p className="time-title-price">
      <strong className="screen-title">{showtimeDetails.screen.screenName}</strong> -{' '}
      {new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })}
    </p>
    <p className="time-title-price">{selectedSeats.map(seat => seat.seatName).join(', ')}</p>

    {/* Hiển thị thông tin món ăn và số lượng đã chọn */}
    <div>
      {Object.keys(quantity).map(snackId => {
        const snack = snacks.find(s => s.snackId === snackId);
        const qty = quantity[snackId];
        return qty > 0 ? (
          <p className="time-title-price" key={snackId}>
            {qty} x {snack.snackName}: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(qty * snack.snackPrice)}
          </p>
        ) : null;
      })}
    </div>
    

    {/* Hiển thị thông tin voucher đã chọn và giảm giá */}
    {/* {selectedVoucher && (
      <div>
        
        <hr />
        <p className="time-title-price">Voucher: <strong>{selectedVoucher.voucherName}</strong></p>
        <p className="time-title-price">Giảm giá: <strong>-{selectedVoucher.voucherDiscountPercent}%</strong></p>
        <p className="time-title-price">Tiền giảm: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)} </p>
      </div>
    )} */}

    <hr />
    <h5>Tổng tiền: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</h5>
    <Button variant="success" block onClick={goToCheckout}>
      Thanh Toán (3/4)
    </Button>
  </Card>
);

export default PricingSummary;
