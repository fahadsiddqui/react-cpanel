import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from 'axios';

const Login = () => {
    function Login(event) {
        event.preventDefault()

        var loginEmail = document.getElementById('loginEmail').value
        var loginPassword = document.getElementById('loginPassword').value

        axios({
            method: 'post',
            url: 'http://192.168.0.50:82/cpanel_api/api/auth/login',
            data: {
                email: loginEmail,
                password: loginPassword
            },
            withCredentials: true
        })
            .then(function (response) {
                if (response.data.status === 200) {
                    // alert(response.status)
                    // console.log("loginRequestUser ====>", response.data.loginRequestUser.role)
                    // globalStateUpdate(prev => ({
                    //     ...prev,
                    //     loginStatus: true,
                    //     user: response.data.loginRequestUser,
                    //     role: response.data.loginRequestUser.role
                    // }))

                    console.log("data " , response.data);

                    alert(response.data.message)
                }else{
                    alert(response.data.message)
                }
            })
            .catch(function (error) {
                alert(error)
                console.log("ldafjldja ", error.response.data.message)

            });

        return false;
    }
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Admin Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form  onSubmit={Login}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" id="loginEmail" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" id="loginPassword" />
                            </Form.Group>
                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Masud Rana. All Rights Reserved.</h6>
            </Container>
        </>
    );
};

export default Login;