import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const PaymentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { status } = location.state || {}; // Lấy trạng thái từ URL


  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        navigate('/ticket', { state: { ...location.state, paymentSuccess: true } });
      }, 3000); 
    } else {
      setTimeout(() => {
        navigate('/');
      }, 3000); 
    }
  }, [status, navigate, location.state]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {status === 'SUCCESS' ? (
        <h2 style={{ color: 'green' }}>Thanh toán thành công! Đang chuyển đến vé của bạn...</h2>
      ) : (
        <h2 style={{ color: 'red' }}>Thanh toán thất bại!</h2>
      )}
    </div>
  );
};

export default PaymentResult;
