import { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : '',
            usernameValid : false,
            passwordValid : false,
            usernameErrorMsg : '',
            passwordErrorMsg : '',

        }
    }

    handleUsernameChange = (event) => {
        if (event.target.value.includes(`@`)) {
            this.setState({
                username : event.target.value,
                usernameValid : true,
                usernameErrorMsg : ''
            })
        } else {
            this.setState({
                usernameValid : false,
                usernameErrorMsg : `email requires '@'`
            })
        }
    }

    handlePasswordChange = (event) => {
        if (event.target.value.length > 5) {
            this.setState({
                username : event.target.value,
                usernameValid : true,
                usernameErrorMsg : ''
            })
        } else {
            this.setState({
                usernameValid : false,
                usernameErrorMsg : `password must be 6 characters length`
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.usernameValid && this.state.passwordValid) {
            if (this.state.username === 'test@mail.com' && this.state.password === '123456') {
                alert(`login successfull!`)
            } else {
                alert(`Login failed! check your username or password!`)
            }
        } else {
            alert(`Login failed! username or password must suit the criteria`)
        }
    }

    render() {
        return (
            <>
                <div className='main-container'>
                    <div className='banner'>
                        <h1>SMM Batch 2</h1>
                        <p>Front End Hands On</p>
                    </div>
                    <div className='login'>
                        <form onSubmit={this.handleSubmit}>
                            <div className="login-title">
                                <img className="img-lock" src="https://cdn-icons-png.flaticon.com/512/61/61457.png" alt=""/>
                                <h1>Login Page</h1>
                            </div>
                            <p>Username</p>
                            <input type="text" name="Username" id="username" onChange={this.handleUsernameChange}/>
                            <div className="err-msg">{this.state.usernameErrorMsg}</div>
                            
                            <p>Password</p>
                            <input type="password"/>
                            <div className="err-msg">{this.state.passwordErrorMsg}</div>

                            <br/>

                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;