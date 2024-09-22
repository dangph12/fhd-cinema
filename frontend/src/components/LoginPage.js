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
//                                             <label for="username">Username</label>
//                                             <input type="text" class="form-control" id="username"/>

//                                         </div>
//                                         <div class="form-group last mb-4">
//                                             <label for="password">Password</label>
//                                             <input type="password" class="form-control" id="password"/>

//                                         </div>

//                                         <div class="d-flex mb-5 align-items-center">
//                                             <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
//                                                 <input type="checkbox" checked="checked" />
//                                                 <div class="control__indicator"></div>
//                                             </label>
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


import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";



const LoginPage = () => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await delay(500);
        console.log(`Username :${inputUsername}, Password :${inputPassword}`);
        if (inputUsername !== "admin" || inputPassword !== "admin") {
            setShow(true);
        }
        setLoading(false);
    };

    const handlePassword = () => { };

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <div
            className="sign-in__wrapper"
            style={{ backgroundImage: `url()` }}
        >
            {/* Overlay */}
            <div className="sign-in__backdrop"></div>
            {/* Form */}
            <Form className="shadow p-3 bg-white rounded" onSubmit={handleSubmit}>
                {/* Header */}
                <img
                    className="img-thumbnail mx-auto d-block mb-2"
                    src="img/logo-100x100.png"
                    alt="logo"
                />
                <div className="h4 mb-2 text-center">Sign In</div>
                {/* ALert */}
                {show ? (
                    <Alert
                        className="mb-2"
                        variant="danger"
                        onClose={() => setShow(false)}
                        dismissible
                    >
                        Incorrect username or password.
                    </Alert>
                ) : (
                    <div />
                )}
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputUsername}
                        placeholder="Username"
                        onChange={(e) => setInputUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={inputPassword}
                        placeholder="Password"
                        onChange={(e) => setInputPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="checkbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                {!loading ? (
                    <Button className="w-100" variant="primary" type="submit">
                        Log In
                    </Button>
                ) : (
                    <Button className="w-100" variant="primary" type="submit" disabled>
                        Logging In...
                    </Button>
                )}
                <div className="d-grid justify-content-end">
                    <Button
                        className="text-muted px-0"
                        variant="link"
                        onClick={handlePassword}
                    >
                        Forgot password?
                    </Button>
                </div>
            </Form>
            {/* Footer */}
        </div>
    );
};

export default LoginPage;
