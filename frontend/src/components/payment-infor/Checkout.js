import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CheckoutPricingSummary from './CheckoutPricingSummary';  // Thành phần hiển thị chi tiết giá

const Checkout = () => {
  const { state } = useLocation();  // Lấy dữ liệu truyền từ OrderFood qua
  const { selectedSeats, showtimeDetails, movieTitle, totalPrice, snacks, moviePosterUrl } = state || {};

  const [vouchers, setVouchers] = useState([]); // Lưu danh sách voucher
  const [selectedVoucher, setSelectedVoucher] = useState(null); // Voucher đã chọn
  const [isSubmitting, setIsSubmitting] = useState(false); // Để kiểm tra trạng thái thanh toán

  // Gọi API lấy danh sách voucher
  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/vouchers');
        setVouchers(response.data.data);
      } catch (error) {
        console.error('Error fetching vouchers:', error);
      }
    };
    fetchVouchers();
  }, []);

  // Tính giảm giá từ voucher đã chọn
  const calculateDiscount = () => {
    if (selectedVoucher) {
      return totalPrice * (selectedVoucher.voucherDiscountPercent / 100);
    }
    return 0;
  };

 
  const finalPrice = totalPrice - calculateDiscount();

  
  const handlePayment = async () => {
    setIsSubmitting(true); 

 
  try {
    // Gửi yêu cầu POST đến backend
    const response = await axios.post('http://localhost:8080/submitOrder', {
      orderTotal: Math.round(finalPrice), 
      orderInfo: `Thanh toán phim ${movieTitle}` 
    });

    // Kiểm tra nếu response có URL trả về
    if (response.data) {
      // Điều hướng người dùng đến URL VNPay
      window.location.href = response.data;
    }
  } catch (error) {
    console.error('Error during payment:', error);
    alert('Đã xảy ra lỗi khi thanh toán, vui lòng thử lại sau.');
  } finally {
    setIsSubmitting(false); // Reset trạng thái sau khi xử lý xong
  }
};

  return (
    <Container fluid className="mt-4">
      <h2 className="text-center mb-4" style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>
        BƯỚC 4: THANH TOÁN
      </h2>
      
      <Row>
        {/* Chi tiết thông tin đặt vé */}
        <Col xs={12} md={8}>
          <CheckoutPricingSummary
            moviePosterUrl={moviePosterUrl}
            movieTitle={movieTitle}
            showtimeDetails={showtimeDetails}
            selectedSeats={selectedSeats}
            snacks={snacks}
            totalPrice={totalPrice}
            discount={calculateDiscount()} // Truyền số tiền giảm giá vào
            finalPrice={finalPrice} // Truyền tổng tiền sau giảm giá
          />
        </Col>

        {/* Chọn voucher và thanh toán */}
        <Col xs={12} md={4}>
          <h5>Chọn Giảm Giá</h5>
          <Form.Group>
            <Form.Label>Chọn Voucher</Form.Label>
            <Form.Control
              as="select"
              value={selectedVoucher ? selectedVoucher.voucherId : ''}
              onChange={(e) => setSelectedVoucher(vouchers.find(v => v.voucherId === e.target.value))}
            >
              <option value="">Chọn voucher</option>
              {vouchers.map(voucher => (
                <option key={voucher.voucherId} value={voucher.voucherId}>
                  {voucher.voucherName} - Giảm {voucher.voucherDiscountPercent}%
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* Nút thanh toán VNPay */}
          <Button
            variant="primary"
            className="mt-3 w-100"
            onClick={handlePayment}
            disabled={isSubmitting} // Disable button khi đang xử lý thanh toán
          >
            {isSubmitting ? 'Đang xử lý...' : 'Tiến Hành Thanh Toán VNPay'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
