import { Component } from "react";
import MenuAdd from "./menu_add";
import MenuList from "./menu_list";

class MenuView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedForm: false
        };
    }

    navigateToForm = () => {
        this.setState({
            addedForm: true
        })
    }

    handleCancel = () => {
        this.setState({
            addedForm: false,
        })
    }

    render() {
        return (
            <>
                {this.state.addedForm ? <MenuAdd onCancelForm={this.handleCancel}/> :
                    <MenuList onNavigateToForm={this.navigateToForm}/>}
            </>
        );
    }
}

export default MenuView;