// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

// function Users() {
//   let navigate = useNavigate();

//   useEffect(() => {
//     let session = sessionStorage.getItem("account");
//     console.log("Session:", session); // Kiểm tra giá trị của session
//     if (!session) {
//       console.log("Navigating to login");
//       navigate("/login");
//     }
//   }, []);

//   return (
//     <div>
//       <Container className="mt-5">
//         <Row>
//           {/* Left Side Form */}
//           <Col md={8} className="border p-4 rounded">
//             <h5>Trang Vũ</h5>
//             <p>Điểm RP: 0 &nbsp;&nbsp; Tổng visit: 0</p>
//             <p>Expired visit: 0 &nbsp;&nbsp; Active visit: 0</p>
//             <p>Tổng chi tiêu trong tháng (10/2024): 0 VND</p>
//             <p>
//               Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang 200
//               pixel và dọc 200 pixel (dung lượng dưới 1MB)
//             </p>

//             <hr />

//             {/* Profile Form */}
//             <Form>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formFirstName">
//                   <Form.Label>Họ *</Form.Label>
//                   <Form.Control type="text" placeholder="Vũ" />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formLastName">
//                   <Form.Label>Tên đệm và tên *</Form.Label>
//                   <Form.Control type="text" placeholder="Trang" />
//                 </Form.Group>
//               </Form.Row>

//               <Form.Group controlId="formEmail">
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control type="email" placeholder="shiddle01@gmail.com" />
//               </Form.Group>

//               <Form.Group controlId="formPassword">
//                 <Form.Label>Mật khẩu *</Form.Label>
//                 <InputGroup>
//                   <Form.Control type="password" placeholder="********" />
//                   <InputGroup.Append>
//                     <Button variant="success">Đổi mật khẩu</Button>
//                   </InputGroup.Append>
//                 </InputGroup>
//               </Form.Group>

//               <Form.Group controlId="formPhoneNumber">
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control type="text" placeholder="0337641615" />
//               </Form.Group>

//               <Form.Group controlId="formGender">
//                 <Form.Label>Giới tính *</Form.Label>
//                 <Form.Control as="select">
//                   <option>Nữ</option>
//                   <option>Nam</option>
//                 </Form.Control>
//               </Form.Group>

//               <Form.Row>
//                 <Form.Group as={Col} controlId="formBirthDay">
//                   <Form.Label>Ngày sinh *</Form.Label>
//                   <Form.Control as="select">
//                     <option>02</option>
//                     {/* Add more options */}
//                   </Form.Control>
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formBirthMonth">
//                   <Form.Label>Tháng sinh *</Form.Label>
//                   <Form.Control as="select">
//                     <option>02</option>
//                     {/* Add more options */}
//                   </Form.Control>
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formBirthYear">
//                   <Form.Label>Năm sinh *</Form.Label>
//                   <Form.Control as="select">
//                     <option>2000</option>
//                     {/* Add more options */}
//                   </Form.Control>
//                 </Form.Group>
//               </Form.Row>

//               <Form.Group controlId="formCity">
//                 <Form.Label>Tỉnh/Thành phố *</Form.Label>
//                 <Form.Control type="text" placeholder="Hà Nội" />
//               </Form.Group>

//               <Form.Group controlId="formAddress">
//                 <Form.Label>Địa chỉ *</Form.Label>
//                 <Form.Control type="text" placeholder="Hà Nội" />
//               </Form.Group>

//               <Button variant="success" type="submit" className="w-100">
//                 Cập nhật
//               </Button>
//             </Form>
//           </Col>

//           {/* Right Side QR and Account Info */}
//           <Col md={4} className="border p-4 rounded">
//             <div className="text-center mb-4">
//               <img
//                 src="https://via.placeholder.com/150" // Replace with actual QR code
//                 alt="QR Code"
//                 className="img-fluid"
//               />
//             </div>
//             <p>Tên đăng nhập: shiddle01@gmail.com</p>
//             <p>Số thẻ: ONLAI141975</p>
//             <p>Hạng thẻ: Star</p>
//             <p>Ngày đăng ký: 05/10/2024</p>

//             <Button variant="success" className="w-100">
//               Đăng xuất
//             </Button>

//             <div className="text-right mt-2">
//               <a href="#" className="text-danger">
//                 Xóa thông tin
//               </a>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   InputGroup,
//   Table,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";

// function Users() {
//   const [customerName, setCustomerName] = useState('');
//   const [customerEmail, setCustomerEmail] = useState('');
//   const [customerPhone, setCustomerPhone] = useState('');
//   const [bookings, setBookings] = useState([]);

//   const tittle = {
//     borderRadius: "15px",
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent",
//     display: "inline-block",
//   };

//   let navigate = useNavigate();

//   useEffect(() => {
//     let session = sessionStorage.getItem("account");

//     if (!session) {
//       navigate("/login");
//     } else {
//       // Parse dữ liệu từ sessionStorage
//       const accountData = JSON.parse(session);

//       // Cập nhật state với tên, email và điện thoại người dùng
//       setCustomerName(accountData.customer.customerName);
//       setCustomerEmail(accountData.customer.customerEmail);
//       setCustomerPhone(accountData.customer.customerPhone);
//       setBookings(accountData.customer.bookings);
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     navigate("/login");
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-4" style={tittle}>Tài khoản</h2>
//         <Row>
//           {/* Left Side Form */}
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "60%" }}
//                   src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
//                   alt="User Avatar"
//                   className="rounded-circle"
//                 />
//               </div>
//               <div>
//                 <h6 style={tittle}>{customerName}</h6>
//                 <p>Email: {customerEmail}</p>
//                 <p>Số điện thoại: {customerPhone}</p>
//                 <p>Điểm RP: 0 &nbsp;&nbsp; Tổng visit: 0</p>
//                 <p>Expired visit: 0 &nbsp;&nbsp; Active visit: 0</p>
//                 <p>Tổng chi tiêu trong tháng (10/2024): 0 VND</p>
//                 <p>
//                   Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang
//                   200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
//                 </p>
//               </div>
//             </div>

//             <hr />

//             {/* Profile Form */}
//             <Form>
//               {/* Form các trường thông tin người dùng */}
//               <Form.Group controlId="formEmail">
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control type="email" value={customerEmail} readOnly />
//               </Form.Group>

//               <Form.Group controlId="formPhoneNumber">
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control type="text" value={customerPhone} readOnly />
//               </Form.Group>

//               <Button variant="success" type="submit" className="w-100 mt-5">
//                 Cập nhật
//               </Button>
//             </Form>
//           </Col>

//           {/* Right Side QR and Account Info */}
//           <Col md={4} className="border p-4 rounded shadow">
//             <div className="text-center mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p>Tên đăng nhập: {customerEmail}</p>
//             <p>Số thẻ: ONLAI141975</p>
//             <p>Hạng thẻ: Star</p>
//             <p>Ngày đăng ký: 05/10/2024</p>

//             <Button variant="success" className="w-100 mb-2" onClick={handleLogout}>
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>

//         {/* Transaction History */}
//         <h5 className="mt-5" style={tittle}>Lịch sử giao dịch</h5>
//         <Table striped bordered hover className="mt-3 mb-5">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã lấy vé</th>
//               <th>Thông tin RP</th>
//               <th>Tổng tiền</th>
//               <th>Điểm RP</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length > 0 ? (
//               bookings.map((booking, index) => (
//                 <tr key={booking.bookingId}>
//                   <td>{index + 1}</td>
//                   <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                   <td>{booking.bookingId}</td>
//                   <td>{booking.tickets.map(ticket => ticket.ticketId).join(", ")}</td>
//                   <td>{booking.bookingPrice} VND</td>
//                   <td>0</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center">
//                   Không có giao dịch
//                 </td>
//               </tr>
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 Tổng cộng
//               </td>
//               <td>{bookings.reduce((sum, booking) => sum + booking.bookingPrice, 0)} VND</td>
//               <td>0</td>
//             </tr>
//           </tfoot>
//         </Table>
//       </Container>
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   InputGroup,
//   Table,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";

// function Users() {
//   const [customerEmail, setCustomerEmail] = useState('');
//   const [customerPhone, setCustomerPhone] = useState('');
//   const [bookings, setBookings] = useState([]);

//   const tittle = {
//         borderRadius: "15px",
//         color: "#8bc34a",
//         fontWeight: "bold",
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "transparent",
//         display: "inline-block",
//       };

//   let navigate = useNavigate();

//   const [customerName, setCustomerName] = useState("");

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     let session = sessionStorage.getItem("account");
//     console.log("Session:", session);
//     if (session) {
//       const accountData = JSON.parse(session);
//       setCustomerName(accountData.customerName);
//       setCustomerEmail(accountData.customerEmail);
//       setCustomerPhone(accountData.customerPhone);
//       setBookings(accountData.bookings);
//     }
//     if (!session) {
//       console.log("Navigating to login");
//       navigate("/login");
//     }
//   }, []);

