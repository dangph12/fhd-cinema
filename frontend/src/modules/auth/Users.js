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

import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Table,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Users() {
  let navigate = useNavigate();

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    console.log("Session:", session); // Kiểm tra giá trị của session
    if (!session) {
      console.log("Navigating to login");
      navigate("/login");
    }
  }, []);
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Tài khoản</h2>
      <Row>
        {/* Left Side Form */}
        <Col md={8} className="border p-4 rounded">
          <div className="d-flex">
            <div className="mr-3">
              <img style={{width: "60%"}} src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg" alt="User Avatar" className="rounded-circle" />
            </div>
            <div>
              <h6>Trang Vũ</h6>
              <p>Điểm RP: 0 &nbsp;&nbsp; Tổng visit: 0</p>
              <p>Expired visit: 0 &nbsp;&nbsp; Active visit: 0</p>
              <p>Tổng chi tiêu trong tháng (10/2024): 0 VND</p>
              <p>
                Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang
                200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
              </p>
            </div>
          </div>

          <hr />

          {/* Profile Form */}
          <Form>
            <Row>
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>Họ *</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Tên đệm và tên *</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Row>

            <Form.Group controlId="formEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Mật khẩu *</Form.Label>
              <InputGroup>
                <Form.Control type="password" placeholder="********" />
                <Button variant="success">Đổi mật khẩu</Button>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Số điện thoại *</Form.Label>
              <Form.Control type="text" placeholder="0337641615" />
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label>Giới tính *</Form.Label>
              <Form.Control as="select">
                <option>Nữ</option>
                <option>Nam</option>
              </Form.Control>
            </Form.Group>

            <Row>
              <Form.Group as={Col} controlId="formBirthDay">
                <Form.Label>Ngày sinh *</Form.Label>
                <Form.Control as="select">
                  <option>02</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formBirthMonth">
                <Form.Label>Tháng sinh *</Form.Label>
                <Form.Control as="select">
                  <option>02</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formBirthYear">
                <Form.Label>Năm sinh *</Form.Label>
                <Form.Control as="select">
                  <option>2000</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Form.Group controlId="formCity">
              <Form.Label>Tỉnh/Thành phố *</Form.Label>
              <Form.Control type="text" placeholder="Hà Nội" />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Địa chỉ *</Form.Label>
              <Form.Control type="text" placeholder="Hà Nội" />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Cập nhật
            </Button>
          </Form>
        </Col>

        {/* Right Side QR and Account Info */}
        <Col md={4} className="border p-4 rounded">
          <div className="text-center mb-4">
            <img style={{width: "30%"}}
              src="https://bhdstar.vn/wp-content/uploads/2023/08/logo.png"
              alt="QR Code"
              className="img-fluid"
            />
          </div>
          <p>Tên đăng nhập: shiddle01@gmail.com</p>
          <p>Số thẻ: ONLAI141975</p>
          <p>Hạng thẻ: Star</p>
          <p>Ngày đăng ký: 05/10/2024</p>

          <Button variant="success" className="w-100 mb-2">
            Đăng xuất
          </Button>

          <div className="text-right mt-2">
            <a href="#" className="text-danger">
              Xóa thông tin
            </a>
          </div>
        </Col>
      </Row>

      {/* Transaction History */}
      <h5 className="mt-5">Lịch sử giao dịch</h5>
      {/* <Row className="mt-3">
        <Col md={12}>
          <Form.Group as={Col} md="3">
            <Form.Control as="select">
              <option>Đặt vé</option>
              <option>Giao dịch khác</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Control type="month" />
          </Form.Group>
        </Col>
      </Row> */}

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>STT</th>
            <th>Thời gian giao dịch</th>
            <th>Mã lấy vé</th>
            <th>Thông tin RP</th>
            <th>Tổng tiền</th>
            <th>Điểm RP</th>
          </tr>
        </thead>
        <tbody>
          {/* Add dynamic data here */}
          <tr>
            <td colSpan="6" className="text-center">
              Không có giao dịch
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">
              Tổng cộng
            </td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
}

export default Users;
