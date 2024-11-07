// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Register() {
//   const buttonStyle = {
//     borderRadius: "15px", // rounded corners
//     padding: "10px 20px", // padding for the button
//     color: "#8bc34a", // green text
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent", // no background
//     display: "inline-block", // button behavior
//   };

//   const [accountName, setAccountName] = useState("");
//   const [accountPassword, setaccountPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   useEffect(() => {
//     // axios.get("http://localhost:8080/accounts").then((data) => {
//     //   console.log("check", data);
//     // });
//   }, []);

//   const handleRegister = (event) => {
//     // Ngăn hành vi mặc định của form (tải lại trang)
//     event.preventDefault();

//     // Kiểm tra mật khẩu và mật khẩu xác nhận có khớp không
//     if (accountPassword !== confirmPassword) {
//       alert("Mật khẩu không khớp. Vui lòng kiểm tra lại.");
//       return;
//     }

//     // Xử lý đăng ký (gửi dữ liệu đến API)
//     let userData = { accountName, accountPassword };
//     console.log(userData);

//     // Thực hiện gọi API đăng ký (nếu cần)
//     // axios.post("http://localhost:8080/register", userData)
//     //   .then(response => console.log(response))
//     //   .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2 className="">
//         <button style={buttonStyle}>ĐĂNG Kí TÀI KHOẢN</button>
//       </h2>
//       <form onSubmit={handleRegister}>
//         <div>Tên đệm và tên *</div>
//         <input
//           type="text"
//           required
//           value={accountName}
//           onChange={(e) => setAccountName(e.target.value)}
//         />
//         <div>Mật khẩu *</div>
//         <input
//           type="password"
//           required
//           value={accountPassword}
//           onChange={(e) => setaccountPassword(e.target.value)}
//         />
//         <div>Nhập lại mật khẩu *</div>
//         <input
//           type="password"
//           required
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button type="submit">ĐĂNG KÝ</button>
//       </form>
//     </div>
//   );
// }

// export default Register;

// import axios from "axios";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Register() {
//   const buttonStyle = {
//     borderRadius: "15px", 
//     padding: "10px 20px",
//     color: "#8bc34a", // green text
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent", // no background
//     display: "inline-block", // button behavior
//   };

//   const [accountName, setAccountName] = useState("");
//   const [accountPassword, setaccountPassword] = useState("");
//   const [accountType, setAccountType] = useState("Customer");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleRegister = async () => {
//     if (accountPassword !== confirmPassword) {
//       toast.error("Mật khẩu nhập lại không khớp!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8080/accounts", {
//         accountName,
//         accountPassword,
//         accountType,
//       });

//       if (response.status === 201) {
//         toast.success("Đăng ký thành công!");
//       } else {
//         toast.error("Đăng ký thất bại!");
//       }
//     } catch (error) {
//       toast.error("Lỗi hệ thống. Vui lòng thử lại sau.");
//     }
//   };

//   return (
//     <div>
//       <h2 className="">
//         <button style={buttonStyle}>ĐĂNG KÍ TÀI KHOẢN</button>
//       </h2>
//       <div>Tên đệm và tên *</div>
//       <input
//         type="text"
//         required
//         value={accountName}
//         onChange={(e) => setAccountName(e.target.value)}
//       />
//       <div>Mật khẩu *</div>
//       <input
//         type="password"
//         required
//         value={accountPassword}
//         onChange={(e) => setaccountPassword(e.target.value)}
//       />
//       <div>Nhập lại mật khẩu *</div>
//       <input
//         type="password"
//         required
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//       <button type="submit" onClick={handleRegister}>
//         ĐĂNG KÝ
//       </button>
//     </div>
//   );
// }

// export default Register;

// import axios from "axios";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Register() {
//   const buttonStyle = {
//     borderRadius: "15px",
//     padding: "10px 20px",
//     color: "#8bc34a", 
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent", 
//     display: "inline-block", 
//   };

//   const [accountName, setAccountName] = useState("");
//   const [accountPassword, setAccountPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [accountType] = useState("Customer");
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");

//   const handleRegister = async () => {
//     if (accountPassword !== confirmPassword) {
//       toast.error("Mật khẩu nhập lại không khớp!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8080/accounts", {
//         accountName,
//         accountPassword,
//         accountType,
//         customerName,
//         customerEmail,
//         customerPhone,
//       });