//   return (
//     // <div>
//     //   <h1>Chào mừng, {customerName.customerName}!</h1>
//     //   <h1>Chào mừng, {customerName.customerPhone}!</h1>
//     // </div>

//     <div>
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-4" style={tittle}>
//           Tài khoản
//         </h2>
//         <Row>
//           {/* Left Side Form */}
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "60%" }}
//                   src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
//                   alt="User Avatar"
//                   className="rounded-circle"
//                 />
//               </div>
//               <div>
//                 <h6 style={tittle}>{customerName.customerName}</h6>
//                 <p>Email: {customerName.customerEmail}</p>
//                 <p>Số điện thoại: {customerName.customerPhone}</p>
//                 <p>
//                   Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang
//                   200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
//                 </p>
//               </div>
//             </div>

//             <hr />

//             {/* Profile Form */}
//             <Form>
//               {/* Form các trường thông tin người dùng */}
//               <Form.Group controlId="formEmail">
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control type="email" value={customerName.customerEmail}  />
//               </Form.Group>

//               <Form.Group controlId="formPhoneNumber">
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control type="text" value={customerName.customerPhone}  />
//               </Form.Group>

//               <Button variant="success" type="submit" className="w-100 mt-5">
//                 Cập nhật
//               </Button>
//             </Form>
//           </Col>

//           {/* Right Side QR and Account Info */}
//           <Col md={4} className="border p-4 rounded shadow">
//             <div className="text-center mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p>Tên đăng nhập: {customerEmail}</p>
//             <p>Số thẻ: ONLAI141975</p>
//             <p>Hạng thẻ: Star</p>
//             <p>Ngày đăng ký: 05/10/2024</p>

//             <Button
//               variant="success"
//               className="w-100 mb-2"
//               onClick={handleLogout}
//             >
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>

//         {/* Transaction History */}
//         <h5 className="mt-5" style={tittle}>
//           Lịch sử giao dịch
//         </h5>
//         <Table striped bordered hover className="mt-3 mb-5">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã lấy vé</th>
//               <th>Thông tin RP</th>
//               <th>Tổng tiền</th>
//               <th>Điểm RP</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customerName.bookings.length > 0 ? (
//               customerName.booking.map((booking, index) => (
//                 <tr key={bookings.bookingId}>
//                   <td>{index + 1}</td>
//                   <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                   <td>{booking.bookingId}</td>
//                   <td>
//                     {booking.tickets
//                       .map((ticket) => ticket.ticketId)
//                       .join(", ")}
//                   </td>
//                   <td>{booking.bookingPrice} VND</td>
//                   <td>0</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center">
//                   Không có giao dịch
//                 </td>
//               </tr>
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 Tổng cộng
//               </td>
//               <td>
//                 {bookings.reduce(
//                   (sum, booking) => sum + booking.bookingPrice,
//                   0
//                 )}{" "}
//                 VND
//               </td>
//               <td>0</td>
//             </tr>
//           </tfoot>
//         </Table>
//       </Container>
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";

// function Users() {
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [bookings, setBookings] = useState([]); // State for bookings

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     let session = sessionStorage.getItem("account");
//     console.log("Session:", session); // Log session data for debugging
//     if (session) {
//       const accountData = JSON.parse(session);

//       // Assuming the structure of the data from sessionStorage is correct
//       setCustomerName(accountData.customerName);
//       setCustomerEmail(accountData.customerEmail);
//       setCustomerPhone(accountData.customerPhone);
//       setBookings(accountData.bookings.abc || []);
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const tittle = {
//     borderRadius: "15px",
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent",
//     display: "inline-block",
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-4" style={tittle}>
//           Tài khoản
//         </h2>
//         <Row>
//           {/* Left Side Form */}
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "60%" }}
//                   src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
//                   alt="User Avatar"
//                   className="rounded-circle"
//                 />
//               </div>
//               <div>
//                 <h6 style={tittle}>{customerName.customerName}</h6>
//                 <p>Email: {customerName.customerEmail}</p>
//                 <p>Số điện thoại: {customerName.customerPhone}</p>
//                 <p>Số điện thoại: {bookings.bookingPrice}</p>
//                 <p>
//                   Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang
//                   200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
//                 </p>
//               </div>
//             </div>

//             <hr />

//             {/* Profile Form */}

//             <Form>
//               <Form.Group as={Col} controlId="formLastName">
//                 <Form.Label>Tên đệm và tên *</Form.Label>
//                 <Form.Control type="text" value={customerName.customerName} />
//               </Form.Group>

//               <Form.Group controlId="formEmail">
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control
//                   type="email"
//                   value={customerName.customerEmail}
//                   readOnly
//                 />
//               </Form.Group>

//               <Form.Group controlId="formPhoneNumber">
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={customerName.customerPhone}
//                   readOnly
//                 />
//               </Form.Group>

//               <Button variant="success" className="w-100 mt-5">
//                 Cập nhật
//               </Button>
//             </Form>
//           </Col>

//           {/* Right Side QR and Account Info */}
//           <Col md={4} className="border p-4 rounded shadow">
//             <div className="text-center mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p>Tên đăng nhập: {customerEmail}</p>
//             <p>Số thẻ: ONLAI141975</p>
//             <p>Hạng thẻ: Star</p>
//             <p>Ngày đăng ký: 05/10/2024</p>

//             <Button
//               variant="success"
//               className="w-100 mb-2"
//               onClick={handleLogout}
//             >
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>

//         {/* Transaction History */}
//         <h5 className="mt-5" style={tittle}>
//           Lịch sử giao dịch
//         </h5>
//         <Table striped bordered hover className="mt-3 mb-5">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã lấy vé</th>
//               <th>Thông tin vé</th>
//               <th>Tổng tiền</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={booking.bookingId}>
//                 <td>{index + 1}</td>
//                 <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                 <td>{booking.bookingId}</td>
//                 <td>
//                   {booking.tickets.map((ticket) => ticket.ticketId).join(", ")}
//                 </td>
//                 <td>{booking.bookingPrice} VND</td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 Tổng cộng
//               </td>
//               <td>
//                 {bookings.reduce(
//                   (sum, booking) => sum + booking.bookingPrice,
//                   0
//                 )}{" "}
//                 VND
//               </td>
//             </tr>
//           </tfoot>
//         </Table>
//       </Container>
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";

// function Users() {
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [bookings, setBookings] = useState([]); // State for bookings

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     let session = sessionStorage.getItem("account");
//     console.log("Session từ sessionStorage:", session); // Log session data for debugging
//     if (session) {
//       const accountData = JSON.parse(session);

//       // Check if accountData and customer exist
//       if (accountData.data && accountData.data.customer) {
//         // Set customer details
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);

//         // Set bookings
//         if (accountData.booking) {
//           setBookings(accountData.booking);
//         }
//       }
//     } else {
//       console.log("Không có session, điều hướng về login");
//       navigate("/login");
//     }
//   }, [navigate]);

//   const tittle = {
//     borderRadius: "15px",
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent",
//     display: "inline-block",
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-4" style={tittle}>
//           Tài khoản
//         </h2>
//         <Row>
//           {/* Left Side Form */}
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "60%" }}
//                   src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
//                   alt="User Avatar"
//                   className="rounded-circle"
//                 />
//               </div>
//               <div>
//                 <h6 style={tittle}>{customerName ? customerName : "Không có tên"}</h6>
//                 <p>Email: {customerEmail ? customerEmail : "Không có email"}</p>
//                 <p>Số điện thoại: {customerPhone ? customerPhone : "Không có số điện thoại"}</p>
//                 <p>
//                   Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang
//                   200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
//                 </p>
//               </div>
//             </div>

//             <hr />

//             {/* Profile Form */}

//             <Form>
//               <Form.Group as={Col} controlId="formLastName">
//                 <Form.Label>Tên đệm và tên *</Form.Label>
//                 <Form.Control type="text" value={customerName} readOnly />
//               </Form.Group>

//               <Form.Group controlId="formEmail">
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control
//                   type="email"
//                   value={customerEmail}
//                   readOnly
//                 />
//               </Form.Group>

//               <Form.Group controlId="formPhoneNumber">
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={customerPhone}
//                   readOnly
//                 />
//               </Form.Group>

//               <Button variant="success" className="w-100 mt-5">
//                 Cập nhật
//               </Button>
//             </Form>
//           </Col>

