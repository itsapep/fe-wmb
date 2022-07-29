// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import DashboardView from './features/Dashboard/dashboard_view';
import LoginView from './features/Login/login_view';
import { userCredential } from './features/Login/userCredential';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false
        }
    }
    
	authenticate = (userCredentialInput) => {
		const adminUserCredential = userCredential('admin@example.com', '12345678');
		return userCredentialInput.username === adminUserCredential.username && userCredentialInput.password === adminUserCredential.password;
	}

    login = (userCredential) => {
        if (this.authenticate(userCredential)) {
            this.setState({
                logged: true
            })
        } else {
            alert("Incorrect email or password")
        }
    }

    logout = () => {
        this.setState({
            logged: false
        })
    }

    render() {
        return (
            <div>
                {this.state.logged ? <DashboardView onLogout={this.logout}/> : <LoginView onLogin={this.login}/>}
            </div>
        );
    }
}

export default App;