//       if (response.status === 200) {
//         toast.success("Đăng ký thành công!");
//       } else {
//         toast.error("Đăng ký thất bại!");
//       }
//     } catch (error) {
//       toast.error("Lỗi hệ thống. Vui lòng thử lại sau.");
//     }
//   };

//   return (
//     <div>
//       <h2 className="">
//         <button style={buttonStyle}>ĐĂNG KÝ TÀI KHOẢN</button>
//       </h2>
//       <div>Tên tài khoản *</div>
//       <input
//         type="text"
//         required
//         value={accountName}
//         placeholder="Tên Tài Khoản"
//         onChange={(e) => setAccountName(e.target.value)}
//       />
//       <div style={{marginTop: "10px"}}>Mật khẩu *</div>
//       <input
//         type="password"
//         required
//         value={accountPassword}
//         placeholder="Mật Khẩu"
//         onChange={(e) => setAccountPassword(e.target.value)}
//       />
//       <div style={{marginTop: "10px"}}>Nhập lại mật khẩu *</div>
//       <input
//         type="password"
//         required
//         value={confirmPassword}
//         placeholder="Nhập Lại Mật Khẩu"
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />

//       <div style={{marginTop: "10px"}}>Tên khách hàng *</div>
//       <input
//         type="text"
//         required
//         value={customerName}
//         placeholder="Tên Khách Hàng"
//         onChange={(e) => setCustomerName(e.target.value)}
//       />
//       <div style={{marginTop: "10px"}}>Email khách hàng *</div>
//       <input
//         type="email"
//         required
//         value={customerEmail}
//         placeholder="Email Cá Nhân"
//         onChange={(e) => setCustomerEmail(e.target.value)}
//       />
//       <div style={{marginTop: "10px"}}>Số điện thoại khách hàng *</div>
//       <input
//         type="text"
//         required
//         value={customerPhone}
//         placeholder="Số Điện Thoại"
//         onChange={(e) => setCustomerPhone(e.target.value)}
//       />

//       <button type="submit" onClick={handleRegister}>
//         ĐĂNG KÝ
//       </button>
//     </div>
//   );
// }

// export default Register;


import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const buttonStyle = {
    borderRadius: "15px",
    padding: "10px 20px",
    color: "#8bc34a", 
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent", 
    display: "inline-block", 
  };

  const [accountName, setAccountName] = useState("");
  const [accountPassword, setAccountPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType] = useState("Customer");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  // Regex kiểm tra mật khẩu
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validatePassword = (password) => {
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    if (!validatePassword(accountPassword)) {
      toast.error(
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt!"
      );
      return;
    }

    if (accountPassword !== confirmPassword) {
      toast.error("Mật khẩu nhập lại không khớp!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/accounts", {
        accountName,
        accountPassword,
        accountType,
        customerName,
        customerEmail,
        customerPhone,
      });

      if (response.status === 201) {
        toast.success("Đăng ký thành công!");
      } else {
        toast.error("Đăng ký thất bại!");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        // Hiển thị thông báo lỗi từ API response
        toast.error(error.response.data.message);
      } else {
        // Hiển thị lỗi hệ thống nếu không có thông tin từ API
        toast.error("Lỗi hệ thống. Vui lòng thử lại sau.");
      }
    }
  };

  return (
    <div>
      <h2 className="">
        <button style={buttonStyle}>ĐĂNG KÝ TÀI KHOẢN</button>
      </h2>
      <div>Tên tài khoản *</div>
      <input
        type="text"
        required
        value={accountName}
        placeholder="Tên Tài Khoản"
        onChange={(e) => setAccountName(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>Mật khẩu *</div>
      <input
        type="password"
        required
        value={accountPassword}
        placeholder="Mật Khẩu"
        onChange={(e) => setAccountPassword(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>Nhập lại mật khẩu *</div>
      <input
        type="password"
        required
        value={confirmPassword}
        placeholder="Nhập Lại Mật Khẩu"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>Tên khách hàng *</div>
      <input
        type="text"
        required
        value={customerName}
        placeholder="Tên Khách Hàng"
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>Email khách hàng *</div>
      <input
        type="email"
        required
        value={customerEmail}
        placeholder="Email Cá Nhân"
        onChange={(e) => setCustomerEmail(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>Số điện thoại khách hàng *</div>
      <input
        type="text"
        required
        value={customerPhone}
        placeholder="Số Điện Thoại"
        onChange={(e) => setCustomerPhone(e.target.value)}
      />

      <button type="submit" onClick={handleRegister}>
        ĐĂNG KÝ
      </button>
    </div>
  );
}

export default Register;
