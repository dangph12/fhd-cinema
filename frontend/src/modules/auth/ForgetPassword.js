// import React, { useState } from "react";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function ResetPasswordForm() {
//   const [usernameOrEmail, setUsernameOrEmail] = useState("");
//   const [message, setMessage] = useState("");  // Thêm trạng thái để lưu thông báo

//   const {accountId} = useParams();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Kiểm tra nếu email có định dạng hợp lệ
//       if (!usernameOrEmail || !usernameOrEmail.includes("@")) {
//         setMessage("Vui lòng nhập một địa chỉ email hợp lệ.");
//         return;
//       }

//       // Gửi yêu cầu đặt lại mật khẩu sử dụng phương thức GET với query parameters
//       const response = await axios.put(`http://localhost:8080/accounts/${accountId}`, {
//         params: {
//           subject: "Đặt lại mật khẩu tài khoản của bạn",
//           customerEmail: usernameOrEmail,  // Sử dụng email
//           template: "email-reset-password"
//         }
//       });

//       if (response.status === 200) {
//         setMessage("Liên kết đặt lại mật khẩu đã được gửi tới email của bạn.");
//       } else {
//         setMessage("Có lỗi xảy ra, vui lòng thử lại.");
//       }
//     } catch (error) {
//       console.error("Lỗi khi gửi yêu cầu đặt lại mật khẩu:", error);
//       setMessage("Không thể gửi yêu cầu. Vui lòng kiểm tra lại email.");
//     }
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: "50px",
//           marginBottom: "50px",
//         }}
//       >
//         <div
//           style={{
//             width: "700px",
//             textAlign: "center",
//             fontFamily: "Arial, sans-serif",
//           }}
//         >
//           <h2 style={{ color: "#64a70b" }}>Quên mật khẩu</h2>
//           <p>
//             Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn
//             sẽ nhận được một liên kết tạo mật khẩu mới qua email.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Tên đăng nhập hoặc email"
//               value={usernameOrEmail}
//               onChange={(e) => setUsernameOrEmail(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "20px",
//                 borderRadius: "4px",
//                 border: "5px solid white",
//                 fontSize: "16px",
//               }}
//               required
//             />
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 backgroundColor: "#64a70b",
//                 color: "white",
//                 border: "10px",
//                 borderRadius: "10px",
//                 fontSize: "16px",
//                 cursor: "pointer",
//               }}
//             >
//               ĐẶT LẠI MẬT KHẨU
//             </button>
//           </form>
//           {message && <p>{message}</p>}
//         </div>
//       </div>
//       <VisaBanner />
//     </div>
//   );
// }

// export default ResetPasswordForm;

// import React, { useState } from "react";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function ResetPasswordForm() {
//   const [username, setUsername] = useState("");  // Trạng thái cho tên đăng nhập
//   const [password, setPassword] = useState(""); // Trạng thái cho mật khẩu mới
//   const [message, setMessage] = useState("");    // Trạng thái cho thông báo

//   const { accountId } = useParams(); // Lấy accountId từ URL

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Kiểm tra nếu tên đăng nhập và mật khẩu không rỗng
//     if (!username || !password) {
//       setMessage("Vui lòng nhập tên đăng nhập và mật khẩu mới.");
//       return;
//     }

//     try {
//       // Gửi yêu cầu cập nhật mật khẩu thông qua phương thức PUT
//       const response = await axios.put(`http://localhost:8080/accounts/${accountId}`, {
//         accountName: username,
//         accountPassword: password,
//         accountType: "Customer"
//       });
//       console.log(accountId);

//       // Kiểm tra phản hồi
//       if (response.status === 200) {
//         setMessage("Mật khẩu đã được cập nhật thành công.");
//       } else {
//         setMessage("Có lỗi xảy ra, vui lòng thử lại.");
//       }
//     } catch (error) {
//       console.error("Lỗi khi gửi yêu cầu đặt lại mật khẩu:", error);
//       setMessage("Không thể gửi yêu cầu. Vui lòng kiểm tra lại thông tin.");
//     }
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: "50px",
//           marginBottom: "50px",
//         }}
//       >
//         <div
//           style={{
//             width: "700px",
//             textAlign: "center",
//             fontFamily: "Arial, sans-serif",
//           }}
//         >
//           <h2 style={{ color: "#64a70b" }}>Quên mật khẩu</h2>
//           <p>
//             Vui lòng nhập tên đăng nhập và mật khẩu mới để cập nhật tài khoản của bạn.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Tên đăng nhập"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "20px",
//                 borderRadius: "4px",
//                 border: "5px solid white",
//                 fontSize: "16px",
//               }}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Mật khẩu mới"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "20px",
//                 borderRadius: "4px",
//                 border: "5px solid white",
//                 fontSize: "16px",
//               }}
//               required
//             />
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 backgroundColor: "#64a70b",
//                 color: "white",
//                 border: "10px",
//                 borderRadius: "10px",
//                 fontSize: "16px",
//                 cursor: "pointer",
//               }}
//             >
//               ĐẶT LẠI MẬT KHẨU
//             </button>
//           </form>
//           {message && <p>{message}</p>}
//         </div>
//       </div>
//       <VisaBanner />
//     </div>
//   );
// }

