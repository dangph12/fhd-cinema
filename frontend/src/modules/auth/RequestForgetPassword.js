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
//       const response = await axios.get("http://localhost:8080/email/reset-password", {
//           customerEmail: email,
//           subject: "Đặt lại mật khẩu tài khoản của bạn",
//           template: "email-reset-password"
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

// import React, { useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// function ResetForgetPassword() {
//   const { userName } = useParams(); // Lấy token từ URL nếu được truyền qua email
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       toast.error("Mật khẩu không khớp.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.put(`http://localhost:8080/customers/update-password`, {
//         newPassword,
//       });

//       if (response.status === 200) {
//         toast.success("Mật khẩu đã được cập nhật thành công.");
//       } else {
//         toast.error("Có lỗi xảy ra, vui lòng thử lại.");
//       }
//     } catch (error) {
//       toast.error("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Đặt lại mật khẩu cho {userName}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           placeholder="Nhập mật khẩu mới"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Xác nhận mật khẩu"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ResetForgetPassword;


import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BannerSecond from "../home/components/BannerSecond";
import VisaBanner from "../home/components/VisaBanner";
import { Toast, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";

function ResetForgetPassword() {
  const { userName } = useParams(); // Lấy username từ URL nếu được truyền qua email
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setToastMessage("Mật khẩu không khớp.");
      setShowToast(true);
      return;
    }

    setLoading(true);

    try {
      // Gửi yêu cầu cập nhật mật khẩu mới đến API backend
      const response = await axios.put(`http://localhost:8080/customers/update-password`, {
        newPassword,
        userName, // Truyền username qua request body nếu cần
      });

      if (response.status === 200) {
        setToastMessage("Mật khẩu đã được cập nhật thành công.");
        setShowToast(true);
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
      <BannerSecond /> {/* Thêm banner để đồng nhất giao diện */}
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
          <h2 style={{ color: "#64a70b" }}>Đặt lại mật khẩu cho {userName}</h2>
          <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Nhập mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
      <VisaBanner /> {/* Thêm banner quảng cáo Visa */}
    </div>
  );
}

export default ResetForgetPassword;
