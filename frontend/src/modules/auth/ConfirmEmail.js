import React from "react";
import BannerSecond from "../home/components/BannerSecond";
import VisaBanner from "../home/components/VisaBanner";

function ConfirmEmail() {
  const containerStyle = {
    padding: "20px",
    borderRadius: "8px",
    width: "500px",
    textAlign: "left",
    fontFamily: "Arial, sans-serif",
    boxShadow: ""
  };

  const successMessageStyle = {
    color: "#4CAF50",
    fontSize: "16px",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginRight: "10px",
  };

  const successTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  const messageTextStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
  };

  const bodyStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <BannerSecond />
      <div style={bodyStyle}>
        <div style={containerStyle}>
          <p style={successMessageStyle}>
            <span style={iconStyle}>✔</span>
            <span style={successTextStyle}>
              Email khôi phục mật khẩu đã được gửi.
            </span>
          </p>
          <p style={messageTextStyle}>
            Một thư email khôi phục mật khẩu đã được gửi cho địa chỉ email tài
            khoản của bạn, nhưng có thể sẽ mất vài phút để hiển thị trong Inbox
            của hộp thư. Vui lòng đợi ít nhất 10 phút trước khi gửi một yêu cầu
            khôi phục mật khẩu khác.
          </p>
        </div>
      </div>
      <VisaBanner/>
    </div>
  );
}

export default ConfirmEmail;
