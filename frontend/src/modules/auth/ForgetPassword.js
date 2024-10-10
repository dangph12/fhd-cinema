import React, { useState } from "react";
import BannerSecond from "../home/components/BannerSecond";
import VisaBanner from "../home/components/VisaBanner";

function ResetPasswordForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", usernameOrEmail);
  };

  return (
    <div>
        <BannerSecond/>
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
          <h2 style={{ color: "#64a70b" }}>Quên mật khẩu</h2>
          <p>
            Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn
            sẽ nhận được một liên kết tạo mật khẩu mới qua email.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Tên đăng nhập hoặc email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "4px",
                border: "5px solid white",
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
                border: "10px",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ĐẶT LẠI MẬT KHẨU
            </button>
          </form>
        </div>
      </div>
      <VisaBanner/>
    </div>
  );
}

export default ResetPasswordForm;
