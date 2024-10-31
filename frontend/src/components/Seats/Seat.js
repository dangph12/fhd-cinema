import React from 'react';
import seatNormal from '../../assets/seats/ghe-thuong.png';
import seatVIP from '../../assets/seats/ghe-vip.png';
import seatSelected from '../../assets/seats/ghe-da-chon.png';
import seatCouple from '../../assets/seats/ghe-doi.png';
import seatSold from '../../assets/seats/ghe-da-ban.png';
import seatCoupleSelected from '../../assets/seats/ghe-doi-da-chon.png';

const Seat = ({ seat, isSelected, onClick }) => {
    const getSeatImage = () => {
        if (isSelected) {
            return seat.seatType.seatTypeName === 'Couple' ? seatCoupleSelected : seatSelected;
        } else if (seat.booked) {
            return seatSold;
        } else {
            return seat.seatType.seatTypeName === 'Ghế thường'
                ? seatNormal
                : seat.seatType.seatTypeName === 'VIP'
                ? seatVIP
                : seatCouple;
        }
    };

    return (
        <img
            src={getSeatImage()}
            alt={seat.seatType.seatTypeName}
            className="seat img-fluid"
            onClick={() => onClick(seat)}
        />
    );
};

export default Seat;