// export default ResetPasswordForm;

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
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// const ResetPasswordForm = () => {
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("Đặt lại mật khẩu tài khoản của bạn");
//   const [template, setTemplate] = useState("email-reset-password");
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Kiểm tra nếu email có định dạng hợp lệ
//     if (!email || !email.includes("@")) {
//       setToastMessage("Vui lòng nhập một địa chỉ email hợp lệ.");
//       setShowToast(true);
//       return;
//     }

//     try {
//       // Gửi yêu cầu đặt lại mật khẩu qua API
//       const response = await axios.post(
//         "http://localhost:8080/email/reset-password",
//         {
//           customerEmail: email,
//         }
//       );

//       // Kiểm tra nếu phản hồi thành công
//       if (response.status === 200) {
//         setToastMessage(
//           "Liên kết đặt lại mật khẩu đã được gửi tới email của bạn."
//         );
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//       }
//     } catch (error) {
//       console.error("Lỗi khi gửi yêu cầu đặt lại mật khẩu:", error);
//       setToastMessage("Không thể gửi yêu cầu. Vui lòng kiểm tra lại email.");
//     }

//     // Hiển thị Toast với thông báo kết quả
//     setShowToast(true);
//   };

//   return (
//     <div>
//       <BannerSecond /> {/* Thêm banner giống giao diện chính */}
//       <ToastContainer position="top-end" className="p-3">
//         <Toast
//           bg="danger"
//           show={showToast}
//           onClose={() => setShowToast(false)}
//           delay={3000}
//           autohide
//         >
//           <Toast.Body>{toastMessage}</Toast.Body>
//         </Toast>
//       </ToastContainer>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: "50px",
//           marginBottom: "50px",
//         }}
//       >
//         <div
//           style={{
//             width: "700px",
//             textAlign: "center",
//             fontFamily: "Arial, sans-serif",
//           }}
//         >
//           <h2 style={{ color: "#64a70b" }}>Quên mật khẩu</h2>
//           <p>
//             Quên mật khẩu? Vui lòng nhập địa chỉ email của bạn. Bạn sẽ nhận được
//             một liên kết tạo mật khẩu mới qua email.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Địa chỉ email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "20px",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//                 fontSize: "16px",
//               }}
//               required
//             />
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 backgroundColor: "#64a70b",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "10px",
//                 fontSize: "16px",
//                 cursor: "pointer",
//               }}
//             >
//               ĐẶT LẠI MẬT KHẨU
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner />
//     </div>
//   );
// };

// export default ResetPasswordForm;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate để chuyển trang
import BannerSecond from "../home/components/BannerSecond";
import VisaBanner from "../home/components/VisaBanner";
import { Toast, ToastContainer } from "react-bootstrap";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Đặt lại mật khẩu tài khoản của bạn");
  const [template, setTemplate] = useState("email-reset-password");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();  // Sử dụng navigate để điều hướng

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra nếu email có định dạng hợp lệ
    if (!email || !email.includes("@")) {
      setToastMessage("Vui lòng nhập một địa chỉ email hợp lệ.");
      setShowToast(true);
      return;
    }

    try {
      // Gửi yêu cầu đặt lại mật khẩu qua API
      const response = await axios.post(
        "http://localhost:8080/email/reset-password",
        {
          customerEmail: email,
        }
      );

      // Kiểm tra nếu phản hồi thành công
      if (response.status === 200) {
        setToastMessage("Liên kết đặt lại mật khẩu đã được gửi tới email của bạn.");
        setShowToast(true);

        // Sau khi hiển thị thông báo thành công, điều hướng đến trang reset password
        setTimeout(() => {
          navigate("/reset");  // Điều hướng đến trang reset mật khẩu
        }, 2000); // Chờ 2 giây trước khi chuyển trang
      } else {
        setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
        setShowToast(true);
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đặt lại mật khẩu:", error);
      setToastMessage("Không thể gửi yêu cầu. Vui lòng kiểm tra lại email.");
      setShowToast(true);
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
          <h2 style={{ color: "#64a70b" }}>Quên mật khẩu</h2>
          <p>
            Quên mật khẩu? Vui lòng nhập địa chỉ email của bạn. Bạn sẽ nhận được
            một liên kết tạo mật khẩu mới qua email.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Địa chỉ email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            >
              ĐẶT LẠI MẬT KHẨU
            </button>
          </form>
        </div>
      </div>
      <VisaBanner />
    </div>
  );
};

export default ResetPasswordForm;
