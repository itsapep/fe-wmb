import { Component } from "react";
import TableAdd from "./table_add";
import TableList from "./table_list";

class TableView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedTable: false
        };
    }

    navigateToAdd = () => {
        this.setState({
            addedTable: true
        })
    }

    handleCancel = () => {
        this.setState({
            addedTable: false,
        })
    }

    render() {
        return (
            <>
                {this.state.addedTable ? <TableAdd onCancelAdd={this.handleCancel}/> :
                    <TableList onNavigateToAdd={this.navigateToAdd}/>}
            </>
        );
    }
}

export default TableView;