//           {/* Right Side QR and Account Info */}
//           <Col md={4} className="border p-4 rounded shadow">
//             <div className="text-center mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p>Tên đăng nhập: {customerEmail ? customerEmail : "Không có email"}</p>
//             <p>Số thẻ: ONLAI141975</p>
//             <p>Hạng thẻ: Star</p>
//             <p>Ngày đăng ký: 05/10/2024</p>

//             <Button
//               variant="success"
//               className="w-100 mb-2"
//               onClick={handleLogout}
//             >
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>

//         {/* Transaction History */}
//         <h5 className="mt-5" style={tittle}>
//           Lịch sử giao dịch
//         </h5>
//         <Table striped bordered hover className="mt-3 mb-5">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã lấy vé</th>
//               <th>Thông tin vé</th>
//               <th>Tổng tiền</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length > 0 ? (
//               bookings.map((booking, index) => (
//                 <tr key={booking.bookingId}>
//                   <td>{index + 1}</td>
//                   <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                   <td>{booking.bookingId}</td>
//                   <td>
//                     {booking.tickets.map((ticket) => ticket.ticketId).join(", ")}
//                   </td>
//                   <td>{booking.bookingPrice} VND</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   Không có giao dịch
//                 </td>
//               </tr>
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 Tổng cộng
//               </td>
//               <td>
//                 {bookings.reduce(
//                   (sum, booking) => sum + booking.bookingPrice,
//                   0
//                 )}{" "}
//                 VND
//               </td>
//             </tr>
//           </tfoot>
//         </Table>
//       </Container>
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// DUNG
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// function Users() {
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [bookings, setBookings] = useState([]); // State for bookings
//   const navigate = useNavigate();

//   useEffect(() => {
//     let session = sessionStorage.getItem("account");

//     if (session) {
//       const accountData = JSON.parse(session);

//       if (accountData && accountData.customer) {
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);

//         // Check if bookings exist and set them
//         if (accountData.booking) {
//           setBookings(accountData.booking);
//         }
//       } else {
//         // Nếu không có dữ liệu khách hàng, điều hướng đến trang đăng nhập
//         navigate("/login");
//       }
//     } else {
//       // Nếu không có session, điều hướng đến trang đăng nhập
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <div>
//       {/* Hiển thị chi tiết tài khoản */}
//       <Container>
//         <h2>Thông tin tài khoản</h2>
//         <p>Tên: {customerName}</p>
//         <p>Email: {customerEmail}</p>
//         <p>Số điện thoại: {customerPhone}</p>

//         {/* Lịch sử giao dịch */}
//         <h3>Lịch sử giao dịch</h3>
//         <Table>
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã vé</th>
//               <th>Tổng tiền</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={booking.bookingId}>
//                 <td>{index + 1}</td>
//                 <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                 <td>{booking.bookingId}</td>
//                 <td>{booking.bookingPrice} VND</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Container>
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond"; // Thêm BannerSecond để giống giao diện cũ
// import VisaBanner from "../home/components/VisaBanner"; // Thêm VisaBanner

// function Users() {
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [bookings, setBookings] = useState([]); // State for bookings

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     let session = sessionStorage.getItem("account");

//     if (session) {
//       const accountData = JSON.parse(session);

//       if (accountData && accountData.customer) {
//         // Set customer details
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);

//         // Set bookings
//         if (accountData.booking) {
//           setBookings(accountData.booking);
//         }
//       } else {
//         // Nếu không có dữ liệu khách hàng, điều hướng đến trang đăng nhập
//         navigate("/login");
//       }
//     } else {
//       // Nếu không có session, điều hướng đến trang đăng nhập
//       navigate("/login");
//     }
//   }, [navigate]);

//   const tittle = {
//     borderRadius: "15px",
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent",
//     display: "inline-block",
//   };

//   return (
//     <div>
//       {/* Thêm BannerSecond */}
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-1" style={tittle}>
//           Tài khoản
//         </h2>
//         <Row>
//           {/* Left Side Form */}
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "60%" }}
//                   src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
//                   alt="User Avatar"
//                   className="rounded-circle"
//                 />
//               </div>
//               <div>
//                 <h6 style={tittle}>
//                   {customerName ? customerName : "Không có tên"}
//                 </h6>
//                 <p>Email: {customerEmail ? customerEmail : "Không có email"}</p>
//                 <p>
//                   Số điện thoại:{" "}
//                   {customerPhone ? customerPhone : "Không có số điện thoại"}
//                 </p>
//                 <p>
//                   Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang
//                   200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
//                 </p>
//               </div>
//             </div>

//             <hr />

//             {/* Profile Form */}
//             <Form>
//               <Form.Group style={{textAlign: "left", marginTop: "20px", color: "#8bc34a"}} as={Col} controlId="formLastName">
//                 <Form.Label>Tên đệm và tên *</Form.Label>
//                 <Form.Control type="text" value={customerName} readOnly />
//               </Form.Group>

//               <Form.Group  style={{textAlign: "left", marginTop: "20px", color: "#8bc34a"}} controlId="formEmail">
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control type="email" value={customerEmail} readOnly />
//               </Form.Group>

//               <Form.Group style={{textAlign: "left", marginTop: "20px", color: "#8bc34a"}} controlId="formPhoneNumber">
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control type="text" value={customerPhone} readOnly />
//               </Form.Group>

//               {/* <Button variant="success" className="w-100 mt-5">
//                 Cập nhật
//               </Button> */}
//             </Form>
//           </Col>

//           {/* Right Side QR and Account Info */}
//           <Col md={4} className="border p-4 rounded shadow">
//             <div className="text-center mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p style={tittle}>Tên đăng nhập: {customerName ? customerName : "Không có email"}</p>
//             <Button
//               variant="success"
//               className="w-100 mb-2"
//               onClick={handleLogout}
//             >
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>

//         {/* Transaction History */}
//         <h5 className="mt-5" style={tittle}>
//           Lịch sử giao dịch
//         </h5>
//         <Table striped bordered hover className="mt-3 mb-5">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã lấy vé</th>
//               <th>Thông tin vé</th>
//               <th>Tổng tiền</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length > 0 ? (
//               bookings.map((booking, index) => (
//                 <tr key={booking.bookingId}>
//                   <td>{index + 1}</td>
//                   <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                   <td>{booking.bookingId}</td>
//                   <td>
//                     {booking.tickets
//                       ? booking.tickets.map((ticket) => ticket.ticketId).join(", ")
//                       : "Không có vé"}
//                   </td>
//                   <td>{booking.bookingPrice} VND</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   Không có giao dịch
//                 </td>
//               </tr>
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 Tổng cộng
//               </td>
//               <td>
//                 {bookings.reduce((sum, booking) => sum + booking.bookingPrice, 0)}{" "}
//                 VND
//               </td>
//             </tr>
//           </tfoot>
//         </Table>
//       </Container>

//       {/* Thêm VisaBanner */}
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond"; // Thêm BannerSecond để giống giao diện cũ
// import VisaBanner from "../home/components/VisaBanner"; // Thêm VisaBanner

// function Users() {
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [bookings, setBookings] = useState([]); // State for bookings
//   const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
//   const [updatedInfo, setUpdatedInfo] = useState({
//     customerName: "",
//     customerEmail: "",
//     customerPhone: "",
//   });

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     let session = sessionStorage.getItem("account");

//     if (session) {
//       const accountData = JSON.parse(session);

//       if (accountData && accountData.customer) {
//         // Set customer details
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);

//         setUpdatedInfo({
//           customerName: accountData.customer.customerName,
//           customerEmail: accountData.customer.customerEmail,
//           customerPhone: accountData.customer.customerPhone,
//         });

//         // Set bookings
//         if (accountData.booking) {
//           setBookings(accountData.booking);
//         }
//       } else {
//         // Nếu không có dữ liệu khách hàng, điều hướng đến trang đăng nhập
//         navigate("/login");
//       }
//     } else {
//       // Nếu không có session, điều hướng đến trang đăng nhập
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handleEdit = () => {
//     setIsEditing(true); // Enable editing mode
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false); // Disable editing mode
//     // Reset the updatedInfo to the original customer info
//     setUpdatedInfo({
//       customerName,
//       customerEmail,
//       customerPhone,
//     });
//   };

//   const handleSave = () => {
//     // Here you would normally make an API call to update the user info
//     // For example:
//     // axios.post('/api/updateUser', updatedInfo).then(response => { ... });

//     // Update session storage with the new data
//     let session = sessionStorage.getItem("account");
//     if (session) {
//       const accountData = JSON.parse(session);
//       accountData.customer = updatedInfo;
//       sessionStorage.setItem("account", JSON.stringify(accountData));

//       // Update the displayed customer info
//       setCustomerName(updatedInfo.customerName);
//       setCustomerEmail(updatedInfo.customerEmail);
//       setCustomerPhone(updatedInfo.customerPhone);
//     }

