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


import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [accountName, setAccountName] = useState("");
  const [accountPassword, setaccountPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // axios.get("http://localhost:8080/accounts").then((data) => {
    //   console.log("check", data);
    // });
  }, []);

  const handleRegister = () => {
    toast("login confirm !!!");
    let useData = { accountName, accountPassword };
    console.log("sss", useData);
  };

  return (
    <div>
      <h2 className="">
        <button style={buttonStyle}>ĐĂNG Kí TÀI KHOẢN</button>
      </h2>
      <div>Tên đệm và tên *</div>
      <input
        type="text"
        required
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
      />
      <div>Mật khẩu *</div>
      <input
        type="password"
        required
        value={accountPassword}
        onChange={(e) => setaccountPassword(e.target.value)}
      />
      <div>Nhập lại mật khẩu *</div>
      <input
        type="password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {/* <label>
          <input type="checkbox" required /> Tôi đã đọc, hiểu và đồng ý với các
          điều khoản
        </label> */}
      <button type="submit" onClick={() => handleRegister()}>
        ĐĂNG KÝ
      </button>
    </div>
  );
}

export default Register;
