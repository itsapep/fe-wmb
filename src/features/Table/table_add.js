import { Component } from "react";
import { table } from "./table";
import { Button, Card, Container, Form} from "react-bootstrap";


const tables = [
    table('001', '001', 'Available'),
    table('002', '002', 'Unavailable'),
    table('003', '003', 'Available'),
]

class TableAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableId: '',
            tableNumber: '',
            tableStatus: '',
            isValid: false
        };
    }


    static showAll = () => {
        return tables;
    }

    static deleteTable = (tableId) => {
        const newListTables = tables.filter(data => data.tableId !== tableId);
        while (tables.length > 0) {
            tables.pop();
        }
        for (let i = 0; i < newListTables.length; i++) {
            tables.push(newListTables[i])
        }
    }
    
    addNewTable = (newTable) => {
        tables.push(newTable);
    }

    handleChangeId = (e) => {
        this.setState({
            tableId: e.target.value,
        }, this.validate)
    }

    handleChangeNumber = (e) => {
        this.setState({
            tableNumber: e.target.value,
        }, this.validate)
    }

    handleChangeStatus = (e) => {
        this.setState({
            tableStatus: e.target.value,
        }, this.validate)
    }

    validate = () => {
        if (this.state.tableId && this.state.tableNumber && this.state.tableStatus) {
            this.setState({isValid: true})
        } else {
            this.setState({isValid: false})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {tableId, tableNumber, tableStatus} = this.state;
        this.addNewTable(table(tableId, tableNumber, tableStatus));
        this.props.onCancelAdd();
    }

    render() {
        return (
            <Container className="p-2">
                <Card>
                    <Card.Body>
                        <Card.Title>Add Table</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Table ID</Form.Label>
                                <Form.Control type="text" placeholder="001"
                                              onChange={this.handleChangeId}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nomor Meja</Form.Label>
                                <Form.Control type="text" placeholder="001"
                                              onChange={this.handleChangeNumber}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nomor Meja</Form.Label>
                                <Form.Check
                                    type='radio'
                                    name="tableStatus"
                                    label='Available'
                                    value='Available'
                                    onChange={this.handleChangeStatus}
                                />
                                <Form.Check
                                    type='radio'
                                    name="tableStatus"
                                    label='Unavailable'
                                    value='Unavailable'
                                    onChange={this.handleChangeStatus}
                                />
                            </Form.Group>
                            <div>
                                <Button className={"w-25 m-1"} variant="warning" type="button" onClick={this.props.onCancelAdd}>Cancel</Button>
                                <Button className={"w-25 m-1"} type="submit" variant="primary" disabled={!this.state.isValid}>Submit</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default TableAdd;
