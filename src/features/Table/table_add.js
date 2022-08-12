import { useState } from "react";
import { table as tableModel } from "./table_model";
import { Button, Card, Container, Form} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import TableCRUD from "./table_crud";

export default function TableAdd() {
    const { addNewTable } = TableCRUD();
    const [table, setTable] = useState({
        tableId: '',
        tableNumber: '',
        tableStatus: '',
        isValid: false
    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setTable({
            ...table,
            [key]: value
        }, validate)
    }

    const validate = () => {
        if (table.tableId && table.tableNumber && table.tableStatus) {
            setTable({isValid: true})
        } else {
            setTable({isValid: false})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {tableId, tableNumber, tableStatus} = table;
        addNewTable(tableModel(tableId, tableNumber, tableStatus));
        // props.onCancelAdd();
    }

    return (
        <Container className="p-2">
            <Card>
                <Card.Body>
                    <Card.Title>Add Table</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Table ID</Form.Label>
                            <Form.Control type="text" placeholder="001"
                                            onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nomor Meja</Form.Label>
                            <Form.Control type="text" placeholder="001"
                                            onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nomor Meja</Form.Label>
                            <Form.Check
                                type='radio'
                                name="tableStatus"
                                label='Available'
                                value='Available'
                                onChange={handleChange}
                            />
                            <Form.Check
                                type='radio'
                                name="tableStatus"
                                label='Unavailable'
                                value='Unavailable'
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <div>
                        <LinkContainer to={'/main/tables'}>
                                <Button className={"w-25 m-1"} variant="warning" type="button">Cancel</Button>
                            </LinkContainer>
                            <Button className={"w-25 m-1"} type="submit" variant="primary" disabled={!table.isValid}>Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}