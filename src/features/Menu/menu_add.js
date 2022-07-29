import { Component } from "react";
import { Button, Card, Container, Form} from "react-bootstrap";
import menu from "./menu";



class MenuAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuId : '',
            menuName: '',
            menuPrice: '',
            isValid: false
        }
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

    handleSubmit = (e) => {
        e.preventDefault();
        const {menuId, menuName, menuPrice} = this.state;
        this.MenuService.addNewMenu(menu(menuId, menuName, menuPrice));
        this.props.onCancelForm();
    }

    validate = () => {
        if (this.state.menuId && this.state.menuName && this.state.menuPrice) {
            this.setState({isValid: true})
        } else {
            this.setState({isValid: false})
        }
    }

    MenuService = () => {
        const menus = [
            menu('001', 'Nasi Putih', 3000),
            menu('002', 'Nasi Merah', 6000),
            menu('003', 'Nasi Kuning', 10000),
        ];
        const showAll = () => {
            return menus;
        }
        const addNewMenu = (newMenu) => {
            menus.push(newMenu);
        }
        return {
            showAll, addNewMenu
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
                                <Form.Control type="text" placeholder="insert menu id" onChange={this.handleChangeId}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Menu Name</Form.Label>
                                <Form.Control type="text" placeholder="insert menu name" onChange={this.handleChangeName}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="insert menu price" onChange={this.handleChangePrice}/>
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

export default MenuAdd;