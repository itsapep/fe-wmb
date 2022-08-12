import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {faEraser} from "@fortawesome/free-solid-svg-icons/faEraser";
import { useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import TableCRUD from "./table_crud";
import { withLoading } from "../../shared/component/WithLoading";
import { LinkContainer } from "react-router-bootstrap";

export default function TableList() {
    const { showAll, deleteTable } = TableCRUD();
    const [currentTables, setCurrentTables] = useState([])

    const onGetTable = async () => {
        // props.onShowLoading(true);
        try {
            const response = await showAll();
            // props.onShowLoading(false);
            setCurrentTables({
                currentTables: [...response]
            })
        } catch (e) {
            // props.onShowError(e.message);
        }
    }

    const handleDelete = async (id) => {
        const result = window.confirm('Are you sure want to delete ?');
        // props.onShowLoading(true);
        if (result) {
            try {
                await deleteTable(id);
                // props.onShowLoading(false);
                await onGetTable()
            } catch (error) {
                // props.onShowError(false);
            }
        }
    }

    return (
        <Container className="p-3">
            <div className="d-flex justify-content-between">
                <h3>Tables</h3>
                <LinkContainer to={'/main/tables/new'}>
                    <Button size="sm">
                        <FontAwesomeIcon icon={faAdd}/>
                        <span className={"p-2"}>Add Table</span>
                    </Button>
                </LinkContainer>
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
                    currentTables.map((table, index) => {
                        return (
                            <tr key={table.tableId}>
                                <th scope="row">{index + 1}</th>
                                <td>{table.tableNumber}</td>
                                <td>
                                    <Badge bg={table.tableStatus === "Available" ? "primary" : "danger"}>{table.tableStatus}</Badge>
                                </td>
                                <td style={{textAlign: "center"}}>
                                        <Button size="sm" variant="danger" onClick={() => handleDelete(table.tableId)}>
                                            <FontAwesomeIcon icon={faEraser}/>
                                            <span className="p-2">Delete</span>
                                        </Button>
                                    </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </Container>
    );
}

