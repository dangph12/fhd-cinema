// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Bill = () => {
//   const location = useLocation(); // Lấy thông tin từ URL sau thanh toán VNPay
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Lấy các tham số từ URL sau khi thanh toán
//     const searchParams = new URLSearchParams(location.search);
//     const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
//     const vnp_Amount = searchParams.get('vnp_Amount');
//     const vnp_OrderInfo = searchParams.get('vnp_OrderInfo');
//     const vnp_TransactionNo = searchParams.get('vnp_TransactionNo');
//     const vnp_BankTranNo = searchParams.get('vnp_BankTranNo');
//     const vnp_PayDate = searchParams.get('vnp_PayDate');

//     // Nếu thanh toán thành công (mã phản hồi là 00)
//     if (vnp_ResponseCode === '00') {
//       console.log('Thanh toán thành công');
//     } else {
//       // Nếu thanh toán thất bại
//       console.log('Thanh toán thất bại');
//     }
//   }, [location]);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Trạng thái thanh toán</h2>
//       <div className="mt-4">
//         {/* Thông tin trạng thái thanh toán */}
//         <p><strong>Mã giao dịch:</strong> {new URLSearchParams(location.search).get('vnp_TransactionNo')}</p>
//         <p><strong>Thông tin đơn hàng:</strong> {new URLSearchParams(location.search).get('vnp_OrderInfo')}</p>
//         <p><strong>Mã giao dịch ngân hàng:</strong> {new URLSearchParams(location.search).get('vnp_BankTranNo')}</p>
//         <p><strong>Số tiền:</strong> {new URLSearchParams(location.search).get('vnp_Amount')}</p>
//         <p><strong>Ngày thanh toán:</strong> {new URLSearchParams(location.search).get('vnp_PayDate')}</p>
        
//         {/* Kiểm tra trạng thái thanh toán */}
//         {new URLSearchParams(location.search).get('vnp_ResponseCode') === '00' ? (
//           <div className="alert alert-success" role="alert">
//             Thanh toán thành công!
//           </div>
//         ) : (
//           <div className="alert alert-danger" role="alert">
//             Thanh toán thất bại!
//           </div>
//         )}

//         {/* Nút quay lại */}
//         <button className="btn btn-primary" onClick={() => navigate('/')}>Quay lại trang chủ</button>
//       </div>
//     </div>
//   );
// };

// export default Bill;