//     setIsEditing(false); // Exit editing mode
//   };

//   const tittle = {
//     borderRadius: "15px",
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent",
//     display: "inline-block",
//   };

//   return (
//     <div>
//       {/* Thêm BannerSecond */}
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-1" style={tittle}>
//           Tài khoản
//         </h2>
//         <Row>
//           {/* Left Side Form */}
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "60%" }}
//                   src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
//                   alt="User Avatar"
//                   className="rounded-circle"
//                 />
//               </div>
//               <div>
//                 <h6 style={tittle}>
//                   {customerName ? customerName : "Không có tên"}
//                 </h6>
//                 <p>Email: {customerEmail ? customerEmail : "Không có email"}</p>
//                 <p>
//                   Số điện thoại:{" "}
//                   {customerPhone ? customerPhone : "Không có số điện thoại"}
//                 </p>
//                 <p>
//                   Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang
//                   200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
//                 </p>
//               </div>
//             </div>

//             <hr />

//             {/* Profile Form */}
//             <Form>
//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 as={Col}
//                 controlId="formLastName"
//               >
//                 <Form.Label>Tên đệm và tên *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerName}
//                   onChange={(e) =>
//                     setUpdatedInfo({ ...updatedInfo, customerName: e.target.value })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formEmail"
//               >
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control
//                   type="email"
//                   value={updatedInfo.customerEmail}
//                   onChange={(e) =>
//                     setUpdatedInfo({ ...updatedInfo, customerEmail: e.target.value })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formPhoneNumber"
//               >
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerPhone}
//                   onChange={(e) =>
//                     setUpdatedInfo({ ...updatedInfo, customerPhone: e.target.value })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               {isEditing ? (
//                 <div className="d-flex justify-content-between mt-5">
//                   <Button variant="danger" onClick={handleCancelEdit}>
//                     Hủy
//                   </Button>
//                   <Button variant="success" onClick={handleSave}>
//                     Lưu
//                   </Button>
//                 </div>
//               ) : (
//                 <Button
//                   variant="primary"
//                   className="w-100 mt-5"
//                   onClick={handleEdit}
//                 >
//                   Chỉnh sửa
//                 </Button>
//               )}
//             </Form>
//           </Col>

//           {/* Right Side QR and Account Info */}
//           <Col md={4} className="border p-4 rounded shadow">
//             <div className="text-center mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p style={tittle}>
//               Tên đăng nhập: {customerName ? customerName : "Không có email"}
//             </p>
//             <Button
//               variant="success"
//               className="w-100 mb-2"
//               onClick={handleLogout}
//             >
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>

//         {/* Transaction History */}
//         <h5 className="mt-5" style={tittle}>
//           Lịch sử giao dịch
//         </h5>
//         <Table striped bordered hover className="mt-3 mb-5">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã lấy vé</th>
//               <th>Thông tin vé</th>
//               <th>Tổng tiền</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length > 0 ? (
//               bookings.map((booking, index) => (
//                 <tr key={booking.bookingId}>
//                   <td>{index + 1}</td>
//                   <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                   <td>{booking.bookingId}</td>
//                   <td>
//                     {booking.tickets
//                       ? booking.tickets.map((ticket) => ticket.ticketId).join(", ")
//                       : "Không có vé"}
//                   </td>
//                   <td>{booking.bookingPrice} VND</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   Không có giao dịch
//                 </td>
//               </tr>
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 Tổng cộng
//               </td>
//               <td>
//                 {bookings.reduce((sum, booking) => sum + booking.bookingPrice, 0)}{" "}
//                 VND
//               </td>
//             </tr>
//           </tfoot>
//         </Table>
//       </Container>

//       {/* Thêm VisaBanner */}
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios for API calls
// import BannerSecond from "../home/components/BannerSecond"; // Thêm BannerSecond để giống giao diện cũ
// import VisaBanner from "../home/components/VisaBanner"; // Thêm VisaBanner

// function Users() {
//   const [customerId, setCustomerId] = useState(""); // Add customer ID state
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [bookings, setBookings] = useState([]); // State for bookings
//   const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
//   const [updatedInfo, setUpdatedInfo] = useState({
//     customerName: "",
//     customerEmail: "",
//     customerPhone: "",
//   });

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     localStorage.removeItem("account");
//     navigate("/login");
//   };

//   // useEffect(() => {
//   //   let session = sessionStorage.getItem("account");

//   //   if (session) {
//   //     const accountData = JSON.parse(session);

//   //     if (accountData && accountData.customer) {
//   //       // Set customer details and ID
//   //       setCustomerId(accountData.customer.customerId); // Store customerId
//   //       setCustomerName(accountData.customer.customerName);
//   //       setCustomerEmail(accountData.customer.customerEmail);
//   //       setCustomerPhone(accountData.customer.customerPhone);

//   //       setUpdatedInfo({
//   //         customerName: accountData.customer.customerName,
//   //         customerEmail: accountData.customer.customerEmail,
//   //         customerPhone: accountData.customer.customerPhone,
//   //       });

//   //       // Set bookings
//   //       if (accountData.booking) {
//   //         setBookings(accountData.booking);
//   //       }
//   //     } else {
//   //       navigate("/login");
//   //     }
//   //   } else {
//   //     navigate("/login");
//   //   }
//   // }, [navigate]);

//   useEffect(() => {
//     const session = sessionStorage.getItem("account");
//     const local = localStorage.getItem("account");

//     console.log("Session:", session); // Kiểm tra giá trị của session
//     console.log("Local:", local); // Kiểm tra giá trị của local storage

//     // Nếu cả `sessionStorage` và `localStorage` đều không có dữ liệu, chuyển hướng đến `/login`
//     if (!session && !local) {
//       console.log("Navigating to login");
//       navigate("/login");
//     } else {
//       // Nếu có thông tin trong session hoặc local, lấy thông tin từ nơi có dữ liệu
//       const accountData = JSON.parse(session || local);
//       if (accountData && accountData.customer) {
//         // Set customer details and ID
//         setCustomerId(accountData.customer.customerId);
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);

//         setUpdatedInfo({
//           customerName: accountData.customer.customerName,
//           customerEmail: accountData.customer.customerEmail,
//           customerPhone: accountData.customer.customerPhone,
//         });

//         // Set bookings
//         if (accountData.booking) {
//           setBookings(accountData.booking);
//         }
//       } else {
//         navigate("/login");
//       }
//     }
// }, [navigate]);

//   const handleEdit = () => {
//     setIsEditing(true); // Enable editing mode
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false); // Disable editing mode
//     // Reset the updatedInfo to the original customer info
//     setUpdatedInfo({
//       customerName,
//       customerEmail,
//       customerPhone,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       // Send the PUT request to update the customer info
//       const response = await axios.put(
//         `http://localhost:8080/customers/${customerId}`, // API endpoint
//         {
//           customerName: updatedInfo.customerName,
//           customerPhone: updatedInfo.customerPhone,
//           customerEmail: updatedInfo.customerEmail,
//         }
//       );

//       if (response.status === 200) {
//         const updatedCustomer = response.data.data;

//         // Update session storage with the new data
//         let session = sessionStorage.getItem("account");
//         if (session) {
//           const accountData = JSON.parse(session);
//           accountData.customer = updatedCustomer;
//           sessionStorage.setItem("account", JSON.stringify(accountData));

//           // Update the displayed customer info
//           setCustomerName(updatedCustomer.customerName);
//           setCustomerEmail(updatedCustomer.customerEmail);
//           setCustomerPhone(updatedCustomer.customerPhone);
//         }

//         setIsEditing(false); // Exit editing mode
//       }
//     } catch (error) {
//       console.error("Error updating customer info:", error);
//     }
//   };

//   const tittle = {
//     borderRadius: "15px",
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent",
//     display: "inline-block",
//   };

//   return (
//     <div>
//       {/* Thêm BannerSecond */}
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-1" style={tittle}>
//           Tài khoản
//         </h2>
//         <Row>
//           {/* Left Side Form */}
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "60%" }}
//                   src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
//                   alt="User Avatar"
//                   className="rounded-circle"
//                 />
//               </div>
//               <div>
//                 <h6 style={tittle}>
//                   {customerName ? customerName : "Không có tên"}
//                 </h6>
//                 <p>Email: {customerEmail ? customerEmail : "Không có email"}</p>
//                 <p>
//                   Số điện thoại:{" "}
//                   {customerPhone ? customerPhone : "Không có số điện thoại"}
//                 </p>
//                 <p>
//                   Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang
//                   200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
//                 </p>
//               </div>
//             </div>

//             <hr />

