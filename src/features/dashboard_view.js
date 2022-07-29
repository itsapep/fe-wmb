import { Component } from "react";
import Navbar from "../shared/component/navbar";

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
                {this.state.page === "menus" ? <h1>Menus</h1> : 
                this.state.page === "tables" ? <h1>tables</h1> :
                this.state.page === "logout" ? <h1>logout</h1> : 
                <Navbar onNavigate={this.navigation}/>}
            </>
        )
    }
}

export default DashboardView;