import { Component } from "react";
import Navbar from "../../shared/component/navbar";
import MenuView from "../Menu/menu_view";
import Dashboard from "./dashboard";

class DashboardView extends Component {
    constructor(props) {
        super(props)
        this.state = {
          page : ''
        }
      }
    
    navigation = (page) => {
        this.setState({
            page : page
        })
    }
    
    render() {
        return (
            <>
            <div className="vh-100 d-flex flex-column" style={{backgroundColor: '#f5f5f5'}}>
                <Navbar onNavigate={this.navigation} onLogout={this.props.onLogout}/>
                <div className="d-flex flex-column justify-content-between h-100">
                    <div>
                        {this.state.page === "menus" ? <MenuView/> : 
                        this.state.page === "tables" ? <h1>tables</h1> : 
                        <Dashboard/>}
                    </div>
                </div>
            </div>
                
            </>
        )
    }
}

export default DashboardView;