//             {/* Profile Form */}
//             <Form>
//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 as={Col}
//                 controlId="formLastName"
//               >
//                 <Form.Label>Tên đệm và tên *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerName}
//                   onChange={(e) =>
//                     setUpdatedInfo({ ...updatedInfo, customerName: e.target.value })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formEmail"
//               >
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control
//                   type="email"
//                   value={updatedInfo.customerEmail}
//                   onChange={(e) =>
//                     setUpdatedInfo({ ...updatedInfo, customerEmail: e.target.value })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formPhoneNumber"
//               >
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerPhone}
//                   onChange={(e) =>
//                     setUpdatedInfo({ ...updatedInfo, customerPhone: e.target.value })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               {isEditing ? (
//                 <div className="d-flex justify-content-between mt-5">
//                   <Button variant="danger" onClick={handleCancelEdit}>
//                     Hủy
//                   </Button>
//                   <Button variant="success" onClick={handleSave}>
//                     Lưu
//                   </Button>
//                 </div>
//               ) : (
//                 <Button
//                   variant="primary"
//                   className="w-100 mt-5"
//                   onClick={handleEdit}
//                 >
//                   Chỉnh sửa
//                 </Button>
//               )}
//             </Form>
//           </Col>

//           {/* Right Side QR and Account Info */}
//           <Col md={4} className="border p-4 rounded shadow">
//             <div className="text-center mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p style={tittle}>
//               Tên đăng nhập: {customerName ? customerName : "Không có email"}
//             </p>
//             <Button
//               variant="success"
//               className="w-100 mb-2"
//               onClick={handleLogout}
//             >
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>

//         {/* Transaction History */}
//         <h5 className="mt-5" style={tittle}>
//           Lịch sử giao dịch
//         </h5>
//         <Table striped bordered hover className="mt-3 mb-5">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã lấy vé</th>
//               <th>Thông tin vé</th>
//               <th>Tổng tiền</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length > 0 ? (
//               bookings.map((booking, index) => (
//                 <tr key={booking.bookingId}>
//                   <td>{index + 1}</td>
//                   <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                   <td>{booking.bookingId}</td>
//                   <td>
//                     {booking.tickets
//                       ? booking.tickets.map((ticket) => ticket.ticketId).join(", ")
//                       : "Không có vé"}
//                   </td>
//                   <td>{booking.bookingPrice} VND</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   Không có giao dịch
//                 </td>
//               </tr>
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 Tổng cộng
//               </td>
//               <td>
//                 {bookings.reduce((sum, booking) => sum + booking.bookingPrice, 0)}{" "}
//                 VND
//               </td>
//             </tr>
//           </tfoot>
//         </Table>
//       </Container>

//       {/* Thêm VisaBanner */}
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios for API calls
// import BannerSecond from "../home/components/BannerSecond"; // Thêm BannerSecond để giống giao diện cũ
// import VisaBanner from "../home/components/VisaBanner"; // Thêm VisaBanner

// function Users() {
//   const [customerId, setCustomerId] = useState(""); // Add customer ID state
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [bookings, setBookings] = useState([]); // State for bookings
//   const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
//   const [updatedInfo, setUpdatedInfo] = useState({
//     customerName: "",
//     customerEmail: "",
//     customerPhone: "",
//   });
//   const [profileImage, setProfileImage] = useState(null); // State to store the profile image URL
//   const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     localStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const session = sessionStorage.getItem("account");
//     const local = localStorage.getItem("account");

//     console.log("Session:", session); // Kiểm tra giá trị của session
//     console.log("Local:", local); // Kiểm tra giá trị của local storage

//     // Nếu cả `sessionStorage` và `localStorage` đều không có dữ liệu, chuyển hướng đến `/login`
//     if (!session && !local) {
//       console.log("Navigating to login");
//       navigate("/login");
//     } else {
//       // Nếu có thông tin trong session hoặc local, lấy thông tin từ nơi có dữ liệu
//       const accountData = JSON.parse(session || local);
//       if (accountData && accountData.customer) {
//         // Set customer details and ID
//         setCustomerId(accountData.customer.customerId);
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);

//         setUpdatedInfo({
//           customerName: accountData.customer.customerName,
//           customerEmail: accountData.customer.customerEmail,
//           customerPhone: accountData.customer.customerPhone,
//         });

//         // Set bookings
//         if (accountData.booking) {
//           setBookings(accountData.booking);
//         }

//         // Load profile image from localStorage
//         const storedProfileImage = localStorage.getItem("profileImage");
//         if (storedProfileImage) {
//           setProfileImage(storedProfileImage); // Set the profile image from localStorage
//         }
//       } else {
//         navigate("/login");
//       }
//     }
//   }, [navigate]);

//   // Handle image file selection and convert it to Base64
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64String = reader.result;
//         localStorage.setItem("profileImage", base64String); // Save Base64 image to localStorage
//         setProfileImage(base64String); // Update the state to display the image
//       };
//       reader.readAsDataURL(file); // Convert the file to Base64
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true); // Enable editing mode
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false); // Disable editing mode
//     // Reset the updatedInfo to the original customer info
//     setUpdatedInfo({
//       customerName,
//       customerEmail,
//       customerPhone,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       // Send the PUT request to update the customer info
//       const response = await axios.put(
//         `http://localhost:8080/customers/${customerId}`, // API endpoint
//         {
//           customerName: updatedInfo.customerName,
//           customerPhone: updatedInfo.customerPhone,
//           customerEmail: updatedInfo.customerEmail,
//         }
//       );

//       if (response.status === 200) {
//         const updatedCustomer = response.data.data;

//         // Update session storage with the new data
//         let session = sessionStorage.getItem("account");
//         if (session) {
//           const accountData = JSON.parse(session);
//           accountData.customer = updatedCustomer;
//           sessionStorage.setItem("account", JSON.stringify(accountData));

//           // Update the displayed customer info
//           setCustomerName(updatedCustomer.customerName);
//           setCustomerEmail(updatedCustomer.customerEmail);
//           setCustomerPhone(updatedCustomer.customerPhone);
//         }

//         setIsEditing(false); // Exit editing mode
//       }
//     } catch (error) {
//       console.error("Error updating customer info:", error);
//     }
//   };

//   const tittle = {
//     borderRadius: "15px",
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent",
//     display: "inline-block",
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-1" style={tittle}>
//           Tài khoản
//         </h2>
//         <Row>
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "60%", borderRadius: "50%" }}
//                   src={profileImage || "https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"}
//                   alt="User Avatar"
//                 />
//               </div>
//               <div>
//                 <Form.Group controlId="formFile" className="mt-3">
//                   <Form.Label>Upload Profile Image</Form.Label>
//                   <Form.Control type="file" onChange={handleImageChange} />
//                 </Form.Group>
//               </div>
//             </div>

//             <hr />

//             <Form>
//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 as={Col}
//                 controlId="formLastName"
//               >
//                 <Form.Label>Tên đệm và tên *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerName}
//                   onChange={(e) =>
//                     setUpdatedInfo({ ...updatedInfo, customerName: e.target.value })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formEmail"
//               >
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control
//                   type="email"
//                   value={updatedInfo.customerEmail}
//                   onChange={(e) =>
//                     setUpdatedInfo({ ...updatedInfo, customerEmail: e.target.value })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formPhoneNumber"
//               >
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerPhone}
//                   onChange={(e) =>
//                     setUpdatedInfo({ ...updatedInfo, customerPhone: e.target.value })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               {isEditing ? (
//                 <div className="d-flex justify-content-between mt-5">
//                   <Button variant="danger" onClick={handleCancelEdit}>
//                     Hủy
//                   </Button>
//                   <Button variant="success" onClick={handleSave}>
//                     Lưu
//                   </Button>
//                 </div>
//               ) : (
//                 <Button
//                   variant="primary"
//                   className="w-100 mt-5"
//                   onClick={handleEdit}
//                 >
//                   Chỉnh sửa
//                 </Button>
//               )}
//             </Form>
//           </Col>

//           <Col md={4} className="border p-4 rounded shadow">
//             <div className="text-center mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p style={tittle}>
//               Tên đăng nhập: {customerName ? customerName : "Không có email"}
//             </p>
//             <Button
//               variant="success"
//               className="w-100 mb-2"
//               onClick={handleLogout}
//             >
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>

