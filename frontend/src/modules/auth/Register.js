import React from "react";

function Register() {
  const buttonStyle = {
    borderRadius: "15px", // rounded corners
    padding: "10px 20px", // padding for the button
    color: "#8bc34a", // green text
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent", // no background
    display: "inline-block", // button behavior
  };

  return (
    <div>
      <h2 className="">
        <button style={buttonStyle}>ĐĂNG NHẬP TÀI KHOẢN</button>
      </h2>
      <form>
        <div>Họ *</div>
        <input type="text" required />
        <div>Tên đệm và tên *</div>
        <input type="text" required />
        <div>Giới tính *</div>
        <div className="login-page-gender-options">
          <input type="radio" id="male" name="gender" value="Nam" />
          <label htmlFor="male">Nam</label>
          <input type="radio" id="female" name="gender" value="Nữ" />
          <label htmlFor="female">Nữ</label>
          <input type="radio" id="other" name="gender" value="Khác" />
          <label htmlFor="other">Khác</label>
        </div>
        <div>Email *</div>
        <input type="email" required />
        <div>Mật khẩu *</div>
        <input type="password" required />
        <div>Nhập lại mật khẩu *</div>
        <input type="password" required />
        <div>Số điện thoại *</div>
        <input type="tel" required />
        <div>Ngày sinh *</div>
        <input type="date" required />
        <div>Tỉnh/Thành phố *</div>
        <select required>
          <option value="">Chọn Tỉnh/Thành phố</option>
          {/* Add options here */}
        </select>
        <label>
          <input type="checkbox" required /> Tôi đã đọc, hiểu và đồng ý với các
          điều khoản
        </label>
        <button type="submit">ĐĂNG KÝ</button>
      </form>
    </div>
  );
}

export default Register;
