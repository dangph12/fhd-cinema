import React, { useState } from "react";

function ResetPasswordForm() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the password reset logic here
    console.log("Submitted email or username:", emailOrUsername);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h1>Quên mật khẩu</h1>
      <p>
        Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn sẽ
        nhận được một liên kết tạo mật khẩu mới qua email.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputContainer}>
          <label htmlFor="emailOrUsername">Tên đăng nhập hoặc email</label>
          <input
            type="text"
            id="emailOrUsername"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          ĐẶT LẠI MẬT KHẨU
        </button>
      </form>
      {submitted && <p>Liên kết đặt lại mật khẩu đã được gửi!</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ResetPasswordForm;
