import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CheckoutPricingSummary from './CheckoutPricingSummary';

const Checkout = () => {
  const { state } = useLocation();  // Nhận dữ liệu từ trang trước đó
  const { selectedSeats, showtimeDetails, movieTitle, totalPrice, snacks, moviePosterUrl } = state || {};

  const [vouchers, setVouchers] = useState([]); 
  const [selectedVoucher, setSelectedVoucher] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const navigate = useNavigate(); 

  // useEffect(() => {

  //   const fetchVouchers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8080/vouchers');
  //       setVouchers(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching vouchers:', error);
  //     }
  //   };
  //   fetchVouchers();
  // }, []);

  // Tính toán giảm giá từ voucher đã chọn
  const calculateDiscount = () => {
    if (selectedVoucher) {
      return totalPrice * (selectedVoucher.voucherDiscountPercent / 100);
    }
    return 0;
  };

  const finalPrice = totalPrice - calculateDiscount();

  const handlePayment = async () => {
    setIsSubmitting(true);
    const urlReturn = `${window.location.origin}/vnpay-payment`; 

    try {
      const response = await axios.post('http://localhost:8080/vnpay/create-order', {
        orderTotal: Math.round(finalPrice),
        orderInfo: `Thanh toán phim ${movieTitle}`,
        urlReturn: urlReturn
      });

      if (response.data && response.data.data) {
        window.location.href = response.data.data; 
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Đã xảy ra lỗi khi thanh toán, vui lòng thử lại sau.');
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="mt-4">
      <h2 className="text-center mb-4" style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>
        BƯỚC 4: THANH TOÁN
      </h2>
      
      <Row>
        <Col xs={12} md={8}>
          <CheckoutPricingSummary
            moviePosterUrl={moviePosterUrl}
            movieTitle={movieTitle}
            showtimeDetails={showtimeDetails}
            selectedSeats={selectedSeats}
            snacks={snacks}
            totalPrice={totalPrice}
            discount={calculateDiscount()}
            finalPrice={finalPrice}
          />
        </Col>

        <Col xs={12} md={4}>
          {/* <h5>Chọn Giảm Giá</h5>
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
          </Form.Group> */}

          <Button
            variant="primary"
            className="mt-3 w-100"
            onClick={handlePayment}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Đang xử lý...' : 'Tiến Hành Thanh Toán VNPay'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import CheckoutPricingSummary from './CheckoutPricingSummary';

// const Checkout = () => {
//   const { state } = useLocation();  
//   const { selectedSeats, showtimeDetails, movieTitle, totalPrice, snacks, moviePosterUrl } = state || {};

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate(); 

//   const calculateDiscount = () => {
//     return 0; // Tạm bỏ tính năng voucher
//   };

//   const finalPrice = totalPrice - calculateDiscount();

//   const handlePayment = async () => {
//     setIsSubmitting(true);
//     const urlReturn = `${window.location.origin}/vnpay-payment`; 

//     try {
//       const response = await axios.post('http://localhost:8080/vnpay/create-order', {
//         orderTotal: Math.round(finalPrice),
//         orderInfo: `Thanh toán phim ${movieTitle}`,
//         urlReturn: urlReturn
//       });

//       if (response.data && response.data.data) {
//         window.location.href = response.data.data; // Điều hướng người dùng đến VNPay
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       console.error('Error during payment:', error);
//       alert('Đã xảy ra lỗi khi thanh toán, vui lòng thử lại sau.');
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     const fetchPaymentDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/vnpay-payment${window.location.search}`);
//         console.log('Response from /vnpay-payment:', response.data);
//         debugger
//         if (response.data.status === 'SUCCESS') {
//           // Điều hướng tới trang ticket với thông tin đã nhận
//           navigate('/ticket', {
//             state: {
//               selectedSeats,
//               showtimeDetails,
//               movieTitle,
//               snacks,
//               moviePosterUrl,
//               paymentSuccess: true
//             }
//           });
//         } else {
//           alert("Thanh toán thất bại, vui lòng thử lại!");
//         }
//       } catch (error) {
//         console.error('Error fetching payment details:', error);
//       }
//     };
  
//     fetchPaymentDetails();
//   }, [navigate]);
  

//   return (
//     <Container fluid className="mt-4">
//       <h2 className="text-center mb-4" style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>
//         BƯỚC 4: THANH TOÁN
//       </h2>
      
//       <Row>
//         <Col xs={12} md={8}>
//           <CheckoutPricingSummary
//             moviePosterUrl={moviePosterUrl}
//             movieTitle={movieTitle}
//             showtimeDetails={showtimeDetails}
//             selectedSeats={selectedSeats}
//             snacks={snacks}
//             totalPrice={totalPrice}
//             discount={calculateDiscount()}
//             finalPrice={finalPrice}
//           />
//         </Col>

//         <Col xs={12} md={4}>
//           <Button
//             variant="primary"
//             className="mt-3 w-100"
//             onClick={handlePayment}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Đang xử lý...' : 'Tiến Hành Thanh Toán VNPay'}
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Checkout;
