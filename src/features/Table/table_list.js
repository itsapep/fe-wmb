import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import TableAdd from "./table_add";

class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const tables = TableAdd.showAll();
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
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tables.map((table, index) => {
                            return <tr key={table.tableId}>
                                <th scope="row">{index + 1}</th>
                                <td>{table.tableNumber}</td>
                                <td>
                                    <Badge bg={table.tableStatus === "Available" ? "primary" : "danger"}>{table.tableStatus}</Badge>
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
