import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";  // Import useLocation
import BannerSecond from "../home/components/BannerSecond";
import VisaBanner from "../home/components/VisaBanner";
import { Toast, ToastContainer } from "react-bootstrap";

function ResetForgetPassword() {
  const location = useLocation(); // Sử dụng useLocation để lấy thông tin URL hiện tại
  const [accountPassword, setAccountPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [accountEmail, setAccountEmail] = useState(""); 
  const [accountName, setAccountName] = useState(""); 
  const [accountType, setAccountType] = useState("Customer");
  const [customerEmail, setCustomerEmail] = useState("");  // Added customerEmail state
  const [customerPhone, setCustomerPhone] = useState("");  // Added customerPhone state

  // Lấy accountId từ query string
  const queryParams = new URLSearchParams(location.search);
  const accountId = queryParams.get('accountId');  // Đổi từ customerId thành accountId

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/accounts/${accountId}`);
        if (response.status === 200) {
          const accountData = response.data.data;  // Truy cập trực tiếp vào data

          if (accountData && accountData.accountId === accountId) {
            setAccountEmail(accountData.accountEmail); 
            setAccountName(accountData.accountName); 
            setCustomerEmail(accountData.customerEmail);  // Populate customerEmail
            setCustomerPhone(accountData.customerPhone);  // Populate customerPhone
          } else {
            setAccountEmail("Email không xác định");
            setAccountName("Người dùng không xác định");
          }
        } else {
          setAccountEmail("Email không xác định");
          setAccountName("Người dùng không xác định");
        }
      } catch (error) {
        console.error("Lỗi khi tải thông tin tài khoản:", error);
        setAccountEmail("Email không xác định");
        setAccountName("Người dùng không xác định");
      }
    };

    if (accountId) { // Chỉ gọi API nếu có accountId
      fetchAccountDetails();
    }
  }, [accountId]);

  // Handle the password reset
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (accountPassword !== confirmPassword) {
      setToastMessage("Mật khẩu không khớp.");
      setShowToast(true);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(`http://localhost:8080/accounts/${accountId}`, {
        accountEmail: accountEmail,
        accountPassword: accountPassword,
        accountName: accountName,
        accountType: accountType,
        customerEmail: customerEmail,  
        customerPhone: customerPhone   
      });

      if (response.status === 200) {
        setToastMessage("Mật khẩu đã được cập nhật thành công.");
        setShowToast(true);
        navigate("/")
      } else {
        setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
        setShowToast(true);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật mật khẩu:", error);
      setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <BannerSecond />
      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg="danger"
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            width: "700px",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h2 style={{ color: "#64a70b" }}>
            Đặt lại mật khẩu cho {accountName || "tài khoản"} ({customerEmail})
          </h2>
          <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Nhập mật khẩu mới"
              value={accountPassword}
              onChange={(e) => setAccountPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
              required
            />
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
              required
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#64a70b",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
              disabled={loading}
            >
              {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
            </button>
          </form>
        </div>
      </div>
      <VisaBanner /> 
    </div>
  );
}

export default ResetForgetPassword;
