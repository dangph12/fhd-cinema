// import React, { useState } from 'react';

// const PaymentPage = () => {
//   const [orderTotal, setOrderTotal] = useState(1000000); // Ví dụ số tiền
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const vnpayUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'; // URL VNPay Sandbox
//   const vnp_TmnCode = 'VGGUU7XQ'; // Mã TmnCode của bạn
//   const vnp_HashSecret = 'MEXNA6N574KVFUN200KDGLOXKSJKL2XX'; // Mã bí mật của bạn (không an toàn khi để ở frontend)
//   const vnp_ReturnUrl = 'http://localhost:8080/vnpay-payment'; // URL trả về sau thanh toán

//   const handlePayment = () => {
//     setIsSubmitting(true); // Đang xử lý

//     const txnRef = Math.floor(Math.random() * 1000000).toString(); // Mã giao dịch
//     const amount = orderTotal * 100; // Đơn vị tính của VNPay là nhỏ nhất (VND x 100)

//     // Tạo URL với các tham số cần thiết
//     const params = {
//       vnp_Version: '2.1.0',
//       vnp_Command: 'pay',
//       vnp_TmnCode,
//       vnp_Amount: amount,
//       vnp_CurrCode: 'VND',
//       vnp_TxnRef: txnRef,
//       vnp_OrderInfo: 'Thanh toan phim',
//       vnp_OrderType: 'billpayment',
//       vnp_Locale: 'vn',
//       vnp_ReturnUrl,
//       vnp_IpAddr: '127.0.0.1', // Bạn có thể lấy IP thực tế của user nếu cần
//       vnp_CreateDate: new Date().toISOString().slice(0, 19).replace(/[-T:]/g, '') // Định dạng thời gian theo chuẩn của VNPay
//     };

//     // Sắp xếp các tham số theo thứ tự ABC
//     const sortedParams = new URLSearchParams(params);
//     const hashData = Array.from(sortedParams).map(([key, value]) => `${key}=${value}`).join('&');

//     // Hash tất cả các trường với secretKey (nếu frontend làm thì sẽ lộ key bí mật)
//     const secureHash = CryptoJS.HmacSHA512(hashData, vnp_HashSecret).toString(); // Sử dụng CryptoJS để tạo chữ ký số

//     // Thêm Secure Hash vào URL
//     sortedParams.append('vnp_SecureHash', secureHash);

//     // Chuyển hướng người dùng tới trang thanh toán VNPay
//     window.location.href = `${vnpayUrl}?${sortedParams.toString()}`;
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>VNPay Sandbox Payment</h1>
//       <div>
//         <label>Order Total (VND):</label>
//         <input
//           type="number"
//           value={orderTotal}
//           onChange={(e) => setOrderTotal(e.target.value)}
//           style={{ marginLeft: '10px', padding: '5px' }}
//         />
//       </div>
//       <button
//         onClick={handlePayment}
//         disabled={isSubmitting}
//         style={{
//           marginTop: '20px',
//           padding: '10px 20px',
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           border: 'none',
//           cursor: 'pointer'
//         }}
//       >
//         {isSubmitting ? 'Processing...' : 'Pay with VNPay'}
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;
