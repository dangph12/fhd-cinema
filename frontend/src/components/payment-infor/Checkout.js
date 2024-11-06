

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CheckoutPricingSummary from './CheckoutPricingSummary';
import { useCheckout } from './CheckoutContext';

const Checkout = () => {
    const { checkoutData } = useCheckout();
    const { selectedSeats, showtimeDetails, movieTitle, totalPrice, snacks, moviePosterUrl, customerId, totalTicketPrice } = checkoutData;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();



    sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    sessionStorage.setItem('showtimeDetails', JSON.stringify(showtimeDetails));
    sessionStorage.setItem('movieTitle', movieTitle);
    sessionStorage.setItem('totalPrice', totalPrice);
    sessionStorage.setItem('snacks', JSON.stringify(snacks));
    sessionStorage.setItem('moviePosterUrl', moviePosterUrl);
    sessionStorage.setItem('totalTicketPrice', totalTicketPrice);



    const createBill = async () => {
        try {
            const billResponse = await axios.post('http://localhost:8080/bills', {
                showtimeId: showtimeDetails.showtimeId,
                customerId: customerId,
                seatIds: selectedSeats.map(seat => seat.seatId),
                snackIds: snacks.map(snack => snack.snackId),
            });
            sessionStorage.setItem('customerId', customerId);
            if (billResponse.data.status === 'fail') {
                alert(billResponse.data.message || "Failed to create bill.");
                return;
            }

            const billId = billResponse.data.data?.billId;
            console.log("Created bill with ID:", billId);
            sessionStorage.setItem('billId', billId);
        } catch (error) {
            console.error('Error creating bill:', error);
            alert('Đã xảy ra lỗi khi tạo hóa đơn, vui lòng thử lại sau.');
        }
    };

    const handlePayment = async () => {
        setIsSubmitting(true);
        
        try {
            if (sessionStorage.getItem('billId') === null) {
                await createBill();
            }

            const urlReturn = `${window.location.origin}/vnpay-payment`;
            const response = await axios.post('http://localhost:8080/vnpay/create-order', {
                orderTotal: Math.round(totalPrice),
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
                <Col>
                    <CheckoutPricingSummary
                        moviePosterUrl={moviePosterUrl}
                        movieTitle={movieTitle}
                        showtimeDetails={showtimeDetails}
                        selectedSeats={selectedSeats}
                        snacks={snacks}
                        totalPrice={totalPrice}
                        seatPrice={totalTicketPrice}
                        handlePayment={handlePayment}
                        isSubmitting={isSubmitting}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;