//         <h5 className="mt-5" style={tittle}>
//           Lịch sử giao dịch
//         </h5>
//         <Table striped bordered hover className="mt-3 mb-5">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã lấy vé</th>
//               <th>Thông tin vé</th>
//               <th>Tổng tiền</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length > 0 ? (
//               bookings.map((booking, index) => (
//                 <tr key={booking.bookingId}>
//                   <td>{index + 1}</td>
//                   <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                   <td>{booking.bookingId}</td>
//                   <td>
//                     {booking.tickets
//                       ? booking.tickets.map((ticket) => ticket.ticketId).join(", ")
//                       : "Không có vé"}
//                   </td>
//                   <td>{booking.bookingPrice} VND</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   Không có giao dịch
//                 </td>
//               </tr>
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 Tổng cộng
//               </td>
//               <td>
//                 {bookings.reduce((sum, booking) => sum + booking.bookingPrice, 0)}{" "}
//                 VND
//               </td>
//             </tr>
//           </tfoot>
//         </Table>
//       </Container>

//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios for API calls
// import BannerSecond from "../home/components/BannerSecond"; // Thêm BannerSecond để giống giao diện cũ
// import VisaBanner from "../home/components/VisaBanner"; // Thêm VisaBanner

// function Users() {
//   const [customerId, setCustomerId] = useState(""); // Add customer ID state
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [bookings, setBookings] = useState([]); // State for bookings
//   const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
//   const [updatedInfo, setUpdatedInfo] = useState({
//     customerName: "",
//     customerEmail: "",
//     customerPhone: "",
//   });
//   const [profileImage, setProfileImage] = useState(null); // State to store the profile image URL
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     localStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const session = sessionStorage.getItem("account");
//     const local = localStorage.getItem("account");

//     console.log("Session:", session); // Kiểm tra giá trị của session
//     console.log("Local:", local); // Kiểm tra giá trị của local storage

//     // Nếu cả `sessionStorage` và `localStorage` đều không có dữ liệu, chuyển hướng đến `/login`
//     if (!session && !local) {
//       console.log("Navigating to login");
//       navigate("/login");
//     } else {
//       // Nếu có thông tin trong session hoặc local, lấy thông tin từ nơi có dữ liệu
//       const accountData = JSON.parse(session || local);
//       if (accountData && accountData.customer) {
//         // Set customer details and ID
//         setCustomerId(accountData.customer.customerId);
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);

//         setUpdatedInfo({
//           customerName: accountData.customer.customerName,
//           customerEmail: accountData.customer.customerEmail,
//           customerPhone: accountData.customer.customerPhone,
//         });

//         // Set bookings
//         if (accountData.booking) {
//           setBookings(accountData.booking);
//         }

//         // Load profile image from localStorage
//         const storedProfileImage = localStorage.getItem("profileImage");
//         if (storedProfileImage) {
//           setProfileImage(storedProfileImage); // Set the profile image from localStorage
//         }
//       } else {
//         navigate("/login");
//       }
//     }
//   }, [navigate]);

//   // Handle image file selection and convert it to Base64
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     // Check if file is .jpg
//     if (file && file.type !== "image/jpeg") {
//       alert("Please upload a .jpg image.");
//       return;
//     }

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64String = reader.result;
//         localStorage.setItem("profileImage", base64String); // Save Base64 image to localStorage
//         setProfileImage(base64String); // Update the state to display the image
//       };
//       reader.readAsDataURL(file); // Convert the file to Base64
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true); // Enable editing mode
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false); // Disable editing mode
//     // Reset the updatedInfo to the original customer info
//     setUpdatedInfo({
//       customerName,
//       customerEmail,
//       customerPhone,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       // Send the PUT request to update the customer info
//       const response = await axios.put(
//         `http://localhost:8080/customers/${customerId}`, // API endpoint
//         {
//           customerName: updatedInfo.customerName,
//           customerPhone: updatedInfo.customerPhone,
//           customerEmail: updatedInfo.customerEmail,
//         }
//       );

//       if (response.status === 200) {
//         const updatedCustomer = response.data.data;

//         // Update session storage with the new data
//         let session = sessionStorage.getItem("account");
//         if (session) {
//           const accountData = JSON.parse(session);
//           accountData.customer = updatedCustomer;
//           sessionStorage.setItem("account", JSON.stringify(accountData));

//           // Update the displayed customer info
//           setCustomerName(updatedCustomer.customerName);
//           setCustomerEmail(updatedCustomer.customerEmail);
//           setCustomerPhone(updatedCustomer.customerPhone);
//         }

//         setIsEditing(false); // Exit editing mode
//       }
//     } catch (error) {
//       console.error("Error updating customer info:", error);
//     }
//   };

//   const tittle = {
//     borderRadius: "15px",
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent",
//     display: "inline-block",
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-1" style={tittle}>
//           Tài khoản
//         </h2>
//         <Row>
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "100%", borderRadius: "50%" }}
//                   src={
//                     profileImage ||
//                     "https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
//                   }
//                   alt="User Avatar"
//                 />
//               </div>
//               <div className="container">
//                 <h5 style={tittle}>{customerName || "Không có tên"}</h5>
//                 <p className="text-muted">
//                   Email: {customerEmail || "Không có email"}
//                 </p>
//                 <p className="text-muted">
//                   Số điện thoại: {customerPhone || "Không có số điện thoại"}
//                 </p>
//                 <Form.Group controlId="formFile" className="mt-3">
//                   <Form.Label>Upload Profile Image (.jpg only)</Form.Label>
//                   <Form.Control type="file" onChange={handleImageChange} />
//                 </Form.Group>
//               </div>
//             </div>

//             <hr />

//             <Form>
//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 as={Col}
//                 controlId="formLastName"
//               >
//                 <Form.Label>Tên đệm và tên *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerName}
//                   onChange={(e) =>
//                     setUpdatedInfo({
//                       ...updatedInfo,
//                       customerName: e.target.value,
//                     })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formEmail"
//               >
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control
//                   type="email"
//                   value={updatedInfo.customerEmail}
//                   onChange={(e) =>
//                     setUpdatedInfo({
//                       ...updatedInfo,
//                       customerEmail: e.target.value,
//                     })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formPhoneNumber"
//               >
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerPhone}
//                   onChange={(e) =>
//                     setUpdatedInfo({
//                       ...updatedInfo,
//                       customerPhone: e.target.value,
//                     })
//                   }
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               {isEditing ? (
//                 <div className="d-flex justify-content-between mt-5">
//                   <Button variant="danger" onClick={handleCancelEdit}>
//                     Hủy
//                   </Button>
//                   <Button variant="success" onClick={handleSave}>
//                     Lưu
//                   </Button>
//                 </div>
//               ) : (
//                 <Button
//                   variant="primary"
//                   className="w-100 mt-5"
//                   onClick={handleEdit}
//                 >
//                   Chỉnh sửa
//                 </Button>
//               )}
//             </Form>
//           </Col>

//           <Col md={4} className="border p-4 rounded shadow">
//             <div className="text-center mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p style={tittle}>
//               Tên đăng nhập: {customerName ? customerName : "Không có email"}
//             </p>
//             <Button
//               variant="success"
//               className="w-100 mb-2"
//               onClick={handleLogout}
//             >
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>

//         <h5 className="mt-5" style={tittle}>
//           Lịch sử giao dịch
//         </h5>
//         <Table striped bordered hover className="mt-3 mb-5">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Thời gian giao dịch</th>
//               <th>Mã lấy vé</th>
//               <th>Thông tin vé</th>
//               <th>Tổng tiền</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length > 0 ? (
//               bookings.map((booking, index) => (
//                 <tr key={booking.bookingId}>
//                   <td>{index + 1}</td>
//                   <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
//                   <td>{booking.bookingId}</td>
//                   <td>
//                     {booking.tickets
//                       ? booking.tickets
//                           .map((ticket) => ticket.ticketId)
//                           .join(", ")
//                       : "Không có vé"}
//                   </td>
//                   <td>{booking.bookingPrice} VND</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   Không có giao dịch
//                 </td>
//               </tr>
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4" className="text-right">
//                 Tổng cộng
//               </td>
//               <td>
//                 {bookings.reduce(
//                   (sum, booking) => sum + booking.bookingPrice,
//                   0
//                 )}{" "}
//                 VND
//               </td>
//             </tr>
//           </tfoot>
//         </Table>
//       </Container>

//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";

// function Users() {
//   const [customerId, setCustomerId] = useState(""); 
//   const [customerName, setCustomerName] = useState("John Doe");
//   const [customerEmail, setCustomerEmail] = useState("dubo01689@gmail.com");
//   const [customerPhone, setCustomerPhone] = useState("0123456781");
//   const [profileImage, setProfileImage] = useState(null); 
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     localStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const session = sessionStorage.getItem("account");
//     const local = localStorage.getItem("account");

//     // Load profile image based on customer ID
//     if (session || local) {
//       const accountData = JSON.parse(session || local);
//       if (accountData && accountData.customer) {
//         setCustomerId(accountData.customer.customerId);
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);

//         // Load profile image specific to this customer
//         const storedProfileImage = localStorage.getItem(`profileImage-${accountData.customer.customerId}`);
//         if (storedProfileImage) {
//           setProfileImage(storedProfileImage);
//         }
//       } else {
//         navigate("/login");
//       }
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   // Handle image file selection and convert it to Base64
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     // Check if the file is a .jpg
//     if (file && file.type !== "image/jpeg") {
//       alert("Please upload a .jpg image.");
//       return;
//     }

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64String = reader.result;
//         // Save Base64 image to localStorage with unique key per customer
//         localStorage.setItem(`profileImage-${customerId}`, base64String);
//         setProfileImage(base64String);
//       };
//       reader.readAsDataURL(file); // Convert the file to Base64
//     }
//   };

//   const profileTextStyle = {
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <Container className="mt-5">
//         <Row className="justify-content-center">
//           <Col md={8} className="border p-4 rounded shadow text-center">
//             {/* Upload Section */}
//             <Form.Group controlId="formFile" className="mb-3">
//               <Form.Label style={profileTextStyle}>Upload Profile Image (.jpg only)</Form.Label>
//               <Form.Control type="file" onChange={handleImageChange} />
//             </Form.Group>

//             {/* Profile Image */}
//             <img
//               style={{ width: "100px", borderRadius: "50%" }}
//               src={profileImage || "https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"}
//               alt="User Avatar"
//               className="mb-3"
//             />
            
//             {/* Profile Information */}
//             <h5 style={profileTextStyle}>{customerName || "Không có tên"}</h5>
//             <p className="text-muted">Email: {customerEmail || "Không có email"}</p>
//             <p className="text-muted">Số điện thoại: {customerPhone || "Không có số điện thoại"}</p>

//             {/* Logout Button */}
//             <Button variant="success" className="w-100 mt-4" onClick={handleLogout}>
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";

// function Users() {
//   const [customerId, setCustomerId] = useState("");
//   const [customerName, setCustomerName] = useState("John Doe");
//   const [customerEmail, setCustomerEmail] = useState("dubo01689@gmail.com");
//   const [customerPhone, setCustomerPhone] = useState("0123456781");
//   const [profileImage, setProfileImage] = useState(null);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     localStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const session = sessionStorage.getItem("account");
//     const local = localStorage.getItem("account");

//     // Load profile image based on customer ID
//     if (session || local) {
//       const accountData = JSON.parse(session || local);
//       if (accountData && accountData.customer) {
//         setCustomerId(accountData.customer.customerId);
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);

