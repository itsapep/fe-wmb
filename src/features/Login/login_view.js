import "./login_view.css"
import { Component, useEffect, useState } from "react";
import {useAuth} from "../../shared/hook/useAuth";
import { userCredential } from "./userCredential";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { withLoading } from "../../shared/component/WithLoading";

export default function LoginView() {
    const {login} = useAuth();
    const [loginInput, setLoginInput] = useState({
        username : '',
        password : '',
        isValid: false,
        userNameTouched: false,
        passwordTouched: false,
        errorName: {email: '', password: ''}
    })

    const handleUsernameChange = (event) => {
        var validRegex = '([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\\.[A-Z|a-z]{2,})+';
        const email = event.target.value;
        if (email.match(validRegex)) {
            setLoginInput({
                username: email,
                errorName: {...loginInput.errorName, email: ''},
                userNameTouched: true
            }, validate);
        } else {
            setLoginInput({
                errorName: {...loginInput.errorName, email: 'Invalid email format'}
            }, validate);
        }
    }

    const handlePasswordChange = (event) => {
        const userPassword = event.target.value;
        if (userPassword.length > 5) {
            setLoginInput({
                password: userPassword,
                errorName: {...loginInput.errorName, password: ''},
                passwordTouched: true
            }, validate);
        } else {
            setLoginInput({
                errorName: {...loginInput.errorName, password: '6 min length'}
            }, validate);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const {username, password} = loginInput;
        // props.onShowLoading(true)
        try {
            await login(userCredential(username, password));
            // props.onShowLoading(false);
        } catch (error) {
            // props.onShowLoading(false);
            // props.onShowError(error.message);
        }
    };

    const validate = () => {
        const {errorName, userNameTouched, passwordTouched} = loginInput;
        if (errorName.email.length > 0 || errorName.password.length > 0 ||
            !userNameTouched || !passwordTouched) {
            setLoginInput({
                isValid: false
            })
        } else {
            setLoginInput({
                isValid: true
            })
        }
    }

    return (
        <>
            <div className='main-container'>
                <div className='banner'>
                    <h1>WMB</h1>
                    <p>Warung Makan Bahari</p>
                </div>
                <div className='loginInput'>
                    <Card.Body>
                        <Card.Title><h2>Login</h2></Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-floating mb-3">
                                <FloatingLabel label='Email'>
                                    <Form.Control size="lg" type="email" placeholder="enter email"
                                                    onChange={handleUsernameChange}/>
                                </FloatingLabel>
                                <Form.Text className="text-danger">
                                    {loginInput.errorName.email}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="form-floating mb-3">
                                <FloatingLabel label='Password'>
                                    <Form.Control size="lg" type="password" placeholder="enter password"
                                                    onChange={handlePasswordChange}/>
                                </FloatingLabel>
                                <Form.Text className="text-danger">
                                    {loginInput.errorName.password}
                                </Form.Text>
                            </Form.Group>
                            <div className="d-grid">
                                <Button size="lg" variant="primary" type="submit"
                                        disabled={!loginInput.isValid}>Login</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </div>
            </div>
        </>
    )
}