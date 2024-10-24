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


// import React, { useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";
// import { toast } from "react-toastify";

// function ResetForgetPassword() {
//   const { userName } = useParams(); // Lấy username từ URL nếu được truyền qua email
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       // Gửi yêu cầu cập nhật mật khẩu mới đến API backend
//       const response = await axios.put(`http://localhost:8080/customers/update-password`, {
//         newPassword,
//         userName, // Truyền username qua request body nếu cần
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond /> {/* Thêm banner để đồng nhất giao diện */}
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
//           <h2 style={{ color: "#64a70b" }}>Đặt lại mật khẩu cho {userName}</h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> {/* Thêm banner quảng cáo Visa */}
//     </div>
//   );
// }

// export default ResetForgetPassword;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";
// import { toast } from "react-toastify";

// function ResetForgetPassword() {
//   const { customerName } = useParams(); // Lấy username từ URL nếu được truyền qua email
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [fullName, setFullName] = useState(""); // State to store full name of the user

//   // Fetch user's full name based on userName
//   useEffect(() => {
//     const fetchUserName = async () => {
//       try {
//         // Replace with the correct API endpoint to get user details by userName
//         const response = await axios.get(`http://localhost:8080/customers/${customerName}`);

//         if (response.status === 200) {
//           setFullName(response.data.fullName); // Assuming the response contains the full name
//         } else {
//           setFullName("Unknown User");
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         setFullName("Unknown User");
//       }
//     };

//     fetchUserName();
//   }, [customerName]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       // Gửi yêu cầu cập nhật mật khẩu mới đến API backend
//       const response = await axios.put(`http://localhost:8080/customers/update-password`, {
//         newPassword,
//         customerName, // Truyền username qua request body nếu cần
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond /> {/* Thêm banner để đồng nhất giao diện */}
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
//           {/* Display the full name of the user */}
//           <h2 style={{ color: "#64a70b" }}>Đặt lại mật khẩu cho {fullName || customerName}</h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> {/* Thêm banner quảng cáo Visa */}
//     </div>
//   );
// }

// export default ResetForgetPassword;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// function ResetForgetPassword() {
//   const { customerId } = useParams(); // Lấy customerId từ URL nếu được truyền qua email
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [fullName, setFullName] = useState(""); // State to store the full name of the user

//   // Fetch user's full name based on customerId
//   useEffect(() => {
//     const fetchCustomerName = async () => {
//       try {
//         // Replace with the correct API endpoint to get user details by customerId
//         const response = await axios.get(`http://localhost:8080/customers/${customerId}`);

//         if (response.status === 200) {
//           setFullName(response.data.fullName); // Assuming the response contains the full name
//         } else {
//           setFullName("Unknown User");
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         setFullName("Unknown User");
//       }
//     };

//     fetchCustomerName();
//   }, [customerId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       // Gửi yêu cầu cập nhật mật khẩu mới đến API backend
//       const response = await axios.put(`http://localhost:8080/customers/update-password`, {
//         newPassword,
//         customerId, // Truyền customerId qua request body nếu cần
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond /> {/* Thêm banner để đồng nhất giao diện */}
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
//           {/* Display the full name of the user */}
//           <h2 style={{ color: "#64a70b" }}>
//             Đặt lại mật khẩu cho {fullName || "khách hàng"}
//           </h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> {/* Thêm banner quảng cáo Visa */}
//     </div>
//   );
// }

// export default ResetForgetPassword;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// function ResetForgetPassword() {
//   const { customerId } = useParams(); // Lấy customerId từ URL nếu được truyền qua email
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [customerEmail, setCustomerEmail] = useState(""); // Store customer email

//   // Fetch user's full details based on customerId, including the email
//   useEffect(() => {
//     const fetchCustomerDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/customers/${customerId}`);

//         if (response.status === 200) {
//           setCustomerEmail(response.data.customerEmail); // Set the email
//         } else {
//           setCustomerEmail("Unknown User");
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         setCustomerEmail("Unknown User");
//       }
//     };

//     fetchCustomerDetails();
//   }, [customerId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       // Gửi yêu cầu cập nhật mật khẩu mới đến API backend
//       const response = await axios.put(`http://localhost:8080/customers/update-password`, {
//         customerEmail, // Use the email we fetched earlier
//         newPassword,
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond /> {/* Thêm banner để đồng nhất giao diện */}
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
//           {/* Display the customer's email */}
//           <h2 style={{ color: "#64a70b" }}>
//             Đặt lại mật khẩu cho {customerEmail || "khách hàng"}
//           </h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> {/* Thêm banner quảng cáo Visa */}
//     </div>
//   );
// }

