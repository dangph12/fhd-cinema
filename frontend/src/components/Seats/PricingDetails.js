import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const PricingDetails = ({ movieTitle, showtimeDetails, selectedSeats, getTotalPrice, goToOrderFood}) => {

    // const [movieTitle] = useState(movieDetails?.movieTitle || 'Unknown Movie Title');
    // const [moviePosterUrl] = useState(movieDetails?.moviePosterUrl || '');

    const getGroupedSeatsByType = () => {
        return selectedSeats.reduce((acc, seat) => {
            const type = seat.seatType.seatTypeName;
            if (!acc[type]) {
                acc[type] = [];
            }
            acc[type].push(seat);
            return acc;
        }, {});
    };

    return (
        <div className=" p-3 shadow-sm">
            {showtimeDetails && (
                <div>
                    <h4 className="film-title-price">{movieTitle}</h4>
                    <h6 className="cinema-title">{showtimeDetails.screen.cinema.cinemaName}</h6>
                    <p className="time-title-price">
                        <strong className="screen-title">{showtimeDetails.screen.screenName}</strong> -{' '}
                        {new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
                            hour: '2-digit',
                            minute: '2-digit',
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        })}
                    </p>
                </div>
            )}

            {selectedSeats.length > 0 ? (
                <div className="seats-pricing">
                    {Object.entries(getGroupedSeatsByType()).map(([seatType, seats]) => (
                        <div key={seatType} >
                            <p>
                                <strong className="seats-pricing">{seats.length} x {seatType}</strong>
                            </p>
                            <p className="seats-pricing">{seats.map(seat => seat.seatName).join(', ')}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No seats selected</p>
            )}

            <hr />

            <p className="total-price">
                Total Price:{' '}
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(getTotalPrice())}
            </p>

            <Button variant="success" block onClick={goToOrderFood}>
                CHỌN ĐỒ ĂN (2/4)
            </Button>

            
        </div>
    );
};

export default PricingDetails;
