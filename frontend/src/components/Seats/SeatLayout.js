// import React from 'react';
// import Seat from './Seat';

// const SeatLayout = ({ seatLayout, selectedSeats, onSeatClick }) => {
//     // Group seats by type
//     const normalSeats = seatLayout.filter(seat => seat.seatType.seatTypeName === 'Ghế thường');
//     let vipSeats = seatLayout.filter(seat => seat.seatType.seatTypeName === 'VIP');
//     const coupleSeats = seatLayout.filter(seat => seat.seatType.seatTypeName === 'Couple');

    
//     // Split the VIP seats into two groups (rows)
//     const vipFirstRow = vipSeats.slice(0, 35);
//     // const vipSecondRow = vipSeats.slice(10, 21); 
//     // const vipThirdRow = vipSeats.slice(21, 35); // First 6 seats for row 1
//     // const vipSecondRow = vipSeats.slice(17, 35); // Middle 4 seats (after moving two seats)

//     const normalFirstRow = normalSeats.slice(0, 8);
//     // const normalSecondRow = normalSeats.slice(8,20);


//     const coupleFirstRow = coupleSeats.slice(0, 8);
//     // const coupleSecondRow = coupleSeats.slice(8, 20);

//     return (
//         <div className="fixed-height-container">
//             {/* Regular Seats (Single row, no wrapping) */}
//             <div className="regular-seats">
//                 {normalFirstRow.map((seat, index) => (
//                     <Seat
//                         key={index}
//                         seat={seat}
//                         isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
//                         onClick={onSeatClick}
//                     />
//                 ))}
//             </div>

//             {/* <div className="regular-seats">
//                 {normalSecondRow.map((seat, index) => (
//                     <Seat
//                         key={index}
//                         seat={seat}
//                         isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
//                         onClick={onSeatClick}
//                     />
//                 ))}
//             </div> */}

//             {/* VIP Seats - First row */}
//             <div className="vip-seats">
//                 {vipFirstRow.map((seat, index) => (
//                     <Seat
//                         key={index}
//                         seat={seat}
//                         isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
//                         onClick={onSeatClick}
//                     />
//                 ))}
//             </div>

//             {/* VIP Seats - Second row */}
//             {/* <div className="vip-seats">
//                 {vipSecondRow.map((seat, index) => (
//                     <Seat
//                         key={index}
//                         seat={seat}
//                         isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
//                         onClick={onSeatClick}
//                     />
//                 ))}
//             </div> */}


//             {/* <div className="vip-seats">
//                 {vipThirdRow.map((seat, index) => (
//                     <Seat
//                         key={index}
//                         seat={seat}
//                         isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
//                         onClick={onSeatClick}
//                     />
//                 ))}
//             </div> */}

//             <div className="couple-seats">
//                 {coupleFirstRow.map((seat, index) => (
//                     <Seat
//                         key={index}
//                         seat={seat}
//                         isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
//                         onClick={onSeatClick}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SeatLayout;










import React from 'react';
import Seat from './Seat';

const SeatLayout = ({ seatLayout, selectedSeats, onSeatClick }) => {
    // Lọc và nhóm các ghế theo loại
    const normalSeats = seatLayout.filter(seat => seat.seatType.seatTypeName === 'Ghế thường');
    const vipSeats = seatLayout.filter(seat => seat.seatType.seatTypeName === 'VIP');
    const coupleSeats = seatLayout.filter(seat => seat.seatType.seatTypeName === 'Couple');

    // Chia ghế VIP và Couple thành các hàng (tùy theo số lượng ghế và cách bố trí)
    const vipFirstRow = vipSeats.slice(0, 8); 
    const vipSecondRow = vipSeats.slice(8, 16);
    // const vipThirdRow = vipSeats.slice(12, 18);

    // const coupleFirstRow = coupleSeats.slice(0, 4);
    // const coupleSecondRow = coupleSeats.slice(4, 8);

    // Chia ghế thường thành các hàng
    const normalFirstRow = normalSeats.slice(0, 8);
    const normalSecondRow = normalSeats.slice(8, 16);

    return (
        <div className="fixed-height-container">
            {/* Ghế thường - Hàng đầu tiên */}
            <div className="normal-seats">
                {normalFirstRow.map((seat, index) => (
                    <Seat
                        key={seat.seatId}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>

            {/* Ghế thường - Hàng thứ hai */}
            <div className="normal-seats">
                {normalSecondRow.map((seat, index) => (
                    <Seat
                        key={seat.seatId}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>

            {/* Ghế VIP - Hàng đầu tiên */}
            <div className="vip-seats">
                {vipFirstRow.map((seat, index) => (
                    <Seat
                        key={seat.seatId}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>

            {/* Ghế VIP - Hàng thứ hai */}
            <div className="vip-seats">
                {vipSecondRow.map((seat, index) => (
                    <Seat
                        key={seat.seatId}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>

            {/* Ghế VIP - Hàng thứ ba */}
            {/* <div className="vip-seats">
                {vipThirdRow.map((seat, index) => (
                    <Seat
                        key={seat.seatId}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div> */}

            {/* Ghế Couple - Hàng đầu tiên */}
            <div className="couple-seats">
                {coupleSeats.map((seat, index) => (
                    <Seat
                        key={seat.seatId}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div>

            {/* Ghế Couple - Hàng thứ hai */}
            {/* <div className="couple-seats">
                {coupleSeats.map((seat, index) => (
                    <Seat
                        key={seat.seatId}
                        seat={seat}
                        isSelected={selectedSeats.some(selected => selected.seatId === seat.seatId)}
                        onClick={onSeatClick}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default SeatLayout;