// export default ResetForgetPassword;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// function ResetForgetPassword() {
//   const { customerId } = useParams(); // Lấy customerId từ URL
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [customerEmail, setCustomerEmail] = useState(""); // Store customer email
//   const [customerName, setCustomerName] = useState(""); // Store customer name

//   // Fetch customer's email and name based on customerId
//   useEffect(() => {
//     const fetchCustomerDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/customers`);

//         if (response.status === 200) {
//           const customerData = response.data.data;
//           setCustomerEmail(customerData.customerEmail); // Set the customer's email
//           setCustomerName(customerData.customerName); // Set the customer's name
//         } else {
//           setCustomerEmail("Unknown Email");
//           setCustomerName("Unknown User");
//         }
//       } catch (error) {
//         console.error("Error fetching customer details:", error);
//         setCustomerEmail("Unknown Email");
//         setCustomerName("Unknown User");
//       }
//     };

//     fetchCustomerDetails();
//   }, [customerId]);

//   // Handle the password reset
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       // Send the new password and customerEmail to the API
//       const response = await axios.put(`http://localhost:8080/customers/update-password`, {
//         customerEmail: customerEmail,  // Key must match what the backend expects
//         newPassword: newPassword,      // Same here
//       });
      

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond /> {/* Thêm banner để đồng nhất giao diện */}
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
//           {/* Display the customer's name and email */}
//           <h2 style={{ color: "#64a70b" }}>
//             Đặt lại mật khẩu cho {customerName || "khách hàng"} ({customerEmail})
//           </h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> {/* Thêm banner quảng cáo Visa */}
//     </div>
//   );
// }

// export default ResetForgetPassword;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// function ResetForgetPassword() {
//   const { customerId } = useParams(); // Lấy customerId từ URL
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [customerEmail, setCustomerEmail] = useState(""); // Store customer email
//   const [customerName, setCustomerName] = useState(""); // Store customer name

//   // Fetch customer's email and name based on customerId
//   useEffect(() => {
//     const fetchCustomerDetails = async () => {
//       try {
//         // Fetch all customers
//         const response = await axios.get(`http://localhost:8080/customers`);

//         if (response.status === 200) {
//           const customerData = response.data.data;

//           // Find the customer with the matching customerId
//           const foundCustomer = customerData.find((customer) => customer.customerId === customerId);

//           if (foundCustomer) {
//             setCustomerEmail(foundCustomer.customerEmail); // Set the customer's email
//             setCustomerName(foundCustomer.customerName); // Set the customer's name
//           } else {
//             setCustomerEmail("Unknown Email");
//             setCustomerName("Unknown User");
//           }
//         } else {
//           setCustomerEmail("Unknown Email");
//           setCustomerName("Unknown User");
//         }
//       } catch (error) {
//         console.error("Error fetching customer details:", error);
//         setCustomerEmail("Unknown Email");
//         setCustomerName("Unknown User");
//       }
//     };

//     fetchCustomerDetails();
//   }, [customerId]);

//   // Handle the password reset
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
      
//       const response = await axios.put(`http://localhost:8080/customers/update-password`, {
//         customerEmail: customerEmail, 
//         newPassword: newPassword,    
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond /> {/* Thêm banner để đồng nhất giao diện */}
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
//           {/* Display the customer's name and email */}
//           <h2 style={{ color: "#64a70b" }}>
//             Đặt lại mật khẩu cho {customerName || "khách hàng"} ({customerEmail})
//           </h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> {/* Thêm banner quảng cáo Visa */}
//     </div>
//   );
// }

// export default ResetForgetPassword;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// function ResetForgetPassword() {
//   const { customerId } = useParams(); // Get customerId from URL
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [customerEmail, setCustomerEmail] = useState(""); // Store customer email
//   const [customerName, setCustomerName] = useState(""); // Store customer name

//   // Fetch customer's email and name based on customerId
//   useEffect(() => {
//     const fetchCustomerDetails = async () => {
//       try {
//         // Fetch all customers
//         const response = await axios.get("http://localhost:8080/customers");

//         if (response.status === 200) {
//           const customerData = response.data.data;

//           // Find the customer with the matching customerId
//           const foundCustomer = customerData.find((customer) => String(customer.customerId) === String(customerId));

