import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {faEraser} from "@fortawesome/free-solid-svg-icons/faEraser";
import { Component } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import TableAdd from "./table_add";

class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tables: []
        }
    }

    componentDidMount() {
        this.setState({
            tables: TableAdd.showAll()
        })
    }

    handleDelete(id) {
        const result = window.confirm('Are you sure want to delete ?');
        if (result) {
            TableAdd.deleteTable(id);
            this.setState({
                tables: TableAdd.showAll()
            })
        }
    }

    render() {
        return (
            <Container className="p-3">
                <div className="d-flex justify-content-between">
                    <h3>Tables</h3>
                    <Button size="sm" onClick={this.props.onNavigateToAdd}>
                        <FontAwesomeIcon icon={faAdd}/>
                        <span className={"p-2"}>Add Table</span>
                    </Button>
                </div>
                <Table striped>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Table</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.tables.map((table, index) => {
                            return <tr key={table.tableId}>
                                <th scope="row">{index + 1}</th>
                                <td>{table.tableNumber}</td>
                                <td>
                                    <Badge bg={table.tableStatus === "Available" ? "primary" : "danger"}>{table.tableStatus}</Badge>
                                </td>
                                <td style={{textAlign: "center"}}>
                                        <Button size="sm" variant="danger" onClick={() => this.handleDelete(table.tableId)}>
                                            <FontAwesomeIcon icon={faEraser}/>
                                            <span className="p-2">Delete</span>
                                        </Button>
                                    </td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default TableList;
