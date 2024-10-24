// import React from 'react';
// import { Dropdown, DropdownButton } from 'react-bootstrap';

// const VoucherDropdown = ({ vouchers, onApplyVoucher, selectedVoucher }) => {
//   return (
//     <DropdownButton
//       id="voucher-dropdown"
//       title={selectedVoucher ? selectedVoucher.voucherName : "Chọn Voucher"}
//       variant="success"
//       className="mb-3"
//     >
//       {vouchers.map((voucher) => (
//         <Dropdown.Item
//           key={voucher.voucherId}
//           onClick={() => onApplyVoucher(voucher)}
//         >
//           {voucher.voucherName} - Giảm {voucher.voucherDiscountPercent}%
//         </Dropdown.Item>
//       ))}
//     </DropdownButton>
//   );
// };

// export default VoucherDropdown;
