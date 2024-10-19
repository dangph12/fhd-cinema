// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// function RequestResetPassword() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !email.includes("@")) {
//       toast.error("Vui lòng nhập một email hợp lệ.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // Gửi yêu cầu đặt lại mật khẩu đến API backend
//       const response = await axios.get("http://localhost:8080/email/reset-password", {
//         customerEmail: email,
//         subject: "Đặt lại mật khẩu tài khoản của bạn",
//         template: "email-reset-password"
//       });

//       if (response.status === 200) {
//         toast.success("Liên kết đặt lại mật khẩu đã được gửi đến email của bạn.");
//       } else {
//         toast.error("Đã xảy ra lỗi, vui lòng thử lại.");
//       }
//     } catch (error) {
//       toast.error("Có lỗi xảy ra khi gửi yêu cầu đặt lại mật khẩu.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Quên mật khẩu</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Nhập email của bạn"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Đang gửi..." : "Đặt lại mật khẩu"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default RequestResetPassword;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function RequestResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Vui lòng nhập một email hợp lệ.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get("http://localhost:8080/email/reset-password", {
          customerEmail: email,
          subject: "Đặt lại mật khẩu tài khoản của bạn",
          template: "email-reset-password"
      });

      if (response.status === 200) {
        toast.success("Liên kết đặt lại mật khẩu đã được gửi đến email của bạn.");
      } else {
        toast.error("Đã xảy ra lỗi, vui lòng thử lại.");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra khi gửi yêu cầu đặt lại mật khẩu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Quên mật khẩu</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Đang gửi..." : "Đặt lại mật khẩu"}
        </button>
      </form>
    </div>
  );
}

export default RequestResetPassword;
