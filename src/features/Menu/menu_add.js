import { Component } from "react";
import { Button, Card, Container, Form} from "react-bootstrap";
import { withLoading } from "../../shared/component/WithLoading";
import MenuCRUD from "./menu_crud";
import { menu } from "./menu_model";

class MenuAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuId : '',
            menuName: '',
            menuPrice: '',
            category: 'food',
            isValid: false
        }
        this.crud = MenuCRUD();
    }

    handleChangeId = (e) => {
        this.setState({
            menuId: e.target.value
        }, this.validate)
    }

    handleChangeName = (e) => {
        this.setState({
            menuName: e.target.value,
        }, this.validate)
    }

    handleChangePrice = (e) => {
        this.setState({
            menuPrice: e.target.value,
        }, this.validate)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {menuId, menuName, menuPrice, category} = this.state;
        this.props.onShowLoading(true)
        try {
            await this.crud.addNewMenu(menu(menuId, menuName, menuPrice, category));
            this.props.onCancelForm();
            this.props.onShowLoading(false);
        } catch (error) {
            this.props.onShowLoading(false);
            this.props.onShowError(error.message);
        }
    }

    validate = () => {
        if (this.state.menuId && this.state.menuName && this.state.menuPrice) {
            this.setState({isValid: true})
        } else {
            this.setState({isValid: false})
        }
    }
    
    render() {
        return (
            <Container className="p-2">
                <Card>
                    <Card.Body>
                        <Card.Title>Add Menu</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Menu ID</Form.Label>
                                <Form.Control type="text" placeholder="001" onChange={this.handleChangeId}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Menu Name</Form.Label>
                                <Form.Control type="text" placeholder="Fried Ice" onChange={this.handleChangeName}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="2000" onChange={this.handleChangePrice}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Select>
                                    <option value='food'>Food</option>
                                    <option value='beverage'>Beverage</option>
                                </Form.Select>
                            </Form.Group>
                            <div>
                                <Button className={"w-25 m-1"} variant="warning" type="button" onClick={this.props.onCancelForm}>Cancel</Button>
                                <Button className={"w-25 m-1"} type="submit" variant="primary" disabled={!this.state.isValid}>Submit</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default withLoading(MenuAdd);