//         // Load profile image specific to this customer
//         const storedProfileImage = localStorage.getItem(`profileImage-${accountData.customer.customerId}`);
//         if (storedProfileImage) {
//           setProfileImage(storedProfileImage);
//         }
//       } else {
//         navigate("/login");
//       }
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   // Handle image file selection and convert it to Base64
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     // Check if the file is a .jpg
//     if (file && file.type !== "image/jpeg") {
//       alert("Please upload a .jpg image.");
//       return;
//     }

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64String = reader.result;
//         // Save Base64 image to localStorage with unique key per customer
//         localStorage.setItem(`profileImage-${customerId}`, base64String);
//         setProfileImage(base64String);
//       };
//       reader.readAsDataURL(file); // Convert the file to Base64
//     }
//   };

//   const profileTextStyle = {
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-1" style={profileTextStyle}>
//           Tài khoản
//         </h2>
//         <Row>
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               {/* Profile Image and Upload */}
//               <div className="mr-3">
//                 <img
//                   style={{ width: "100%", borderRadius: "50%" }}
//                   src={
//                     profileImage ||
//                     "https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
//                   }
//                   alt="User Avatar"
//                 />
//                 <Form.Group controlId="formFile" className="mt-3">
//                   <Form.Label>Upload Profile Image (.jpg only)</Form.Label>
//                   <Form.Control type="file" onChange={handleImageChange} />
//                 </Form.Group>
//               </div>
              
//               {/* Profile Information */}
//               <div className="container">
//                 <h5 style={profileTextStyle}>{customerName || "Không có tên"}</h5>
//                 <p className="text-muted">Email: {customerEmail || "Không có email"}</p>
//                 <p className="text-muted">Số điện thoại: {customerPhone || "Không có số điện thoại"}</p>
//               </div>
//             </div>

//             <hr />

//             {/* Edit Profile Form */}
//             <Form>
//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 as={Col}
//                 controlId="formLastName"
//               >
//                 <Form.Label>Tên đệm và tên *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={customerName}
//                   readOnly
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formEmail"
//               >
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control
//                   type="email"
//                   value={customerEmail}
//                   readOnly
//                 />
//               </Form.Group>

//               <Form.Group
//                 style={{
//                   textAlign: "left",
//                   marginTop: "20px",
//                   color: "#8bc34a",
//                 }}
//                 controlId="formPhoneNumber"
//               >
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={customerPhone}
//                   readOnly
//                 />
//               </Form.Group>
//             </Form>
//           </Col>

//           {/* Logout Section */}
//           <Col md={4} className="border p-4 rounded shadow text-center">
//             <div className="mb-4">
//               <img
//                 style={{ width: "30%" }}
//                 src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
//                 alt="logo"
//                 className="img-fluid"
//               />
//             </div>
//             <p style={profileTextStyle}>
//               Tên đăng nhập: {customerName || "Không có email"}
//             </p>
//             <Button variant="success" className="w-100 mb-2" onClick={handleLogout}>
//               Đăng xuất
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios for API calls
// import BannerSecond from "../home/components/BannerSecond";
// import VisaBanner from "../home/components/VisaBanner";

// function Users() {
//   const [customerId, setCustomerId] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [profileImage, setProfileImage] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedInfo, setUpdatedInfo] = useState({
//     customerName: "",
//     customerEmail: "",
//     customerPhone: "",
//   });
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("account");
//     localStorage.removeItem("account");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const session = sessionStorage.getItem("account");
//     const local = localStorage.getItem("account");

//     if (session || local) {
//       const accountData = JSON.parse(session || local);
//       if (accountData && accountData.customer) {
//         setCustomerId(accountData.customer.customerId);
//         setCustomerName(accountData.customer.customerName);
//         setCustomerEmail(accountData.customer.customerEmail);
//         setCustomerPhone(accountData.customer.customerPhone);
//         setUpdatedInfo({
//           customerName: accountData.customer.customerName,
//           customerEmail: accountData.customer.customerEmail,
//           customerPhone: accountData.customer.customerPhone,
//         });

