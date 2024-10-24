import React from 'react';
import Seat from './Seat';

const SeatLayout = ({ seatLayout, selectedSeats, onSeatClick }) => {
    // Group seats by type
    const normalSeats = seatLayout.filter(seat => seat.seatType.seatTypeName === 'Ghế thường');
    let vipSeats = seatLayout.filter(seat => seat.seatType.seatTypeName === 'VIP');
    const coupleSeats = seatLayout.filter(seat => seat.seatType.seatTypeName === 'Couple');

    
    // Split the VIP seats into two groups (rows)
    const vipFirstRow = vipSeats.slice(0, 10);
    const vipSecondRow = vipSeats.slice(10, 21); 
    // const vipThirdRow = vipSeats.slice(21, 35); // First 6 seats for row 1
    // const vipSecondRow = vipSeats.slice(17, 35); // Middle 4 seats (after moving two seats)

    const normalFirstRow = normalSeats.slice(0, 8);
    const normalSecondRow = normalSeats.slice(8,20);


    const coupleFirstRow = coupleSeats.slice(0, 8);
    const coupleSecondRow = coupleSeats.slice(8, 20);

    return (
        <div className="fixed-height-container">
            {/* Regular Seats (Single row, no wrapping) */}
            <div className="regular-seats">
                {normalFirstRow.map((seat, index) => (
                    <Seat
                        key={index}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>

            <div className="regular-seats">
                {normalSecondRow.map((seat, index) => (
                    <Seat
                        key={index}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>

            {/* VIP Seats - First row */}
            <div className="vip-seats">
                {vipFirstRow.map((seat, index) => (
                    <Seat
                        key={index}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>

            {/* VIP Seats - Second row */}
            <div className="vip-seats">
                {vipSecondRow.map((seat, index) => (
                    <Seat
                        key={index}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>


            {/* <div className="vip-seats">
                {vipThirdRow.map((seat, index) => (
                    <Seat
                        key={index}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div> */}

            <div className="couple-seats">
                {coupleFirstRow.map((seat, index) => (
                    <Seat
                        key={index}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default SeatLayout;