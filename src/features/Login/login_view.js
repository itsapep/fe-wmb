import "./login_view.css"
import { Component } from "react";
import { userCredential } from "./userCredential";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { withLoading } from "../../shared/component/WithLoading";

class LoginView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : '',
            isValid: false,
            userNameTouched: false,
            passwordTouched: false,
            errorName: {email: '', password: ''}
        }
    }

    handleUsernameChange = (event) => {
        var validRegex = '([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\\.[A-Z|a-z]{2,})+';
        const email = event.target.value;
        if (email.match(validRegex)) {
            this.setState({
                username: email,
                errorName: {...this.state.errorName, email: ''},
                userNameTouched: true
            }, this.validate);
        } else {
            this.setState({
                errorName: {...this.state.errorName, email: 'Invalid email format'}
            }, this.validate);
        }
    }

    handlePasswordChange = (event) => {
        const userPassword = event.target.value;
        if (userPassword.length > 5) {
            this.setState({
                password: userPassword,
                errorName: {...this.state.errorName, password: ''},
                passwordTouched: true
            }, this.validate);
        } else {
            this.setState({
                errorName: {...this.state.errorName, password: '6 min length'}
            }, this.validate);
        }
    };

    handleSubmit = async (event) => {
        event.preventDefault()
        const {username, password} = this.state;
        this.props.onShowLoading(true)
        try {
            await this.props.onLogin(userCredential(username, password));
            this.props.onShowLoading(false);
        } catch (error) {
            this.props.onShowLoading(false);
            this.props.onShowError(error.message);
        }
    };

    validate = () => {
        const {errorName, userNameTouched, passwordTouched} = this.state;
        if (errorName.email.length > 0 || errorName.password.length > 0 ||
            !userNameTouched || !passwordTouched) {
            this.setState({
                isValid: false
            })
        } else {
            this.setState({
                isValid: true
            })
        }
    }

    render() {
        const {errorName, isValid} = this.state;
        return (
            <>
                <div className='main-container'>
                    <div className='banner'>
                        <h1>WMB</h1>
                        <p>Warung Makan Bahari</p>
                    </div>
                    <div className='login'>
                        <Card.Body>
                            <Card.Title><h2>Login</h2></Card.Title>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="form-floating mb-3">
                                    <FloatingLabel label='Email'>
                                        <Form.Control size="lg" type="email" placeholder="enter email"
                                                        onChange={this.handleUsernameChange}/>
                                    </FloatingLabel>
                                    <Form.Text className="text-danger">
                                        {errorName.email}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="form-floating mb-3">
                                    <FloatingLabel label='Password'>
                                        <Form.Control size="lg" type="password" placeholder="enter password"
                                                        onChange={this.handlePasswordChange}/>
                                    </FloatingLabel>
                                    <Form.Text className="text-danger">
                                        {errorName.password}
                                    </Form.Text>
                                </Form.Group>
                                <div className="d-grid">
                                    <Button size="lg" variant="primary" type="submit"
                                            disabled={!isValid}>Login</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </div>
                </div>
            </>
        )
    }
}

export default withLoading(LoginView);