//           if (foundCustomer) {
//             setCustomerEmail(foundCustomer.customerEmail); // Set the customer's email
//             setCustomerName(foundCustomer.customerName); // Set the customer's name
//           } else {
//             setCustomerEmail("Unknown Email");
//             setCustomerName("Unknown User");
//           }
//         } else {
//           setCustomerEmail("Unknown Email");
//           setCustomerName("Unknown User");
//         }
//       } catch (error) {
//         console.error("Error fetching customer details:", error);
//         setCustomerEmail("Unknown Email");
//         setCustomerName("Unknown User");
//       }
//     };

//     fetchCustomerDetails();
//   }, [customerId]);

//   // Handle the password reset
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.put("http://localhost:8080/customers/update-password", {
//         customerEmail: customerEmail, 
//         newPassword: newPassword,    
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond /> {/* Add banner to maintain consistent UI */}
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
//           {/* Display the customer's name and email */}
//           <h2 style={{ color: "#64a70b" }}>
//             Đặt lại mật khẩu cho {customerName || "khách hàng"} ({customerEmail})
//           </h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> {/* Add Visa advertisement banner */}
//     </div>
//   );
// }

// export default ResetForgetPassword;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// function ResetForgetPassword() {
//   const { customerId } = useParams(); 
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [customerEmail, setCustomerEmail] = useState(""); 
//   const [customerName, setCustomerName] = useState(""); 

  
//   useEffect(() => {
//     const fetchCustomerDetails = async () => {
//       try {
        
//         const response = await axios.get(`http://localhost:8080/customers/${customerId}`);

//         if (response.status === 200) {
//           const customerData = response.data.data;

          
//           const foundCustomer = customerData.find((customer) => String(customer.customerId) === String(customerId));

//           if (foundCustomer) {
//             setCustomerEmail(foundCustomer.customerEmail); 
//             setCustomerName(foundCustomer.customerName); 
//           } else {
//             setCustomerEmail("Email không xác định");
//             setCustomerName("Người dùng không xác định");
//           }
//         } else {
//           setCustomerEmail("Email không xác định");
//           setCustomerName("Người dùng không xác định");
//         }
//       } catch (error) {
//         console.error("Lỗi khi tải thông tin khách hàng:", error);
//         setCustomerEmail("Email không xác định");
//         setCustomerName("Người dùng không xác định");
//       }
//     };

//     fetchCustomerDetails();
//   }, [customerId]);

//   // Handle the password reset
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.put(`http://localhost:8080/customers`, {
//         customerEmail: customerEmail,
//         newPassword: newPassword,
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond />
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
      
//           <h2 style={{ color: "#64a70b" }}>
//             Đặt lại mật khẩu cho {customerName || "khách hàng"} ({customerEmail})
//           </h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> 
//     </div>
//   );
// }

// export default ResetForgetPassword;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";  // Import useLocation
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// function ResetForgetPassword() {
//   const location = useLocation(); // Sử dụng useLocation để lấy thông tin URL hiện tại
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [customerEmail, setCustomerEmail] = useState(""); 
//   const [customerName, setCustomerName] = useState(""); 

//   // Lấy customerId từ query string
//   const queryParams = new URLSearchParams(location.search);
//   const customerId = queryParams.get('customerId');

//   useEffect(() => {
//     const fetchCustomerDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/customers/${customerId}`);
//         if (response.status === 200) {
//           const customerData = response.data;
          
//           // Tìm kiếm customer theo customerId
//           const foundCustomer = customerData.find((customer) => customer.customerId === customerId);

//           if (foundCustomer) {
//             setCustomerEmail(foundCustomer.customerEmail); 
//             setCustomerName(foundCustomer.customerName); 
//           } else {
//             setCustomerEmail("Email không xác định");
//             setCustomerName("Người dùng không xác định");
//           }
//         } else {
//           setCustomerEmail("Email không xác định");
//           setCustomerName("Người dùng không xác định");
//         }
//       } catch (error) {
//         console.error("Lỗi khi tải thông tin khách hàng:", error);
//         setCustomerEmail("Email không xác định");
//         setCustomerName("Người dùng không xác định");
//       }
//     };

//     if (customerId) { // Chỉ gọi API nếu có customerId
//       fetchCustomerDetails();
//     }
//   }, [customerId]);

//   // Handle the password reset
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.put(`http://localhost:8080/customers`, {
//         customerEmail: customerEmail,
//         newPassword: newPassword,
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond />
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
//           <h2 style={{ color: "#64a70b" }}>
//             Đặt lại mật khẩu cho {customerName || "khách hàng"} ({customerEmail})
//           </h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> 
//     </div>
//   );
// }

// export default ResetForgetPassword;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";  // Import useLocation
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// function ResetForgetPassword() {
//   const location = useLocation(); // Sử dụng useLocation để lấy thông tin URL hiện tại
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [customerEmail, setCustomerEmail] = useState(""); 
//   const [customerName, setCustomerName] = useState(""); 

//   // Lấy customerId từ query string
//   const queryParams = new URLSearchParams(location.search);
//   const customerId = queryParams.get('accountId');

//   useEffect(() => {
//     const fetchCustomerDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/accounts/${accountId}`);
//         if (response.status === 200) {
//           const customerData = response.data.data;  // Truy cập trực tiếp vào data

//           if (customerData && customerData.customerId === customerId) {
//             setCustomerEmail(customerData.customerEmail); 
//             setCustomerName(customerData.customerName); 
//           } else {
//             setCustomerEmail("Email không xác định");
//             setCustomerName("Người dùng không xác định");
//           }
//         } else {
//           setCustomerEmail("Email không xác định");
//           setCustomerName("Người dùng không xác định");
//         }
//       } catch (error) {
//         console.error("Lỗi khi tải thông tin khách hàng:", error);
//         setCustomerEmail("Email không xác định");
//         setCustomerName("Người dùng không xác định");
//       }
//     };

//     if (customerId) { // Chỉ gọi API nếu có customerId
//       fetchCustomerDetails();
//     }
//   }, [customerId]);

//   // Handle the password reset
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.put(`http://localhost:8080/customers`, {
//         customerEmail: customerEmail,
//         newPassword: newPassword,
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond />
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
//           <h2 style={{ color: "#64a70b" }}>
//             Đặt lại mật khẩu cho {customerName || "khách hàng"} ({customerEmail})
//           </h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> 
//     </div>
//   );
// }

// export default ResetForgetPassword;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";  // Import useLocation
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";
// import { Toast, ToastContainer } from "react-bootstrap";

// function ResetForgetPassword() {
//   const location = useLocation(); // Sử dụng useLocation để lấy thông tin URL hiện tại
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [accountEmail, setAccountEmail] = useState(""); 
//   const [accountName, setAccountName] = useState(""); 
//   const [accountType, setAccountType] = useState("Customer");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");

   

//   // Lấy accountId từ query string
//   const queryParams = new URLSearchParams(location.search);
//   const accountId = queryParams.get('accountId');  // Đổi từ customerId thành accountId

//   useEffect(() => {
//     const fetchAccountDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/accounts/${accountId}`);
//         if (response.status === 200) {
//           const accountData = response.data.data;  // Truy cập trực tiếp vào data

//           if (accountData && accountData.accountId === accountId) {
//             setAccountEmail(accountData.accountEmail); 
//             setAccountName(accountData.accountName); 
//           } else {
//             setAccountEmail("Email không xác định");
//             setAccountName("Người dùng không xác định");
//           }
//         } else {
//           setAccountEmail("Email không xác định");
//           setAccountName("Người dùng không xác định");
//         }
//       } catch (error) {
//         console.error("Lỗi khi tải thông tin tài khoản:", error);
//         setAccountEmail("Email không xác định");
//         setAccountName("Người dùng không xác định");
//       }
//     };

//     if (accountId) { // Chỉ gọi API nếu có accountId
//       fetchAccountDetails();
//     }
//   }, [accountId]);

//   // Handle the password reset
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setToastMessage("Mật khẩu không khớp.");
//       setShowToast(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.put(`http://localhost:8080/accounts/${accountId}`, {
//         accountEmail: accountEmail,
//         newPassword: newPassword,
//         accountName: accountName,
//         accountType: accountType,
//         customerEmail: customerEmail,
//         customerPhone: customerPhone
//       });

//       if (response.status === 200) {
//         setToastMessage("Mật khẩu đã được cập nhật thành công.");
//         setShowToast(true);
//       } else {
//         setToastMessage("Có lỗi xảy ra, vui lòng thử lại.");
//         setShowToast(true);
//       }
//     } catch (error) {
//       console.error("Lỗi khi cập nhật mật khẩu:", error);
//       setToastMessage("Không thể cập nhật mật khẩu. Vui lòng thử lại.");
//       setShowToast(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond />
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
//           <h2 style={{ color: "#64a70b" }}>
//             Đặt lại mật khẩu cho {accountName || "tài khoản"} ({accountEmail})
//           </h2>
//           <p>Vui lòng nhập mật khẩu mới của bạn và xác nhận để cập nhật tài khoản.</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="password"
//               placeholder="Nhập mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               disabled={loading}
//             >
//               {loading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <VisaBanner /> 
//     </div>
//   );
// }

// export default ResetForgetPassword;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";  // Import useLocation
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