//         const storedProfileImage = localStorage.getItem(`profileImage-${accountData.customer.customerId}`);
//         if (storedProfileImage) {
//           setProfileImage(storedProfileImage);
//         }
//       } else {
//         navigate("/login");
//       }
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type !== "image/jpeg") {
//       alert("Please upload a .jpg image.");
//       return;
//     }
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64String = reader.result;
//         localStorage.setItem(`profileImage-${customerId}`, base64String);
//         setProfileImage(base64String);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     setUpdatedInfo({
//       customerName,
//       customerEmail,
//       customerPhone,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await axios.put(`http://localhost:8080/customers/${customerId}`, {
//         customerName: updatedInfo.customerName,
//         customerEmail: updatedInfo.customerEmail,
//         customerPhone: updatedInfo.customerPhone,
//       });

//       if (response.status === 200) {
//         const updatedCustomer = response.data.data;

//         // Update session storage with the new data
//         let session = sessionStorage.getItem("account");
//         if (session) {
//           const accountData = JSON.parse(session);
//           accountData.customer = updatedCustomer;
//           sessionStorage.setItem("account", JSON.stringify(accountData));

//           // Update the displayed customer info
//           setCustomerName(updatedCustomer.customerName);
//           setCustomerEmail(updatedCustomer.customerEmail);
//           setCustomerPhone(updatedCustomer.customerPhone);
//         }

//         setIsEditing(false); // Exit editing mode
//       }
//     } catch (error) {
//       console.error("Error updating customer info:", error);
//     }
//   };

//   const profileTextStyle = {
//     color: "#8bc34a",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <Container className="mt-5">
//         <h2 className="text-center mb-1" style={profileTextStyle}>
//           Tài khoản
//         </h2>
//         <Row>
//           <Col md={8} className="border p-4 rounded shadow">
//             <div className="d-flex">
//               <div className="mr-3">
//                 <img
//                   style={{ width: "100px", borderRadius: "50%" }}
//                   src={profileImage || "https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"}
//                   alt="User Avatar"
//                 />
//                 <Form.Group controlId="formFile" className="mt-3">
//                   <Form.Label>Upload Profile Image (.jpg only)</Form.Label>
//                   <Form.Control type="file" onChange={handleImageChange} />
//                 </Form.Group>
//               </div>
//               <div className="container">
//                 <h5 style={profileTextStyle}>{customerName || "Không có tên"}</h5>
//                 <p className="text-muted">Email: {customerEmail || "Không có email"}</p>
//                 <p className="text-muted">Số điện thoại: {customerPhone || "Không có số điện thoại"}</p>
//               </div>
//             </div>

//             <hr />

//             <Form>
//               <Form.Group controlId="formLastName" style={{ textAlign: "left", marginTop: "20px", color: "#8bc34a" }}>
//                 <Form.Label>Tên đệm và tên *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerName}
//                   onChange={(e) => setUpdatedInfo({ ...updatedInfo, customerName: e.target.value })}
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formEmail" style={{ textAlign: "left", marginTop: "20px", color: "#8bc34a" }}>
//                 <Form.Label>Email *</Form.Label>
//                 <Form.Control
//                   type="email"
//                   value={updatedInfo.customerEmail}
//                   onChange={(e) => setUpdatedInfo({ ...updatedInfo, customerEmail: e.target.value })}
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formPhoneNumber" style={{ textAlign: "left", marginTop: "20px", color: "#8bc34a" }}>
//                 <Form.Label>Số điện thoại *</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={updatedInfo.customerPhone}
//                   onChange={(e) => setUpdatedInfo({ ...updatedInfo, customerPhone: e.target.value })}
//                   readOnly={!isEditing}
//                 />
//               </Form.Group>

//               {isEditing ? (
//                 <div className="d-flex justify-content-between mt-5">
//                   <Button variant="danger" onClick={handleCancelEdit}>Hủy</Button>
//                   <Button variant="success" onClick={handleSave}>Lưu</Button>
//                 </div>
//               ) : (
//                 <Button variant="primary" className="w-100 mt-5" onClick={handleEdit}>Chỉnh sửa</Button>
//               )}
//             </Form>
//           </Col>

//           <Col md={4} className="border p-4 rounded shadow text-center">
//             <div className="mb-4">
//               <img style={{ width: "30%" }} src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="logo" className="img-fluid" />
//             </div>
//             <p style={profileTextStyle}>Tên đăng nhập: {customerName || "Không có email"}</p>
//             <Button variant="success" className="w-100 mb-2" onClick={handleLogout}>Đăng xuất</Button>
//           </Col>
//         </Row>
//       </Container>
//       <VisaBanner />
//     </div>
//   );
// }

// export default Users;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import BannerSecond from "../home/components/BannerSecond";
import VisaBanner from "../home/components/VisaBanner";

function Users() {
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [bookings, setBookings] = useState([]); // State for bookings
  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("account");
    localStorage.removeItem("account");
    navigate("/login");
  };

  useEffect(() => {
    const session = sessionStorage.getItem("account");
    const local = localStorage.getItem("account");

    if (session || local) {
      const accountData = JSON.parse(session || local);
      if (accountData && accountData.customer) {
        setCustomerId(accountData.customer.customerId);
        setCustomerName(accountData.customer.customerName);
        setCustomerEmail(accountData.customer.customerEmail);
        setCustomerPhone(accountData.customer.customerPhone);
        setUpdatedInfo({
          customerName: accountData.customer.customerName,
          customerEmail: accountData.customer.customerEmail,
          customerPhone: accountData.customer.customerPhone,
        });

        // Load profile image
        const storedProfileImage = localStorage.getItem(`profileImage-${accountData.customer.customerId}`);
        if (storedProfileImage) {
          setProfileImage(storedProfileImage);
        }

        // Load bookings
        if (accountData.booking) {
          setBookings(accountData.booking);
        }
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "image/jpeg") {
      alert("Please upload a .jpg image.");
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem(`profileImage-${customerId}`, base64String);
        setProfileImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedInfo({
      customerName,
      customerEmail,
      customerPhone,
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/customers/${customerId}`, {
        customerName: updatedInfo.customerName,
        customerEmail: updatedInfo.customerEmail,
        customerPhone: updatedInfo.customerPhone,
      });

      if (response.status === 200) {
        const updatedCustomer = response.data.data;

        // Update session storage with the new data
        let session = sessionStorage.getItem("account");
        if (session) {
          const accountData = JSON.parse(session);
          accountData.customer = updatedCustomer;
          sessionStorage.setItem("account", JSON.stringify(accountData));

          // Update the displayed customer info
          setCustomerName(updatedCustomer.customerName);
          setCustomerEmail(updatedCustomer.customerEmail);
          setCustomerPhone(updatedCustomer.customerPhone);
        }

        setIsEditing(false); // Exit editing mode
      }
    } catch (error) {
      console.error("Error updating customer info:", error);
    }
  };

  const profileTextStyle = {
    color: "#8bc34a",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div>
      <BannerSecond />
      <Container className="mt-5">
        <h2 className="text-center mb-1" style={profileTextStyle}>
          Tài khoản
        </h2>
        <Row>
          <Col md={8} className="border p-4 rounded shadow">
            <div className="d-flex">
              <div className="mr-3">
                <img
                  style={{ width: "100px", borderRadius: "50%" }}
                  src={profileImage || "https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"}
                  alt="User Avatar"
                />
                <Form.Group controlId="formFile" className="mt-3">
                  <Form.Label>Upload Profile Image (.jpg only)</Form.Label>
                  <Form.Control type="file" onChange={handleImageChange} />
                </Form.Group>
              </div>
              <div className="container">
                <h5 style={profileTextStyle}>{customerName || "Không có tên"}</h5>
                <p className="text-muted">Email: {customerEmail || "Không có email"}</p>
                <p className="text-muted">Số điện thoại: {customerPhone || "Không có số điện thoại"}</p>
              </div>
            </div>

            <hr />

            <Form>
              <Form.Group controlId="formLastName" style={{ textAlign: "left", marginTop: "20px", color: "#8bc34a" }}>
                <Form.Label>Tên đệm và tên *</Form.Label>
                <Form.Control
                  type="text"
                  value={updatedInfo.customerName}
                  onChange={(e) => setUpdatedInfo({ ...updatedInfo, customerName: e.target.value })}
                  readOnly={!isEditing}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" style={{ textAlign: "left", marginTop: "20px", color: "#8bc34a" }}>
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  value={updatedInfo.customerEmail}
                  onChange={(e) => setUpdatedInfo({ ...updatedInfo, customerEmail: e.target.value })}
                  readOnly={!isEditing}
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber" style={{ textAlign: "left", marginTop: "20px", color: "#8bc34a" }}>
                <Form.Label>Số điện thoại *</Form.Label>
                <Form.Control
                  type="text"
                  value={updatedInfo.customerPhone}
                  onChange={(e) => setUpdatedInfo({ ...updatedInfo, customerPhone: e.target.value })}
                  readOnly={!isEditing}
                />
              </Form.Group>

              {isEditing ? (
                <div className="d-flex justify-content-between mt-5">
                  <Button variant="danger" onClick={handleCancelEdit}>Hủy</Button>
                  <Button variant="success" onClick={handleSave}>Lưu</Button>
                </div>
              ) : (
                <Button variant="primary" className="w-100 mt-5" onClick={handleEdit}>Chỉnh sửa</Button>
              )}
            </Form>
          </Col>

          <Col md={4} className="border p-4 rounded shadow text-center">
            <div className="mb-4">
              <img style={{ width: "30%" }} src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png" alt="logo" className="img-fluid" />
            </div>
            <p style={profileTextStyle}>Tên đăng nhập: {customerName || "Không có email"}</p>
            <Button variant="success" className="w-100 mb-2" onClick={handleLogout}>Đăng xuất</Button>
          </Col>
        </Row>

        <h5 className="mt-5" style={profileTextStyle}>
          Lịch sử giao dịch
        </h5>
        <Table striped bordered hover className="mt-3 mb-5">
          <thead>
            <tr>
              <th>STT</th>
              <th>Thời gian giao dịch</th>
              <th>Mã lấy vé</th>
              <th>Thông tin vé</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={booking.bookingId}>
                  <td>{index + 1}</td>
                  <td>{new Date(booking.bookingCreateAt).toLocaleString()}</td>
                  <td>{booking.bookingId}</td>
                  <td>
                    {booking.tickets
                      ? booking.tickets.map((ticket) => ticket.ticketId).join(", ")
                      : "Không có vé"}
                  </td>
                  <td>{booking.bookingPrice} VND</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Không có giao dịch
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right">
                Tổng cộng
              </td>
              <td>
                {bookings.reduce((sum, booking) => sum + booking.bookingPrice, 0)} VND
              </td>
            </tr>
          </tfoot>
        </Table>
      </Container>

      <VisaBanner />
    </div>
  );
}

export default Users;
