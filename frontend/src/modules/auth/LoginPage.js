// import React from 'react'


// function LoginPage() {
//     return (
//         <div>
//             <div class="content">
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-md-6">
//                             <img src="images/undraw_remotely_2j6y.svg" alt="Image" class="img-fluid"/>
//                         </div>
//                         <div class="col-md-6 contents">
//                             <div class="row justify-content-center">
//                                 <div class="col-md-8">
//                                     <div class="mb-4">
//                                         <h3>Sign In</h3>
//                                         <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
//                                     </div>
//                                     <form action="#" method="post">
//                                         <div class="form-group first">
//                                             <div for="username">Username</div>
//                                             <input type="text" class="form-control" id="username"/>

//                                         </div>
//                                         <div class="form-group last mb-4">
//                                             <div for="password">Password</div>
//                                             <input type="password" class="form-control" id="password"/>

//                                         </div>

//                                         <div class="d-flex mb-5 align-items-center">
//                                             <div class="control control--checkbox mb-0"><span class="caption">Remember me</span>
//                                                 <input type="checkbox" checked="checked" />
//                                                 <div class="control__indicator"></div>
//                                             </div>
//                                             <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
//                                         </div>

//                                         <input type="submit" value="Log In" class="btn btn-block btn-primary"/>

//                                             <span class="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>

//                                             <div class="social-login">
//                                                 <a href="#" class="facebook">
//                                                     <span class="icon-facebook mr-3"></span>
//                                                 </a>
//                                                 <a href="#" class="twitter">
//                                                     <span class="icon-twitter mr-3"></span>
//                                                 </a>
//                                                 <a href="#" class="google">
//                                                     <span class="icon-google mr-3"></span>
//                                                 </a>
//                                             </div>
//                                     </form>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoginPage


// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";



// const LoginPage = () => {
//     const [inputUsername, setInputUsername] = useState("");
//     const [inputPassword, setInputPassword] = useState("");

//     const [show, setShow] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);
//         await delay(500);
//         console.log(`Username :${inputUsername}, Password :${inputPassword}`);
//         if (inputUsername !== "admin" || inputPassword !== "admin") {
//             setShow(true);
//         }
//         setLoading(false);
//     };

//     const handlePassword = () => { };

//     function delay(ms) {
//         return new Promise((resolve) => setTimeout(resolve, ms));
//     }

//     return (
//         <div
//             className="sign-in__wrapper"
//             style={{ backgroundImage: `url()` }}
//         >
//             {/* Overlay */}
//             <div className="sign-in__backdrop"></div>
//             {/* Form */}
//             <Form className="shadow p-3 bg-white rounded" onSubmit={handleSubmit}>
//                 {/* Header */}
//                 <img
//                     className="img-thumbnail mx-auto d-block mb-2"
//                     src="https://www.bhdstar.vn/wp-content/uploads/2024/09/logo2024.png"
//                     alt="logo"
//                 />
//                 <div className="h4 mb-2 text-center">Sign In</div>
//                 {/* ALert */}
//                 {show ? (
//                     <Alert
//                         className="mb-2"
//                         variant="danger"
//                         onClose={() => setShow(false)}
//                         dismissible
//                     >
//                         Incorrect username or password.
//                     </Alert>
//                 ) : (
//                     <div />
//                 )}
//                 <Form.Group className="mb-2" controlId="username">
//                     <Form.div>Username</Form.div>
//                     <Form.Control
//                         type="text"
//                         value={inputUsername}
//                         placeholder="Username"
//                         onChange={(e) => setInputUsername(e.target.value)}
//                         required
//                     />
//                 </Form.Group>
//                 <Form.Group className="mb-2" controlId="password">
//                     <Form.div>Password</Form.div>
//                     <Form.Control
//                         type="password"
//                         value={inputPassword}
//                         placeholder="Password"
//                         onChange={(e) => setInputPassword(e.target.value)}
//                         required
//                     />
//                 </Form.Group>
//                 <Form.Group className="mb-2" controlId="checkbox">
//                     <Form.Check type="checkbox" div="Remember me" />
//                 </Form.Group>
//                 {!loading ? (
//                     <Button className="w-100" variant="primary" type="submit">
//                         Log In
//                     </Button>
//                 ) : (
//                     <Button className="w-100" variant="primary" type="submit" disabled>
//                         Logging In...
//                     </Button>
//                 )}
//                 <div className="d-grid justify-content-end">
//                     <Button
//                         className="text-muted px-0"
//                         variant="link"
//                         onClick={handlePassword}
//                     >
//                         Forgot password?
//                     </Button>
//                 </div>
//             </Form>
//             {/* Footer */}
//         </div>
//     );
// };

// export default LoginPage;


import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <div className="form-container">
                <div className="login-form">
                    <h2>Đăng nhập tài khoản</h2>
                    <form>
                        <div>Email *</div>
                        <input type="email" placeholder="Tài khoản hoặc địa chỉ email" required />
                        <div>Mật khẩu *</div>
                        <input type="password" placeholder="Mật khẩu" required />
                        <button type="submit">ĐĂNG NHẬP</button>
                        <a href="#">Quên mật khẩu?</a>
                    </form>
                </div>
                <div className="register-form">
                    <h2>Đăng ký tài khoản</h2>
                    <form>
                        <div>Họ *</div>
                        <input type="text" required />
                        <div>Tên đệm và tên *</div>
                        <input type="text" required />
                        <div className="register-form">
                            <form>
                                {/* Other form elements */}
                                <div>Giới tính *</div>
                                <div>
                                    <input type="radio" id="male" name="gender" value="Nam" />
                                    <label htmlFor="male">Nam</label>
                                    <input type="radio" id="female" name="gender" value="Nữ" />
                                    <label htmlFor="female">Nữ</label>
                                    <input type="radio" id="other" name="gender" value="Khác" />
                                    <label htmlFor="other">Khác</label>
                                </div>
                                {/* Other form elements */}
                            </form>
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
                            <input type="checkbox" required /> Tôi đã đọc, hiểu và đồng ý với các điều khoản
                        </label>
                        <button type="submit">ĐĂNG KÝ</button>
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="white-image">
                    <img src="https://bhdstar.vn/wp-content/uploads/2024/09/Rectangle-27.png" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

